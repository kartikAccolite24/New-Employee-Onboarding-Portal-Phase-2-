package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmployeeLoginDetailsRepository extends MongoRepository<EmployeeLoginDetails, String> {
    public EmployeeLoginDetails findByUsername(String username);
    public EmployeeLoginDetails findByPassword(String password);
    public List<EmployeeLoginDetails> findByIsApproved(EmployeeLoginDetails.ApprovalStatus status);
    public List<EmployeeLoginDetails> findByRole(String role);
    public List<EmployeeLoginDetails> findByApplicationStatusTrue(); // New method to find employees with applicationStatus = true
    public List<EmployeeLoginDetails> findByApplicationStatusTrueAndIsApproved(String isApproved);

}