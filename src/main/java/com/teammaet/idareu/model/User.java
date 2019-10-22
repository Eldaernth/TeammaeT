package com.teammaet.idareu.model;

import com.teammaet.idareu.service.DareStorage;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class User implements Friend {

    private static int previousId = 0;
    private int id;
    private String name;
    private String email;
    private String password;
    private Set<Friend> friendList = new HashSet<>();
    private DareStorage dareStorage;

    public User(String name, String email, String password) {
        this.id = previousId++;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dareStorage = new DareStorage();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Friend> getFriendList() {
        return friendList;
    }

    public DareStorage getDareStorage() {
        return dareStorage;
    }

    @Override
    public List<Dare> getReceivedDares() {
        return dareStorage.getReceivedDares();
    }

    public void addFriend(Friend friend) {
        friendList.add(friend);
    }

    public void deleteFriend(Friend friend) {
        friendList.remove(friend);
    }

    @Override
    public void receive(Dare dare, List<Dare> dareList) {
        dareStorage.add(dareList, dare);
    }


}
