package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByEmailid(String emailid);
	User findByUserid(int uid);
}
