package com.learning_platform.learning_resources.repository;

import com.learning_platform.learning_resources.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    User findFirstById(Long id);
    User findFirstByEmail(String email);
}
