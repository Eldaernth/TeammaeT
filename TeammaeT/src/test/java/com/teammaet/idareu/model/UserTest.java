package com.teammaet.idareu.model;

import org.junit.jupiter.api.Test;

class UserTest {

    @Test
    void addFriend() {
        User user = new User("name 1", "email 1", "pass 1");
        User friend = new User("name 2", "email 2", "pass 2");
        user.addFriend(friend);
        assert(!user.getFriendList().isEmpty());
    }

    @Test
    void deleteFriend() {
        User user = new User("name 1", "email 1", "pass 1");
        User friend = new User("name 2", "email 2", "pass 2");
        user.addFriend(friend);
        user.deleteFriend(friend);
        assert(user.getFriendList().isEmpty());
    }

    @Test
    void send() {
    }

    @Test
    void receive() {
    }

    @Test
    void getReceivedDareStorage() {
    }
}