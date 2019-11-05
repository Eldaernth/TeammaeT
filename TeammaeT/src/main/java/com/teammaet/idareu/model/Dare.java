package com.teammaet.idareu.model;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Dare {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String dare;

    private String bet;

    private LocalDate deadline;

    private boolean progress;

    @ManyToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private DareType dareType;
}
