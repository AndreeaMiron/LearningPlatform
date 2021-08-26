package com.learning_platform.learning_resources.repository;

import com.learning_platform.learning_resources.model.ForumQuestion;
import com.learning_platform.learning_resources.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumQuestionRepository extends CrudRepository<ForumQuestion,Long> {
    ForumQuestion findFirstById(Long id);
    ForumQuestion findFirstByQuestion(String question);
}
