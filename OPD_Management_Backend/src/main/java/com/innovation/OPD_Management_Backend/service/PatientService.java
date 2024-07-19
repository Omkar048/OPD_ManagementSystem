package com.innovation.OPD_Management_Backend.service;

import java.util.List;


import com.innovation.OPD_Management_Backend.model.Patient;



public interface PatientService {
	 Patient insert (Patient p);
		void delete(long pid);
		Patient update(long pid,Patient p);
		Patient serach(long pid);
		List<Patient>getAll();
		Patient login(String em,String ps);
}
