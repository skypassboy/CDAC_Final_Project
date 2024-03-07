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
    private Integer cityid;

    @Column(name = "cityname")
    private String cityname;

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
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

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}
	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", cityname=" + cityname +  
				 "]";
	}

}
