package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareType;
import com.teammaet.idareu.model.Friend;
import com.teammaet.idareu.repository.DareRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DareStorage {

    @Autowired
    private DareRepository dareRepository;

    private Logger logger = LoggerFactory.getLogger(DareStorage.class);

    public void save(Dare dare) {
        dareRepository.save(dare);
    }


    public Dare getDareBy(Long id) throws NullPointerException {
        return dareRepository.findById(id).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            logger.info(e.getMessage());
            throw e;
        });
    }

    public void delete(Dare dare) {
        dareRepository.delete(dare);
    }

//    public void update(Dare dare, Friend user) {
//        dare.doneBy(user);
//    }

    public List<Dare> getDares(Long id, DareType dareType) {
        return dareRepository.findAllByIdAndAndDareType(id,dareType);
    }


    public List<Dare> getAllDare(Long id) {
        return dareRepository.findAllById(id);
    }
}
