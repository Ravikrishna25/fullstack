package com.chessacademy.ravikrishna.service.impl;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chessacademy.ravikrishna.dto.response.RegisterResponse;
import com.chessacademy.ravikrishna.model.User;
import com.chessacademy.ravikrishna.repository.UserRepository;
import com.chessacademy.ravikrishna.service.AdminService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@SuppressWarnings("null")

public class AdminServiceImpl implements AdminService{
    public final UserRepository userRepository;
    @Override
    public List<User> getAllUsers() {
        // return  userRepository.findAll();
        return userRepository.findAllWithoutCourses();

    }


    @Override
    public User getUserById(String userId) {
        User optionalUser = userRepository.findById(userId).get();
        return optionalUser;
    }

    @Override
    public boolean deleteUserById(String userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            userRepository.delete(user);
            return true;
        }
        return false;
    }

    // @Override
    // public User updateUser(String userId, User updatedUser) {
    //     User existingUser = userRepository.findById(userId).orElse(null);
    //     if (existingUser != null) {
    //         if (updatedUser.getEmail() != null) {
    //             existingUser.setEmail(updatedUser.getEmail());
    //         }
    //         // Update other fields as needed
    //         return userRepository.save(existingUser);
    //     }
    //     return null;
    // }

    @Transactional
    public User updateUser(String userId, User updatedUser) {
        User existingUser = userRepository.findById(userId).orElse(null);
        if (existingUser != null) {
            if (updatedUser.getEmail() != null) {
                existingUser.setEmail(updatedUser.getEmail());
            }
            // Update other fields as needed
            return userRepository.save(existingUser);
        }
        return null;
    }

}
