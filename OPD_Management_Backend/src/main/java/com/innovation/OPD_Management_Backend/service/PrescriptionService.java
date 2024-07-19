package com.innovation.OPD_Management_Backend.service;

import java.util.List;

import com.innovation.OPD_Management_Backend.model.Prescription;




public interface PrescriptionService {
	Prescription insert (Prescription ps);
	Prescription update(long pid,Prescription ps);
	Prescription serach(long pid);
	List<Prescription>getAll();
	List<Prescription>getAllByApp(long aid);
}
