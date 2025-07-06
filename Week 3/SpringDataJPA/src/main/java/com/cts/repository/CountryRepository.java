package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {}