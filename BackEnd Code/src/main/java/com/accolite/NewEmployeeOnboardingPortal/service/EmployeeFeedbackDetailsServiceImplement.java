package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeFeedbackDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeFeedbackDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeeFeedbackDetailsServiceImplement implements EmployeeFeedbackDetailsService {

    @Autowired
    private EmployeeFeedbackDetailsRepository employeeFeedbackDetailsRepository;

    @Override
    public ResponseEntity<?> addFeedback(EmployeeFeedbackDetails feedback) {
        employeeFeedbackDetailsRepository.save(feedback);
        return new ResponseEntity<>("Thanks for your feedback!!", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> fetchFeedback(String empId) {
        return new ResponseEntity<>(employeeFeedbackDetailsRepository.findById(empId), HttpStatus.OK);
    }
}
