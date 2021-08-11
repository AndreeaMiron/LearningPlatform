package com.learning_platform.learning_resources.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegisterSuccesDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNr;
    private String role;
    private Long id;
}
