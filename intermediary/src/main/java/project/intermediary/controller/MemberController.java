package project.intermediary.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    
    @GetMapping(value = "test")
    public String testAPI() {
        return "hello";
    }
}
