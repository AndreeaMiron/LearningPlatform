package com.learning_platform.learning_resources.controller;

import com.learning_platform.learning_resources.dto.QuestionCredentials;
import com.learning_platform.learning_resources.dto.RegisterCredentialsDTO;
import com.learning_platform.learning_resources.dto.ResponseCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.service.ForumService;
import com.learning_platform.learning_resources.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/forum")
public class ForumController {

    @Autowired
    private ForumService forumService;

    @PostMapping
    public ResponseEntity questionReq(@RequestBody QuestionCredentials dto) throws ApiExceptionResponse {
        return ResponseEntity.status(HttpStatus.OK).body(forumService.getForumQuestion(dto));
    }

    @GetMapping("/{questions}")
    public ResponseEntity findAllQuestions() {
        return ResponseEntity.status(HttpStatus.OK).body(forumService.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteQuestionById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(forumService.deleteQuestion(id));

    }
    @PutMapping
    public ResponseEntity respondToQuestion(@RequestBody ResponseCredentials dto) throws ApiExceptionResponse
    {
        return ResponseEntity.status(HttpStatus.OK).body(forumService.respondToQuestion(dto));
    }
}