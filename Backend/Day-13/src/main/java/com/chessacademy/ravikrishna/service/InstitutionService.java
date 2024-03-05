package com.chessacademy.ravikrishna.service;

import com.chessacademy.ravikrishna.dto.request.CourseRequest;
import com.chessacademy.ravikrishna.dto.request.InstitutionRequest;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;

public interface InstitutionService {

    RegisterResponse createInstitution(InstitutionRequest request);

    RegisterResponse createCourse(CourseRequest request, String institutionName);
    
}
