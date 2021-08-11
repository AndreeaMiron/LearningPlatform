package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.dto.RegisterCredentialsDTO;
import com.learning_platform.learning_resources.dto.RegisterSuccesDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.model.Admin;
import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
@Service
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RegisterSuccesDTO register(RegisterCredentialsDTO dto) throws ApiExceptionResponse {
        String firstName = dto.getFirstName();
        String lastName=dto.getLastName();
        String email=dto.getEmail();
        String password=dto.getPassword();
        String phoneNr=dto.getPhoneNr();
        User user=userRepository.findFirstByEmail(dto.getEmail());
        if(user!=null) {

            throw ApiExceptionResponse.builder().errors(Collections.singletonList("Bad credentials"))
                    .message("User with that email already exists").status(HttpStatus.NOT_FOUND).build();

        }
        RegisterSuccesDTO response;
        if (dto.getType().equals("Student")) {
            response = RegisterSuccesDTO.builder().firstName(firstName).build();
            Student stud = Student.builder().firstName(firstName).lastName(lastName).email(email).password(passwordEncoder.encode(password)).phoneNr(phoneNr).build();
            userRepository.save(stud);
            return response;
        } else {
            response = RegisterSuccesDTO.builder().firstName(firstName).build();
            Admin a = Admin.builder().firstName(firstName).lastName(lastName).email(email).password(passwordEncoder.encode(password)).phoneNr(phoneNr).build();
            userRepository.save(a);
            return response;
        }
    }
}
