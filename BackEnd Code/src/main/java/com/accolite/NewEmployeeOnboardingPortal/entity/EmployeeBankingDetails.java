package com.accolite.NewEmployeeOnboardingPortal.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employee_banking_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeBankingDetails {

    // common key in every collection
    @Id
    @NonNull
    @Indexed(unique = true)
    private String empId;

    @NonNull
    private String bankName;

    @NonNull
    @Indexed(unique = true)
    private String accountNo;

    @NonNull
    private String ifscCode;

    @NonNull
    private String branchName;

    @NonNull
    private String nameOnAadharCard;

    @NonNull
    private Boolean status = false;

}
