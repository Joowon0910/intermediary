package project.intermediary.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import project.intermediary.dto.UserDto;
import project.intermediary.entity.User;
import project.intermediary.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  // @GetMapping("/hello")
  // public ResponseEntity<String> hello() {
  //     return ResponseEntity.ok("hello");
  // }

  // @PostMapping("/test-redirect")
  // public void testRedirect(HttpServletResponse response) throws IOException {
  //     response.sendRedirect("/api/user");
  // }

  @PostMapping("/signup")
  public ResponseEntity<User> signup(@Valid @RequestBody UserDto userDto) {
    return ResponseEntity.ok(userService.signup(userDto));
  }

  @GetMapping("/user")
  @PreAuthorize("hasAnyRole('USER','ADMIN')") // USER, ADMIN 두 가지 권한 모두 허용
  public ResponseEntity<User> getMyUserInfo(HttpServletRequest request) {
    return ResponseEntity.ok(userService.getMyUserWithAuthorities().get());
  }

  @GetMapping("/user/{username}")
  @PreAuthorize("hasAnyRole('ADMIN')") // ADMIN 권한만 호출할 수 있도록 설정
  public ResponseEntity<User> getUserInfo(@PathVariable String username) {
    return ResponseEntity.ok(
      userService.getUserWithAuthorities(username).get()
    );
  }

}
