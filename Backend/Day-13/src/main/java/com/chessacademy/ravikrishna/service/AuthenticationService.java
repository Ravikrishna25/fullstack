package com.chessacademy.ravikrishna.service;

import java.io.IOException;

import com.chessacademy.ravikrishna.dto.request.ForgotPasswordRequest;
import com.chessacademy.ravikrishna.dto.request.LoginRequest;
import com.chessacademy.ravikrishna.dto.request.RegisterRequest;
import com.chessacademy.ravikrishna.dto.response.ForgotPasswordResponse;
import com.chessacademy.ravikrishna.dto.response.LoginResponse;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
