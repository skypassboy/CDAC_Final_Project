package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	RoleRepository rrepo;
	
	public List<Role> getAll()
	{
		return rrepo.findAll();
	}
	
	public Role getone(int rid)
	{
		Role c = null;
		Optional<Role> op =  rrepo.findById(rid);
		try
		{
			c = op.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return c;
	}
	
	public Role saverole(Role r)
	{
		return rrepo.save(r);
	}
	
}
