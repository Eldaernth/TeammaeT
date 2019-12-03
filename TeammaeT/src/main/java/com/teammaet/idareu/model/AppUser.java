package com.teammaet.idareu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class AppUser {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String email;

    private String password;

    @OneToOne(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Avatar avatar;

    @Singular("friendList")
    @ManyToMany
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Set<AppUser> friendList = new HashSet<>();

    @Singular("friendRequests")
    @ManyToMany
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Set<AppUser> friendRequests = new HashSet<>();

    @Singular("dares")
    @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Dare> dares;

    @Singular("roles")
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Singular("videos")
    @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Video> videos;

    public void addVideo(Video video){
        this.videos.add(video);
    }

}
