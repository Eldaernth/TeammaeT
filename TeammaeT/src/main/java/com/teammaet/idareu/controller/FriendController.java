package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.FriendInfo;
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
    public Set<AppUser> getFriendList(@PathVariable("userId") Long userId) {
        return userStorage.getFriends(userId);
    }

    @GetMapping("/request")
    public Set<AppUser> getFriendRequestList(@PathVariable("userId") Long userId) {
// todo       System.out.println(userStorage.getFriendRequestList(userId));
        return userStorage.getFriendRequestList(userId);
    }

    @PostMapping("/request")
    public AppUser sendFriendRequest(@PathVariable("userId") Long userId, @RequestBody FriendInfo friendInfo) {
        Long friendId = userStorage.getAppUserByName(friendInfo.getName()).getId();
        return userStorage.sendFriendRequest(userId, friendId);
    }

    @PostMapping("/accept")
    public AppUser acceptFriend(@PathVariable("userId") Long userId, @RequestBody FriendInfo friendInfo) {
        return userStorage.accept(userId, friendInfo.getId());
    }

    @PostMapping("/decline")
    public AppUser declineFriend(@PathVariable("userId") Long userId, @RequestBody FriendInfo friendInfo) {
        return userStorage.decline(userId, friendInfo.getId());
    }

    @DeleteMapping("/del/{id}")
    public AppUser deleteFriend(@PathVariable("userId") Long userId, @PathVariable("id") Long friendId) {
        userStorage.deleteFriend(friendId, userId);
        return userStorage.deleteFriend(userId, friendId);
    }

}
