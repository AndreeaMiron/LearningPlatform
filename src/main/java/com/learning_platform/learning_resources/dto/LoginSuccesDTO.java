package com.learning_platform.learning_resources.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class LoginSuccesDTO {
    private String role;
    public Long id;
}
