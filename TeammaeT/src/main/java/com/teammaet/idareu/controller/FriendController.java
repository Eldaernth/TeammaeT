package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}/friend")
public class FriendController {

    private UserService userStorage;

    public FriendController(UserService userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping
    public Set<AppUser> getFriendList(@PathVariable("userId") Long userId){
        return userStorage.getFriends(userId);
    }

    @PostMapping("/add/{name}")
    public AppUser addFriend(@PathVariable("userId") Long userId, @PathVariable("name") String name){
        Long friendId = userStorage.getAppUserByName(name).getId();
        userStorage.addFriend(friendId, userId);
        return userStorage.addFriend(userId, friendId);
    }

    @DeleteMapping("/del/{id}")
    public AppUser deleteFriend(@PathVariable("userId") Long userId, @PathVariable("id") Long friendId) {
        userStorage.deleteFriend(friendId, userId);
        return userStorage.deleteFriend(userId, friendId);
    }

}
