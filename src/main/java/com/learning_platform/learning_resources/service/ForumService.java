package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.dto.QuestionCredentials;
import com.learning_platform.learning_resources.dto.ResponseCredentials;
import com.learning_platform.learning_resources.dto.UserResponseCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public interface ForumService {
    ForumQuestion getForumQuestion(QuestionCredentials dto) throws ApiExceptionResponse;

    List<ForumQuestion> findAll();

    ForumQuestion deleteQuestion(Long id);
    ForumQuestion respondToQuestion(ResponseCredentials dto) throws ApiExceptionResponse;

    //List<Student> getUsersWithQuestions();
    List<ForumQuestion> findMyQuestions(Long id) throws ApiExceptionResponse;
    ForumQuestion userRespondToQuestion(UserResponseCredentials dto) throws ApiExceptionResponse;
}
