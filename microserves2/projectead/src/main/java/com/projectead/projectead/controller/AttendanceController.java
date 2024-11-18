package com.projectead.projectead.controller;

import com.projectead.projectead.data.UserAttendance;
import com.projectead.projectead.data.UserAttendanceRepository;
import com.projectead.projectead.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController


public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;
    @GetMapping(path = "/attendance")
    public  List<UserAttendance> getAllUserAttendance(){
        return attendanceService.getAllUserAttendance();
    }

    @PostMapping(path = "/attendance")
    public UserAttendance markAttendance(@RequestBody UserAttendance markattendance){
       return attendanceService.markAttendance(markattendance);
    }
    @PutMapping(path = "/attendance")
    public UserAttendance attendance(@RequestBody UserAttendance attendance){
        return attendanceService.updateAttendance(attendance);
    }
    @DeleteMapping(path = "/attendance/{id}")
    public void deleteAttendaceById(@PathVariable int id){
        attendanceService.deleteAttendanceById(id);
    }


    @PutMapping(path = "/attendance/{id}")
    public UserAttendance   editUserAttendanceById(@RequestBody UserAttendance attendance,@PathVariable int attendanceid){
     return attendanceService.editUserAttendanceById(attendance,attendanceid);
    }

}
