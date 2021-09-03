package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.dto.QuizCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.Quiz;
import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.QuizRepository;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.LoginService;
import com.learning_platform.learning_resources.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QuizRepository quizRepository;


    public User save(User u){
        return userRepository.save(u);

    }

    @Override
    public boolean saveQuiz(QuizCredentials dto) throws ApiExceptionResponse {
        Student stud = (Student) userRepository.findFirstById(Long.parseLong(dto.getConnectedUser()));
        if(stud==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad question"))
                    .message("User not found exists").status(HttpStatus.NOT_FOUND).build();

        }
        Quiz quiz=Quiz.builder().correct(Integer.parseInt(dto.getCorrect())).build();
        quizRepository.save(quiz);
        stud.getQuizes().add(quiz);
        userRepository.save(stud);
        return true;
    }

    @Override
    public List<ForumQuestion> findAll(Student student) {
        return student.getQuestions();
    }

    @Override
    public User findUserByEmail(String email) throws ApiExceptionResponse {
        System.out.println(email);
        User user=userRepository.findFirstByEmail(email);
        if(user==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad email"))
                    .message("User not found ").status(HttpStatus.NOT_FOUND).build();

        }
        System.out.println(user.getEmail());
        return user;

    }


}
