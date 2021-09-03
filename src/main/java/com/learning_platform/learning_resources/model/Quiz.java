package com.learning_platform.learning_resources.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Quiz {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private int correct;
}
