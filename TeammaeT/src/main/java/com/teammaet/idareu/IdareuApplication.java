package com.teammaet.idareu;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Avatar;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.repository.DareRepository;
import com.teammaet.idareu.repository.UserRepository;
import com.teammaet.idareu.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;

@SpringBootApplication
public class IdareuApplication {

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DareRepository dareRepository;

    @Autowired
    private FileService fileService;

    public static void main(String[] args) {
        SpringApplication.run(IdareuApplication.class, args);
    }

    @Bean
    public CommandLineRunner init() {
        return args -> {

            AppUser user = AppUser.builder()
                    .name("rec")
                    .email("tom@gmail.com")
                    .password(passwordEncoder.encode("pass1"))
                    .roles("ROLE_USER")
                    .build();

            AppUser user1 = AppUser.builder()
                    .name("Tom")
                    .email("tom@gmail.com")
                    .password(passwordEncoder.encode("pass2"))
                    .friendList(user)
                    .roles("ROLE_USER")
                    .build();

            Avatar avatar = Avatar.builder()
                    .image(fileService.extractBytes("/image/anonymous.jpg"))
                    .user(user1)
                    .build();
            Avatar avatar1 = Avatar.builder()
                    .image(fileService.extractBytes("/image/anonymous.jpg"))
                    .user(user)
                    .build();

            Dare dare = Dare.builder()
                    .title("Jump")
                    .dare("Jump into a well")
                    .bet("100ft")
                    .deadline(LocalDate.of(2019, 2, 12))
                    .userFrom(user)
                    .userTo(user1)
                    .build();

            Dare dare1 = Dare.builder()
                    .title("Jump")
                    .dare("Jump into a well")
                    .bet("100ft")
                    .deadline(LocalDate.of(2019, 2, 12))
                    .userFrom(user1)
                    .userTo(user)
                    .build();

            user.setAvatar(avatar1);
            user1.setAvatar(avatar);
            userRepository.save(user);
            userRepository.save(user1);
            dareRepository.save(dare);
            dareRepository.save(dare1);
        };
    }
}
