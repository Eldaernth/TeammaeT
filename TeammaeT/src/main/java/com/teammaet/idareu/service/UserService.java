package com.teammaet.idareu.service;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.UserCredentials;
import com.teammaet.idareu.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager em;

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    private Logger logger = LoggerFactory.getLogger(UserService.class);


    public void register(AppUser user) {
        AppUser newUser = AppUser.builder()
                .name(user.getName())
                .password(passwordEncoder.encode(user.getPassword()))
                .email(user.getEmail())
                .roles("ROLE_USER")
                .build();
        userRepository.save(newUser);
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

    public AppUser login(UserCredentials userInfo){
        AppUser user = getAppUserByName(userInfo.getUserName());
        if (user.getPassword().equals(userInfo.getPassword())) {
            return user;
        }
        throw new NullPointerException("Wrong user/password");
    }

    public List<AppUser> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public AppUser deleteFriend(Long userId, Long friendId) {
        AppUser user = em.find(AppUser.class, userId);
        user.getFriendList().remove(friendId);
        return getUserById(friendId);
    }

    @Transactional
    public AppUser addFriend(Long userId, Long friendId) {
        AppUser user = em.find(AppUser.class, userId);
        user.getFriendList().add(friendId);
        return getUserById(friendId);
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
