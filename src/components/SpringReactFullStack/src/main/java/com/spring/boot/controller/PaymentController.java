package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.model.Payment;
import com.spring.boot.repository.PaymentRepository;

// standerd api when we devloped api
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class PaymentController {
	
	
//	inject paymentrepository
	@Autowired
	private PaymentRepository paymentRepository;
	
	//get all payments
	@GetMapping("/payments")
	private List<Payment> getPayments(){
//		when we hit the api that time this method get called
		
		//and it return list of payment to the client
		return paymentRepository.findAll();
	}
	
	//ADD PAYMENT REST API
	@PostMapping("/payments")//handle http post request
	public Payment addPayment(@RequestBody Payment payment) {//post request contain json request body
		return paymentRepository.save(payment);
	}
	
	
}
