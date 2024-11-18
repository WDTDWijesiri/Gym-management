package com.example.client_scheduledemo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ScheduleRepositary extends JpaRepository<Schedule,Integer> {
    @Query("select s from Schedule s where s.name=?1")
    List<Schedule> findByName(String name);
}
