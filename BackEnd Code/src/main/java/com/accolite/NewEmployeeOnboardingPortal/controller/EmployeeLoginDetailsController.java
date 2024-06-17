package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
//import com.accolite.NewEmployeeOnboardingPortal.repository.UserRepo;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeLoginService;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeStatusService;
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
import java.util.stream.Collectors;

@RestController
public class EmployeeLoginDetailsController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeLoginDetailsController.class);

//    @Autowired
//    private EmployeeLoginService employeeLoginService
    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    @Autowired
    private EmployeeLoginService employeeLoginService;

    @Autowired
    private EmployeeStatusService employeeStatusService;

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

    @GetMapping("/getAllApprovedEmployees")
    public ResponseEntity<List<EmployeeLoginDetails>> getAllApprovedEmployees() {
        List<EmployeeLoginDetails> approvedEmployees = employeeLoginDetailsRepository.findByIsApproved(EmployeeLoginDetails.ApprovalStatus.APPROVED);
        if (approvedEmployees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(approvedEmployees, HttpStatus.OK);
    }

//    @GetMapping("/getAllPendingEmployees")
//    public ResponseEntity<List<EmployeeLoginDetails>> getAllPendingEmployees() {
//        List<EmployeeLoginDetails> rejectedEmployees = employeeLoginDetailsRepository.findByIsApproved(EmployeeLoginDetails.ApprovalStatus.NOT_APPROVED);
//        if (rejectedEmployees.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(rejectedEmployees, HttpStatus.OK);
//    }

    @GetMapping("/getAllPendingEmployees")
    public ResponseEntity<List<EmployeeLoginDetails>> getAllPendingEmployees() {
        List<EmployeeLoginDetails> rejectedEmployees = employeeLoginDetailsRepository.findByIsApproved(EmployeeLoginDetails.ApprovalStatus.NOT_APPROVED);

        List<EmployeeLoginDetails> pendingEmployees = rejectedEmployees.stream()
                .filter(employee -> !employee.getApplicationStatus())
                .collect(Collectors.toList());

        if (pendingEmployees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(pendingEmployees, HttpStatus.OK);
    }

    @GetMapping("/getAllRejectedEmployees")
    public ResponseEntity<List<EmployeeLoginDetails>> getAllRejectedEmployees() {
        List<EmployeeLoginDetails> rejectedEmployees = employeeLoginDetailsRepository.findByIsApproved(EmployeeLoginDetails.ApprovalStatus.REJECTED);
        if (rejectedEmployees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rejectedEmployees, HttpStatus.OK);
    }
//    @GetMapping("/getAllUnderReview")
//    public ResponseEntity<List<EmployeeLoginDetails>> getAllUnderReview() {
//        logger.info("Fetching all employees under review");
//        List<EmployeeLoginDetails> underReviewEmployees = employeeLoginDetailsRepository.findByApplicationStatusTrue();
//        if (underReviewEmployees.isEmpty()) {
//            logger.info("No employees under review found");
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        logger.info("Found {} employees under review", underReviewEmployees.size());
//        return new ResponseEntity<>(underReviewEmployees, HttpStatus.OK);
//    }



    @GetMapping("/getAllUnderReview")
    public ResponseEntity<List<EmployeeLoginDetails>> getAllUnderReview() {
        logger.info("Fetching all employees under review and not approved");

        // Assuming "NOT_APPROVED" is the status you're looking for
        String notApprovedStatus = "NOT_APPROVED";
        List<EmployeeLoginDetails> underReviewEmployees = employeeLoginDetailsRepository.findByApplicationStatusTrueAndIsApproved(notApprovedStatus);

        if (underReviewEmployees.isEmpty()) {
            logger.info("No employees under review found with status NOT_APPROVED");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        logger.info("Found {} employees under review with status NOT_APPROVED", underReviewEmployees.size());
        return new ResponseEntity<>(underReviewEmployees, HttpStatus.OK);
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

//    @GetMapping("/getEmployeesWithAllStatusesTrue")
//    public ResponseEntity<List<String>> getEmployeesWithAllStatusesTrue() {
//        List<String> empIds = employeeStatusService.getEmployeesWithAllStatusesTrue();
//        if (empIds.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(empIds, HttpStatus.OK);
//    }



}

