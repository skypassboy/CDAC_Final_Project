package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
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
}
