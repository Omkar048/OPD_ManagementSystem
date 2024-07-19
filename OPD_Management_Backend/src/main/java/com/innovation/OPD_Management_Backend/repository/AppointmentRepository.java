package com.innovation.OPD_Management_Backend.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.innovation.OPD_Management_Backend.model.Appointment;

@Repository
@Qualifier("appRepo")
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
