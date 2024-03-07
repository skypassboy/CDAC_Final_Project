package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ApprovalStatus;

@Repository
public interface ApprovalRepository extends JpaRepository<ApprovalStatus, Long> {

	@Query("SELECT a FROM ApprovalStatus a WHERE a.property.propertyid = :propertyId")
	List<ApprovalStatus> findByPropertyId(Long propertyId);

	@Query("SELECT a FROM ApprovalStatus a WHERE a.user.userid = :userId")
	List<ApprovalStatus> findByUserId(int userId);

}