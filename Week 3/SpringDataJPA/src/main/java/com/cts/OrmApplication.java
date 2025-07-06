package com.cts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cts.Service.CountryService;

@SpringBootApplication
public class OrmApplication {

	public static void main(String[] args) {
		// Start the Spring Boot application and get the context
		ApplicationContext context = SpringApplication.run(OrmApplication.class, args);

		// Get the CountryService bean from the context
		CountryService countryService = context.getBean(CountryService.class);

		// Call the service method
		countryService.getAllCountries().forEach(System.out::println);
	}
}
