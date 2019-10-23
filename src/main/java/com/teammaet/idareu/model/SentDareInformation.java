package com.teammaet.idareu.model;

import java.util.Set;

public class SentDareInformation {
    private Dare dare;
    private Set<Friend> friendSet;

    public SentDareInformation() {
    }

    public SentDareInformation(Dare dare, Set<Friend> friendSet) {
        this.dare = dare;
        this.friendSet = friendSet;
    }

    public Dare getDare() {
        return dare;
    }


    public void setDare(Dare dare) {
        this.dare = dare;
    }

    public Set<Friend> getFriendSet() {
        return friendSet;
    }
}
