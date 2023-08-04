package com.example.serverliquibase.controller;

import com.example.serverliquibase.model.Book;
import com.example.serverliquibase.model.Copy;
import com.example.serverliquibase.service.BookService;
import com.example.serverliquibase.service.CopyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/api/copy")
public class CopyController {
    private final CopyService copyService;

    private final BookService bookService;

    @Autowired
    public CopyController(CopyService CopyService,BookService BookService) {
        this.copyService= CopyService;
        this.bookService= BookService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Copy>> getAllCopys() {
        List<Copy> Copys = copyService.getAllCopys();
        return ResponseEntity.ok(Copys);
    }
    @PostMapping("/add")
    public ResponseEntity<Void> createCopy(@RequestBody Long bookId){
        Copy copy = new Copy();
        Book book = bookService.getBookById(bookId);
        if(book==null){
            return ResponseEntity.noContent().build();
        }else {
            copy.setBook(book);
            copyService.addCopy(copy);
            return ResponseEntity.ok().build();
        }
    }


}
