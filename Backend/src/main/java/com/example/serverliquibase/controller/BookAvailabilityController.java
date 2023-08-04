package com.example.serverliquibase.controller;

import com.example.serverliquibase.model.BookAvailability;
import com.example.serverliquibase.repository.BookAvailabilityRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/view")
public class BookAvailabilityController {
    private final BookAvailabilityRepository bookAvailabilityRepository;

    public BookAvailabilityController(BookAvailabilityRepository bookAvailabilityRepository){
        this.bookAvailabilityRepository = bookAvailabilityRepository;
    }
    @GetMapping("/books")
    public List<BookAvailability> getAllBooks() {
        return bookAvailabilityRepository.findAllBookAvailability();
    }
}
