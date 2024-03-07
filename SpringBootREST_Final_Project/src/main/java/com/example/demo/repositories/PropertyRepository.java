package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Property;
import com.example.demo.entities.User;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    // Additional custom queries can be added if needed
	List<Property> findByUserid(User user);
	List<Property> findByUserid(Long userid);
}
