//package com.example.docup.controller;
//
//
//
//import com.example.docup.entity.LoadFile;
//import com.example.docup.service.FileService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("file")
//public class FileController {
//
//    @Autowired
//    private FileService fileService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file) throws IOException {
//        return new ResponseEntity<>(fileService.addFile(file), HttpStatus.OK);
//    }
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
//        LoadFile loadFile = fileService.downloadFile(id);
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(loadFile.getFileType() ))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
//                .body(new ByteArrayResource(loadFile.getFile()));
//    }
//
//}
//
//package com.example.docup.controller;
//
//import com.example.docup.entity.LoadFile;
//import com.example.docup.service.FileService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("file")
//public class FileController {
//
//    @Autowired
//    private FileService fileService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(@RequestParam("files") List<MultipartFile> files) throws IOException {
//        List<String> fileIds = new ArrayList<>();
//        for (MultipartFile file : files) {
//            fileIds.add(fileService.addFile(file));
//        }
//        return new ResponseEntity<>(fileIds, HttpStatus.OK);
//    }
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
//        LoadFile loadFile = fileService.downloadFile(id);
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(loadFile.getFileType() ))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
//                .body(new ByteArrayResource(loadFile.getFile()));
//    }
//}










package com.accolite.NewEmployeeOnboardingPortal.controller;


import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.entity.LoadFile;
import com.accolite.NewEmployeeOnboardingPortal.service.EmployeeLoginService;
import com.accolite.NewEmployeeOnboardingPortal.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin("*")
@RequestMapping("file")
public class FileController {

    @Autowired
    private FileService fileService;

    @Autowired
    private EmployeeLoginService employeeLoginService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("files") List<MultipartFile> files, @RequestParam("employeeId") String employeeId) throws IOException {
        List<String> fileIds = new ArrayList<>();
        for (MultipartFile file : files) {
            fileIds.add(fileService.addFile(file));
        }

        // Associate the uploaded files with the employee
        Optional<EmployeeLoginDetails> employeeLoginDetails = employeeLoginService.getEmployee(employeeId);
        if (employeeLoginDetails.isPresent()) {
            List<String> existingFileIds = employeeLoginDetails.get().getDocumentIds();
            if (existingFileIds == null) {
                existingFileIds = new ArrayList<>();
            }
            existingFileIds.addAll(fileIds);
            employeeLoginDetails.get().setDocumentIds(existingFileIds);
            employeeLoginService.updateEmployee(employeeLoginDetails.get());
        }

        return new ResponseEntity<>(fileIds, HttpStatus.OK);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }
}
