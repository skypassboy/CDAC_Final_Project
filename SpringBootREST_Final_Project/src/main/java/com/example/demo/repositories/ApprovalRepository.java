package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ApprovalStatus;
@Repository
public interface ApprovalRepository extends JpaRepository<ApprovalStatus,Long> {
	
	

	
}