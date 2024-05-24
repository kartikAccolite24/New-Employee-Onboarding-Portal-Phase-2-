package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmployeeLoginDetailsRepository extends MongoRepository<EmployeeLoginDetails, String> {
    public EmployeeLoginDetails findByUsername(String username);
    public EmployeeLoginDetails findByPassword(String password);

    public List<EmployeeLoginDetails> findByRole(String role);
}
