package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user/{userId}/dare")
public class DareController {

    private UserStorage userStorage;

    public DareController(UserStorage userStorage) {
        this.userStorage = userStorage;
    }

    @GetMapping("/received")
    public List<Dare> getReceivedDares(@PathVariable("userId") int userId) throws Exception {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getReceivedDares();
    }

    @GetMapping("/sent")
    public List<Dare> getSentDares(@PathVariable("userId") int userId) throws Exception {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getSentDares();
    }

    @GetMapping("/all")
    public List<Dare> getDares(@PathVariable("userId") int userId) throws Exception {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getAllDare();
    }

    @PostMapping("/send")
    public Dare createDare(@PathVariable("userId") int userId,
                           @RequestBody Dare dare,
                           @RequestBody Set<Integer> friendIdList)  throws Exception {

        User user = userStorage.getUserById(userId);
        Set<Friend> friends = userStorage.getFriends(friendIdList);
        user.send(dare, friends);
        return dare;
    }

}
