package com.example.demo.entities;

import java.util.List;

import javax.persistence.*;

import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "area")
public class Area {

    @Id
    @Column(name = "pincode")
    private Integer pincode;

    @Column(name = "areaname")
    private String areaname;

    @Column(name = "cityid")
    private Integer cityid;

    @ManyToOne
    @JoinColumn(name = "cityid", referencedColumnName = "cityid", insertable = false, updatable = false)
    private City city;

    @OneToMany(mappedBy = "area")
    private List<Property> properties;

	public Area(Integer pincode, String areaname, Integer cityid, City city, List<Property> properties) {
		super();
		this.pincode = pincode;
		this.areaname = areaname;
		this.cityid = cityid;
		this.city = city;
		this.properties = properties;
	}

	public Area(String areaname, Integer cityid, City city, List<Property> properties) {
		super();
		this.areaname = areaname;
		this.cityid = cityid;
		this.city = city;
		this.properties = properties;
	}

	public Area(Integer pincode, String areaname, Integer cityid, City city) {
		super();
		this.pincode = pincode;
		this.areaname = areaname;
		this.cityid = cityid;
		this.city = city;
	}

    
    
    
    

}

