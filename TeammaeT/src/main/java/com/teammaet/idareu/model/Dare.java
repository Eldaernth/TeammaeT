package com.teammaet.idareu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

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
    @ToString.Exclude
    private AppUser user;

    @Enumerated(EnumType.STRING)
    private DareType dareType;

    @Singular("videos")
    @OneToMany(mappedBy = "dare", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Video> videos;


    public void addVideo(Video video){
        this.videos.add(video);
    }
    
    
}
