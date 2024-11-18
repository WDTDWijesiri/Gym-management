package com.example.client_scheduledemo.data;


import jakarta.persistence.*;
import org.w3c.dom.Text;

import java.util.Date;

@Entity
@Table(name = "schedule")
public class Schedule {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name="name")
    private String name;
    @Column(name="date")
    private String date;

    @Column(name="title")
    private String title;

    @Column(name="workout_plan")
    private String workout_plan;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWorkout_plan() {
        return workout_plan;
    }

    public void setWorkout_plan(String workout_plan) {
        this.workout_plan = workout_plan;
    }
}



