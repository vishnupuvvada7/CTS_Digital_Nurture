package com.cts.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.repository.CountryRepository;
import com.cts.model.Country;


@Service
public class CountryService {

	@Autowired
	private CountryRepository countryRepository;
	
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
	
	
}
