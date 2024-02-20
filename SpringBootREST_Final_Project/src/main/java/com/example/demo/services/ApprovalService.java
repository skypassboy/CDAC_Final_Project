package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ApprovalStatus;
import com.example.demo.repositories.ApprovalRepository;

@Service
public class ApprovalService {
	  @Autowired
	    private ApprovalRepository Apprepo;
	  
	  public ApprovalStatus addRequest(ApprovalStatus approve) {
	        return Apprepo.save(approve);
	    }
}
