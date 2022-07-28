package project.intermediary.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import project.intermediary.services.PageService;

@RestController
@RequestMapping("/page")
public class PageController {
  private final PageService pageService;

  public PageController(PageService pageService) {
    this.pageService = pageService;
  }

  @PostMapping("/access")
  @PreAuthorize("hasAnyRole('USER','ADMIN')")
  public String accessToPage() {
    return "pass";
  }
}
