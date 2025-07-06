package com.cts.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="country")
public class Country {
    @Id @Column(name="co_code") private String code;
    @Column(name="co_name") private String name;
    // Getters, Setters, toString()
	@Override
	public String toString() {
		return "Country [code=" + code + ", name=" + name + "]";
	}
    
    
}
