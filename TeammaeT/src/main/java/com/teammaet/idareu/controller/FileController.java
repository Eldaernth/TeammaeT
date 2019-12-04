package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Video;
import com.teammaet.idareu.service.DareService;
import com.teammaet.idareu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}")
public class FileController {

    @Autowired
    UserService userService;

    @Autowired
    DareService dareService;

    @PostMapping("/uploadFile")
    public String submit(@RequestParam("avatar") MultipartFile file, @PathVariable("userId")Long id) throws IOException {
        AppUser user = userService.getUserById(id);
        Avatar avatar = Avatar.builder()
                .image(file.getBytes())
                .user(user)
                .build();

        user.setAvatar(avatar);
        userService.save(user);

        return "fileUploadView";
    }
    @PostMapping("dare/{id}/uploadVideoFile")
    public String submitVideo(@RequestParam("video") MultipartFile file, @PathVariable("userId")Long userId,@PathVariable("id")Long id) throws IOException {
        AppUser user = userService.getUserById(userId);
        Dare dare = dareService.getDareBy(id);

        byte[] bytes = file.getBytes();
        String pathString = "/home/tom/codecool/advanced/TeammaeT/teammaet-frontend/public/Videos/"+file.getOriginalFilename();
        Path path = Paths.get(pathString);
        Files.write(path, bytes);

        Video video = Video.builder()
                .user(user)
                .dare(dare)
                .videoPath(file.getOriginalFilename())
                .build();

        user.addVideo(video);
        dare.addVideo(video);
        userService.save(user);
        dareService.save(dare);


        return "fileUploadView";
    }
}
