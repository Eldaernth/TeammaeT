package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.UserInfo;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class LoginController {

    @Autowired
    private UserStorage userStorage;

    @PostMapping("/login")
    public AppUser login(@RequestBody UserInfo userInfo) throws NullPointerException {
        AppUser user = userStorage.getAppUserByName(userInfo.getUserName());
        if(user != null && user.getPassword().equals(userInfo.getPassword())) {
            return user;
        }
        throw new NullPointerException("Wrong user name or password");
    }
}
