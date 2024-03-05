package com.chessacademy.ravikrishna.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordRequest {
    private String email;
    private String currentPassword;
    private String newPassword;
    private String confirmationPassword;
}
