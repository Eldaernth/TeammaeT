package com.teammaet.idareu.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

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
    private User userId;

    @Enumerated(EnumType.STRING)
    private DareType dareType;
    
    
}
