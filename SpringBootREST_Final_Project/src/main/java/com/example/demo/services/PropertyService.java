package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Property;
import com.example.demo.entities.User;
import com.example.demo.repositories.AreaRepository;
import com.example.demo.repositories.PropertyRepository;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;
    @Autowired
    private AreaRepository areaRepository;
    
    
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId)
                .orElseThrow(() -> new EntityNotFoundException("Property not found with id: " + propertyId));
    }
    
    public List<Property> getPropertiesByUser(User user) {
        return propertyRepository.findByUserid(user);
    }
    
    @Autowired
    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    public List<Property> getPropertiesByUserId(User user) {
        return propertyRepository.findByUserid(user);
    }

    @Transactional
    public Property createProperty(Property property) {
        // Additional logic can be added if needed before saving to the repository
        System.out.println(property);

        // Check if the area already exists based on areaname, pincode, and city
        Area existingArea = areaRepository.findByAreanameAndPincodeAndCity(
            property.getPincode().getAreaname(),
            property.getPincode().getCity1().getCityid()
        );

        // If the area doesn't exist, create and save it
        if (existingArea == null) {
            System.out.println(existingArea);
            // Set other properties for the Area if needed
            // Fix: Save property.getArea() instead of existingArea
            areaRepository.save(property.getPincode());
        } else {
            // If the area already exists, use it
            property.setPincode(existingArea);
        }

        return propertyRepository.save(property);
    }
    
    
    @Transactional
    public ResponseEntity<Property> updateProperty(Long propertyId, Property updatedProperty) {
//        Property existingProperty = getPropertyById(propertyId);
        try
        {
        	Optional<Property> optionalProperty = propertyRepository.findById(propertyId);
        	
        	if(optionalProperty.isPresent()) {
        		Property existingProperty = optionalProperty.get();
        		
        		existingProperty.setAddress(updatedProperty.getAddress());
        		existingProperty.setPropertyareasqft(updatedProperty.getPropertyareasqft());
        		existingProperty.setBhk(updatedProperty.getBhk());
        		existingProperty.setRent(updatedProperty.getRent());
        		existingProperty.setDeposit(updatedProperty.getDeposit());
        		existingProperty.setFurnished(updatedProperty.getFurnished());
        		existingProperty.setParking(updatedProperty.getParking());
        		existingProperty.setNooftoilets(updatedProperty.getNooftoilets());
        		existingProperty.setWifi(updatedProperty.getWifi());
        		existingProperty.setGasconnection(updatedProperty.getGasconnection());
        		existingProperty.setLift(updatedProperty.getLift());
        		existingProperty.setFloorno(updatedProperty.getFloorno());
        		existingProperty.setWatergeyser(updatedProperty.getWatergeyser());
        		existingProperty.setTenanttype(updatedProperty.getTenanttype());
//        		existingProperty.setPincode(updatedProperty.getPincode());
        		
        		Property savedProperty = propertyRepository.save(existingProperty);
        		
        		return ResponseEntity.ok(savedProperty);
        	}
        	else {
        		return ResponseEntity.status(404).build();
        	}
        }
        catch (Exception e) {
			// TODO: handle exception
        	return ResponseEntity.status(500).build();
		}
        
    }

    public void deleteProperty(Long propertyId) {
        Property existingProperty = getPropertyById(propertyId);
        propertyRepository.delete(existingProperty);
    }
}
