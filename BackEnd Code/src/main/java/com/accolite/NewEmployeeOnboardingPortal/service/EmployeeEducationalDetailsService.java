package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeEducationalDetailsService {

    public ResponseEntity<?> addEducationalDetails(EmployeeEducationalDetails employeeEducationalDetails);

    public ResponseEntity<?> fetchEducationalDetails(String empId);
//    public List<EmployeeEducationalDetails> findByStatusTrue();

}
