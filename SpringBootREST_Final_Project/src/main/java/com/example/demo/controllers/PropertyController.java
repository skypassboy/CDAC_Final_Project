package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Area;
import com.example.demo.entities.Property;
import com.example.demo.entities.User;
import com.example.demo.services.AreaService;
import com.example.demo.services.PropertyService;
import com.example.demo.services.UserService;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins="http://localhost:3000")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;
    @Autowired
    private AreaService areaservice;
    
    @Autowired
    private UserService userService;
   
    @GetMapping("/pincode")
    public ResponseEntity<Area> getPincode(@RequestParam String areaname,@RequestParam int cityid) {
    	System.out.println(areaname+cityid);
        Area area = areaservice.findAreaByDetails(areaname, cityid);
        System.out.println(area);
        return ResponseEntity.ok(area);
    }

    @PostMapping("/addproperty")
    public ResponseEntity<Property> createProperty(@RequestBody Property property) {
    	System.err.println(property);
        Property createdProperty = propertyService.createProperty(property);
        return ResponseEntity.ok(createdProperty);
    }
    
    @GetMapping("/property/{propertyId}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
        Property property = propertyService.getPropertyById(propertyId);
        return ResponseEntity.ok(property);
    }
    
    @GetMapping("/properties")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }
    
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }
    
   
    
    @PutMapping("updateproperty/{propertyId}")
    public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId, @RequestBody Property updatedProperty) {
//        Property updatedProperty = propertyService.updateProperty(propertyId, property);
//        return ResponseEntity.ok(updatedProperty);
    	System.out.println("in update");
		System.out.println(propertyId);
		return propertyService.updateProperty(propertyId, updatedProperty);
    }

    @DeleteMapping("deleteproperty/{propertyId}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long propertyId) {
        propertyService.deleteProperty(propertyId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/property/user/{userId}")
    public List<Property> getPropertiesByUserId(@PathVariable int userId) {
        // Retrieve the user by userId
        User user = userService.getOne(userId);
        
        // Retrieve properties associated with the user
        return propertyService.getPropertiesByUser(user);
    }
    

}
