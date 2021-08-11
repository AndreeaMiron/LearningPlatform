package com.learning_platform.learning_resources.model;

import lombok.*;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Student extends User{
    @Builder
    public Student(Long id, String firstName, String lastName, String email, String password, String phoneNr) {
        super(id, lastName,firstName,email, password,phoneNr);

    }
}
