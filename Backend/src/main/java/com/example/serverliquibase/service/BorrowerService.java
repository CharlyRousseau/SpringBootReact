package com.example.serverliquibase.service;

import com.example.serverliquibase.model.Borrower;
import com.example.serverliquibase.repository.BorrowerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowerService {
    private final BorrowerRepository borrowerRepository;

    @Autowired
    public BorrowerService(BorrowerRepository BorrowerRepository) {this.borrowerRepository=BorrowerRepository;}

    public List<Borrower> getAllBorrowers() {
        return borrowerRepository.findAll();
    }
    public Borrower getBorrowerByEmail(String Email) {
        return borrowerRepository.findByEmail(Email);
    }


}
