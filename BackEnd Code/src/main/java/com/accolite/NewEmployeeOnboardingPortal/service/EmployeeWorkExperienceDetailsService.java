package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeWorkExperienceDetails;
import org.springframework.http.ResponseEntity;

public interface EmployeeWorkExperienceDetailsService {

    public ResponseEntity<?> addWorkExperience(EmployeeWorkExperienceDetails employeeWorkExperienceDetails);

    public ResponseEntity<?> fetchWorkExperience(String empId);
}
