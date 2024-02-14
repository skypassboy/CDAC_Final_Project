package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	//@Query("select u from User u where ")
	User findByEmailid(String emailid);
	User findByUserid(int userid);
}

