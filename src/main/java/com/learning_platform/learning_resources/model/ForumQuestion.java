package com.learning_platform.learning_resources.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class ForumQuestion {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String question;
    private String answer;
    private LocalDateTime date;
    @OneToOne
    private User user;
}
