package com.richmobi.checkin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.persistence.UserTypeMapper;
import com.richmobi.checkin.service.UserTypeService;

@Service
public class UserTypeServiceImpl implements UserTypeService {

	@Autowired
	UserTypeMapper userTypeMapper;
	
	@Override
	public void batchAdd(List<UserType> userTypes) {
		userTypeMapper.batchAdd(userTypes);
	}

	@Override
	public UserType getById(String id) {
		return userTypeMapper.getById(id);
	}

	
	@Override
	public void updateById(String id) {
		userTypeMapper.updateById(id);
	}

	@Override
	public List<UserType> getAll() {
		return userTypeMapper.getAll();
	}

	@Override
	public void regist(String id,int registered) {
		UserType ut = new UserType();
		ut.setId(id);
		ut.setRegistered(registered);
		userTypeMapper.regist(ut);
	}

}
