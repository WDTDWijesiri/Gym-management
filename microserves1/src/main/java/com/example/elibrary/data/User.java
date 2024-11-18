package com.example.elibrary.data;

import jakarta.persistence.*;

@Entity
@Table(name = "register")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "uname")
    private String uname;
    @Column(name = "password")
    private String password;
    @Column(name = "compassword")
    private String compassword;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFulname(String fullname) {
        this.fullname = fullname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmil(String email) {
        this.email = email;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassward(String password) {
        this.password = password;
    }

    public String getCompassword() {
        return compassword;
    }

    public void setCompassword(String compassword) {
        this.compassword = compassword;
    }
}
