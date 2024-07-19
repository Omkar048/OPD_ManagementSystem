package com.innovation.OPD_Management_Backend.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.innovation.OPD_Management_Backend.model.Prescription;



@Repository
@Qualifier("priRepo")
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
List<Prescription>findAllByAid(long aid);
}
