package com.accolite.NewEmployeeOnboardingPortal.entity;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class JwtRequest {

    private String username;

    private String password;

    private String role;

}
