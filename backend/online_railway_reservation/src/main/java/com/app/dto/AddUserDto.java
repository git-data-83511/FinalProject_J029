package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddUserDto {
	private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private String role;
}
