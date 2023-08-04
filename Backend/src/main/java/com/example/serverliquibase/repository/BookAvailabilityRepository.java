package com.example.serverliquibase.repository;

import com.example.serverliquibase.model.Book;
import com.example.serverliquibase.model.BookAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookAvailabilityRepository  {
    private final JdbcTemplate jdbcTemplate;

    public BookAvailabilityRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<BookAvailability> findAllBookAvailability() {
        String sql = "SELECT id, title, author, published_date, publisher, description, industry_identifiers, nb_available,nb_total FROM BookAvailability";
        return jdbcTemplate.query(sql, (resultSet, rowNum) -> {
            BookAvailability bookAvailabilityDTO = new BookAvailability();
            bookAvailabilityDTO.setId(resultSet.getInt("id"));
            bookAvailabilityDTO.setTitle(resultSet.getString("title"));
            bookAvailabilityDTO.setAuthor(resultSet.getString("author"));
            bookAvailabilityDTO.setPublishedDate(resultSet.getDate("published_date"));
            bookAvailabilityDTO.setPublisher(resultSet.getString("publisher"));
            bookAvailabilityDTO.setDescription(resultSet.getString("description"));
            bookAvailabilityDTO.setIndustryIdentifiers(resultSet.getString("industry_identifiers"));
            bookAvailabilityDTO.setNbAvailable(resultSet.getInt("nb_available"));
            bookAvailabilityDTO.setNbTotal(resultSet.getInt("nb_total"));

            return bookAvailabilityDTO;
        });
    }}
