package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private ApplicationContext context;      // gives access to beans
    @Autowired
    private CountryService countryService;

    @GetMapping("/country")              // GET default
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        Country in = context.getBean("country", Country.class);
        LOGGER.info("END   - getCountryIndia()");
        return in;
    }
    
    @GetMapping("getCountry/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
    
}
