package com.learning_platform.learning_resources.security;

import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final User userFromDB=userRepository.findFirstByEmail(email);
        if(userFromDB==null){
            throw new UsernameNotFoundException("Nu am gasit " +email);
        }

        UserDetails userDetails=org.springframework.security.core.userdetails.User.withUsername(userFromDB.getEmail()).password(userFromDB.getPassword()).roles(userFromDB.getClass().getSimpleName().toUpperCase()).build();
        return userDetails;
    }
}
