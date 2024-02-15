package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
}
