package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareInformation;
import com.teammaet.idareu.model.DareType;
import com.teammaet.idareu.service.DareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}/dare")
public class DareController {

    @Autowired
    private DareService dareStorage;

    @GetMapping("/type/{dareType}") //TODO ? UPPERCASE
    public List<Dare> getReceivedDares(@PathVariable("userId") Long userId,
                                       @PathVariable("dareType") String dareType){
        return dareStorage.getDares(userId, DareType.valueOf(dareType));
    }

    @GetMapping
    public List<Dare> getAllDares(@PathVariable("userId") Long userId){
        return dareStorage.getAllDare(userId);
    }

    @PostMapping
    public DareInformation createAndSendDare(@RequestBody DareInformation dareInformation){
        dareStorage.createDare(dareInformation);
        return dareInformation;
    }

    @GetMapping("/{id}")
    public Dare getDare(@PathVariable("id") Long dareId){
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
    public String deleteDare(@PathVariable("id") Long dareId){
        dareStorage.delete(dareId);
        return "User was deleted";
    }
}
