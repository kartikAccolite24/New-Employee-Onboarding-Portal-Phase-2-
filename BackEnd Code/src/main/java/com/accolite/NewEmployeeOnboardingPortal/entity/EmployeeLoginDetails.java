package com.accolite.NewEmployeeOnboardingPortal.entity;

import jakarta.annotation.Generated;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Document(collection = "employee_login_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeLoginDetails {
//        @Id
//        private ObjectId loginId;
        @Id
        @Indexed(unique = true)
        @NonNull
        private String empId;

        @Indexed(unique = true)
        @NonNull
        private String username;
        @NonNull
        private String password;
        @NonNull
        private String role;

        // new code
        @NonNull
        private List<String> documentIds;
        // new code

        // newest code
        // Enum definition
        public enum ApprovalStatus {
                APPROVED,
                NOT_APPROVED,
                REJECTED
        }

        // Enum field
        @NonNull
        private ApprovalStatus isApproved = ApprovalStatus.NOT_APPROVED;
        // newest code

}

