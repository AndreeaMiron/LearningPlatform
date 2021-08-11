package com.learning_platform.learning_resources;

import com.learning_platform.learning_resources.model.Student;
import com.learning_platform.learning_resources.model.User;
import com.learning_platform.learning_resources.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LearningResourcesApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningResourcesApplication.class, args);
	}
	@Bean
	CommandLineRunner init(UserRepository userRepository){
		return args -> {
		Student s= Student.builder().firstName("Andreea").lastName("Miron").email("andreeamiron.99@yahoo.com").password("1234").build();
		userRepository.save(s);

		};
	}
}
