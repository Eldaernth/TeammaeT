package com.teammaet.idareu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Avatar {

    @Id
    @GeneratedValue
    private long id;

    private byte[] image;

    @OneToOne
    private AppUser appUser;
}
