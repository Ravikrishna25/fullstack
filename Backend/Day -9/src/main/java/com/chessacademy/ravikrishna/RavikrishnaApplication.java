package com.chessacademy.ravikrishna;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.chessacademy.ravikrishna.dto.request.RegisterRequest;
import com.chessacademy.ravikrishna.service.AuthenticationService;
import com.chessacademy.ravikrishna.service.UserService;

@SpringBootApplication
public class RavikrishnaApplication {


	public static void main(String[] args) {
		SpringApplication.run(RavikrishnaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService){
		return args -> {
			var user = RegisterRequest
			.builder()
			.name("Admin")
			.email("admin@gmail.com")
			.password("Admin")
			.role("admin")
			.build();
			
			
			authenticationService.register(user);
		};
	}



}
