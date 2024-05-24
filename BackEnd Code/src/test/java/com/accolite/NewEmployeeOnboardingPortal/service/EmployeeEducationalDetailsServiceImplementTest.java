//package com.accolite.NewEmployeeOnboardingPortal.service;
//
//import static org.junit.jupiter.api.Assertions.*;
//
////class EmployeeEducationalDetailsServiceImplementTest {
////
////}
//
//
////package com.accolite.NewEmployeeOnboardingPortal.service;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeEducationalDetails;
//import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeEducationalDetailsRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import java.time.LocalDate;
//import java.util.Calendar;
//import java.util.Date;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//
//class EmployeeEducationalDetailsServiceImplementTest {
//
//    @Mock
//    private EmployeeEducationalDetailsRepository employeeEducationalDetailsRepository;
//
//    @InjectMocks
//    private EmployeeEducationalDetailsServiceImplement employeeEducationalDetailsServiceImplement;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    @Test
//    void testAddEducationalDetails() {
////        EmployeeEducationalDetails employeeEducationalDetails = new EmployeeEducationalDetails("123", "Bachelor's", "Computer Science", "University A", 2010, 2014, 3.5);
//
//        Calendar startCal = Calendar.getInstance();
//        startCal.set(2019, Calendar.JUNE, 24);
//        Date startDate = startCal.getTime();
//
//        Calendar endCal = Calendar.getInstance();
//        endCal.set(2024, Calendar.JULY, 17);
//        Date endDate = endCal.getTime();
//
//        EmployeeEducationalDetails employeeEducationalDetails = EmployeeEducationalDetails.builder()
//                .empId("123")
//                        .educationalDegree("Bachelor")
//                                .fieldOfSpecialization("Computer Science")
//                                        .courseType("Full-time")
//                                                .cgpa(8.67)
//                                                        .institutionName("GEHU")
//                                                                .startDate(startDate)
//                                                                        .endDate(endDate)
//                                                                                .build();
//
//        when(employeeEducationalDetailsRepository.save(any(EmployeeEducationalDetails.class))).thenReturn(employeeEducationalDetails);
//
//        ResponseEntity<?> responseEntity = employeeEducationalDetailsServiceImplement.addEducationalDetails(employeeEducationalDetails);
//
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(employeeEducationalDetails, responseEntity.getBody());
//    }
//
//    @Test
//    void testFetchEducationalDetails() {
////        EmployeeEducationalDetails employeeEducationalDetails = new EmployeeEducationalDetails("123", "Bachelor's", "Computer Science", "University A", 2010, 2014, 3.5);
//
//        Calendar startCal = Calendar.getInstance();
//        startCal.set(2019, Calendar.JUNE, 24);
//        Date startDate = startCal.getTime();
//
//        Calendar endCal = Calendar.getInstance();
//        endCal.set(2024, Calendar.JULY, 17);
//        Date endDate = endCal.getTime();
//
//        EmployeeEducationalDetails employeeEducationalDetails = EmployeeEducationalDetails.builder()
//                .empId("123")
//                .educationalDegree("Bachelor")
//                .fieldOfSpecialization("Computer Science")
//                .courseType("Full-time")
//                .cgpa(8.67)
//                .institutionName("GEHU")
//                .startDate(startDate)
//                .endDate(endDate)
//                .build();
//
//
//        when(employeeEducationalDetailsRepository.findById("123")).thenReturn(Optional.of(employeeEducationalDetails));
//
//        ResponseEntity<?> responseEntity = employeeEducationalDetailsServiceImplement.fetchEducationalDetails("123");
//
//        Optional<EmployeeEducationalDetails> optionalEducationalDetails = (Optional<EmployeeEducationalDetails>) responseEntity.getBody();
//
//
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
////        assertEquals(employeeEducationalDetails, responseEntity.getBody());
//        assertEquals(employeeEducationalDetails.getEmpId(), optionalEducationalDetails.get().getEmpId());
//        assertEquals(employeeEducationalDetails.getEducationalDegree(), optionalEducationalDetails.get().getEducationalDegree());
//        assertEquals(employeeEducationalDetails.getFieldOfSpecialization(), optionalEducationalDetails.get().getFieldOfSpecialization());
//        assertEquals(employeeEducationalDetails.getCourseType(), optionalEducationalDetails.get().getCourseType());
//        assertEquals(employeeEducationalDetails.getCgpa(), optionalEducationalDetails.get().getCgpa());
//        assertEquals(employeeEducationalDetails.getInstitutionName(), optionalEducationalDetails.get().getInstitutionName());
//        assertEquals(employeeEducationalDetails.getStartDate(), optionalEducationalDetails.get().getStartDate());
//        assertEquals(employeeEducationalDetails.getEndDate(), optionalEducationalDetails.get().getEndDate());
//    }
//
//    @Test
//    void testFetchEducationalDetailsNotFound() {
//        when(employeeEducationalDetailsRepository.findById("123")).thenReturn(Optional.empty());
//
//        ResponseEntity<?> responseEntity = employeeEducationalDetailsServiceImplement.fetchEducationalDetails("123");
//
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(Optional.empty(), responseEntity.getBody());
//    }
//}
