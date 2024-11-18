package com.projectead.projectead.service;

import com.projectead.projectead.controller.AttendanceController;
import com.projectead.projectead.data.UserAttendance;
import com.projectead.projectead.data.UserAttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    private UserAttendanceRepository userAttendanceRepository;

    public List<UserAttendance>  getAllUserAttendance(){
        return userAttendanceRepository.findAll();
    }
    public UserAttendance markAttendance(UserAttendance markattendance){
        return userAttendanceRepository.save(markattendance);
    }
    public UserAttendance updateAttendance(UserAttendance attendance){
        return userAttendanceRepository.save(attendance);
    }
    public void deleteAttendanceById(int id){
        userAttendanceRepository.deleteById(id);
    }

    public UserAttendance editUserAttendanceById(UserAttendance attendanceint,int attendanceid){
         return userAttendanceRepository.findById(attendanceid).map(attendance -> {
             attendance.setName(attendance.getName());
             attendance.setDate(attendance.getDate());
             attendance.setCheckintime(attendance.getCheckintime());
             attendance.setCheckouttime(attendance.getCheckouttime());
             attendance.setDescription(attendance.getDescription());
             return userAttendanceRepository.save(attendance);
         }).orElseThrow();

    }
}
