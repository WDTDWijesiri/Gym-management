package com.example.client_scheduledemo.service;


import com.example.client_scheduledemo.data.Schedule;
import com.example.client_scheduledemo.data.ScheduleRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {

    @Autowired
    ScheduleRepositary scheduleRepositary;

    public List<Schedule> getAllSchedule() {
        return scheduleRepositary.findAll();
    }

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepositary.save(schedule);
    }

    public Schedule updateSchedule(Schedule schedule) {
        return scheduleRepositary.save(schedule);
    }

    public Schedule getSchedulebyId(int id) {
        Optional<Schedule> schedule = scheduleRepositary.findById(id);//Int id
        if (schedule.isPresent()) {
            return schedule.get();
        }
        return null;
    }

    public void deleteSchedule(int id) {

        scheduleRepositary.deleteById(id);
    }

    public List<Schedule> findByName(String name){
        return scheduleRepositary.findByName(name);
    }
}








