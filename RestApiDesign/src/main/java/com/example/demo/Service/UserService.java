package com.example.demo.Service;

import java.util.List;

import com.example.demo.dao.User;

public interface UserService {
    User createUser(User user);

    User getUserById(Long userId);

    List<User> getAllUsers();

    User updateUser(User user);

    void deleteUser(Long userId);
}
