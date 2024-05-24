package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeBankingDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeBankingDetailsController {

    @Autowired
    private EmployeeBankingDetailsService employeeBankingDetailsService;

    @PostMapping("/addBankingDetails")
    ResponseEntity<?> addBankingDetails(@RequestBody EmployeeBankingDetails employeeBankingDetails){
        return new ResponseEntity<>(employeeBankingDetailsService.addBankingDetails(employeeBankingDetails), HttpStatus.OK);
    }

    @GetMapping("/fetchBankingDetails/{empId}")
    ResponseEntity<?> fetchBankingDetails(@PathVariable String empId){
        return new ResponseEntity<>(employeeBankingDetailsService.fetchBankingDetails(empId), HttpStatus.OK);
    }


}
