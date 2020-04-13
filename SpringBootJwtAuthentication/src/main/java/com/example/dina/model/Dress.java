package com.example.dina.model;

import org.springframework.context.annotation.ComponentScan;

import javax.persistence.*;


@Entity
@Table(name = "dress")
public class Dress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name="brand", nullable=false)
    private String brand;

    @Column(name = "length", nullable = false)
    private String length;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private String price;


    public Dress() {}

    public Dress(String title, String country, String brand, String length, String description, String price) {
        this.title = title;
        this.country = country;
        this.brand=brand;
        this.length = length;
        this.description = description;
        this.price=price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBrand(){return brand;}

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
