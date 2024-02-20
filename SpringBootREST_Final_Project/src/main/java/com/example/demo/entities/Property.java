package com.example.demo.entities;

import javax.persistence.*;

import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "propertyid")
    private Long propertyid;

    @Column(name = "userid")
    private Long userid;

    @Column(name = "address")
    private String address;

    @Column(name = "propertyareasqft")
    private Integer propertyareasqft;

    @Column(name = "bhk")
    private Integer bhk;

    @Column(name = "rent")
    private Integer rent;

    @Column(name = "deposit")
    private Integer deposit;

    @Column(name = "furnished")
    private String furnished;

    @Column(name = "parking")
    private Boolean parking;

    @Column(name = "nooftoilets")
    private Integer nooftoilets;

    @Column(name = "wifi")
    private Boolean wifi;

    @Column(name = "gasconnection")
    private Boolean gasconnection;

    @Column(name = "lift")
    private Boolean lift;

    @Column(name = "floorno")
    private Integer floorno;

    @Column(name = "watergeyser")
    private Boolean watergeyser;

    @Column(name = "tenanttype")
    private String tenanttype;

    @Column(name = "pincode")
    private Integer pincode;

    @ManyToOne
    @JoinColumn(name = "pincode", referencedColumnName = "pincode", insertable = false, updatable = false)
    private Area area;

    @ManyToOne
    @JoinColumn(name = "cityid", referencedColumnName = "cityid", insertable = false, updatable = false)
    private City city;

	public Property(Long propertyid, Long userid, String address, Integer propertyareasqft, Integer bhk, Integer rent,
			Integer deposit, String furnished, Boolean parking, Integer nooftoilets, Boolean wifi,
			Boolean gasconnection, Boolean lift, Integer floorno, Boolean watergeyser, String tenanttype,
			Integer pincode, Area area, City city) {
		super();
		this.propertyid = propertyid;
		this.userid = userid;
		this.address = address;
		this.propertyareasqft = propertyareasqft;
		this.bhk = bhk;
		this.rent = rent;
		this.deposit = deposit;
		this.furnished = furnished;
		this.parking = parking;
		this.nooftoilets = nooftoilets;
		this.wifi = wifi;
		this.gasconnection = gasconnection;
		this.lift = lift;
		this.floorno = floorno;
		this.watergeyser = watergeyser;
		this.tenanttype = tenanttype;
		this.pincode = pincode;
		this.area = area;
		this.city = city;
	}

	public Property(Long userid, String address, Integer propertyareasqft, Integer bhk, Integer rent, Integer deposit,
			String furnished, Boolean parking, Integer nooftoilets, Boolean wifi, Boolean gasconnection, Boolean lift,
			Integer floorno, Boolean watergeyser, String tenanttype, Integer pincode, Area area, City city) {
		super();
		this.userid = userid;
		this.address = address;
		this.propertyareasqft = propertyareasqft;
		this.bhk = bhk;
		this.rent = rent;
		this.deposit = deposit;
		this.furnished = furnished;
		this.parking = parking;
		this.nooftoilets = nooftoilets;
		this.wifi = wifi;
		this.gasconnection = gasconnection;
		this.lift = lift;
		this.floorno = floorno;
		this.watergeyser = watergeyser;
		this.tenanttype = tenanttype;
		this.pincode = pincode;
		this.area = area;
		this.city = city;
	}

	public Long getPropertyid() {
		return propertyid;
	}

	public void setPropertyid(Long propertyid) {
		this.propertyid = propertyid;
	}

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getPropertyareasqft() {
		return propertyareasqft;
	}

	public void setPropertyareasqft(Integer propertyareasqft) {
		this.propertyareasqft = propertyareasqft;
	}

	public Integer getBhk() {
		return bhk;
	}

	public void setBhk(Integer bhk) {
		this.bhk = bhk;
	}

	public Integer getRent() {
		return rent;
	}

	public void setRent(Integer rent) {
		this.rent = rent;
	}

	public Integer getDeposit() {
		return deposit;
	}

	public void setDeposit(Integer deposit) {
		this.deposit = deposit;
	}

	public String getFurnished() {
		return furnished;
	}

	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}

	public Boolean getParking() {
		return parking;
	}

	public void setParking(Boolean parking) {
		this.parking = parking;
	}

	public Integer getNooftoilets() {
		return nooftoilets;
	}

	public void setNooftoilets(Integer nooftoilets) {
		this.nooftoilets = nooftoilets;
	}

	public Boolean getWifi() {
		return wifi;
	}

	public void setWifi(Boolean wifi) {
		this.wifi = wifi;
	}

	public Boolean getGasconnection() {
		return gasconnection;
	}

	public void setGasconnection(Boolean gasconnection) {
		this.gasconnection = gasconnection;
	}

	public Boolean getLift() {
		return lift;
	}

	public void setLift(Boolean lift) {
		this.lift = lift;
	}

	public Integer getFloorno() {
		return floorno;
	}

	public void setFloorno(Integer floorno) {
		this.floorno = floorno;
	}

	public Boolean getWatergeyser() {
		return watergeyser;
	}

	public void setWatergeyser(Boolean watergeyser) {
		this.watergeyser = watergeyser;
	}

	public String getTenanttype() {
		return tenanttype;
	}

	public void setTenanttype(String tenanttype) {
		this.tenanttype = tenanttype;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Property [propertyid=" + propertyid + ", userid=" + userid + ", address=" + address
				+ ", propertyareasqft=" + propertyareasqft + ", bhk=" + bhk + ", rent=" + rent + ", deposit=" + deposit
				+ ", furnished=" + furnished + ", parking=" + parking + ", nooftoilets=" + nooftoilets + ", wifi="
				+ wifi + ", gasconnection=" + gasconnection + ", lift=" + lift + ", floorno=" + floorno
				+ ", watergeyser=" + watergeyser + ", tenanttype=" + tenanttype + ", pincode=" + pincode + ", area="
				+ area + ", city=" + city + "]";
	}

	
    
    
    
	

}
