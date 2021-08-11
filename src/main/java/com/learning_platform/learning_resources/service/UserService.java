package com.learning_platform.learning_resources.service;

import com.learning_platform.learning_resources.model.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {

    public User save(User u);
    int findNrOfUsers();
}
