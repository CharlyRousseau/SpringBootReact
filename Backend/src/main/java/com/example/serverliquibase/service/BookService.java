package com.example.serverliquibase.service;

import com.example.serverliquibase.model.Book;
import com.example.serverliquibase.repository.BookRepository;
import com.example.serverliquibase.repository.CopyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository BookRepository) {
        this.bookRepository = BookRepository;

    }
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book Book) {
        return bookRepository.save(Book);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);


    }
}
