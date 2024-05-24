package com.accolite.NewEmployeeOnboardingPortal.controller;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeePersonalDetailsDocuments;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeePersonalDetailsDocumentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@RestController
@CrossOrigin("*")
//@RequestMapping("file")
public class EmployeePersonalDetailsDocumentsController {

    @Autowired
    private EmployeePersonalDetailsDocumentService employeePersonalDetailsDocumentService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file) throws IOException {
//        return new ResponseEntity<>(EmployeePersonalDetailsDocumentService.addFile(file), HttpStatus.OK);

        String fileId = employeePersonalDetailsDocumentService.addFile(file);
        if (fileId != null) {
            return new ResponseEntity<>(fileId, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("File upload failed", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        EmployeePersonalDetailsDocuments loadFile = employeePersonalDetailsDocumentService.downloadFile(id);

        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(loadFile.getFileType() ))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getDocName() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }
}