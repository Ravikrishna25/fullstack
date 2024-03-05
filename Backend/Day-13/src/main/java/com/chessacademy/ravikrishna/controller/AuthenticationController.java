package com.chessacademy.ravikrishna.controller;

import static com.chessacademy.ravikrishna.utils.MyConstant.AUTH;
import static com.chessacademy.ravikrishna.utils.MyConstant.FORGOT_PASSWORD;
import static com.chessacademy.ravikrishna.utils.MyConstant.LOGIN;
import static com.chessacademy.ravikrishna.utils.MyConstant.REFRESR_TOKEN;
import static com.chessacademy.ravikrishna.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.ravikrishna.dto.request.ForgotPasswordRequest;
import com.chessacademy.ravikrishna.dto.request.LoginRequest;
import com.chessacademy.ravikrishna.dto.request.RegisterRequest;
import com.chessacademy.ravikrishna.dto.response.ForgotPasswordResponse;
import com.chessacademy.ravikrishna.dto.response.LoginResponse;
import com.chessacademy.ravikrishna.dto.response.RegisterResponse;
import com.chessacademy.ravikrishna.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@Tag(name = "Authentication",description = "Your controller description")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setAccessToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(REFRESR_TOKEN)
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response) throws IOException {
        authService.refreshToken(request, response);
    }

    @PatchMapping(FORGOT_PASSWORD)
    @Hidden
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request)
    {
        ForgotPasswordResponse response = new ForgotPasswordResponse();
        try{
            response = authService.forgotPassword(request);
            return new ResponseEntity<>(response, OK);
        }catch(Exception e){
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
    
}
