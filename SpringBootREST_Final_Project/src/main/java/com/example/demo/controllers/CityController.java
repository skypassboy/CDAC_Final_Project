package com.example.demo.controllers;


import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;
import com.example.demo.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins="http://localhost:3000")
public class CityController {

    @Autowired
    private CityService cityService;
    
    @Autowired
    private CityRepository cityRepository;
    
    
    @GetMapping("/getallcities")
    public ResponseEntity<List<City>> getAllCities() {
        try {
            List<City> allCities = cityService.getAllCities();
            return ResponseEntity.ok(allCities);
        } catch (Exception e) {
            // Handle specific exceptions and return appropriate status codes or messages
            return ResponseEntity.status(500).build();
        }
    }
}
