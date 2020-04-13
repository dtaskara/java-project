package com.example.dina.security.services;

import com.example.dina.model.Dress;
import com.example.dina.model.DressDto;

import java.util.List;

public interface DressService {
    List<Dress> findAll();
    List<Dress> getAllByPage(int page, int size);
    Dress findOne(String title);
    Dress findById(Long id);
    Dress save(DressDto movie);
    DressDto update(DressDto dressDto);
    void delete(Long id);
}
