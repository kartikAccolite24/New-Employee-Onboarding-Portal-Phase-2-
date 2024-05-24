package com.accolite.NewEmployeeOnboardingPortal.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employee_work_experience_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeWorkExperienceDetails {

    // common key in every collection
    @Id
    @NonNull
    @Indexed(unique = true)
    private String empId;

    @NonNull
    private String previousCompany;

    @NonNull
    private String jobPosition;

    @NonNull
    private Integer yearsOfExperience;

    @NonNull
    private String contactDetails;

    @NonNull
    private Boolean status = false;

}
