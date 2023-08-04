package com.example.serverliquibase.service;

import com.example.serverliquibase.model.Book;
import com.example.serverliquibase.model.Borrower;
import com.example.serverliquibase.model.Borrow;
import com.example.serverliquibase.repository.BorrowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowService {
    private final BorrowRepository borrowRepository;

    @Autowired
    public BorrowService(BorrowRepository BorrowRepository) {this.borrowRepository=BorrowRepository;}

    public List<Borrow> getAllBorrows() {
        return borrowRepository.findAll();
    }

    public Borrow createBorrow(Borrow Borrow) {
        return borrowRepository.save(Borrow);
    }


}
