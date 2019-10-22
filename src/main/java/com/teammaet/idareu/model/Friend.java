package com.teammaet.idareu.model;

import java.util.List;

public interface Friend {

    String getName();

    void receive(Dare dare, List<Dare> dareList);

    List<Dare> getReceivedDares();
}
