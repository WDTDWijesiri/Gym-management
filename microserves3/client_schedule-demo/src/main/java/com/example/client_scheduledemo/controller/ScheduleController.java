package com.example.client_scheduledemo.controller;


import com.example.client_scheduledemo.data.Schedule;
import com.example.client_scheduledemo.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping(path="/schedules")
    public List<Schedule> getAllSchedule(){
        return scheduleService.getAllSchedule();
    }

    @PostMapping(path = "/schedules")
    public Schedule createSchedule(@RequestBody Schedule schedule){

        return scheduleService.createSchedule(schedule);
    }

    @GetMapping(path = "/schedules/{id}")
    public Schedule getSchedulebyId(@PathVariable int  id){

        return scheduleService.getSchedulebyId(id);
    }
    @DeleteMapping(path = "/schedules/{id}")
    public void  deleteScheduleById(@PathVariable int  id){

        scheduleService.deleteSchedule(id);
    }
    @PutMapping(path = "/schedules")
    public Schedule updateStudent(@RequestBody Schedule schedule){
        return scheduleService.updateSchedule(schedule);
    }

    @GetMapping(path = "/schedules",params = {"name"})
    public List<Schedule> findByName(@RequestParam String name){
        return scheduleService.findByName(name);
    }
}
