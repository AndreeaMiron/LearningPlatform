package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.constants.NotificationEndpoints;
import com.learning_platform.learning_resources.dto.QuestionCredentials;
import com.learning_platform.learning_resources.dto.ResponseCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.ForumQuestionRepository;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

@Service
public class ForumServiceImpl implements ForumService {
    @Autowired
    private ForumQuestionRepository forumRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SimpMessagingTemplate template;

    @Override
    public ForumQuestion getForumQuestion(QuestionCredentials dto) throws ApiExceptionResponse {
        User user=userRepository.findFirstById(Long.parseLong(dto.getConnectedUser()));

        if(user==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad question"))
                    .message("User not found exists").status(HttpStatus.NOT_FOUND).build();

        }
        ForumQuestion primary=forumRepository.findFirstByQuestion(dto.getQuestion());
        if(primary!=null){
            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad question"))
                    .message("Question already exists").status(HttpStatus.NOT_FOUND).build();
        }

        String date = dto.getDate();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime questionDateTime = LocalDateTime.parse(date, formatter);

        ForumQuestion fq=ForumQuestion.builder().question(dto.getQuestion()).user(user).date(questionDateTime).build();
        this.template.convertAndSend(NotificationEndpoints.ADMIN_RECEIVE_QUESTION,"You have a new question ");
        forumRepository.save(fq);
        return fq;
    }

    @Override
    public List<ForumQuestion> findAll() {
        return (List<ForumQuestion>) forumRepository.findAll();
    }

    @Override
    public ForumQuestion deleteQuestion(Long id) {
        ForumQuestion fq=forumRepository.findFirstById(id);
        forumRepository.delete(fq);
        return fq;
    }

    @Override
    public ForumQuestion respondToQuestion(ResponseCredentials dto) throws ApiExceptionResponse {
        String answer=dto.getResponse();
        ForumQuestion fq=forumRepository.findFirstById(dto.getId());

        if(fq==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad credentials"))
                    .message("Question doesn't exists").status(HttpStatus.NOT_FOUND).build();

        }

        fq.setAnswer(answer);
        forumRepository.save(fq);
        return fq;

    }
}
