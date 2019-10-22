package com.teammaet.idareu.service;

import com.teammaet.idareu.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserCreator {

    public User createUser(String name, String email, String password) {
        return new User(name, email, password);
    }

}
