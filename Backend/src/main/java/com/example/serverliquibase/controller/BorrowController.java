package com.example.serverliquibase.controller;

import com.example.serverliquibase.model.Borrow;
import com.example.serverliquibase.model.Borrower;
import com.example.serverliquibase.model.Copy;
import com.example.serverliquibase.service.BorrowService;
import com.example.serverliquibase.service.BorrowerService;
import com.example.serverliquibase.service.CopyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/borrow")
public class BorrowController {
    private final BorrowService borrowService;
    private final CopyService copyService;
    private final BorrowerService borrowerService;

    @Autowired
    public BorrowController(BorrowService borrowService, CopyService copyService,BorrowerService borrowerService) {
        this.borrowService= borrowService;
        this.copyService=copyService;
        this.borrowerService=borrowerService;

    }

    @GetMapping("/all")
    public ResponseEntity<List<Borrow>> getAllBorrows() {
        List<Borrow> Borrows = borrowService.getAllBorrows();
        return ResponseEntity.ok(Borrows);
    }
    @PostMapping("/add")
    public ResponseEntity<Integer> createBook(@RequestBody Map<String, Object> requestMap){
        Long bookId = ((Number) requestMap.get("bookId")).longValue();
        String email = (String) requestMap.get("email");

        Borrower borrower = borrowerService.getBorrowerByEmail(email);
        if (borrower == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(-1);
        }
        Copy copy = copyService.getAvailableCopyByBookId(bookId);
        if(copy == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(-1);
        }
        copy.setAvailability(false);
        copyService.updateCopy(copy);
        Borrow newborrow = new Borrow();
        newborrow.setBorrower(borrower);
        newborrow.setCopy(copy);
        Date today = Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());

        newborrow.setBorrowDate(today);
        Borrow finalBorrow =borrowService.createBorrow(newborrow);
        return ResponseEntity.ok(finalBorrow.getId());
    }
}
