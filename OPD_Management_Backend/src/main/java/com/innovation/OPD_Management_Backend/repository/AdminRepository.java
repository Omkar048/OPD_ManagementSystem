package com.innovation.OPD_Management_Backend.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.innovation.OPD_Management_Backend.model.Admin;


@Repository
@Qualifier("admRepo")
public interface AdminRepository extends JpaRepository<Admin, Long> {
Admin findByEmailAndPassword(String email,String password);
}
