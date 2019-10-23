package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.web.bind.annotation.*;

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
    public List<Dare> getReceivedDares(@PathVariable("userId") int userId) throws NullPointerException {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getReceivedDares();
    }

    @GetMapping("/sent")
    public List<Dare> getSentDares(@PathVariable("userId") int userId) throws NullPointerException {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getSentDares();
    }

    @GetMapping
    public List<Dare> getDares(@PathVariable("userId") int userId) throws NullPointerException {
        User user = userStorage.getUserById(userId);
        return user.getDareStorage().getAllDare();
    }

    @PostMapping
    public Dare createDare(@PathVariable("userId") int userId,
                           @RequestBody Dare dare,
                           @RequestBody Set<Integer> friendIdList) {

        User user = userStorage.getUserById(userId);
        Set<Friend> friends = userStorage.getFriends(friendIdList);
        user.send(dare, friends);
        return dare;
    }

    @PutMapping("/{id}")
    public Dare updateDare(@PathVariable("userId") int userId,
                           @PathVariable("id") int id) {
        User user = userStorage.getUserById(userId);
        List<Dare> receivedDares = user.getDareStorage().getReceivedDares();
        Dare dare = user.getDareStorage().getDareById(id, receivedDares);
        dare.doneBy(user);
        return dare;
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable("id") int id) throws NullPointerException {
        User user = userStorage.getUserById(id);
        userStorage.deleteUser(user);
        return "User was deleted";
    }
}
