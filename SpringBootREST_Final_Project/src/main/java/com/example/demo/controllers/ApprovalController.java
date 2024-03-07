package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping
@CrossOrigin(origins="http://localhost:3000")
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
		//  System.out.println("--->"+u+":"+p);
		  LocalDate currentDate = LocalDate.now();
		  Date cdate = Date.valueOf(currentDate);
		  ApprovalStatus astatus = new ApprovalStatus(u,cdate,p,0);
		  return approvalService.addRequest(astatus);
	  }
	  
	  @GetMapping("/getrecord")
	  public ResponseEntity<List<ApprovalStatus>> getAllApprove() {
	        List<ApprovalStatus> app = approvalService.getAllRecord();
	        return ResponseEntity.ok(app);
	    }
	  
	  
	  @GetMapping("/getrecord/{pid}")
	  public ResponseEntity<List<ApprovalStatus>> getAllApprove(@PathVariable long pid) {
	        List<ApprovalStatus> app = approvalService.getAllRecord(pid);
	        return ResponseEntity.ok(app);
	    }
	  @GetMapping("/getrestatus/{uid}")
	  public ResponseEntity<List<ApprovalStatus>> getAllApprove(@PathVariable int uid) {
	        List<ApprovalStatus> app = approvalService.getUserStatus(uid);
	        return ResponseEntity.ok(app);
	    }
	  @PutMapping("/confirm/{approvalId}/{status}")
	    public int ConfirmRequest(@PathVariable Long approvalId, @PathVariable int status) {
			
	        return approvalService.confirmRequest(approvalId, status);
	    }
}