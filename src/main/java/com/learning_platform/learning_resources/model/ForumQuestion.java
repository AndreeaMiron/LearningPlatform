package com.learning_platform.learning_resources.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class ForumQuestion {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String question;
    private String answer;
    private LocalDateTime date;
    private String status;
    private Long userId;
    private String userDetails;

}
