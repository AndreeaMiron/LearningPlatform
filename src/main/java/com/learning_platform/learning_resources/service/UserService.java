package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.dto.QuizCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

    public User save(User u);

    boolean saveQuiz(QuizCredentials dto) throws ApiExceptionResponse;
    List<ForumQuestion> findAll(Student student);

    User findUserByEmail(String email) throws ApiExceptionResponse;
}
