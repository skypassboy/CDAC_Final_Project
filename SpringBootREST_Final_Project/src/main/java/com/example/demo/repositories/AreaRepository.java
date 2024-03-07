package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Area;

@Repository
@Transactional
public interface AreaRepository extends JpaRepository<Area, Integer> {

    // You can add custom query methods here if needed

    // Example: Find an Area by areaname, pincode, and city
	@Query("select a from Area a where areaname = :areaname and cityid = :cityid")
    Area findByAreanameAndPincodeAndCity(String areaname,int cityid);

	List<Area> findByCity1_Cityid(Integer cityId);
}
