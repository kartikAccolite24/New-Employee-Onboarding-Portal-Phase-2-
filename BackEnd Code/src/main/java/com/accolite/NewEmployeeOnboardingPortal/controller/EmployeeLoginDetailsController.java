package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
//import com.accolite.NewEmployeeOnboardingPortal.repository.UserRepo;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class EmployeeLoginDetailsController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeLoginDetailsController.class);

//    @Autowired
//    private EmployeeLoginService employeeLoginService
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
//    @GetMapping("/documents/{id}")
//    public ResponseEntity<List<String>> getEmployeeDocuments(@PathVariable String id) {
//        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
//        if (employee.isPresent()) {
//            List<String> documentIds = (List<String>) employee.get().getDocumentIds();
//            if (documentIds == null || documentIds.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(documentIds, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }

    @GetMapping("/documents/{id}")
    public ResponseEntity<Map<String, String>> getEmployeeDocuments(@PathVariable String id) {
        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
        if (employee.isPresent()) {
            Map<String, String> documentMap = employee.get().getDocumentMap();
            if (documentMap == null || documentMap.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(documentMap, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // new code

    // newest code
    // New endpoint for setting isApproved field
//    @PutMapping("/setApprovalStatus/{id}")
//    public ResponseEntity<?> setApprovalStatus(@PathVariable String id, @RequestParam EmployeeLoginDetails.ApprovalStatus status) {
//        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);
////        if (employee == null) {
////            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
////        }
//        employee.get().setIsApproved(status);
////        employeeLoginService.addEmployee(employee.get());
////        return new ResponseEntity<>("Approval status updated successfully", HttpStatus.OK);
//        return new ResponseEntity<>(employeeLoginService.addEmployee(employee.get()), HttpStatus.OK);
//    }

    @PutMapping("/setApprovalStatus/{id}")
    public ResponseEntity<?> setApprovalStatus(@PathVariable String id, @RequestParam EmployeeLoginDetails.ApprovalStatus status, @RequestParam String adminRejectionComment) {

        Optional<EmployeeLoginDetails> employee = employeeLoginService.getEmployee(id);

        if (adminRejectionComment == null) {    // application accepted
            employee.get().setAdminRejectionComment(null);
        } else {
            employee.get().setAdminRejectionComment(adminRejectionComment);
        }
        employee.get().setIsApproved(status);

//        if (employee == null) {
//            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
//        }
//        employeeLoginService.addEmployee(employee.get());
//        return new ResponseEntity<>("Approval status updated successfully", HttpStatus.OK);

        return new ResponseEntity<>(employeeLoginService.addEmployee(employee.get()), HttpStatus.OK);

    }


    @GetMapping("/getApprovalStatus/{id}")
    public ResponseEntity<?> setApprovalStatus(@PathVariable String id) {
        Optional<EmployeeLoginDetails> employeeLoginDetails = employeeLoginDetailsRepository.findById(id);
        if (employeeLoginDetails.isPresent()) {
            List<String> approvalInfo = new ArrayList<>();
            approvalInfo.add(employeeLoginDetails.get().getIsApproved().toString());
            approvalInfo.add(employeeLoginDetails.get().getAdminRejectionComment());
            return new ResponseEntity<>(approvalInfo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Employee Not Present!", HttpStatus.OK);
        }
    }
}

