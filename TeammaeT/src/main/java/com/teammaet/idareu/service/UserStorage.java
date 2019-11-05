package com.teammaet.idareu.service;

import com.teammaet.idareu.model.User;
import com.teammaet.idareu.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    public User getUserById(Long id) {
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

    public User deleteFriend(Long userId, Long friendId) {
        User user = getUserById(userId);
        Set<Long> friendIdList = user.getFriendList();
        User friend = getUserById(friendId);
        friendIdList.remove(friendId);
        user.setFriendList(friendIdList);
        return friend;
    }

    public User addFriend(Long userId, Long friendId) {
        User user = getUserById(userId);
        Set<Long> friendIdList = user.getFriendList();
        User friend = getUserById(friendId);
        friendIdList.add(friendId);
        user.setFriendList(friendIdList);
        return friend;
    }

    public Set<User> getFriends(Long userId) {
        Set<User> friends = new HashSet<>();
        User user = getUserById(userId);
        Set<Long> friendIdList = user.getFriendList();
        for (Long id : friendIdList) {
            userRepository.findById(id);
        }
        return friends;
    }
}
