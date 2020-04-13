package com.example.dina.repository;

import com.example.dina.model.Dress;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DressRepository extends JpaRepository<Dress, Long> {
    Dress findByTitle(String title);

    @Query("from Dress")
    List<Dress> getAllByPage(Pageable pageable);
}
