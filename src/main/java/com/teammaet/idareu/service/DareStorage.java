package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DareStorage {

    private List<Dare> sentDares = new ArrayList<>();
    private List<Dare> receivedDares = new ArrayList<>();

    public void createDare(String title, String dare, String bet, Date deadline){
        Dare dare1 = new Dare(title,dare,bet,deadline);
    }

    public void add(List<Dare> dareList, Dare dare){
        dareList.add(dare);
    }

    public Dare getDareById(int id,List<Dare> dareList){
        for(Dare dare : dareList){
            if(id == dare.getId()){
                return dare;
            }
        }
        return null;
    }

    public void delete (List<Dare> dareList,Dare dare) {
        dareList.remove(dare);
    }

    public List<Dare> getSentDares() {
        return sentDares;
    }

    public List<Dare> getReceivedDares() {
        return receivedDares;
    }
}
