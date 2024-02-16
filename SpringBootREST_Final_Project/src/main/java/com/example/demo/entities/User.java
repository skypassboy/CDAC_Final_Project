package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	@Column
	int userid ;
	
	@Column
	String username;
	
	@Column
	boolean activitystatus;
	
	@Column
	String password;
	
	@Column
	String aadharcardno;
	
	
	@Column
	String emailid;
	
	
	@Column
	String phonenumber;
	
	@ManyToOne
    @JoinColumn(name = "roleid")
	Role roleid;
	
	@Column
	String address;
	
	@Column
	int pincode;
	
	
	
	
	public User() {
		super();
	}

<<<<<<< HEAD
	public User(int userid, String username, String password, String aadharcardno, String emailid, int phonenumber,
			int roleid, String address, int pincode,boolean activitystatus) {
=======
	public User(int userid, String username, String password, String aadharcardno, String emailid, String phonenumber,
			Role roleid, String address, int pincode) {
>>>>>>> ef7f092c647c95daf98e79248101e3cbb065be11
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
		this.activitystatus=activitystatus;
	}

<<<<<<< HEAD
	public User(String username, String password, String aadharcardno, String emailid, int phonenumber, int roleid,
			String address, int pincode,boolean activitystatus) {
=======
	public User(String username, String password, String aadharcardno, String emailid, String phonenumber, Role roleid,
			String address, int pincode) {
>>>>>>> ef7f092c647c95daf98e79248101e3cbb065be11
		super();
		this.username = username;
		this.password = password;
		this.aadharcardno = aadharcardno;
		this.emailid = emailid;
		this.phonenumber = phonenumber;
		this.roleid = roleid;
		this.address = address;
		this.pincode = pincode;
		this.activitystatus=activitystatus;
	}
	
	

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAadharcardno() {
		return aadharcardno;
	}

	public void setAadharcardno(String aadharcardno) {
		this.aadharcardno = aadharcardno;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public Role getRoleid() {
		return roleid;
	}

	public void setRoleid(Role roleid) {
		this.roleid = roleid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", activitystatus=" + activitystatus
				+ ", password=" + password + ", aadharcardno=" + aadharcardno + ", emailid=" + emailid
				+ ", phonenumber=" + phonenumber + ", roleid=" + roleid + ", address=" + address + ", pincode="
				+ pincode + "]";
	}

	
	

}
