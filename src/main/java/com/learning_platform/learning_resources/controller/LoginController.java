package com.learning_platform.learning_resources.controller;


import com.learning_platform.learning_resources.dto.CredentialsDTO;
import com.learning_platform.learning_resources.exceptions.ApiExceptionResponse;
import com.learning_platform.learning_resources.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity loginReq(@RequestBody CredentialsDTO dto) throws ApiExceptionResponse {
        return ResponseEntity.status(HttpStatus.OK).body(loginService.login(dto));
    }

    @PostMapping("/logout")
    public ResponseEntity logoutReq(@RequestBody String dto) throws ApiExceptionResponse {
        return ResponseEntity.status(HttpStatus.OK).body(loginService.logout(dto));
    }

    @PostMapping("/newpassword")
    public ResponseEntity changePassReq(@RequestBody CredentialsDTO dto) throws ApiExceptionResponse {
        return ResponseEntity.status(HttpStatus.OK).body(loginService.changePassword(dto));
    }

}
