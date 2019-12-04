package com.teammaet.idareu.service;

import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareInformation;
import com.teammaet.idareu.model.DareType;
import com.teammaet.idareu.model.Video;
import com.teammaet.idareu.repository.DareRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DareService {

    @Autowired
    private DareRepository dareRepository;

    @Autowired
    private UserService userStorage;

    private Logger logger = LoggerFactory.getLogger(DareService.class);

    public void save(Dare dare){
        dareRepository.save(dare);
    }

    public void createDare(DareInformation dareInformation) {
        dareRepository.save(Dare.builder()
                .title(dareInformation.getTitle())
                .bet(dareInformation.getBet())
                .dare(dareInformation.getDare())
                .deadline(dareInformation.getDeadline())
                .user(userStorage.getUserById(dareInformation.getUserThatSends()))
                .dareType(DareType.sent)
                .build());
        for(int i=0;i<dareInformation.getFriendList().size();i++){
            dareRepository.save(Dare.builder()
                    .title(dareInformation.getTitle())
                    .bet(dareInformation.getBet())
                    .dare(dareInformation.getDare())
                    .deadline(dareInformation.getDeadline())
                    .user(userStorage.getUserById(dareInformation.getFriendList().get(i)))
                    .dareType(DareType.received)
                    .build());
        }

    }

    public Dare getDareBy(Long id) throws NullPointerException {
        return dareRepository.findById(id).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            logger.info(e.getMessage());
            throw e;
        });
    }

    public void delete(Long dareId) {
        dareRepository.delete(getDareBy(dareId));
    }

    public List<Dare> getDares(Long userId, DareType dareType) {
        return dareRepository.findAllByUserIdAndDareType(userId, dareType);
    }

    public List<Dare> getAllDare(Long userId) {
        return dareRepository.findAllByUserId(userId);
    }


}
