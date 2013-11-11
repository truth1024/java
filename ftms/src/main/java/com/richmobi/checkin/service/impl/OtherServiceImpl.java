package com.richmobi.checkin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.persistence.OtherMapper;
import com.richmobi.checkin.service.OtherService;

@Service
public class OtherServiceImpl implements OtherService {

	@Autowired
	OtherMapper otherMapper;
	
	@Override
	public long add(Other other) {
		otherMapper.add(other);
		return other.getId();
	}

	@Override
	public Other getByUid(long uid) {
		return otherMapper.getByUid(uid);
	}

	@Override
	public void update(Other other) {
		otherMapper.update(other);
	}

	@Override
	public void updateImageById(Other other) {
		otherMapper.updateImageById(other);
	}

	@Override
	public void deleteOther(long id) {
		otherMapper.delete(id);
	}

}
