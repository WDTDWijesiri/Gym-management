package com.example.elibrary.controller;

import com.example.elibrary.LoginDTO.LoginDTO;
import com.example.elibrary.LoginRespons.LoginResponse;
import com.example.elibrary.data.User;
import com.example.elibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.NoSuchElementException;

@RestController
@CrossOrigin
//@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(path = "/users")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }
//    @GetMapping(path = "/users")
//    public List<User> getUser()
//    {
//        return userService.getUser();
//    }
@PostMapping("/login")
public ResponseEntity<LoginDTO> userLogin(@RequestBody LoginDTO loginDTO) {
    String uname = loginDTO.getUname();
    String password = loginDTO.getPassword();
    LoginDTO loggedInUser = userService.userLogin(uname, password);
    if (loggedInUser != null) {
        return ResponseEntity.ok(loggedInUser);
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable int id)
    {
        userService.deleteUser(id);
    }

}
