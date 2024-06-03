package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeBankingDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeEducationalDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeePersonalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeStatusService {

    @Autowired
    private EmployeePersonalDetailsRepository personalDetailsRepository;

    @Autowired
    private EmployeeEducationalDetailsRepository educationalDetailsRepository;

    @Autowired
    private EmployeeBankingDetailsRepository bankingDetailsRepository;

    @Autowired
    private EmployeeLoginDetailsRepository loginDetailsRepository;


    public boolean isApplicationComplete(String empId) {
        EmployeePersonalDetails personalDetails = personalDetailsRepository.findById(empId).orElse(null);
        EmployeeEducationalDetails educationalDetails = educationalDetailsRepository.findById(empId).orElse(null);
        EmployeeBankingDetails bankingDetails = bankingDetailsRepository.findById(empId).orElse(null);
        EmployeeLoginDetails employeeLoginDetails = loginDetailsRepository.findById(empId).orElse(null);
//      System.out.println(employeeLoginDetails.getDocumentIds().size());
        return personalDetails != null && educationalDetails != null && bankingDetails != null &&
                personalDetails.getStatus() && educationalDetails.getStatus() && bankingDetails.getStatus();
    }
//    && (employeeLoginDetails.getDocumentIds().size()==12
}