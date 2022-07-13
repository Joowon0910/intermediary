package project.intermediary.services;

import java.util.Collections;
import java.util.Optional;
import project.intermediary.dto.UserDto;
import project.intermediary.entity.Authority;
import project.intermediary.entity.User;
// import project.intermediary.exception.DuplicateMemberException;
import project.intermediary.repository.UserRepository;
import project.intermediary.util.SecurityUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User signup(UserDto userDto) {
        if (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        User user = User.builder()
                .username(userDto.getUsername())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .email(userDto.getEmail())
                .platform(userDto.getPlatform())
                .nickname(userDto.getNickname())
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return userRepository.save(user);
        // return UserDto.from(userRepository.save(user));
    }

    // 유저, 권한 정보를 가져오는 메소드
    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthorities(String username) { // username을 기준으로 정보를 가져옴
        return userRepository.findOneWithAuthoritiesByUsername(username);
    }

    @Transactional(readOnly = true)
    public Optional<User> getMyUserWithAuthorities() { // SecurityContext에 저장된 username의 정보만 가져옴
        return SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername);
    }

    // @Transactional(readOnly = true)
    // public UserDto getUserWithAuthorities(String username) {
    //     return UserDto.from(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null));
    // }

    // @Transactional(readOnly = true)
    // public UserDto getMyUserWithAuthorities() {
    //     return UserDto.from(SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername).orElse(null));
    // }
}