package com.learning_platform.learning_resources.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.HashMap;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Admin extends User  {

    @Builder
    public Admin(Long id, String firstName, String lastName, String email, String password, String phoneNr, List<ForumQuestion> questions) {
        super(id, lastName,firstName,email, password,phoneNr);
    }
}
