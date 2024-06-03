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
import java.util.*;

@RestController
//@CrossOrigin("*")
@RequestMapping("file")
public class FileController {

    @Autowired
    private FileService fileService;

    @Autowired
    private EmployeeLoginService employeeLoginService;

//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(@RequestParam("files") List<MultipartFile> files, @RequestParam("employeeId") String employeeId) throws IOException {
//        Optional<EmployeeLoginDetails> employeeLoginDetails = employeeLoginService.getEmployee(employeeId);
//
//        if (employeeLoginDetails.isPresent()) {
//            List<String> existingFileIds = employeeLoginDetails.get().getDocumentIds();
//            if (existingFileIds == null) {
//                existingFileIds = new ArrayList<>();
//            }
//
//            // Check if the total number of files after upload is exactly 12
//            int totalFiles = existingFileIds.size() + files.size();
//            if (totalFiles != 12) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                        .body("12 files are not selected");
//            }
//
//            List<String> fileIds = new ArrayList<>();
//            for (MultipartFile file : files) {
//                fileIds.add(fileService.addFile(file));
//            }
//
//            existingFileIds.addAll(fileIds);
//            employeeLoginDetails.get().setDocumentIds(existingFileIds);
//            employeeLoginService.updateEmployee(employeeLoginDetails.get());
//
//            return ResponseEntity.ok("Files uploaded successfully.");
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body("Employee not found.");
//        }
//    }


    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("files") List<MultipartFile> files, @RequestParam("employeeId") String employeeId) throws IOException {
        Optional<EmployeeLoginDetails> employeeLoginDetails = employeeLoginService.getEmployee(employeeId);

        if (employeeLoginDetails.isPresent()) {
            Map<String, String> existingDocumentMap = employeeLoginDetails.get().getDocumentMap();
            if (existingDocumentMap == null) {
                existingDocumentMap = new HashMap<>();
            }

            // Check if the total number of files after upload is exactly 12
            int totalFiles = existingDocumentMap.size() + files.size();
            if (totalFiles != 12) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("12 files are not selected");
            }

            int docCount = existingDocumentMap.size() + 1;
            for (MultipartFile file : files) {
                String docKey = "doc" + docCount++;
                existingDocumentMap.put(docKey, fileService.addFile(file));
            }

            employeeLoginDetails.get().setDocumentMap(existingDocumentMap);
            employeeLoginService.updateEmployee(employeeLoginDetails.get());

            return ResponseEntity.ok("Files uploaded successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Employee not found.");
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }

    @GetMapping("/view/{id}")
    public ResponseEntity<ByteArrayResource> view(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }
}
