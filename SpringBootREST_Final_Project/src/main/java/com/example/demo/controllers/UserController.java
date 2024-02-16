package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class UserController {
	
	@Autowired
	UserService uservice;
	@Autowired
    private UserRepository userRepository;

	
	@PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User newUser) {
		System.out.println(newUser);
        try {
            User registeredUser = uservice.createUser(newUser);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
	@PostMapping("/active")
    public ResponseEntity<User> activity(@RequestBody User activeUser) {
		User r= uservice.getUserByEmail(activeUser.getEmailid(),activeUser.isActivitystatus());		
			
		 if (r != null) {
	            return ResponseEntity.ok(r);
	        } else {
	            // You may want to return a different status code for unsuccessful login
	            return ResponseEntity.status(401).build();
	        }
		
	}
	@PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User loginUser) {
        // Logic to authenticate the user using UserService
        // For example, you can call a method in UserService to check credentials
        User authenticatedUser = uservice.authenticateUser(loginUser.getEmailid(), loginUser.getPassword());
        
        // Return a response, such as the authenticated user and HTTP status
        if (authenticatedUser != null) {
            return ResponseEntity.ok(authenticatedUser);
        } else {
            // You may want to return a different status code for unsuccessful login
            return ResponseEntity.status(401).build();
        }
	}
	
	@PutMapping("/updateUser/{userId}")
    public ResponseEntity<User> updateProfile(@PathVariable int userId, @RequestBody User updateProfile) {
		System.out.println("in update");
        return uservice.updateProfile(userId, updateProfile);
    }
	
//	@PutMapping("/updateProfile")
//	public ResponseEntity<User> updateProfile(@RequestBody User updatedUser) {
//	    try {
//	        // Fetch the user from the database based on the user ID in the provided updatedUser object
//	        Optional<User> userOptional = userRepository.findById(updatedUser.getUserid());
//
//	        if (userOptional.isPresent()) {
//	            // If the user exists, update the user's details with the provided updatedUser object
//	            User existingUser = userOptional.get();
//
//	            // Update user details with new data
//	            existingUser.setUsername(updatedUser.getUsername());
//	            existingUser.setPassword(updatedUser.getPassword());
//	            existingUser.setAadharcardno(updatedUser.getAadharcardno());
//	            existingUser.setEmailid(updatedUser.getEmailid());
//	            existingUser.setPhonenumber(updatedUser.getPhonenumber());
//	            existingUser.setRoleid(updatedUser.getRoleid());
//	            existingUser.setAddress(updatedUser.getAddress());
//	            existingUser.setPincode(updatedUser.getPincode());
//
//	            // Save the updated user details
//	            userRepository.save(existingUser);
//
//	            // Optionally, you can return the updated user object in the response
//	            return ResponseEntity.ok(existingUser);
//	        } else {
//	            // If user with given userId doesn't exist, return 404 Not Found
//	            return ResponseEntity.notFound().build();
//	        }
//	    } catch (Exception e) {
//	        // Handle any exceptions and return a 500 Internal Server Error response
//	        return ResponseEntity.status(500).build();
//	    }
//	}


}
