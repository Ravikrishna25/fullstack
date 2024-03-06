package com.chessacademy.ravikrishna.model;

import java.security.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String course_id;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String courseDesc;

    @Column(nullable = false)
    private int courseRate;

    @Column(nullable = false)
    private String courseDuration;

    @Column(nullable = false)
    private int courseEnrollCnt;

  
   
   
//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "fk_institution_id")
    private Institutions institution;


    
}
