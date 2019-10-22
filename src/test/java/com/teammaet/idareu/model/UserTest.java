package com.teammaet.idareu.model;

import com.teammaet.idareu.service.UserCreator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class UserTest {

    @Autowired
    UserCreator userCreator;

    @Test
    void addFriend() {
        User user = userCreator.createUser("name 1", "email 1", "pass 1");
        User friend = userCreator.createUser("name 2", "email 2", "pass 2");
        user.addFriend(friend);
        assert(!user.getFriendList().isEmpty());
    }

    @Test
    void deleteFriend() {
        User user = userCreator.createUser("name 1", "email 1", "pass 1");
        User friend = userCreator.createUser("name 2", "email 2", "pass 2");
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