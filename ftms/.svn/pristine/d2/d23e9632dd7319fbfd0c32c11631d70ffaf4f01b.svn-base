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
	public List<UserType> getAll() {
		return userTypeMapper.getAll();
	}

	@Override
	public UserType getByTypeId(long typeId) {
		return userTypeMapper.getByTypeId(typeId);
	}

}
