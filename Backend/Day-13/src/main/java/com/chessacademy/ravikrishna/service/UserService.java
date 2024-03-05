package com.chessacademy.ravikrishna.service;

import java.security.Principal;

import com.chessacademy.ravikrishna.dto.request.PasswordRequest;
import com.chessacademy.ravikrishna.dto.request.RegisterRequest;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;


public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);
    

}
