package com.learning_platform.learning_resources.repository;

import com.learning_platform.learning_resources.model.Quiz;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends CrudRepository<Quiz,Long> {
}
