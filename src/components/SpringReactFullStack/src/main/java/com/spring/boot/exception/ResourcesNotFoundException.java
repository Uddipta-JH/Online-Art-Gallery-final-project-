package com.spring.boot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//api return  not found message
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourcesNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ResourcesNotFoundException(String message) {
		super(message);
	}
}

//if the record is not found in the databass that time it gives exception
