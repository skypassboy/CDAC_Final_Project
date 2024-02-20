package com.example.demo.entities;

import javax.persistence.*;

import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cityid")
    private Integer cityid;

    @Column(name = "cityname")
    private String cityname;

    @OneToMany(mappedBy = "city")
    private List<Area> areas;

    

	public City(Integer cityid, String cityname, List<Area> areas, List<Property> properties) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
		this.areas = areas;
		
	}

	public City(String cityname, List<Area> areas, List<Property> properties) {
		super();
		this.cityname = cityname;
		this.areas = areas;
		
	}

	public City(Integer cityid, String cityname) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
	}

	public City(String cityname) {
		super();
		this.cityname = cityname;
	}

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
	}

	public List<Area> getAreas() {
		return areas;
	}

	public void setAreas(List<Area> areas) {
		this.areas = areas;
	}

	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", cityname=" + cityname + ", areas=" + areas 
				+ "]";
	}

	
    

}
