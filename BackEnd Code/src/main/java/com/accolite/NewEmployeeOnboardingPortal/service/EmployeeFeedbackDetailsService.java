package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeFeedbackDetails;
import org.springframework.http.ResponseEntity;

public interface EmployeeFeedbackDetailsService {
    public ResponseEntity<?> addFeedback(EmployeeFeedbackDetails feedback);

    public ResponseEntity<?> fetchFeedback(String empId);
}
