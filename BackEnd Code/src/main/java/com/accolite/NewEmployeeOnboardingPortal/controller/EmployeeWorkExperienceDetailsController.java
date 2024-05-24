package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeWorkExperienceDetails;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeWorkExperienceDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeWorkExperienceDetailsController {


    @Autowired
    private EmployeeWorkExperienceDetailsService employeeWorkExperienceService;

    @PostMapping("/addWorkExperience")
    ResponseEntity<?> addWorkExperience(@RequestBody EmployeeWorkExperienceDetails employeeWorkExperienceDetails){
        return employeeWorkExperienceService.addWorkExperience(employeeWorkExperienceDetails);
    }

    @GetMapping("/fetchWorkExperience/{empId}")
    ResponseEntity<?> fetchWorkExperience(@PathVariable String empId){
        return employeeWorkExperienceService.fetchWorkExperience(empId);
    }
}
