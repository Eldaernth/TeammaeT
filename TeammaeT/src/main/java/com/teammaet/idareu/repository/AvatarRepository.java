package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.Avatar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvatarRepository extends JpaRepository<Avatar,Long> {
    Avatar findByAppUser(Long id);
}
