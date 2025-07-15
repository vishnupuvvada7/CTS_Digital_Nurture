package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private ApplicationContext context;

    public Country getCountry(String code) {
        // fetch list bean from XML
        List<Country> countries = context.getBean("countryList", List.class);

        // lambda/stream to find match (case‑insensitive)
        return countries.stream()
                        .filter(c -> c.getCode().equalsIgnoreCase(code))
                        .findFirst()
                        .orElseThrow(() ->
                            new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Country code not found: " + code));
    }
}
