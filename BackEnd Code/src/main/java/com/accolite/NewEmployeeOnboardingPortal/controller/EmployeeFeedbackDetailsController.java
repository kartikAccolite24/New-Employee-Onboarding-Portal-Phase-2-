package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeFeedbackDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeePersonalDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeFeedbackDetailsService;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeePersonalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeFeedbackDetailsController {

    @Autowired
    private EmployeeFeedbackDetailsService employeeFeedbackDetailsService;

    @Autowired
    private EmployeePersonalDetailsService employeePersonalDetailsService;

    @PostMapping("/addFeedback")
    public ResponseEntity<?> addFeedback(@RequestBody EmployeeFeedbackDetails feedback){
        return new ResponseEntity<>(employeeFeedbackDetailsService.addFeedback(feedback), HttpStatus.OK);
    }


    @GetMapping("/fetchFeedback/{empId}")
    public ResponseEntity<?> getFeedback(@PathVariable String empId){
        return new ResponseEntity<>(employeeFeedbackDetailsService.fetchFeedback(empId), HttpStatus.OK);
    }

    @GetMapping("/getAllFeedback")
    ResponseEntity<?> fetchAllFeedback(){
        return employeeFeedbackDetailsService.getAllFeedback();

    }
}