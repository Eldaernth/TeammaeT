package com.teammaet.idareu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
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

    @Singular("friendList")
    @ElementCollection
    private Set<Long> friendList = new HashSet<>();

    @Singular("dares")
    @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Dare> dares;
    
}
