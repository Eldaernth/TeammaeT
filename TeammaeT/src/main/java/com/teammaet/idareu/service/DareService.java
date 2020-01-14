package com.teammaet.idareu.service;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareInformation;
import com.teammaet.idareu.repository.DareRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class DareService {

    @Autowired
    private DareRepository dareRepository;

    @Autowired
    private UserService userService;

    public void save(Dare dare) {
        dareRepository.save(dare);
    }

    public void createDare(DareInformation dareInformation) {

        List<AppUser> friendList = new ArrayList<>();
        for (Long friendId : dareInformation.getFriendList()) {
            friendList.add(userService.getUserById(friendId));
        }

        dareRepository.save(Dare.builder()
                .title(dareInformation.getTitle())
                .bet(dareInformation.getBet())
                .dare(dareInformation.getDare())
                .deadline(dareInformation.getDeadline())
                .userFrom(userService.getUserById(dareInformation.getUserThatSends()))
                .userTo(friendList)
                .build());

    }

    public Dare getDareBy(Long id) throws NullPointerException {
        return dareRepository.findById(id).orElseThrow(() -> {
            NullPointerException e = new NullPointerException("User not found.");
            log.info(e.getMessage());
            throw e;
        });
    }

    public void delete(Long dareId) {
        dareRepository.delete(getDareBy(dareId));
    }

//    public List<Dare> getDares(Long userId, DareType dareType) {
//        return dareRepository.findAllByUserIdAndDareType(userId, dareType);
//    }

    public List<Dare> getReceivedDares(Long userId) {
        AppUser user = userService.getUserById(userId);
        return dareRepository.findAllByUserToContains(user);
    }

    public List<Dare> getSentDares(Long userId) {
        AppUser user = userService.getUserById(userId);
        return dareRepository.findAllByUserFrom(user);
    }

//    public List<Dare> getAllDare(Long userId) {
//        return dareRepository.findAllByUserId(userId);
//    }


}
