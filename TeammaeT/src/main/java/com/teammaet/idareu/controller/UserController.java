package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private UserStorage userStorage;

    public UserController(UserStorage userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping
    public List<User> getAllUser() {
        return userStorage.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id) throws NullPointerException {
        return userStorage.getUserById(id);
    }

    @PostMapping
    public User register(@RequestBody User user) {
        userStorage.register(user);
        return user;
    }

    //TODO:Security question about accessing the api and change data
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id) throws NullPointerException {
        User user = userStorage.getUserById(id);
        userStorage.deleteUser(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public User updateUserData(@PathVariable("id") int id, @RequestBody User user) throws NullPointerException {
        User userToUpdate = userStorage.getUserById(id);
        userStorage.update(userToUpdate, user.getName(), user.getEmail(), user.getPassword());
        return userToUpdate;
    }

}
