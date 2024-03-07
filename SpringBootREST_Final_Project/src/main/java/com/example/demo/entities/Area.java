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

    @ManyToOne
    @JoinColumn(name = "cityid")
    private City city1;

   

	public Area(Integer pincode, String areaname, City city1, List<Property> properties) {
		super();
		this.pincode = pincode;
		this.areaname = areaname;
		this.city1 = city1;
		
	}

	public Area(String areaname, Integer cityid, City city1, List<Property> properties) {
		super();
		this.areaname = areaname;
		this.city1 = city1;
		
	}

	public Area(Integer pincode, String areaname, City city1) {
		super();
		this.pincode = pincode;
		this.areaname = areaname;
		this.city1= city1;
	}

	public Area(Integer pincode, String areaname, Integer cityid) {
		super();
		this.pincode = pincode;
		this.areaname = areaname;
		
	}

	
	
	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String areaname) {
		this.areaname = areaname;
	}

	
	public City getCity1() {
		return city1;
	}

	public void setCity(City city1) {
		this.city1 = city1;
	}

	public Area(String areaname) {
		super();
		this.areaname = areaname;
	}

 
	 @Override
		public String toString() {
			return "Area [pincode=" + pincode + ", areaname=" + areaname + ",  city=" + city1
					+ "]";
		}
    

}

