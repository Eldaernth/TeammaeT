package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserStorage {

    private List<User> users = new ArrayList<>();

    public User getUser(String name, String password) throws Exception {
        for (User user : users) {
            if (user.getName().equals(name)) {
                if (user.getPassword().equals(password)) {
                    return user;
                } else {
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

    public User getUserById(int id) throws Exception {
        for (User user : users) {
            if (user.getId() == id)
                return user;
        }
        throw new Exception("User not found");
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

    public Set<Friend> getFriends(Set<Integer> friendIdList) {
        Set<Friend> friends = new HashSet<>();
        for (Integer id : friendIdList) {
            try {
                friends.add(getUserById(id));
            } catch (Exception e) {
            }
        }
        return friends;
    }
}
