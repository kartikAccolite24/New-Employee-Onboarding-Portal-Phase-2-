package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetails;
import org.springframework.http.ResponseEntity;

public interface EmployeePersonalDetailsService {

    public ResponseEntity<?> addPersonalDetails(EmployeePersonalDetails employeePersonalDetails);

    public ResponseEntity<?> fetchPersonalDetails(String empId);
}
