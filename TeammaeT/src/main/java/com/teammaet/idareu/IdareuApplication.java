package com.teammaet.idareu;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareType;
import com.teammaet.idareu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class IdareuApplication {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(IdareuApplication.class, args);
    }

    @Bean
    public CommandLineRunner init() {
        return args -> {
            Dare dare = Dare.builder()
                    .title("Jump")
                    .dare("Jump into a well")
                    .bet("100ft")
                    .deadline(LocalDate.of(2019, 2, 12))
                    .dareType(DareType.sent)
                    .build();

            Dare dare1 = Dare.builder()
                    .title("Jump")
                    .dare("Jump into a well")
                    .bet("100ft")
                    .deadline(LocalDate.of(2019, 2, 12))
                    .dareType(DareType.received)
                    .build();

            AppUser user = AppUser.builder()
                    .name("rec")
                    .email("tom@gmail.com")
                    .password("everyoneKnows")
                    .friendList(3L)
                    .dares(dare1)
                    .build();

            AppUser user1 = AppUser.builder()
                .name("Tom")
                .email("tom@gmail.com")
                .password("everyoneKnows")
                .friendList(1L)
                .dares(dare)
                .build();

        dare.setUser(user1);
        dare1.setUser(user);

        userRepository.save(user);
        userRepository.save(user1);
    };
    }
}
