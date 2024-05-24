//package com.accolite.NewEmployeeOnboardingPortal.service;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeFeedbackDetails;
//import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeFeedbackDetailsRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.doNothing;
//import static org.mockito.Mockito.when;
//
//class EmployeeFeedbackDetailsServiceImplementTest {
//
//
//    @Mock
//    private EmployeeFeedbackDetailsRepository employeeFeedbackDetailsRepository;
//
//    @InjectMocks
//    private EmployeeFeedbackDetailsServiceImplement employeeFeedbackDetailsServiceImplement;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    @Test
//    void testAddFeedback() {
//        // Create mock feedback
//        EmployeeFeedbackDetails feedback = EmployeeFeedbackDetails.builder()
//                .empId("123")
//                        .rating(4)
//                                .comments("Great Work")
//                                        .build();
//
//        // Mock repository save method
////        doNothing().when(employeeFeedbackDetailsRepository).save(feedback);
//
//        // Call service method
//        ResponseEntity<?> responseEntity = employeeFeedbackDetailsServiceImplement.addFeedback(feedback);
//
//        // Verify repository method invocation
////        verify(employeeFeedbackDetailsRepository, times(1)).save(feedback);
//
//        // Assert response status and message
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals("Thanks for your feedback!!", responseEntity.getBody());
//    }
//
//    @Test
//    void testFetchFeedback() {
//        // Create mock feedback
//        EmployeeFeedbackDetails feedback = EmployeeFeedbackDetails.builder()
//                .empId("123")
//                        .rating(4)
//                                .comments("Great Work")
//                                        .build();
//
//        // Mock repository findById method
//        when(employeeFeedbackDetailsRepository.findById("123")).thenReturn(Optional.of(feedback));
//
//        // Call service method
//        ResponseEntity<?> responseEntity = employeeFeedbackDetailsServiceImplement.fetchFeedback("123");
//
//        // Assert response status and body
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(Optional.of(feedback), responseEntity.getBody());
//    }
//
//    @Test
//    void testFetchFeedbackNotFound() {
//        // Mock repository findById method for a non-existent employee ID
//        when(employeeFeedbackDetailsRepository.findById("123")).thenReturn(Optional.empty());
//
//        // Call service method
//        ResponseEntity<?> responseEntity = employeeFeedbackDetailsServiceImplement.fetchFeedback("123");
//
//        // Assert response status and body
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(Optional.empty(), responseEntity.getBody());
//    }
//
//
//}