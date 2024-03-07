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
	
	public User(int userid) {
        this.userid = userid;
    }
	public User(int userid, String username, String password, String aadharcardno, String emailid, String phonenumber,
			Role roleid, String address, int pincode) {
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

	public User(String username, String password, String aadharcardno, String emailid, String phonenumber, Role roleid,
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
