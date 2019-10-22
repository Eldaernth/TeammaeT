package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserCreator;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private UserCreator userCreator;
    private UserStorage userStorage;

    public UserController(UserCreator userCreator, UserStorage userStorage) {
        this.userCreator = userCreator;
        this.userStorage = userStorage;
    }
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") int id){
        try {
            return userStorage.getUserById(id);
        } catch (Exception e) {
            e.getMessage();
        }
        return null;
    }
    @PostMapping(path="/user")
    public User register(@RequestBody User user){
        userStorage.register(user);
        return user;
    }
}
