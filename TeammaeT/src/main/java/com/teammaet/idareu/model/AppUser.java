package com.teammaet.idareu.model;

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

    @OneToMany(mappedBy = "userId", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Dare> dares;
    
}
