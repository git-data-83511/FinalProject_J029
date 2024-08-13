package com.app.service;

import com.app.dto.AddUserDto;
import com.app.dto.ApiResponse;
import com.app.dto.AuthRequest;
import com.app.dto.UserRespDTO;
import com.app.entities.User;

public interface UserService {
//user signin
	UserRespDTO authenticateUser(AuthRequest dto);

	User addUser(AddUserDto dto);
}
