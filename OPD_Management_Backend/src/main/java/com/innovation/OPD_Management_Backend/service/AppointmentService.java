package com.innovation.OPD_Management_Backend.service;

import java.util.List;

import com.innovation.OPD_Management_Backend.model.Appointment;



public interface AppointmentService {
Appointment insert (Appointment ap);
void delete(long aid);
Appointment update(long aid,Appointment ap);
Appointment serach(long aid);
List<Appointment >getAll();
}