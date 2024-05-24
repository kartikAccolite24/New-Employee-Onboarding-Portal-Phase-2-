package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetails;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeePersonalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeePersonalDetailsController {


    @Autowired
    private EmployeePersonalDetailsService employeePersonalDetailsService;

    @PostMapping("/addPersonalDetails")
    ResponseEntity<?> addPersonalDetails(@RequestBody EmployeePersonalDetails employeePersonalDetails){
        return new ResponseEntity<>(employeePersonalDetailsService.addPersonalDetails(employeePersonalDetails), HttpStatus.OK);
    }

    @GetMapping("/fetchPersonalDetails/{empId}")
    ResponseEntity<?> fetchPersonalDetails(@PathVariable String empId){
        return new ResponseEntity<>(employeePersonalDetailsService.fetchPersonalDetails(empId), HttpStatus.OK);
    }

}
