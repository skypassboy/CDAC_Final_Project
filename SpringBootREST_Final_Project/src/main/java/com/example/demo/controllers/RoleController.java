package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoleController {

	@Autowired
	RoleService rservice;
	
	@GetMapping("/getallcat")
	public List<Role> getAll()
	{
		return rservice.getAll();
	}
	
	@GetMapping("/getonerole")
	public Role getOne(@RequestParam("rid") int rid)
	{
		return rservice.getone(rid);
	}
	
	@PostMapping("/saverole")
	public Role saverole(@RequestBody Role r)
	{
		return rservice.saverole(r);		
	}
	
	
	
}
