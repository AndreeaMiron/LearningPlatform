package com.learning_platform.learning_resources.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Student extends User{
    @OneToMany(cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
    private List<ForumQuestion> questions;
    @OneToMany(cascade = CascadeType.PERSIST,fetch = FetchType.EAGER)
    private List<Quiz> quizes;
    @Builder
    public Student(Long id, String firstName, String lastName, String email, String password, String phoneNr, List<ForumQuestion> questions,List<Quiz> quizes) {
        super(id, lastName,firstName,email, password,phoneNr);
        this.questions=questions;
        this.quizes=quizes;

    }
}
