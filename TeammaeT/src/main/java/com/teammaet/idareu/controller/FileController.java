package com.teammaet.idareu.controller;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.repository.AvatarRepository;
import com.teammaet.idareu.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/user/{userId}")
public class FileController {
    @Autowired
    AvatarRepository avatarRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/uploadFile")
    public String submit(@RequestParam("avatar") MultipartFile file,@PathVariable("userId")long id) throws IOException {
        Avatar avatar = new Avatar(file.getBytes(),id);
        avatarRepository.save(avatar);

        return "fileUploadView";
    }
}
