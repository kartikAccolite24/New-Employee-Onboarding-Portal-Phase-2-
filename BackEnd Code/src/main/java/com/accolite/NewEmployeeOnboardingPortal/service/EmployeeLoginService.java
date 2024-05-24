package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface EmployeeLoginService {

    public String validateEmployeeLoginDetails(EmployeeLoginDetails employeeLoginDetails);

    public String addEmployeeLoginDetails(EmployeeLoginDetails employeeLoginDetails);

    public EmployeeLoginDetails getByUsername(String username);

    // new code

    public Optional<EmployeeLoginDetails> getEmployee(String id);
    EmployeeLoginDetails updateEmployee(EmployeeLoginDetails employeeLoginDetails);

    EmployeeLoginDetails addEmployee(EmployeeLoginDetails employee);

//    EmployeeLoginDetails getEmployee(ObjectId empId);

    List<EmployeeLoginDetails> getAllEmployees();

    // new code
}
