package com.example.serverliquibase.service;

import com.example.serverliquibase.model.Copy;
import com.example.serverliquibase.repository.CopyRepository;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CopyService {
    private final CopyRepository copyRepository;

    @Autowired
    public CopyService(CopyRepository CopyRepository) {this.copyRepository=CopyRepository;}
    public List<Copy> getAllCopys() {
        return copyRepository.findAll();
    }
    public Copy addCopy(Copy Copy) {
        return copyRepository.save(Copy);
    }

    public Copy getAvailableCopyByBookId(Long bookId) {
        List<Copy> copies = copyRepository.findAllByBookIdAndAvailabilityTrue(bookId);
        return copies.isEmpty() ? null : copies.get(0);
    }
    public void updateCopy(Copy copy) {
        copyRepository.save(copy);
    }


}
