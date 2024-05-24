//package com.accolite.NewEmployeeOnboardingPortal.service;
//
////class EmployeeBankingDetailsServiceImplementTest {
////
////}
//
//
//
////package com.accolite.NewEmployeeOnboardingPortal.service;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
//import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeBankingDetailsRepository;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.ArgumentMatchers.eq;
//
//@SpringBootTest
//public class EmployeeBankingDetailsServiceTest {
//
//    @Mock
//    private EmployeeBankingDetailsRepository employeeBankingDetailsRepository;
//
//    @InjectMocks
//    private EmployeeBankingDetailsServiceImplement employeeBankingDetailsService;
//
//    @Test
//    public void testAddBankingDetails() {
//        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
//
//        Mockito.when(employeeBankingDetailsRepository.save(any(EmployeeBankingDetails.class)))
//                .thenReturn(employeeBankingDetails);
//
//        ResponseEntity<?> response = employeeBankingDetailsService.addBankingDetails(employeeBankingDetails);
//
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(employeeBankingDetails, response.getBody());
//    }
//
////    @Test
////    public void testFetchBankingDetails() {
////        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
////
////        Mockito.when(employeeBankingDetailsRepository.findById(eq("123")))
////                .thenReturn(Optional.of(employeeBankingDetails));
////
////        ResponseEntity<?> response = employeeBankingDetailsService.fetchBankingDetails("123");
//////        EmployeeBankingDetails fetchedBankingDetails = response.getBody();
////        assertEquals(HttpStatus.OK, response.getStatusCode());
////        assertEquals(employeeBankingDetails, response.getBody());
////    }
//
//    @Test
//    public void testFetchBankingDetails() {
//        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
//
//        Mockito.when(employeeBankingDetailsRepository.findById(eq("123")))
//                .thenReturn(Optional.of(employeeBankingDetails));
//
//        ResponseEntity<?> response = employeeBankingDetailsService.fetchBankingDetails("123");
//
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//
//        System.out.println(response);
//        assertEquals(employeeBankingDetails, response.getBody());
//    }
//
//    @Test
//    public void testFetchBankingDetailsNotFound() {
//        Mockito.when(employeeBankingDetailsRepository.findById(eq("123")))
//                .thenReturn(Optional.empty());
//
//        ResponseEntity<?> response = employeeBankingDetailsService.fetchBankingDetails("123");
//
//        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
//    }
//}
