package com.example.demo.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="role")
@NoArgsConstructor
@Getter
@Setter
public class Role {
	@Id
	@Column
	private int roleid ;
	
	@Column
	private String rolename;

	
	public Role(int roleid) {
		super();
		this.roleid = roleid;
	}	
	
	@Override
	public String toString() {
		return "Role [rolename=" + rolename + "]";
	}

	
}
