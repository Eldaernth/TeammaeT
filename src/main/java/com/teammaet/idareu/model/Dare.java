package com.teammaet.idareu.model;

import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class Dare {
    private int id;
    private String title;
    private String dare;
    private String bet;
    private Date deadline;
    private Set<Friend> doneFriendList = new HashSet<>();

    private static int previousId = 1;

    public Dare() {}

    public Dare(String title, String dare, String bet, Date deadline) {
        this.id = previousId++;
        this.title = title;
        this.dare = dare;
        this.bet = bet;
        this.deadline = deadline;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDare() {
        return dare;
    }

    public void setDare(String dare) {
        this.dare = dare;
    }

    public String getBet() {
        return bet;
    }

    public void setBet(String bet) {
        this.bet = bet;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public Set<Friend> getDoneFriendList() {
        return doneFriendList;
    }

    public void doneBy(Friend friend) {
        doneFriendList.add(friend);
    }
}
