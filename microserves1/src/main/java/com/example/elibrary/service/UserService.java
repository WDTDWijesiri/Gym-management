package com.example.elibrary.service;

import com.example.elibrary.LoginDTO.LoginDTO;
import com.example.elibrary.data.User;
import com.example.elibrary.data.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;


    public User createUser(User user){
        return userRepository.save(user);
    }



    public LoginDTO userLogin(String uname, String password) {
        Optional<User> user = userRepository.findByUname(uname);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                return modelMapper.map(user.get(),LoginDTO.class);
            } else {
                throw new IllegalArgumentException("Incorrect password");
            }
        } else {
            throw new NoSuchElementException("Customer not found with user: " + uname);
        }
    }


    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

}
