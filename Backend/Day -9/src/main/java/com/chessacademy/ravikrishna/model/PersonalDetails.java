package com.chessacademy.ravikrishna.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "personal_details")
public class PersonalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String personal_id;

    // @OneToOne
    // @JoinColumn(name = "user_id", referencedColumnName = "id")
    // private User user;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String fatherName;
    @Column(nullable = false)
    private String motherName;
    @Column(nullable = false)
    private String alternateEmail;
    @Column(nullable = false)
    private int age;
    @Column(nullable = false)
    private long phoneNumber;
    @Column(nullable = false)
    private long alternatePhoneNumber;
    @Column(nullable = false)
    private String houseNo;
    @Column(nullable = false)
    private String streetName;
    @Column(nullable = false)
    private String areaName;
    @Column(nullable = false)
    private long pinCode;
    @Column(nullable = false)
    private String state;
    @Column(nullable = false)
    private String nationality;

    @ManyToMany
    @JoinTable(name = "course_personal", joinColumns = { @JoinColumn(name = "personal_id") }, inverseJoinColumns = {
            @JoinColumn(name = "course_id") })
    private List<Courses> courses;

    @OneToOne
    @JoinColumn(name = "fk_Id")
    private User user;
    // Getters and setters
}