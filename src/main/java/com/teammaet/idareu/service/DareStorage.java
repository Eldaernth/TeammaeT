package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DareStorage {
    private List<Dare> sentDares = new ArrayList<>();
    private List<Dare> receivedDares = new ArrayList<>();

    public Dare createDare(String title, String dare, String bet, Date deadline){
        Dare dare1 = new Dare(title,dare,bet,deadline);
        return dare1;
    }
    public void add(List<Dare> dareList,Dare dare){
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
    public void update(Dare dare,String updatedTitle,String updatedDare,String updatedBet,Date updatedDeadline){
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
}
