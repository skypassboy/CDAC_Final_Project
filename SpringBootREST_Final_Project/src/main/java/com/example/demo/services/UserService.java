package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public User getOne(int uid) {
	    Optional<User> userOptional = urepo.findById(uid);
	    return userOptional.orElse(null); // Return the user if present, otherwise return null
	}
	
	
	public User createUser(User user) {
		System.out.println(user);
        return urepo.save(user);
    }
	
	public User authenticateUser(String emailid, String password) {
        // Retrieve the user from the database by email
        User user = urepo.findByEmailid(emailid);

        // Check if the user exists and if the password matches
        if (user != null && user.getPassword().equals(password)) {
            // Return the authenticated user
            return user;
        }

        // Return null if authentication fails
        return null;
    }
	
	public List<User> getAllUsers() {
        return urepo.findAll();
    }
	
//	public User getOne(int uid)
//	{
//		//return urepo.findById(uid).orElse(null);
//		return urepo.findById(uid).get();
//	}
	
	@Autowired
    public UserService(UserRepository userRepository) {
        this.urepo = userRepository;
    }

   
	
	
	
	@Transactional
    public ResponseEntity<User> updateUser(int userId, User updatedUser) {
        try {
            Optional<User> optionalUser = urepo.findById(userId);

            if (optionalUser.isPresent()) {
                User existingUser = optionalUser.get();

                // Update fields with non-null values from the updatedUser
                existingUser.setUsername(updatedUser.getUsername());
                existingUser.setPassword(updatedUser.getPassword());
                existingUser.setAadharcardno(updatedUser.getAadharcardno());
                existingUser.setEmailid(updatedUser.getEmailid());
                existingUser.setPhonenumber(updatedUser.getPhonenumber());
                existingUser.setRoleid(updatedUser.getRoleid());
                existingUser.setAddress(updatedUser.getAddress());
                existingUser.setPincode(updatedUser.getPincode());

                // Save the updated user to the database
                User savedUser = urepo.save(existingUser);

                return ResponseEntity.ok(savedUser);
            } else {
                // User with the given ID not found
                return ResponseEntity.status(404).build();
            }
        } catch (Exception e) {
            // Handle exceptions and return appropriate status codes or messages
            return ResponseEntity.status(500).build();
        }
    }
}
