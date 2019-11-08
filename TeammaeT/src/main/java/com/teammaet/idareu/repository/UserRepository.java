package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

public interface UserRepository extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findAppUserByName(String name);

    @Modifying
    @Transactional
    @Query("UPDATE AppUser A SET A.friendList = :friendList where A.id = :userId")
    void addFriend(@Param("userId") Long userId, @Param("friendList") Set<Long> friendList);
}
