package com.teammaet.idareu.model;

import lombok.*;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SentDareInformation {
    private Dare dare;

    @Singular("friendSet")
    private Set<Integer> friendSet;
}
