package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    // Additional custom queries can be added if needed
}
