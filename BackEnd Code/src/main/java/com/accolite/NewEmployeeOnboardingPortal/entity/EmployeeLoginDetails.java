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
import java.util.Map;

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
        private Map<String, String> documentMap;
//        @NonNull
//        private List<String> documentIds;
//         new code/
        @NonNull
        private boolean applicationStatus;

        @NonNull
        private boolean fresher;

        public boolean getApplicationStatus() {
                        return applicationStatus;
        }


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
        private String adminRejectionComment;

}

