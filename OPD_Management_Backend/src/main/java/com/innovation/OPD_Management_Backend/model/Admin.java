package com.innovation.OPD_Management_Backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private  Long aid;
private String email,password,name,gender;
private int age;
public Admin() {
	super();
	// TODO Auto-generated constructor stub
}
public Admin(String name, int age ,String email, String password, String gender ) {
	super();
	this.name = name;
	this.age = age;
	this.email = email;
	this.password = password;
	this.gender=gender;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public Long getAid() {
	return aid;
}
public void setAid(Long aid) {
	this.aid = aid;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


}
