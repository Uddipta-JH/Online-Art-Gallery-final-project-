package com.spring.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.model.Payment;

//it contains all the inbield methods like update ,delete ,insert
@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long>{

}

//After Running this file 
