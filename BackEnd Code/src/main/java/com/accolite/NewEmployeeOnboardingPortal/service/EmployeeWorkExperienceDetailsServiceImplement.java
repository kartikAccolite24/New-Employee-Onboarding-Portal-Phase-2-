package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeWorkExperienceDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeWorkExperienceDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeWorkExperienceDetailsServiceImplement implements EmployeeWorkExperienceDetailsService {

    @Autowired
    private EmployeeWorkExperienceDetailsRepository employeeWorkExperienceDetailsRepository;

    @Override
    public ResponseEntity<?> addWorkExperience(EmployeeWorkExperienceDetails employeeWorkExperienceDetails) {
        return new ResponseEntity<>(employeeWorkExperienceDetailsRepository.save(employeeWorkExperienceDetails), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> fetchWorkExperience(String empId) {
        Optional<EmployeeWorkExperienceDetails> fetched = employeeWorkExperienceDetailsRepository.findById(empId);
        if(fetched.isPresent()){
            return new ResponseEntity<>(fetched, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
