package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {
	
	@Autowired
    private final AreaRepository areaRepository;

    public AreaService(AreaRepository areaRepository) {
        this.areaRepository = areaRepository;
    }

    public Area findAreaByDetails( String areaname,int cityid) {
    	//int cityid= city.getCityid();
        return areaRepository.findByAreanameAndPincodeAndCity(areaname,cityid);
    }
    
    

    public List<Area> getAreasByCityId(Integer cityId) {
        return areaRepository.findByCity1_Cityid(cityId);
    }
    
}

