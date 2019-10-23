package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/{userId}/friend")
public class FriendController {
    private UserStorage userStorage;

    public FriendController(UserStorage userStorage) {
        this.userStorage = userStorage;
    }

    @PostMapping
    public Friend addFriend(@PathVariable("userId") int userId, @RequestBody Friend friend){
        User user = userStorage.getUserById(userId);
        user.addFriend(friend);
        return friend;
    }
    @DeleteMapping("/{id}")
    public Friend addFriend(@PathVariable("userId") int userId,@PathVariable("id") int id){
        User user = userStorage.getUserById(userId);
        Friend friend = user.getById(id);
        user.deleteFriend(friend);
        return friend;
    }

}
