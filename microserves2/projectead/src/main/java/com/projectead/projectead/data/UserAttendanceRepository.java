package com.projectead.projectead.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface UserAttendanceRepository extends JpaRepository<UserAttendance,Integer> {
}
