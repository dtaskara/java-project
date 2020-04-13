package com.example.dina.model;

public class DressDto {
    private Long id;
    private String title;
    private String country;
    private String brand;
    private String length;
    private String description;
    private String price;


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

    public String getBrand() {return brand; }

    public void setBrand (String brand) { this.brand = brand; }

    public void setCountry(String country) {
        this.country = country;
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
