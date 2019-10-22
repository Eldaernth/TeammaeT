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
    @GetMapping("/user")
    public List<User> getAllUser(){
        return userStorage.getUsers();
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
    @PostMapping("/user")
    public User register(@RequestBody User user){
        userStorage.register(user);
        return user;
    }
    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable("id")int id){
        User user = null;
        try {
            user = userStorage.getUserById(id);
        } catch (Exception e) {
            e.getMessage();
        }
        userStorage.deleteUser(user);
        return "User was deleted";
    }
    @PutMapping("/user/{id}")
    public User updateUserData(@PathVariable("id")int id,@RequestBody User user){
        User userToUpdate = null;
        try {
            userToUpdate = userStorage.getUserById(id);
        } catch (Exception e) {
            e.getMessage();
        }
        userStorage.update(userToUpdate,user.getName(),user.getEmail(),user.getPassword());
        return userToUpdate;
    }
}
