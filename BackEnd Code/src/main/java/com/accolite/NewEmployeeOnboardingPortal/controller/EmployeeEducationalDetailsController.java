package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeEducationalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeEducationalDetailsController {

    @Autowired
    private EmployeeEducationalDetailsService employeeEducationalDetailsService;

    @PostMapping("/addEducationalDetails")
    ResponseEntity<?> addEducationalDetails(@RequestBody EmployeeEducationalDetails employeeEducationalDetails){
        return new ResponseEntity<>(employeeEducationalDetailsService.addEducationalDetails
                (employeeEducationalDetails), HttpStatus.OK);
    }


    @GetMapping("/fetchEducationalDetails/{empId}")
    ResponseEntity<?> fetchEducationalDetails(@PathVariable String empId){
        return new ResponseEntity<>(employeeEducationalDetailsService.fetchEducationalDetails(empId), HttpStatus.OK);
    }
}
