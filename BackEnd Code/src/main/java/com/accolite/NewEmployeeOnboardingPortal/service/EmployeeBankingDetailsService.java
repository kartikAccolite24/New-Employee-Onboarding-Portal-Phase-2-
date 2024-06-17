package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeBankingDetailsService {

    ResponseEntity<?> addBankingDetails(EmployeeBankingDetails employeeBankingDetails);

    ResponseEntity<?> fetchBankingDetails(String empId);
//    public List<EmployeeBankingDetails> findByStatusTrue();


}
