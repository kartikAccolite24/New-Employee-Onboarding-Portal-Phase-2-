package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;
    @PostMapping("/sendOtp")
    public ResponseEntity<?> sendOtp(@RequestBody String username){
        System.out.println(emailService.checkValidUser(username));

        if(emailService.checkValidUser(username)){

            String subject = "Account Password Setup";

            Integer intOtp=(int)(Math.random()*(800000)+100000);
            String otp=intOtp.toString();

            String body = "Hi,\nYour OTP for account verification is: " + otp + "\n\n Thanks.";

            emailService.sendEmail(username, subject, body);
            return new ResponseEntity<>(otp, HttpStatus.OK);
        }
        return new ResponseEntity<>("Account with this email doesn't exist.", HttpStatus.NO_CONTENT);
    }




}
