package com.accolite.NewEmployeeOnboardingPortal.repository;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.entity.UserModel;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<EmployeeLoginDetails, ObjectId> {

    public EmployeeLoginDetails findByUsername(String username);
}
