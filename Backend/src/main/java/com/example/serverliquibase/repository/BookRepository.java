package com.example.serverliquibase.repository;

import com.example.serverliquibase.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long>{
}
