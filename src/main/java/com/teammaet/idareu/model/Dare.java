package com.teammaet.idareu.model;

import java.util.Date;

public class Dare {
    private int id;
    private String title;
    private String dare;
    private String bet;
    private Date deadline;
    private boolean status;

    private static int previousId = 1;

    public Dare() {}

    public Dare(String title, String dare, String bet, Date deadline) {
        this.id = previousId++;
        this.title = title;
        this.dare = dare;
        this.bet = bet;
        this.deadline = deadline;
        this.status = false;
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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
