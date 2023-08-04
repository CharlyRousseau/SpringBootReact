package com.example.serverliquibase.controller;

import com.example.serverliquibase.model.Borrower;
import com.example.serverliquibase.service.BorrowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/borrower")
public class BorrowerController {
    private final BorrowerService borrowerService;

    @Autowired
    public BorrowerController(BorrowerService borrowerService) {
        this.borrowerService= borrowerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Borrower>> getAllBorrowers() {
        List<Borrower> Borrowers = borrowerService.getAllBorrowers();
        return ResponseEntity.ok(Borrowers);
    }


}
