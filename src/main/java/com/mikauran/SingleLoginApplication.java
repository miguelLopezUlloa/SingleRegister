package com.mikauran;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class SingleLoginApplication extends SpringBootServletInitializer { 

	@Override
	protected SpringApplicationBuilder
	configure(SpringApplicationBuilder application){
		return application.sources(SingleLoginApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(SingleLoginApplication.class, args);
	}
}
