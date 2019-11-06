package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface UserRepository extends JpaRepository<AppUser, Long> {
}
