package com.example.dina.controller;

import com.example.dina.model.User;
import com.example.dina.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
public class AdminController {

    @Autowired
    private UserService userService;

    /**
     * User APIs
     * @return
     */
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable(name = "id") Long id) {
        return userService.findOne(id);
    }

    @PostMapping("/user/create")
    public User createUser(User user) {
        return userService.create(user);
    }

    @PutMapping("/user/update")
    public User updateUser(User user) {
        return userService.update(user);
    }

    @DeleteMapping("/user/delete/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id) {
        userService.delete(id);
    }


}
