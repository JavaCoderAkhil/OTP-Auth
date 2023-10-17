package com.otp.AuthOtp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OtpRequest {

	private String username;
	private String password;
	private String phoneNumber;
}
