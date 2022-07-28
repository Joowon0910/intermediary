package project.intermediary.services;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.intermediary.entity.User;
// import project.intermediary.exception.DuplicateMemberException;
import project.intermediary.repository.UserRepository;
import project.intermediary.util.SecurityUtil;

@Service
public class PageService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public PageService(
    UserRepository userRepository,
    PasswordEncoder passwordEncoder
  ) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  // 유저, 권한 정보를 가져오는 메소드
  @Transactional(readOnly = true)
  public Optional<User> getUserWithAuthorities(String username) { // username을 기준으로 정보를 가져옴
    return userRepository.findOneWithAuthoritiesByUsername(username);
  }

  @Transactional(readOnly = true)
  public Optional<User> getMyUserWithAuthorities() { // SecurityContext에 저장된 username의 정보만 가져옴
    return SecurityUtil
      .getCurrentUsername()
      .flatMap(userRepository::findOneWithAuthoritiesByUsername);
  }
}
