package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.services.AreaService;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins="http://localhost:3000")
public class AreaController {

	@Autowired
    private final AreaService areaService;

    public AreaController(AreaService areaService) {
        this.areaService = areaService;
    }

    @GetMapping("/getareabycityid/{cityId}")
    public List<Area> getAreasByCityId(@PathVariable Integer cityId) {
        return areaService.getAreasByCityId(cityId);
    }
}
