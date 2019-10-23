package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DareStorage {
    Logger logger = LoggerFactory.getLogger(DareStorage.class);

    private List<Dare> sentDares = new ArrayList<>();
    private List<Dare> receivedDares = new ArrayList<>();
    private List<Dare> dares = new ArrayList<>();

    public Dare createDare(String title, String dare, String bet, Date deadline){
        Dare dare1 = new Dare(title,dare,bet,deadline);
        return dare1;
    }

    public void receive(Dare dare){
        receivedDares.add(dare);
    }

    public void saveSentDare(Dare dare) {
        sentDares.add(dare);
    }

    public Dare getDareById(int id,List<Dare> dareList) throws NullPointerException{
        for(Dare dare : dareList){
            if(id == dare.getId()){
                return dare;
            }
        }
        NullPointerException e = new NullPointerException("User not found.");
        logger.info(e.getMessage());
        throw e;
    }

    public void delete (List<Dare> dareList,Dare dare) {
        dareList.remove(dare);
    }

    public void update(Dare dare, String updatedTitle, String updatedDare, String updatedBet, Date updatedDeadline) {
        if(updatedTitle != null){
            dare.setTitle(updatedTitle);
        }
        if(updatedDare != null){
            dare.setDare(updatedDare);
        }
        if(updatedBet != null){
            dare.setBet(updatedBet);
        }
        if(updatedDeadline != null){
            dare.setDeadline(updatedDeadline);
        }

    }

    public List<Dare> getSentDares() {
        return sentDares;
    }

    public List<Dare> getReceivedDares() {
        return receivedDares;
    }

    public List<Dare> getAllDare(){
        dares.addAll(receivedDares);
        dares.addAll(sentDares);
        return dares;
    }
}
