//package com.accolite.NewEmployeeOnboardingPortal.repository;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.TestPropertySource;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@DataMongoTest
////@SpringBootTest
////@TestPropertySource(properties = "mongodb+srv://pranshukukreti:root@cluster0.wfzxpzw.mongodb.net/onboardingportal?retryWrites=true&w=majority")
////@TestPropertySource(properties = "spring.mongodb.embedded.version=3.5.4")
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//public class EmployeeBankingDetailsRepositoryTest {
//
//    @Autowired
//    private EmployeeBankingDetailsRepository employeeBankingDetailsRepository;
//
//
//    @Test
//    public void testSaveAndFindById() {
//        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
//
//        employeeBankingDetailsRepository.save(employeeBankingDetails);
//
//        EmployeeBankingDetails found = employeeBankingDetailsRepository.findById("123").orElse(null);
//
//        assertThat(found).isNotNull();
//        assertThat(found.getEmpId()).isEqualTo("123");
//        assertThat(found.getBankName()).isEqualTo("BankName");
//        assertThat(found.getAccountNo()).isEqualTo("123456789");
//        assertThat(found.getIfscCode()).isEqualTo("IFSC123");
//        assertThat(found.getBranchName()).isEqualTo("BranchName");
//        assertThat(found.getNameOnAadharCard()).isEqualTo("AadharName");
//    }
//}
