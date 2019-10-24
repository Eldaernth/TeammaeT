package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.Friend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DareStorage {

    Logger logger = LoggerFactory.getLogger(DareStorage.class);

    private List<Dare> sentDares = new ArrayList<>();
    private List<Dare> receivedDares = new ArrayList<>();

    public Dare createDare(String title, String dare, String bet, Date deadline){
        return new Dare(title,dare,bet,deadline);
    }

    public void receive(Dare dare){
        receivedDares.add(dare);
    }

    public void saveSentDare(Dare dare) {
        sentDares.add(dare);
    }

    public Dare getDareBy(int id, List<Dare> dareList) throws NullPointerException{
        for(Dare dare : dareList){
            if(id == dare.getId()){
                return dare;
            }
        }
        NullPointerException e = new NullPointerException("User not found.");
        logger.info(e.getMessage());
        throw e;
    }

    public void delete (Dare dare) {
        receivedDares.remove(dare);
        sentDares.remove(dare);
    }

    public void update(Dare dare, Friend user) {
        dare.doneBy(user);
    }

    public List<Dare> getSentDares() {
        return sentDares;
    }

    public List<Dare> getReceivedDares() {
        return receivedDares;
    }

    public List<Dare> getAllDare(){
        List<Dare> dares = new ArrayList<>();
        dares.addAll(receivedDares);
        dares.addAll(sentDares);
        return dares;
    }
}
