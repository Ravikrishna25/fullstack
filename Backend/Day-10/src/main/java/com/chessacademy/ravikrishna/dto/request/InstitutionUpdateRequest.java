package com.chessacademy.ravikrishna.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstitutionUpdateRequest {
    private String title;
    private String des;
    private String img;
    private int rate;
}
