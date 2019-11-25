package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userStorage;

    public UserController(UserService userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping
    public List<AppUser> getAllUser(){
        return userStorage.getUsers();
    }

    @GetMapping("/{id}")
    public AppUser getUserById(@PathVariable("id") Long id){
        return userStorage.getUserById(id);
    }

    @PostMapping
    public AppUser register(@RequestBody AppUser user){
        System.out.println("REGISTER");
        System.out.println(user);
        userStorage.register(user);
        return user;
    }

    //TODO:Security question about accessing the api and change data
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id){
        AppUser user = userStorage.getUserById(id);
        userStorage.deleteUser(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public AppUser updateUserData(@PathVariable("id") Long id, @RequestBody AppUser user){
        AppUser userToUpdate = userStorage.getUserById(id);
//        userStorage.update(userToUpdate, user.getName(), user.getEmail(), user.getPassword());
        return userToUpdate;
    }

}
