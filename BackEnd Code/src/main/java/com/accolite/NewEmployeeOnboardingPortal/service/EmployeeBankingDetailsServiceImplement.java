package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.controller.EmployeeBankingDetailsController;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeBankingDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeBankingDetailsServiceImplement implements EmployeeBankingDetailsService{

    @Autowired
    private EmployeeBankingDetailsRepository employeeBankingDetailsRepository;

    @Override
    public ResponseEntity<?> addBankingDetails(EmployeeBankingDetails employeeBankingDetails) {
        return new ResponseEntity<>(employeeBankingDetailsRepository.save(employeeBankingDetails), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> fetchBankingDetails(String empId) {
        Optional<EmployeeBankingDetails> bankingDetails = employeeBankingDetailsRepository.findById(empId);

        if(bankingDetails.isPresent()){
            return new ResponseEntity<>(bankingDetails.get(),HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
//        return new ResponseEntity<>(employeeBankingDetailsRepository.findById(empId), HttpStatus.OK);
    }


}
