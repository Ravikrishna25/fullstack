package com.chessacademy.ravikrishna.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.chessacademy.ravikrishna.model.Courses;

public interface CourseRepository extends JpaRepository<Courses, String> {


}
