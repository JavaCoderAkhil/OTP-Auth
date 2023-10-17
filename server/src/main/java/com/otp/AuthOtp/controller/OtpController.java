package com.otp.AuthOtp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.otp.AuthOtp.dto.OtpRequest;
import com.otp.AuthOtp.dto.OtpResponseDto;
import com.otp.AuthOtp.dto.OtpValidationRequest;
import com.otp.AuthOtp.service.SmsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/otp")
@Slf4j
public class OtpController {

	@Autowired
	private SmsService smsService;

	@GetMapping("/process")
	public String processSMS() {
		return "SMS sent";
	}

	@PostMapping("/send-otp")
	public OtpResponseDto sentOtp(@RequestBody OtpRequest otpRequest) {
		log.info("inside sentotp:: " + otpRequest.getUsername());
		return smsService.sendSMS(otpRequest);
	}

	@PostMapping("/validate-otp")
	public String validateOtp(@RequestBody OtpValidationRequest otpValidationRequest) {
		log.info("inside validateotp :: " + otpValidationRequest.getUsername() + " " + otpValidationRequest);
		return smsService.validateOtp(otpValidationRequest);

	}
}