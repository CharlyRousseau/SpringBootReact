package com.example.serverliquibase.repository;

import com.example.serverliquibase.model.Borrow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowRepository extends JpaRepository<Borrow, Long> {
}
