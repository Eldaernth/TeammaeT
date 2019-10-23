package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    private UserStorage userStorage;

    public UserController(UserStorage userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping("/user")
    public List<User> getAllUser() {
        return userStorage.getUsers();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") int id) throws Exception {
        return userStorage.getUserById(id);
    }

    @PostMapping("/user")
    public User register(@RequestBody User user) {
        userStorage.register(user);
        return user;
    }
    //TODO:Security question about accessing the api and change data
    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable("id") int id) throws Exception {
        User user = userStorage.getUserById(id);
        userStorage.deleteUser(user);
        return "User was deleted";
    }

    @PutMapping("/user/{id}")
    public User updateUserData(@PathVariable("id") int id, @RequestBody User user) throws Exception {
        User userToUpdate = userStorage.getUserById(id);
        userStorage.update(userToUpdate, user.getName(), user.getEmail(), user.getPassword());
        return userToUpdate;
    }

}
