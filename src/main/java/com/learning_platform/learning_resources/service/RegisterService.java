package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.dto.RegisterCredentialsDTO;
import com.learning_platform.learning_resources.dto.RegisterSuccesDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import org.springframework.stereotype.Component;

@Component
public interface RegisterService {
    RegisterSuccesDTO register(RegisterCredentialsDTO dto) throws ApiExceptionResponse;
}
