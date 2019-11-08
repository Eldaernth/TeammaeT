package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
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
    public Set<AppUser> getFriendList(@PathVariable("userId") Long userId)throws NullPointerException{
        return userStorage.getFriends(userId);
    }

    @PostMapping("/{name}")
    public AppUser addFriend(@PathVariable("userId") Long userId, @PathVariable("name") String name) throws NullPointerException{
        Long friendId = userStorage.getAppUserByName(name).getId();
        System.out.println(userId + "   " + name + friendId);
        userStorage.addFriend(friendId, userId);
        return userStorage.addFriend(userId, friendId);
    }

    @DeleteMapping("/{name}")
    public AppUser deleteFriend(@PathVariable("userId") Long userId, @PathVariable("name") String name) throws NullPointerException{
        Long friendId = userStorage.getAppUserByName(name).getId();
        userStorage.deleteFriend(friendId, userId);
        return userStorage.deleteFriend(userId, friendId);
    }

}
