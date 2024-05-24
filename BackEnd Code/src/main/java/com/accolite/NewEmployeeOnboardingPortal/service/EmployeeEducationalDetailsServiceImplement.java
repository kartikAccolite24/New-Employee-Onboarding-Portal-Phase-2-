package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeEducationalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeeEducationalDetailsServiceImplement implements EmployeeEducationalDetailsService {

    @Autowired
    private EmployeeEducationalDetailsRepository employeeEducationalDetailsRepository;

    @Override
    public ResponseEntity<?> addEducationalDetails(EmployeeEducationalDetails employeeEducationalDetails) {

        return new ResponseEntity<>(employeeEducationalDetailsRepository.save(employeeEducationalDetails), HttpStatus.OK);

    }

    @Override
    public ResponseEntity<?> fetchEducationalDetails(String empId) {
        return new ResponseEntity<>(employeeEducationalDetailsRepository.findById(empId), HttpStatus.OK);
    }


}
