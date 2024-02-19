package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Property;
import com.example.demo.services.PropertyService;

import java.util.List;

@RestController
@RequestMapping
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/properties")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/property/{propertyId}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
        Property property = propertyService.getPropertyById(propertyId);
        return ResponseEntity.ok(property);
    }

    @PostMapping("/addproperty")
    public ResponseEntity<Property> createProperty(@RequestBody Property property) {
        Property createdProperty = propertyService.createProperty(property);
        return ResponseEntity.ok(createdProperty);
    }

    
    @PutMapping("updateproperty/{propertyId}")
    public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId, @RequestBody Property property) {
        Property updatedProperty = propertyService.updateProperty(propertyId, property);
        return ResponseEntity.ok(updatedProperty);
    }

    @DeleteMapping("deleteproperty/{propertyId}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long propertyId) {
        propertyService.deleteProperty(propertyId);
        return ResponseEntity.noContent().build();
    }
}
