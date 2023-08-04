package com.example.serverliquibase.model;
import java.util.Date;

public class BookAvailability {

    private int id;
    private String title;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Date getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIndustryIdentifiers() {
        return industryIdentifiers;
    }

    public void setIndustryIdentifiers(String industryIdentifiers) {
        this.industryIdentifiers = industryIdentifiers;
    }

    public int getNbAvailable() {
        return nbAvailable;
    }

    public void setNbAvailable(int nbAvailable) {
        this.nbAvailable = nbAvailable;
    }

    public int getNbTotal() {
        return nbTotal;
    }

    public void setNbTotal(int nbTotal) {
        this.nbTotal = nbTotal;
    }


    private String author;
    private String publisher;
    private Date publishedDate;
    private String description;
    private String industryIdentifiers;
    private int nbAvailable;
    private int nbTotal;

}
