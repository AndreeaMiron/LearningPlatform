package com.learning_platform.learning_resources.controller;

import com.learning_platform.learning_resources.dto.RegisterCredentialsDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity registerReq(@RequestBody @Valid RegisterCredentialsDTO dto) throws ApiExceptionResponse {
        return ResponseEntity.status(HttpStatus.OK).body(registerService.register(dto));
    }
}
