package com.learning_platform.learning_resources.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseCredentials {
    private Long connectedUser;
    private Long id;
    private String response;
}
