package project.intermediary.controller;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.intermediary.dto.ArticleDto;

@RestController
@RequestMapping("/article")
public class ArticleController {
    @PostMapping("/addArticle")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<Boolean> addArticle(@Valid @RequestBody ArticleDto articleDto) {
        System.out.println("title: "+articleDto.getTitle());
        System.out.println("password: "+articleDto.getPassword());
        System.out.println("content: "+articleDto.getContent());
        return ResponseEntity.ok(true);
    }
}
