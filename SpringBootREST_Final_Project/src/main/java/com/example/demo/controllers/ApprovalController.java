package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ApprovalStatus;
import com.example.demo.entities.Property;
import com.example.demo.entities.RentRequest;
import com.example.demo.entities.User;
import com.example.demo.services.ApprovalService;
import com.example.demo.services.PropertyService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping
public class ApprovalController {
	  @Autowired
	    private ApprovalService approvalService;
	  
	  @Autowired
	    UserService uservice;
	    
	    @Autowired
	    PropertyService pservice;
	  	
	   /*@PostMapping("/addrequest")
	    public ResponseEntity<ApprovalStatus> createProperty(@RequestBody ApprovalStatus approval) {
	        LocalDate currentDate = LocalDate.now();
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	        String formattedDate = currentDate.format(formatter);
	        System.out.println("Current date in MySQL format: " + formattedDate);
	       approval.setRequestdate(formattedDate);
	       ApprovalStatus createresponse = ApprovalService.addRequest(approval);
	        return ResponseEntity.ok(createresponse);
	    }*/
	  @PostMapping("/addrequest")
	  public ApprovalStatus saveRequest(@RequestBody RentRequest rr)
	  {
		  User u = uservice.getOne(rr.getCustid());
		  Property p = pservice.getPropertyById(rr.getPropertyid());
		  
		  LocalDate currentDate = LocalDate.now();
		  Date cdate = Date.valueOf(currentDate);
		  ApprovalStatus astatus = new ApprovalStatus(u, cdate, p, 0);
		  return approvalService.addRequest(astatus);
	  }
	  
}
