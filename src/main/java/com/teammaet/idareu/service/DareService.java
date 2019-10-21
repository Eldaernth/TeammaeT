package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;

import java.util.Date;
import java.util.List;

public class DareService {
    public void createDare(List<Dare> dareList,String title, String dare, String bet, Date deadline){
        Dare dare1 = new Dare(title,dare,bet,deadline);
        dareList.add(dare1);
    }
}
