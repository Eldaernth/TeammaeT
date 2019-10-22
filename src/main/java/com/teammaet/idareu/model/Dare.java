package com.teammaet.idareu.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Dare {
    private int id;
    private String title;
    private String dare;
    private String bet;
    private Date deadline;
    private List<User> doneDareList = new ArrayList<>();

    private static int previousid = 1;
    public Dare() {}

    public Dare(String title, String dare, String bet, Date deadline) {
        this.id = previousid++;
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

    public List<User> getDoneDareList() {
        return doneDareList;
    }
}
