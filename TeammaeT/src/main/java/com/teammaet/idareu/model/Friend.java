package com.teammaet.idareu.model;

public interface Friend {

    int getId();

    String getName();

    Friend getById(int id);

    void receive(Dare dare);

}
