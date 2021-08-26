package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.dto.CredentialsDTO;
import com.learning_platform.learning_resources.dto.LoginSuccesDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import org.springframework.stereotype.Component;

@Component
public interface LoginService {
    LoginSuccesDTO login(CredentialsDTO dto) throws ApiExceptionResponse;
    boolean logout(String sto);

}
