package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@RequestMapping("/approval")
public class ApprovalController {

    @Autowired
    private ApprovalService approvalService;
  
  @Autowired
    UserService uservice;
    
    @Autowired
    PropertyService pservice;
    
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

    
    @PostMapping("/confirm/{approvalId}")
    public ResponseEntity<ApprovalStatus> confirmRequest(@PathVariable Long approvalId,@RequestBody ApprovalStatus approvalStatus) {
//        ApprovalStatus appStatus = null;
//        appStatus.setStatus(approvalStatus.getStatus());
    	ApprovalStatus approStatus = approvalService.confirmRequest(approvalId,approvalStatus);
        return ResponseEntity.ok(approStatus);
    }
    
}