package com.accolite.NewEmployeeOnboardingPortal.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "employee_educational_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeEducationalDetails {

    @Id
    @NonNull
    @Indexed(unique = true)
    private String empId;

    @NonNull
    private String educationalDegree;

    @NonNull
    private String fieldOfSpecialization;

    @NonNull
    private String courseType;

    @NonNull
    private Double cgpa;

    @NonNull
    private Date startDate;

    @NonNull
    private Date endDate;

    @NonNull
    private String institutionName;

    @NonNull
    private Boolean status = false;

}
