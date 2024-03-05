
package com.chessacademy.ravikrishna.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.chessacademy.ravikrishna.model.Institutions;

public interface InstitutionRepository extends JpaRepository<Institutions, String> {
        
        Optional<Institutions> findByInstitutionName(String institutionName);

        
}
