package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.constants.NotificationEndpoints;
import com.learning_platform.learning_resources.dto.QuestionCredentials;
import com.learning_platform.learning_resources.dto.ResponseCredentials;
import com.learning_platform.learning_resources.dto.UserResponseCredentials;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.Admin;
import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.ForumQuestionRepository;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class ForumServiceImpl implements ForumService {
    @Autowired
    private ForumQuestionRepository forumRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SimpMessagingTemplate template;

   // List<ForumQuestion> questions = new ArrayList<>();
    // List<Student> students= new ArrayList<>();;


    @Override
    public ForumQuestion getForumQuestion(QuestionCredentials dto) throws ApiExceptionResponse {
        Student stud= (Student) userRepository.findFirstById(Long.parseLong(dto.getConnectedUser()));

        if(stud==null) {

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

        ForumQuestion fq=ForumQuestion.builder().question(dto.getQuestion()).userId(Long.parseLong(dto.getConnectedUser())).userDetails(stud.getFirstName()+" " + stud.getLastName()).date(questionDateTime).status("waiting..").build();
        forumRepository.save(fq);

        stud.getQuestions().add(fq);
        userRepository.save(stud);


        this.template.convertAndSend(NotificationEndpoints.ADMIN_RECEIVE_QUESTION ,"You have a new question ");

        //adaug intrebarea si userul simultan
       // questions.add(fq);
        //students.add(stud);
        return fq;
    }


    @Override
    public List<ForumQuestion> findAll() {
        return (List<ForumQuestion>) forumRepository.findAll();
        //return this.questions;
    }

    /*public int getQuestionIndex(Long id){
        int index=0;
        for(ForumQuestion fq:questions){
            if(fq != null && fq.getId()==id)
                return index;
            index++;
        }
        return -1;
    }*/

    @Override
    public ForumQuestion deleteQuestion(Long id) {
        ForumQuestion fq=forumRepository.findFirstById(id);
       // int index=getQuestionIndex(id);
       // Student stud= (Student) userRepository.findFirstById(students.get(index).getId());
        //stud.getQuestions().remove(index);
        //userRepository.save(stud);
       // questions.remove(index);
        //students.remove(index);
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
        String lastAnswer=fq.getAnswer();
        String newAnswer=lastAnswer + System.lineSeparator() + "Admin: "+ answer;
        fq.setAnswer(newAnswer);
        fq.setStatus("answered");
        forumRepository.save(fq);
        this.template.convertAndSend(NotificationEndpoints.ADMIN_RESPONSE ,"The admin responded to you");

        // int index=getQuestionIndex(dto.getId());
        //questions.remove(index);
        //questions.add(index,fq);
        return fq;

    }

   /* @Override
    public List<Student> getUsersWithQuestions() {

        return this.students;
    }*/

    @Override
    public List<ForumQuestion> findMyQuestions(Long id) throws ApiExceptionResponse {
        Student stud= (Student) userRepository.findFirstById(id);

        if(stud==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad question"))
                    .message("User not found exists").status(HttpStatus.NOT_FOUND).build();

        }
        List<ForumQuestion> my=stud.getQuestions();

        return stud.getQuestions();
    }

    @Override
    public ForumQuestion userRespondToQuestion(UserResponseCredentials dto) throws ApiExceptionResponse {
        String answer=dto.getResponse();
        ForumQuestion fq=forumRepository.findFirstById(dto.getId());
        User user=userRepository.findFirstById(dto.getConnectedUser());
        if(fq==null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad credentials"))
                    .message("Question doesn't exists").status(HttpStatus.NOT_FOUND).build();

        }
        String lastAnswer=fq.getAnswer();
        String newAnswer=lastAnswer + System.lineSeparator() + user.getFirstName()+" "+ user.getLastName()+": "+answer;
        fq.setAnswer(newAnswer);
        forumRepository.save(fq);


        return fq;
    }


}
