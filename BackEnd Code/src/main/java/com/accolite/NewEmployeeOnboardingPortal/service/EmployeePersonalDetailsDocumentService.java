package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetailsDocuments;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
public interface EmployeePersonalDetailsDocumentService {

    public String addFile(MultipartFile upload) throws IOException;

    public EmployeePersonalDetailsDocuments downloadFile(String id) throws IOException;
}
