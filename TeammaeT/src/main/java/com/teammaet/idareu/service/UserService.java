package com.teammaet.idareu.service;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FileService fileService;

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    public void save(AppUser appUser){
        userRepository.save(appUser);
    }

    public void register(AppUser user) throws IOException {

        AppUser newUser = AppUser.builder()
                .name(user.getName())
                .password(passwordEncoder.encode(user.getPassword()))
                .email(user.getEmail())
                .roles("ROLE_USER")
                .build();

        Avatar avatar = Avatar.builder()
                .image(fileService.extractBytes("/image/anonymous.jpg"))
                .user(newUser)
                .build();

        newUser.setAvatar(avatar);
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

    public List<AppUser> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public AppUser deleteFriend(Long userId, Long friendId) {
        AppUser user = userRepository.findById(userId).get();
        AppUser friend = userRepository.findById(friendId).get();
        user.getFriendList().remove(friend);
        userRepository.save(user);
        return getUserById(friendId);
    }

//    @Transactional
//    public AppUser addFriend(Long userId, Long friendId) {
//        AppUser user = userRepository.findById(userId).get();
//        AppUser friend = userRepository.findById(friendId).get();
//        user.getFriendList().add(friend);
//        userRepository.save(user);
//        return getUserById(friendId);
//    }

    @Transactional
    public AppUser sendFriendRequest(Long userId, Long friendId) {
        AppUser user = userRepository.findById(userId).get();
        AppUser friend = userRepository.findById(friendId).get();
        friend.getFriendRequests().add(user);
        userRepository.save(friend);
        return getUserById(friendId);
    }

    public Set<AppUser> getFriends(Long userId) {
        AppUser user = userRepository.findById(userId).get();
        return user.getFriendList();
    }

    @Transactional
    public AppUser decline(Long userId, Long friendId) {
        AppUser user = userRepository.findById(userId).get();
        AppUser friend = userRepository.findById(friendId).get();
        user.getFriendRequests().remove(friend);
        userRepository.save(user);
        return friend;
    }

    @Transactional
    public AppUser accept(Long userId, Long friendId) {
        AppUser user = userRepository.findById(userId).get();
        AppUser friend = userRepository.findById(friendId).get();

        user.getFriendRequests().remove(friend);
        user.getFriendList().add(friend);
        userRepository.save(user);

        friend.getFriendList().add(user);
        userRepository.save(friend);

        return friend;
    }

    public Set<AppUser> getFriendRequestList(Long userId) {
        System.out.println(userRepository.findById(userId).get().getFriendRequests());
        return userRepository.findById(userId).get().getFriendRequests();
    }

}
