package com.innovation.OPD_Management_Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.innovation.OPD_Management_Backend.model.Admin;
import com.innovation.OPD_Management_Backend.repository.AdminRepository;



@Service
public class AdminServiceImpl implements AdminService {
@Autowired
@Qualifier ("admRepo")
AdminRepository admRepo;

@Override
public Admin login(String em, String ps) {
	// TODO Auto-generated method stub
	return admRepo.findByEmailAndPassword(em,ps);
}

@Override
public Admin insert(Admin a) {
	// TODO Auto-generated method stub
	return admRepo.save(a);
}

@Override
public void delete(long aid) {
	// TODO Auto-generated method stub
	
}

@Override
public Admin update(long aid, Admin a) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Admin serach(long aid) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public List<Admin> getAll() {
	// TODO Auto-generated method stub
	return null;
}
}

