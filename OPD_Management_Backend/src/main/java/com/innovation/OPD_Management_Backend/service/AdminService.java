package com.innovation.OPD_Management_Backend.service;

import java.util.List;

import com.innovation.OPD_Management_Backend.model.Admin;


public interface AdminService {
Admin login(String em,String ps);

Admin  insert (Admin a);
void delete(long aid);
Admin update(long aid,Admin a);
Admin serach(long aid);
List<Admin>getAll();
}
