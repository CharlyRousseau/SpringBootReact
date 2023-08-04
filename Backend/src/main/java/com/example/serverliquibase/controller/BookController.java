package com.example.serverliquibase.controller;

import com.example.serverliquibase.model.Book;
import com.example.serverliquibase.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/api/book")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> Books = bookService.getAllBooks();
        return ResponseEntity.ok(Books);
    }
    @PostMapping("/add")
    public ResponseEntity<Integer> createBook(@RequestBody Book book){
        bookService.createBook(book);
        return ResponseEntity.ok(book.getId());
    }
    @DeleteMapping("/delete/{bookId}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long bookId) {
        bookService.deleteBook(bookId);
        return ResponseEntity.ok().build();
    }
}
