package com.chessacademy.ravikrishna.service.impl;

// import org.springframework.stereotype.Service;

// import com.chessacademy.ravikrishna.dto.request.CourseRequest;
// import com.chessacademy.ravikrishna.dto.request.InstitutionRequest;
// import com.chessacademy.ravikrishna.dto.response.RegisterResponse;
// import com.chessacademy.ravikrishna.model.Courses;
// import com.chessacademy.ravikrishna.model.Institutions;
// import com.chessacademy.ravikrishna.repository.CourseRepository;
// import com.chessacademy.ravikrishna.repository.InstitutionRepository;
// import com.chessacademy.ravikrishna.service.InstitutionService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class InstitutionServiceImpl implements InstitutionService{
//     public final InstitutionRepository institutionRepository;
//     public final CourseRepository courseRepository;

//     @SuppressWarnings("null")
//     @Override
//     public RegisterResponse createInstitution(InstitutionRequest request) {
//         var institution = Institutions.builder()
//         .institution_name(request.getTitle())
//         .institution_desc(request.getDes())
//         .institution_img(request.getImg())
//         .institution_rate(request.getRate())
//         .build();

//         institutionRepository.save(institution);

//         return RegisterResponse.builder().message("Institution Saved Successfully").build();
        
        
//     }

//     @Override
//     public RegisterResponse createCourse(CourseRequest request, String institutionName) {
//         var institution = institutionRepository.findByInstitutionName(institutionName);
//         final Institutions obj = new Institutions();

//         if(institution.isPresent()){

//             institution.ifPresent(b -> {
//                 obj = b;
//             });

//             var course = Courses.builder()
//             .institution(obj)
//             .course_name(request.getCourseName()).course_desc(request.getCourseDescription())
//             .course_duration(request.getDuration())
//             .course_enroll_cnt(request.getNumberOfStudents())
//             .course_rate(request.getRate())
//             .build();

//             courseRepository.save(course);
//         }

        

//         return RegisterResponse.builder().message("Course Saved Successfully").build();

    
//     }

// }

import org.springframework.stereotype.Service;

import com.chessacademy.ravikrishna.dto.request.CourseRequest;
import com.chessacademy.ravikrishna.dto.request.InstitutionRequest;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;
import com.chessacademy.ravikrishna.model.Courses;
import com.chessacademy.ravikrishna.model.Institutions;
import com.chessacademy.ravikrishna.repository.CourseRepository;
import com.chessacademy.ravikrishna.repository.InstitutionRepository;
import com.chessacademy.ravikrishna.service.InstitutionService;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InstitutionServiceImpl implements InstitutionService {
    private final InstitutionRepository institutionRepository;
    private final CourseRepository courseRepository;

    @Override
    public RegisterResponse createInstitution(InstitutionRequest request) {
        Institutions institution = Institutions.builder()
                .institutionName(request.getTitle())
                .institutionDesc(request.getDes())
                .institutionImg(request.getImg())
                .institutionRate(request.getRate())
                .build();

        institutionRepository.save(institution);

        return RegisterResponse.builder().message("Institution Saved Successfully").build();
    }

    @Override
    public RegisterResponse createCourse(CourseRequest request, String institutionName) {
        var institution = institutionRepository.findByInstitutionName(institutionName);
        System.out.print(institution.get().toString());
            Courses course = Courses.builder()
                    .institution(institution.get())
                    .courseName(request.getCourseName())
                    .courseDesc(request.getCourseDesc())
                    .courseDuration(request.getDuration())
                    .courseEnrollCnt(request.getNumberOfStudents())
                    .courseRate(request.getRate())
                    .build();

            courseRepository.save(course);

            return RegisterResponse.builder().message("Course Saved Successfully").build();
        }
    }

