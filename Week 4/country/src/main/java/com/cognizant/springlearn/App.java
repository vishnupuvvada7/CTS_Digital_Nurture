package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 */
public class App {
    
    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountry();
        System.out.println("Running");
    }

    public static void displayCountry() {
        System.out.println("Inside displayCountry");

        try {
            ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

            System.out.println("Spring context loaded");

            Country country = context.getBean("country", Country.class);

            System.out.println("Bean retrieved");

            LOGGER.debug("Country : {}", country);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
