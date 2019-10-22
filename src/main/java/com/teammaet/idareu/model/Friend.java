package com.teammaet.idareu.model;

import java.util.List;

public interface Friend {

    String getName();

    void receive(List<Dare> dareList, Dare dare);

    List<Dare> getReceivedDareStorage();
}
