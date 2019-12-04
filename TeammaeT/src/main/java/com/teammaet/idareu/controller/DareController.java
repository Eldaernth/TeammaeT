package com.teammaet.idareu.controller;


import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareInformation;
import com.teammaet.idareu.model.Video;
import com.teammaet.idareu.repository.VideoRepository;
import com.teammaet.idareu.service.DareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}/dare")
public class DareController {

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private DareService dareStorage;

    @GetMapping("/received")
    public List<Dare> getReceivedDares(@PathVariable("userId") Long userId){
        return dareStorage.getReceivedDares(userId);
    }

    @GetMapping("/sent")
    public List<Dare> getSentDares(@PathVariable("userId") Long userId){
        return dareStorage.getSentDares(userId);
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

    @GetMapping("/{id}/videos")
    public List<Video> getVideos(@PathVariable("id") Long dareId){
        return videoRepository.findAllByDareId(dareId);
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
