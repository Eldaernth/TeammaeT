package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<AppUser> getAllUser(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public AppUser getUserById(@PathVariable("id") Long id){
        return userService.getUserById(id);
    }

    @GetMapping("/{id}/avatar")
    public ResponseEntity<byte[]> getAvatar(@PathVariable("id") Long userId){
        Avatar avatar = userService.getUserById(userId).getAvatar();
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(avatar.getImage());
    }

    @PostMapping
    public AppUser register(@RequestBody AppUser user) throws IOException {
        userService.register(user);
        return user;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id){
        AppUser user = userService.getUserById(id);
        userService.deleteUser(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public AppUser updateUserData(@PathVariable("id") Long id, @RequestBody AppUser user){
        AppUser userToUpdate = userService.getUserById(id);
//        userStorage.update(userToUpdate, user.getName(), user.getEmail(), user.getPassword());
        return userToUpdate;
    }

}
