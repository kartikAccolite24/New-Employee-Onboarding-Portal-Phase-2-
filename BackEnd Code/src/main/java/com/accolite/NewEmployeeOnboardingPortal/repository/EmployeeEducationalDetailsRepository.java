package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeEducationalDetailsRepository extends MongoRepository<EmployeeEducationalDetails, String> {
}
