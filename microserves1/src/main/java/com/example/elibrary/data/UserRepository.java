package com.example.elibrary.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    @Query("select u from User u where u.uname=?1")
    Optional<User> findByUname(String uname);
    @Query("select u from User u where u.uname=?1 AND u.password=?2")
    Optional<User> findByUnameAndPassword(String uname,String password);
}
