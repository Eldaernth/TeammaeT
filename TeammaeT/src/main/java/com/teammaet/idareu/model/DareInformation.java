package com.teammaet.idareu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DareInformation {
    private String title;

    private String dare;

    private String bet;

    private LocalDate deadline;

    private List<Long> friendList;

    private Long userThatSends;
}
