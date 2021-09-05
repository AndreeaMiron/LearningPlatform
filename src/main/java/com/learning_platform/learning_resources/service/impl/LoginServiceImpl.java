package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.dto.CredentialsDTO;
import com.learning_platform.learning_resources.dto.LoginSuccesDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    Map<Long, Integer> hm = new HashMap<Long, Integer>();

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private SendMailServiceImpl service;

    @Override
    public LoginSuccesDTO login(CredentialsDTO dto) throws ApiExceptionResponse {
        User user=userRepository.findFirstByEmail(dto.getEmail());
        if(user == null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Wrong email"))
                    .message("User not found").status(HttpStatus.NOT_FOUND).build();

        }

        LoginSuccesDTO response;
        String role=user.getClass().getSimpleName().toUpperCase();

        if(role.equals("STUDENT")){
            response=LoginSuccesDTO.builder().id(user.getId()).role(role).build();
        }
        else if(role.equals("ADMIN")){

            response=LoginSuccesDTO.builder().id(user.getId()).role(role).build();
        }else{
            response=LoginSuccesDTO.builder().role(role).build();
        }

        if(passwordEncoder.matches(dto.getPassword(),user.getPassword()))
        { hm.put(user.getId(),1);
            //System.out.println("S a logat cineva");
            return response;
        }



        throw ApiExceptionResponse.builder().errors(Collections.singletonList("Wrong password"))
                .message("User not found").status(HttpStatus.NOT_FOUND).build();



    }
    @Override
    public boolean logout(String dto){
        hm.replace(Long.parseLong(dto),1,-1);
        return true;
    }

    @Override
    public boolean changePassword(CredentialsDTO dto) throws ApiExceptionResponse {
        User user=userRepository.findFirstByEmail(dto.getEmail());
        if(user == null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Wrong email"))
                    .message("User not found").status(HttpStatus.NOT_FOUND).build();

        }

        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        userRepository.save(user);
        service.sendEmail(dto.getEmail(),dto.getPassword());
        return false;
    }

    public int findNrOfUsers() {
        int nr=0;
        for (Map.Entry<Long, Integer> entry : hm.entrySet()) {
            if(entry.getValue()!=-1)
                nr++;
        }

        nr--;
        return nr;
    }

}
