package com.example.demo.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ApprovalStatus;
import com.example.demo.entities.Property;
import com.example.demo.entities.RentRequest;
import com.example.demo.repositories.ApprovalRepository;

@Service
public class ApprovalService {
	@Autowired
	private ApprovalRepository Apprepo;

	public ApprovalStatus addRequest(ApprovalStatus approve) {
		return Apprepo.save(approve);
	}

	public List<ApprovalStatus> getAllRecord() {
		System.out.println("non pid wali");
		return Apprepo.findAll();
	}
	
	
	
	public  List<ApprovalStatus> getAllRecord(long pid) {
		System.out.println("pid wali");
		return Apprepo.findByPropertyId(pid); 
	}

	public List<ApprovalStatus> getUserStatus(int uid) {
		return Apprepo.findByUserId(uid);
		
	}

	public int confirmRequest(long approvalId, int status)
	{
		LocalDate currentDate = LocalDate.now();
		Date cdate = Date.valueOf(currentDate);
		ApprovalStatus asts = Apprepo.findById(approvalId).get();
		asts.setStatus(status);
		asts.setResponsedate(cdate);
		return Apprepo.save(asts) == null?0:1;
		
	}
}