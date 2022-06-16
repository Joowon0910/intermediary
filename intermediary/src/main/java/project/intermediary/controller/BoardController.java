package project.intermediary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.intermediary.entity.BoardTitle;
import project.intermediary.entity.BoardContent;

import project.intermediary.services.BoardContentService;
import project.intermediary.services.BoardTitleService;

@RestController
public class BoardController {
    
    @Autowired
    private BoardContentService contentService;

    @Autowired
    private BoardTitleService titleService;

    @PostMapping(value="")
    public boolean getTitlesInBoardByIndex(@RequestParam String boardTitle, @RequestParam int index){

        return true;
    }
}
