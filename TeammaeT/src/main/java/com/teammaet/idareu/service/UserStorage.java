package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.*;

@Service
public class UserStorage {

    @Autowired
    private UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(UserStorage.class);


    public void register(User user) {
        userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    //TODO:best way to handle this exception
    public User getUserById(Long id) throws NullPointerException {
        return userRepository.findById(id).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            logger.info(e.getMessage());
            throw e;
        });
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

//    public void update(User user, String updatedName, String updatedEmail, String updatedPassword) {
//        if (updatedName != null) {
//            user.setName(updatedName);
//        }
//        if (updatedEmail != null) {
//            user.setEmail(updatedEmail);
//        }
//        if (updatedPassword != null) {
//            user.setPassword(updatedPassword);
//        }
//    }

    public Set<User> getFriends(Set<Long> friendIdList) {
        Set<User> friends = new HashSet<>();
        for (Long id : friendIdList) {
            userRepository.findById()
        }
        return friends;
    }
}
