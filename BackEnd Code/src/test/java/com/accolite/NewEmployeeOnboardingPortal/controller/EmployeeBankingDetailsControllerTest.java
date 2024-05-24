//package com.accolite.NewEmployeeOnboardingPortal.controller;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
//import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeBankingDetailsService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.web.servlet.MockMvc;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
//
////@WebMvcTest(EmployeeBankingDetailsController.class)
////class EmployeeBankingDetailsControllerTest {
////
////
////}
//
//
////package com.accolite.NewEmployeeOnboardingPortal.controller;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeBankingDetails;
//import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeBankingDetailsService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.ArgumentMatchers.eq;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@WebMvcTest(EmployeeBankingDetailsController.class)
//public class EmployeeBankingDetailsControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private EmployeeBankingDetailsService employeeBankingDetailsService;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Test
//    public void testAddBankingDetails() throws Exception {
//        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
//
//        Mockito.when(employeeBankingDetailsService.addBankingDetails(any(EmployeeBankingDetails.class)))
//                .thenReturn(new ResponseEntity<>(employeeBankingDetails, HttpStatus.OK));
//
//        mockMvc.perform(post("/addBankingDetails")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(employeeBankingDetails)))
//                .andExpect(status().isOk())
//                .andExpect(content().json(objectMapper.writeValueAsString(employeeBankingDetails)));
//    }
//
//    @Test
//    public void testFetchBankingDetails() throws Exception {
//        EmployeeBankingDetails employeeBankingDetails = new EmployeeBankingDetails("123", "BankName", "123456789", "IFSC123", "BranchName", "AadharName");
//
//        Mockito.when(employeeBankingDetailsService.fetchBankingDetails(eq("123")))
//                .thenReturn(new ResponseEntity<>(employeeBankingDetails, HttpStatus.OK));
//
//        mockMvc.perform(get("/fetchBankingDetails/123")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(content().json(objectMapper.writeValueAsString(employeeBankingDetails)));
//    }
//}
