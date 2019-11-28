package com.teammaet.idareu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin
@RestController
public class FileController {

    @PostMapping("/uploadFile")
    public String submit(@RequestParam("avatar") MultipartFile file, ModelMap modelMap) {
        modelMap.addAttribute("file", file);
        return "fileUploadView";
    }
}
