package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.UserCredentials;
import com.teammaet.idareu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class LoginController {

    @Autowired
    private UserService userStorage;

    @PostMapping("/login")
    public AppUser login(@RequestBody UserCredentials userInfo) throws NullPointerException {
        return userStorage.login(userInfo);
    }
}
