package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
    // No need to declare the findAll method here.
    // It is inherited from JpaRepository.
	
}
