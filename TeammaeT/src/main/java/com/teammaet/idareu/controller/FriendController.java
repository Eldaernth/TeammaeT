package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}/friend")
public class FriendController {

    private UserStorage userStorage;

    public FriendController(UserStorage userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping
    public Set<User> getFriendList(@PathVariable("userId") Long userId){
        return userStorage.getFriends(userId);
    }

    @PostMapping("/{id}")
    public User addFriend(@PathVariable("userId") Long userId, @PathVariable("id") Long friendId) {
        return userStorage.addFriend(userId, friendId);
    }

    @DeleteMapping("/{id}")
    public User deleteFriend(@PathVariable("userId") Long userId, @PathVariable("id") Long friendId) {
        return userStorage.deleteFriend(userId, friendId);
    }

}
