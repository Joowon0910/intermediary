package project.intermediary.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {
    @NotNull
    @Size(max=100)
    private String title;
    @NotNull
    @Size(min = 4, max = 100)
    private String password;
    @NotNull
    private String content;
}
