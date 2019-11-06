package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DareRepository extends JpaRepository<Dare, Long> {

    List<Dare> findAllByUserId(Long id);

    List<Dare> findAllByUserIdAndDareType(Long userId, DareType dareType);


}
