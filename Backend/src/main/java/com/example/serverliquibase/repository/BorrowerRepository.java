package com.example.serverliquibase.repository;

import com.example.serverliquibase.model.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowerRepository extends JpaRepository<Borrower, Long> {
    Borrower findByEmail(String email);

}
