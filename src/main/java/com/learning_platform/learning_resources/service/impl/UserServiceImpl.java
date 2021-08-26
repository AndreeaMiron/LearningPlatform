package com.learning_platform.learning_resources.service.impl;

import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.UserRepository;
import com.learning_platform.learning_resources.service.LoginService;
import com.learning_platform.learning_resources.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginService loginService;

    public User save(User u){
        return userRepository.save(u);

    }




}
