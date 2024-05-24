package com.accolite.NewEmployeeOnboardingPortal.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "employee_feedback_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class    EmployeeFeedbackDetails {

    @Id
    @NonNull
    @Indexed(unique = true)
    private String empId;

    @NonNull
    private Integer rating;

    @NonNull
    private String comments;

    @NonNull
    private Boolean status = false;
}
