package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeWorkExperienceDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeWorkExperienceDetailsRepository extends MongoRepository<EmployeeWorkExperienceDetails,String> {
}
