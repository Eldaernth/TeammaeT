package com.teammaet.idareu.model;

import java.util.Set;

public class SentDareInformation {
    private Dare dare;
    private Set<Integer> friendSet;

    public SentDareInformation() {
    }

    public SentDareInformation(Dare dare, Set<Integer> friendSet) {
        this.dare = dare;
        this.friendSet = friendSet;
    }

    public Dare getDare() {
        return dare;
    }


    public void setDare(Dare dare) {
        this.dare = dare;
    }

    public Set<Integer> getFriendSet() {
        return friendSet;
    }
}
