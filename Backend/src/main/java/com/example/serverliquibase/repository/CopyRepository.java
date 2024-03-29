package com.example.serverliquibase.repository;

import com.example.serverliquibase.model.Copy;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CopyRepository extends JpaRepository<Copy, Long> {
    List<Copy> findAllByBookIdAndAvailabilityTrue(Long bookId);
}
