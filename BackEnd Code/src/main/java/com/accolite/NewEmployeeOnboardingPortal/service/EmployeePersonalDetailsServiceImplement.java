package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeePersonalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeePersonalDetailsServiceImplement implements EmployeePersonalDetailsService {

    @Autowired
    private EmployeePersonalDetailsRepository employeePersonalDetailsRepository;

    @Override
    public ResponseEntity<?> addPersonalDetails(EmployeePersonalDetails employeePersonalDetails) {
        return new ResponseEntity<>(employeePersonalDetailsRepository.save(employeePersonalDetails), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> fetchPersonalDetails(String empId) {
        return new ResponseEntity<>(employeePersonalDetailsRepository.findById(empId), HttpStatus.OK);
    }
}
