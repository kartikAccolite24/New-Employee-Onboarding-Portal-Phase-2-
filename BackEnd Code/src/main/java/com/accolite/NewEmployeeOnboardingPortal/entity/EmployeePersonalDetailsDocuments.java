package com.accolite.NewEmployeeOnboardingPortal.entity;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "employee_personal_details_documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeePersonalDetailsDocuments {

    @Id
    private String docId;

    @NonNull
    @Indexed(unique = true)
    private String docName;

    @NonNull
    private byte[] file;

    public void setDocId() {
        String uniqueId = UUID.randomUUID().toString();
        uniqueId = uniqueId.replace("-", "");
//        this.docId = UUID.randomUUID().toString();
        this.docId = uniqueId;
    }

}
