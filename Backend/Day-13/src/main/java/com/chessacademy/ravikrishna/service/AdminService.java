package com.chessacademy.ravikrishna.service;

import java.util.List;

import com.chessacademy.ravikrishna.model.User;

public interface AdminService {
    List<User> getAllUsers();

    public User getUserById(String userId);
    boolean deleteUserById(String userId);
    User updateUser(String userId, User updatedUser);
}
