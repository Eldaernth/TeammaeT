package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}")
public class FileController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/uploadFile")
    public String submit(@RequestParam("avatar") MultipartFile file, @PathVariable("userId")Long id) throws IOException {
        AppUser user = userRepository.findById(id).get();
        Avatar avatar = Avatar.builder()
                .image(file.getBytes())
                .user(user)
                .build();

        user.setAvatar(avatar);
        userRepository.save(user);

        return "fileUploadView";
    }
}
