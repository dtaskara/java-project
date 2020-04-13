package com.example.dina.security.services;

import com.example.dina.model.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User findOne(Long userId);
    User create(User user);
    User update(User user);
    void delete(Long userId);

}
