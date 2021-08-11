package com.learning_platform.learning_resources.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterCredentialsDTO {
    @Length(min=3)
    private String firstName;

    @Length(min=3)
    private String lastName;
    @Length(min=5)
    private String email;

    @Length(min=8)
    private String password;
    @Length(min=10)
    private String phoneNr;
    private String type;
}
