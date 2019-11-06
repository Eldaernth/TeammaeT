package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareType;
import com.teammaet.idareu.service.DareStorage;
import com.teammaet.idareu.service.UserStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}/dare")
public class DareController {

    @Autowired
    private DareStorage dareStorage;

    @Autowired
    private UserStorage userStorage;

    @GetMapping("/type/{dareType}") //TODO ? UPPERCASE
    public List<Dare> getReceivedDares(@PathVariable("userId") Long userId,
                                       @PathVariable("dareType") String dareType) throws NullPointerException {
        return dareStorage.getDares(userId, DareType.valueOf(dareType));
    }

    @GetMapping
    public List<Dare> getAllDares(@PathVariable("userId") Long userId) throws NullPointerException {
        return dareStorage.getAllDare(userId);
    }

    @PostMapping
    public List<Dare> createAndSendDare(@RequestBody List<Dare> dares) throws NullPointerException{
        dareStorage.save(dares);
        return dares;
    }

    @GetMapping("/{id}")
    public Dare getDare(@PathVariable("id") Long dareId) throws NullPointerException {
        return dareStorage.getDareBy(dareId);
    }

//    @PutMapping("/{id}")
//    public Dare updateDare(@PathVariable("userId") int userId,
//                           @PathVariable("id") int id) {
//        User user = userStorage.getUserById(userId);
//        DareStorage dareStorage = user.getDareStorage();
//        Dare dare = dareStorage.getDareBy(id, dareStorage.getDares());
//        dareStorage.update(dare, user);
//        return dare;
//    }

    @DeleteMapping("/{id}")
    public String deleteDare(@PathVariable("id") Long dareId) throws NullPointerException {
        dareStorage.delete(dareId);
        return "User was deleted";
    }
}
