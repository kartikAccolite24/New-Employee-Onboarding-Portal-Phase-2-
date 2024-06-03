package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeFeedbackDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeFeedbackDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeePersonalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeeFeedbackDetailsServiceImplement implements EmployeeFeedbackDetailsService {

    @Autowired
    private EmployeeFeedbackDetailsRepository employeeFeedbackDetailsRepository;

    @Autowired
    private EmployeePersonalDetailsRepository employeePersonalDetailsRepository;

    @Override
    public ResponseEntity<?> addFeedback(EmployeeFeedbackDetails feedback) {
        String firstName = employeePersonalDetailsRepository.findById(feedback.getEmpId()).get().getFirstName();
        String lastName = employeePersonalDetailsRepository.findById(feedback.getEmpId()).get().getLastName();

        String fullName = firstName + " " + lastName;

        feedback.setName(fullName);

        employeeFeedbackDetailsRepository.save(feedback);
        return new ResponseEntity<>("Thanks for your feedback!!", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> fetchFeedback(String empId) {
        return new ResponseEntity<>(employeeFeedbackDetailsRepository.findById(empId), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getAllFeedback() {
        return new ResponseEntity<>(employeeFeedbackDetailsRepository.findAll(), HttpStatus.OK);
    }
}