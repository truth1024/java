package com.richmobi.checkin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.persistence.UserMapper;
import com.richmobi.checkin.service.UserSevice;

@Service
public class UserServiceImpl implements UserSevice {

	@Autowired
	UserMapper userMapper;
	
	@Override
	public long add(User user) {
		userMapper.add(user);
		return user.getId();
	}

	@Override
	public List<User> getByUid(String uid) {
		return userMapper.getByUid(uid);
	}

	@Override
	public User getById(long id) {
		return userMapper.getById(id);
	}

	@Override
	public void update(User user) {
		userMapper.update(user);
	}

	@Override
	public void delete(long id) {
		userMapper.delete(id);
	}

}
