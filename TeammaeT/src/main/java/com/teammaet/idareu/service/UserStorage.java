package com.teammaet.idareu.service;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserStorage {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager em;

    private Logger logger = LoggerFactory.getLogger(UserStorage.class);


    public void register(AppUser user) {
        userRepository.save(user);
    }

    public void deleteUser(AppUser user) {
        userRepository.delete(user);
    }

    //TODO:best way to handle this exception
    public AppUser getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            logger.info(e.getMessage());
            throw e;
        });
    }

    public AppUser getAppUserByName(String name) {
        return userRepository.findAppUserByName(name).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            logger.info(e.getMessage());
            throw e;
            });
    }

    public List<AppUser> getUsers() {
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

    public AppUser deleteFriend(Long userId, Long friendId) {
        AppUser user = getUserById(userId);
        Set<Long> friendIdList = user.getFriendList();
        AppUser friend = getUserById(friendId);
        friendIdList.remove(friendId);
        user.setFriendList(friendIdList);
        return friend;
    }

    public AppUser addFriend(Long userId, Long friendId) {
        AppUser user = getUserById(userId);
        Set<Long> friendIdList = user.getFriendList();
        AppUser friend = getUserById(friendId);
        friendIdList.add(friendId);
        userRepository.addFriend(userId, friendIdList);
        return friend;
    }

    public Set<AppUser> getFriends(Long userId) {
        Set<AppUser> friendList = new HashSet<>();
        AppUser user = getUserById(userId);
        Set<Long> friendIds = user.getFriendList();
        for (Long friendId : friendIds) {
            friendList.add(getUserById(friendId));
        }
        return friendList;
    }

}
