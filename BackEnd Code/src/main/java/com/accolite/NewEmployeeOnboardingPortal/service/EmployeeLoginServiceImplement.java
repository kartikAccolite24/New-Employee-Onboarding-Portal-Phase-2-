package com.accolite.NewEmployeeOnboardingPortal.service;

//import com.accolite.NewEmployeeOnboardingPortal.entity.Employee;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
//import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeLoginServiceImplement implements EmployeeLoginService {

//    @Autowired
//    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    @Override
    public String validateEmployeeLoginDetails(EmployeeLoginDetails employeeLoginDetails) {

//        System.out.println(employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()));
        if (employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()) == null || employeeLoginDetailsRepository.findByPassword(employeeLoginDetails.getPassword()) == null) {
            return "Wrong Login Credentials";
        } else if (
                (employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()).getUsername().equals(employeeLoginDetails.getUsername()))
                        &&
                        (employeeLoginDetailsRepository.findByPassword(employeeLoginDetails.getPassword()).getPassword().equals(employeeLoginDetails.getPassword()))
                        &&
                        (employeeLoginDetailsRepository.findByPassword(employeeLoginDetails.getPassword()).getRole().equals(employeeLoginDetails.getRole()))) {
            return "Employee Logged in Successfully";
        }
        return "Wrong Login Credentials";

//        return "Employee Logged in Successfully";

//        if(employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()).getUsername().equals(employeeLoginDetails.getUsername())
//                &&
//                employeeLoginDetailsRepository.findByPassword(employeeLoginDetails.getPassword()).getPassword().equals(employeeLoginDetails.getPassword())){
//            return "Employee Logged in Successfully";
//        }
//        else return "Wrong Login Credentials";

    }

    @Override
    public String addEmployeeLoginDetails(EmployeeLoginDetails employeeLoginDetails) {
        if(employeeLoginDetails.getRole() == null || employeeLoginDetails.getUsername() == null || employeeLoginDetails.getPassword() == null ){
            return "Error! Enter all fields.";
        }
        else if(employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()) != null &&  employeeLoginDetails.getUsername().equals(employeeLoginDetailsRepository.findByUsername(employeeLoginDetails.getUsername()).getUsername())){
            return "Employee Already Exists";
        }
        else{
            String uniqueId = UUID.randomUUID().toString();
            uniqueId = uniqueId.replace("-", "");
            employeeLoginDetails.setEmpId(uniqueId);
            employeeLoginDetailsRepository.save(employeeLoginDetails);


//            Employee tempEmployee = Employee.builder()
//                    .id(uniqueId)
//                    .documentIds(new ArrayList<String>())
//                    .build();
//            employeeRepository.save(tempEmployee);



            return "Employee Added" ;
        }
    }

    @Override
    public EmployeeLoginDetails getByUsername(String username) {
        return employeeLoginDetailsRepository.findByUsername(username);
    }

    // new code

    @Override
    public Optional<EmployeeLoginDetails> getEmployee(String id) {
        return employeeLoginDetailsRepository.findById(id);
    }

    @Override
    public EmployeeLoginDetails addEmployee(EmployeeLoginDetails employee) {
        return employeeLoginDetailsRepository.save(employee);
    }
//    @Override
//    public EmployeeLoginDetails getEmployee(ObjectId empId) {
//        return employeeLoginDetailsRepository.findById(empId).orElse(null);
//    }
    @Override
    public List<EmployeeLoginDetails> getAllEmployees() {
        return employeeLoginDetailsRepository.findAll();
    }
    @Override
    public EmployeeLoginDetails updateEmployee(EmployeeLoginDetails employee) {
        return employeeLoginDetailsRepository.save(employee);
    }

    @Override
    public ResponseEntity<?> setPassword(List<String> usernameAndPassword) {
        Optional<EmployeeLoginDetails> fetchedEmployee = Optional.ofNullable(employeeLoginDetailsRepository.findByUsername(usernameAndPassword.get(0)));
        if(fetchedEmployee.isPresent()){
            fetchedEmployee.get().setPassword(usernameAndPassword.get(1));
            employeeLoginDetailsRepository.save(fetchedEmployee.get());
            return new ResponseEntity<>("Password Set Successfully", HttpStatus.OK);
        }
        else return new ResponseEntity<>("Failed to Set Password", HttpStatus.BAD_REQUEST);
    }


    // new code
}
