package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeLoginService;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.ast.OpAnd;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class EmployeeApplicationStatusController {

    @Autowired
    private EmployeeStatusService statusService;

    @Autowired
    private EmployeeLoginService employeeLoginService;

    @GetMapping("/checkApplicationStatus")
    public ResponseEntity<?> checkApplicationStatus(@RequestParam("employeeId") String employeeId) {
        boolean isComplete = statusService.isApplicationComplete(employeeId);
        Optional<EmployeeLoginDetails> employeeLoginDetails = employeeLoginService.getEmployee(employeeId);
        if(employeeLoginDetails.isPresent()){
            employeeLoginDetails.get().setApplicationStatus(isComplete);
            employeeLoginService.addEmployee(employeeLoginDetails.get());
            System.out.println(employeeLoginDetails.get());

        }
        return ResponseEntity.ok(isComplete ? "Application Completed" : "Application Pending");
    }
}