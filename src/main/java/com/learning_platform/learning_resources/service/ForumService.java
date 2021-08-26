package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.dto.QuestionCredentials;
import com.learning_platform.learning_resources.dto.ResponseCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.ForumQuestion;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ForumService {
    ForumQuestion getForumQuestion(QuestionCredentials dto) throws ApiExceptionResponse;

    List<ForumQuestion> findAll();

    ForumQuestion deleteQuestion(Long id);
    ForumQuestion respondToQuestion(ResponseCredentials dto) throws ApiExceptionResponse;
}
