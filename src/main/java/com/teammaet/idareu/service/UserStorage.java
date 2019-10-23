package com.teammaet.idareu.service;

import com.teammaet.idareu.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserStorage {
    Logger logger = LoggerFactory.getLogger(UserStorage.class);

    private List<User> users = new ArrayList<>();

    public User getUser(String name, String password) throws Exception {
        for (User user : users) {
            if (user.getName().equals(name)) {
                if (user.getPassword().equals(password)) {
                    return user;
                } else {
                    Exception e = new Exception("Wrong password.");
                    logger.info(e.getMessage());
                    throw e;
                }
            }
        }
        Exception e = new Exception("Wrong username.");
        logger.info(e.getMessage());
        throw e;
    }

    public void register(User user) {
        users.add(user);
    }

    public void deleteUser(User user) {
        users.remove(user);
    }
    //TODO:best way to handle this exception
    public User getUserById(int id) throws Exception {
        for (User user : users) {
            if (user.getId() == id)
                return user;
        }
        Exception e = new Exception("User not found.");
        logger.info(e.getMessage());
        throw e;
    }

    public List<User> getUsers() {
        return users;
    }

    public void update(User user, String updatedName, String updatedEmail, String updatedPassword) {
        if (updatedName != null) {
            user.setName(updatedName);
        }
        if (updatedEmail != null) {
            user.setEmail(updatedEmail);
        }
        if (updatedPassword != null) {
            user.setPassword(updatedPassword);
        }
    }

}
