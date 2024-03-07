package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Table(name = "approvalstatus")
@Getter
@Setter
public class ApprovalStatus {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long aid;
	 
	 	@ManyToOne
	    @JoinColumn(name = "userid")
	    private User user;
	 	
	 	@Column
	 	@JsonFormat(pattern="yyyy-MM-dd")
	 	private Date requestdate;
	 	
	 	@Column
	 	@JsonFormat(pattern="yyyy-MM-dd")
	 	private Date responsedate;
	 	
	 	@ManyToOne
	    @JoinColumn(name = "propertyid")
	    private Property property;
	 	
	 	
	 	@Column
	    private int status;
	 	
		public ApprovalStatus(Long aid, User user, Property property, int status) {
			super();
			this.aid = aid;
			this.user = user;
			this.property = property;
			this.status = status;
		}

		public ApprovalStatus(User user, Date requestdate, Property property, int status) {
			super();
			this.user = user;
			this.requestdate = requestdate;
			this.property = property;
			this.status = status;
		}

		
		/*public ApprovalStatus(Long aid, int userid, int propertyid, String status) {
			super();
			this.aid = aid;
			this.userid = userid;
			this.propertyid = propertyid;
			this.status = status;
		}*/

	  
	    
	
}