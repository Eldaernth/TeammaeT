package com.teammaet.idareu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity



public class Avatar {

    @Id
    @GeneratedValue
    private long id;

    @Lob
    @Type(type="org.hibernate.type.BinaryType")
    private byte[] image;

    @OneToOne
    private AppUser user;

}
