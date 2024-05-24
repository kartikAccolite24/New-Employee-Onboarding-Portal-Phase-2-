package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface EmployeeBankingDetailsRepository extends MongoRepository<EmployeeBankingDetails, String> {
}
