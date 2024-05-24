package com.accolite.NewEmployeeOnboardingPortal.entity;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.xml.transform.sax.SAXResult;
import java.util.Date;

@Document(collection = "employee_personal_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeePersonalDetails {

    // common key in every collection
    @Id
    @NonNull
    @Indexed(unique = true)
    private String empId;

    @NonNull
    private String firstName;

    @NonNull
    private String lastName;

    @NonNull
    @Indexed(unique = true)
    private String emailId;

    @NonNull
    @Indexed(unique = true)
    private String phoneNo;

    @NonNull
    private String gender;

    @NonNull
    private Date dob;

    @NonNull
    private String placeOfBirth;

    @NonNull
    private String residentialAddress;

    @NonNull
    private String bloodGroup;

    @NonNull
    private String maritalStatus;

    @NonNull
    private Boolean status = false;

}
