package com.example.demo.controllers;

import java.util.List;

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
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class UserController {
	
	@Autowired
	UserService uservice;
	

	
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
	
	
	@GetMapping("/getalluser")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> allUsers = uservice.getAllUsers();
            return ResponseEntity.ok(allUsers);
        } catch (Exception e) {
            // Handle specific exceptions and return appropriate status codes or messages
            return ResponseEntity.status(500).build();
        }
    }
	
	@PutMapping("/updateuser/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable int userId, @RequestBody User updatedUser) {
		System.out.println("in update");
		System.out.println(userId);
        return uservice.updateUser(userId, updatedUser);
    }
	
}
