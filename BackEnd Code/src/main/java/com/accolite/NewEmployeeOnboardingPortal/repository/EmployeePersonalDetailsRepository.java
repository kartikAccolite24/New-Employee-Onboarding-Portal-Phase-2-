package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;


@Repository
public interface EmployeePersonalDetailsRepository extends MongoRepository<EmployeePersonalDetails, String> {

//    public ResponseEntity<?> findById(String empId);
}
