package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
//import com.accolite.NewEmployeeOnboardingPortal.repository.UserRepo;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeLoginDetailsController {
    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    @Autowired
    private EmployeeLoginService employeeLoginService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody EmployeeLoginDetails employeeLoginDetails) {
        return employeeLoginService.addEmployeeLoginDetails(employeeLoginDetails);
    }

    @PostMapping("/login")
    public String validateUser(@RequestBody EmployeeLoginDetails employeeLoginDetails) {
        return employeeLoginService.validateEmployeeLoginDetails(employeeLoginDetails);
    }

    @GetMapping("/getUser/{username}")
    public EmployeeLoginDetails getUserByUsername(@PathVariable String username){
        return employeeLoginService.getByUsername(username);
    }

    @GetMapping("/allEmployee")
    public List<EmployeeLoginDetails> getAllEmployee(){
        return employeeLoginDetailsRepository.findByRole("employee");
    }


    // new code
    @GetMapping("/documents/{id}")
    public ResponseEntity<List<String>> getEmployeeDocuments(@PathVariable String id) {
        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
        if (employee.isPresent()) {
            List<String> documentIds = employee.get().getDocumentIds();
            if (documentIds == null || documentIds.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(documentIds, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // new code

    // newest code
    // New endpoint for setting isApproved field
//    @PutMapping("/setApprovalStatus/{id}")
//    public ResponseEntity<?> setApprovalStatus(@Path    Variable String id, @RequestParam EmployeeLoginDetails.ApprovalStatus status) {
//        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
////        if (employee == null) {
////            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
////        }
//        employee.get().setIsApproved(status);
////        employeeLoginService.addEmployee(employee.get());
////        return new ResponseEntity<>("Approval status updated successfully", HttpStatus.OK);
//        return new ResponseEntity<>(employeeLoginService.addEmployee(employee.get()), HttpStatus.OK);
//    }
    // newest code

//    @PutMapping("/setApprovalStatus/{id}")
//    public ResponseEntity<?> setApprovalStatus(@PathVariable String id, @RequestParam EmployeeLoginDetails.ApprovalStatus status) {
//        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
//        if (!employee.isPresent()) {
//            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
//        }
//        employee.get().setIsApproved(status);
//        // Optionally, you can save the updated employee back to the service
//        // employeeLoginService.addEmployee(employee.get());
//        return new ResponseEntity<>("Approval status updated successfully", HttpStatus.OK);
//    }


    @PutMapping("/setApprovalStatus/{id}")
    public ResponseEntity<?> setApprovalStatus(@PathVariable String id, @RequestParam EmployeeLoginDetails.ApprovalStatus status) {
        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
//        if (employee == null) {
//            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
//        }
        employee.get().setIsApproved(status);
//        employeeLoginService.addEmployee(employee.get());
//        return new ResponseEntity<>("Approval status updated successfully", HttpStatus.OK);

        return new ResponseEntity<>(employeeLoginService.addEmployee(employee.get()), HttpStatus.OK);

    }
}

