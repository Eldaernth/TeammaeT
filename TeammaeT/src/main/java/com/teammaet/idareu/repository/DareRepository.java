package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.AppUser;
import com.teammaet.idareu.model.Dare;
import com.teammaet.idareu.model.DareType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DareRepository extends JpaRepository<Dare, Long> {

    List<Dare> findAllByUserId(Long id);

    List<Dare> findAllByUserIdAndDareType(Long userId, DareType dareType);

//    @Query("SELECT d FROM Dare d JOIN d.user t where t.id = :userId and d.dareType = :dareType")
//    List<Dare> asd(@Param("userId") Long userId, @Param("dareType") DareType dareType);
}
