package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="user")
@NoArgsConstructor
@Getter
@Setter
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="User_Id")
	int userid ;
	
	@Column(name="Username")
	String username;
	
	@Column(name="Password")
	int password;
	
	@Column(name="AadharCard_No")
	String aadharcardno;
	
	
	@Column(name="Email_ID")
	String emailid;
	
	
	@Column(name="Phone_Number")
	int phonenumber;
	
	
	@Column(name="Role_ID")
	int roleid;
	
	@Column(name="Address")
	String address;
	
	@Column(name="Pincode")
	int pincode;

	public User(int userid, String username, int password, String aadharcardno, String emailid, int phonenumber,
			int roleid, String address, int pincode) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.aadharcardno = aadharcardno;
		this.emailid = emailid;
		this.phonenumber = phonenumber;
		this.roleid = roleid;
		this.address = address;
		this.pincode = pincode;
	}

	public User(String username, int password, String aadharcardno, String emailid, int phonenumber, int roleid,
			String address, int pincode) {
		super();
		this.username = username;
		this.password = password;
		this.aadharcardno = aadharcardno;
		this.emailid = emailid;
		this.phonenumber = phonenumber;
		this.roleid = roleid;
		this.address = address;
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", password=" + password + ", aadharcardno="
				+ aadharcardno + ", emailid=" + emailid + ", phonenumber=" + phonenumber + ", roleid=" + roleid
				+ ", address=" + address + ", pincode=" + pincode + "]";
	}
	

}
