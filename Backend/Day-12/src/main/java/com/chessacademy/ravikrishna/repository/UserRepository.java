package com.chessacademy.ravikrishna.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.chessacademy.ravikrishna.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

    Optional<User> findById(String id);

     @Query("SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.tokens")
    List<User> findAllWithoutCourses();
}
