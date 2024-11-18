package com.projectead.projectead.data;
import jakarta.persistence.*;

import java.lang.reflect.GenericArrayType;
import java.sql.Date;


@Entity
@Table(name = "attendance")
public class UserAttendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendanceid")
    private int attendanceid;

    @Column(name = "name")
    private String name;

    @Column(name = "checkintime")
    private String checkintime;
    @Column(name = "checkouttime")
    private String checkouttime;
    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private Date date;

    public int getAttendanceid() {
        return attendanceid;
    }

    public void setAttendanceid(int attendanceid) {
        this.attendanceid = attendanceid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCheckintime() {
        return checkintime;
    }

    public void setCheckintime(String checkintime) {
        this.checkintime = checkintime;
    }

    public String getCheckouttime() {
        return checkouttime;
    }

    public void setCheckouttime(String checkouttime) {
        this.checkouttime = checkouttime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
