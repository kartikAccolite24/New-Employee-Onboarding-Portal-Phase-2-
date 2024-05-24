package com.accolite.NewEmployeeOnboardingPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users") // Optional: Specify collection name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    private Integer loginId;
    private String username;
    private String password;
    // Constructors (empty and parameterized)
    public UserModel(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
