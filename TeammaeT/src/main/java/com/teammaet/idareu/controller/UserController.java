package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
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
    public List<AppUser> getAllUser() throws NullPointerException {
        System.out.println(userStorage.getUsers());
        return userStorage.getUsers();
    }

    @GetMapping("/{id}")
    public AppUser getUserById(@PathVariable("id") Long id) throws NullPointerException {
        return userStorage.getUserById(id);
    }

    @PostMapping
    public AppUser register(@RequestBody AppUser user) {
        userStorage.register(user);
        return user;
    }

    //TODO:Security question about accessing the api and change data
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) throws NullPointerException {
        AppUser user = userStorage.getUserById(id);
        userStorage.deleteUser(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public AppUser updateUserData(@PathVariable("id") Long id, @RequestBody AppUser user) throws NullPointerException {
        AppUser userToUpdate = userStorage.getUserById(id);
//        userStorage.update(userToUpdate, user.getName(), user.getEmail(), user.getPassword());
        return userToUpdate;
    }

}
