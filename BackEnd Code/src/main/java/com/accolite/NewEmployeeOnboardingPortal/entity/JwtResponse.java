package com.accolite.NewEmployeeOnboardingPortal.entity;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class JwtResponse {

    private String jwtToken;

    private String empId;

    private String username;

    private String password;

    private String role;

}




//package com.accolite.NewEmployeeOnboardingPortal.entity;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class JwtResponse {
//
//    private String jwtToken;
//
//    private String empId;
//
//    private String username;
//
//    private String password;
//
//    private String role;
//}
