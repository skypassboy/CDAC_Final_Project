package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	
	public User createUser(User user) {
		System.out.println(user);
        return urepo.save(user);
    }
	
	 public User getUserByEmail(String email,boolean status) {
		 User user = urepo.findByEmailid(email);

	        // Check if the user exists and if the password matches
	        if (user != null) {
	            // Return the authenticated user
	        	 user.setActivitystatus(status);
	        	 
	            return urepo.save(user);
	        }

	        // Return null if authentication fails
	        return null;
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
	
	@Transactional
	public ResponseEntity<User> updateProfile(int userid, User updatedUser) {
	    try {
	        // Fetch the user from the database based on the user ID in the provided updatedUser object
	        Optional<User> userOptional = urepo.findById(updatedUser.getUserid());

	        if (userOptional.isPresent()) {
	            // If the user exists, update the user's details with the provided updatedUser object
	            User existingUser = userOptional.get();

	            // Update user details with new data
	            existingUser.setUsername(updatedUser.getUsername());
	            existingUser.setPassword(updatedUser.getPassword());
	            existingUser.setAadharcardno(updatedUser.getAadharcardno());
	            existingUser.setEmailid(updatedUser.getEmailid());
	            existingUser.setPhonenumber(updatedUser.getPhonenumber());
	            existingUser.setRoleid(updatedUser.getRoleid());
	            existingUser.setAddress(updatedUser.getAddress());
	            existingUser.setPincode(updatedUser.getPincode());

	            // Save the updated user details
	            urepo.save(existingUser);

	            // Optionally, you can return the updated user object in the response
	            return ResponseEntity.ok(existingUser);
	        } else {
	            // If user with given userId doesn't exist, return 404 Not Found
	            return ResponseEntity.notFound().build();
	        }
	    } catch (Exception e) {
	        // Handle any exceptions and return a 500 Internal Server Error response
	        return ResponseEntity.status(500).build();
	    }
	}

	
}
