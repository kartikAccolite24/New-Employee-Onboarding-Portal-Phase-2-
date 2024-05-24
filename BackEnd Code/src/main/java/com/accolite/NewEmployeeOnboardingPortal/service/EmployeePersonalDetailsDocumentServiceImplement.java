package com.accolite.NewEmployeeOnboardingPortal.service;
import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetailsDocuments;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.apache.commons.io.IOUtils;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class EmployeePersonalDetailsDocumentServiceImplement implements EmployeePersonalDetailsDocumentService {

    @Autowired
    private GridFsTemplate template;

    @Autowired
    private GridFsOperations operations;

//    @Autowired
//    private EmployeePersonalDetailsDocumentsRepository employeePersonalDetailsDocumentsRepository;

    public String addFile(MultipartFile upload) throws IOException {

        if (upload != null && !upload.isEmpty()) {
            String docId = UUID.randomUUID().toString();
            docId = docId.replace("-", "");
            Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(),docId);
            return fileID.toString();
        } else {
            return "File Not uploaded";
        }
    }

//    public String addFile(MultipartFile upload) throws IOException {
//        if (upload != null && !upload.isEmpty()) {
//            EmployeePersonalDetailsDocuments document = new EmployeePersonalDetailsDocuments();
//            document.setDocId(); // You can generate unique ID here
//            document.setDocName(upload.getOriginalFilename());
//            document.setFile(upload.getBytes());
//            employeePersonalDetailsDocumentsRepository.save(document);
//            return document.getDocId();
//        } else {
//            return null;
//        }
//    }


    public EmployeePersonalDetailsDocuments downloadFile(String id) throws IOException {

        GridFSFile gridFSFile = template.findOne( new Query(Criteria.where("_id").is(id)) );

        EmployeePersonalDetailsDocuments loadFile = new EmployeePersonalDetailsDocuments();

        if (gridFSFile != null) {
            loadFile.setDocName( gridFSFile.getFilename() );
            loadFile.setFile( IOUtils.toByteArray(operations.getResource(gridFSFile).getInputStream()) );
        }

        return loadFile;
    }
}

