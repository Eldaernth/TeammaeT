package com.teammaet.idareu.repository;

import com.teammaet.idareu.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video,Long> {
    List<Video> findAllByDareId(Long id);
}
