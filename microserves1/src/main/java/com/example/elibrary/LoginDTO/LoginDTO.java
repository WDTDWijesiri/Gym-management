package com.example.elibrary.LoginDTO;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginDTO {
    @Id
    private int id;
    private String fullname;
    private String address;
    private String email;
    private String uname;
    private String password;
    private String compassword;


}
