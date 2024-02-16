package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Property;
import com.example.demo.repositories.PropertyRepository;

import java.util.List;

import javax.persistence.EntityNotFoundException;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId)
                .orElseThrow(() -> new EntityNotFoundException("Property not found with id: " + propertyId));
    }

    public Property createProperty(Property property) {
        // Additional logic can be added if needed before saving to the repository
        return propertyRepository.save(property);
    }

    public Property updateProperty(Long propertyId, Property property) {
        Property existingProperty = getPropertyById(propertyId);
        // Update existingProperty with values from the incoming property
        // Additional logic can be added if needed before saving to the repository
        return propertyRepository.save(existingProperty);
    }

    public void deleteProperty(Long propertyId) {
        Property existingProperty = getPropertyById(propertyId);
        propertyRepository.delete(existingProperty);
    }
}
