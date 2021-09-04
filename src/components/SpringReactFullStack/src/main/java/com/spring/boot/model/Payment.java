package com.spring.boot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payments")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "order_id")
	private long orderId;
	@Column(name = "bayer_email_id")
	private String bayerEmailId;
	@Column(name = "product_id")
	private long productId;
	@Column(name = "card_holder")
	private String cardHolder;
	@Column(name = "bank_name")
	private String bankName;
	@Column(name = "amount")
	private long amount;
	@Column(name = "card_number")
	private long cardNumber;
	@Column(name = "expiry_date")
	private String expiryDate;
	@Column(name = "cvv")
	private long cvv;
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(String bayerEmailId, long productId, String cardHolder, String bankName, long amount,
			long cardNumber, String expiryDate, long cvv) {
		super();
		this.bayerEmailId = bayerEmailId;
		this.productId = productId;
		this.cardHolder = cardHolder;
		this.bankName = bankName;
		this.amount = amount;
		this.cardNumber = cardNumber;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public String getBayerEmailId() {
		return bayerEmailId;
	}

	public void setBayerEmailId(String bayerEmailId) {
		this.bayerEmailId = bayerEmailId;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getCardHolder() {
		return cardHolder;
	}

	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public long getCvv() {
		return cvv;
	}

	public void setCvv(long cvv) {
		this.cvv = cvv;
	}
	
	
	
	
}
