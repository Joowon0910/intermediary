package project.intermediary.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
// import me.silvernine.jwttutorial.entity.User;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
  @NotNull
  @Size(max = 50)
  private String username;

  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  @NotNull
  @Size(min = 6, max = 30)
  private String password;

  @NotNull
  @Size(max= 50)
  private String email;

  @NotNull
  @Size(max= 50)
  private String platform;

  @NotNull
  @Size(max = 50)
  private String nickname;
  //    private Set<AuthorityDto> authorityDtoSet;

  //    public static UserDto from(User user) {
  //       if(user == null) return null;

  //       return UserDto.builder()
  //               .username(user.getUsername())
  //               .nickname(user.getNickname())
  //               .authorityDtoSet(user.getAuthorities().stream()
  //                       .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
  //                       .collect(Collectors.toSet()))
  //               .build();
  //    }
}
