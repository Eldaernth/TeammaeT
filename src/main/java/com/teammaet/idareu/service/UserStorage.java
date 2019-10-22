package com.teammaet.idareu.service;

import com.teammaet.idareu.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class UserStorage {

    private List<User> users = new ArrayList<>();

    public User getUser(String name, String password) throws Exception {
        for (User user : users) {
            if (user.getName().equals(name)) {
                if (user.getPassword().equals(password)){
                    return user;
                }
                else {
                    throw new Exception("Wrong password.");
                }
            }
        }
        throw new Exception("Wrong username");
    }

    public void register(User user) {
        users.add(user);
    }

    public void deleteUser(User user) {
        users.remove(user);
    }

}
