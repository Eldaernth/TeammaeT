package com.teammaet.idareu.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.nio.file.Path;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Video {

    @Id
    @GeneratedValue
    private long id;

    private String videoPath;

    @ManyToOne
    @ToString.Exclude
    private AppUser user;

    @ManyToOne
    @ToString.Exclude
    private Dare dare;
}
