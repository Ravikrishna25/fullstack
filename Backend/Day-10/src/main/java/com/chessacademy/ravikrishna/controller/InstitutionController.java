package com.chessacademy.ravikrishna.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.ravikrishna.dto.request.CourseRequest;
import com.chessacademy.ravikrishna.dto.request.InstitutionRequest;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;
import com.chessacademy.ravikrishna.service.InstitutionService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "Admin")
@RequiredArgsConstructor
public class InstitutionController {
    public final InstitutionService institutionService;

    @PostMapping("/institution")
    
    public ResponseEntity<?> addInstitution(@RequestBody InstitutionRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = institutionService.createInstitution(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
            
        } catch (Exception e) {
            RegisterResponse.builder().message("Exception caught").build();
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
        
    }

    @PostMapping("/course/{institutionName}")
    public ResponseEntity<?> postMethodName(@RequestBody CourseRequest request,@PathVariable String institutionName) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = institutionService.createCourse(request,institutionName);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            e.printStackTrace();
            RegisterResponse.builder().message("Exception caught").build();
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    
}
