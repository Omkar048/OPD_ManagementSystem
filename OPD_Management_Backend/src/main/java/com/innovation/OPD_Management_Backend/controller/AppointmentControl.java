package com.innovation.OPD_Management_Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.OPD_Management_Backend.model.Appointment;
import com.innovation.OPD_Management_Backend.service.AppointmentService;




@RestController
@RequestMapping("/opd")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentControl {
	@Autowired
	AppointmentService as;
	@GetMapping("/Appointment")
	public List<Appointment> getAll()
	{
		return as.getAll();
	}
	@PostMapping("/Appointment")
	public Appointment insert(@RequestBody Appointment a)
	{
		return as.insert(a);
	}
	@DeleteMapping("/Appointment{id}")
	public void delete(@PathVariable("id")long id)
	{
		as.delete(id);
	}
	@PutMapping("/Appointment/{id}")
	public Appointment update(@PathVariable ("id") long id,@RequestBody Appointment a)
	{
		return as.update(id,a);
	}
	@GetMapping("/Appointment/{id}")
	public Appointment search(@PathVariable("id")long id)
	{
		return as.serach(id);
	}
	
}
