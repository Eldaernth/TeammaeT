package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.User;
import com.teammaet.idareu.service.UserCreator;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/{id}/dares")
public class DareController {

    private UserCreator userCreator;
    private UserStorage userStorage;

    public DareController(UserCreator userCreator, UserStorage userStorage) {
        this.userCreator = userCreator;
        this.userStorage = userStorage;
    }

    @GetMapping("/received")
    public List<Dare> getReceivedDares(@PathVariable("id") int id) throws Exception {
        User user = userStorage.getUserById(id);
        return user.getDareStorage().getReceivedDares();
    }

    @GetMapping("/sent")
    public List<Dare> getSentDares(@PathVariable("id") int id) throws Exception {
        User user = userStorage.getUserById(id);
        return user.getDareStorage().getSentDares();
    }

    @GetMapping("/all")
    public List<Dare> getDares(@PathVariable("id") int id) throws Exception {
        User user = userStorage.getUserById(id);
        return user.getDareStorage().getAllDare();
    }


}
