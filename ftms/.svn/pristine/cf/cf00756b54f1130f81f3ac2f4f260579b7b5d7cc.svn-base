package com.richmobi.checkin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.Conference;
import com.richmobi.checkin.persistence.ConferenceMapper;
import com.richmobi.checkin.service.ConferenceService;

@Service
public class ConferenceServiceImpl implements ConferenceService {

	@Autowired
	ConferenceMapper conferenceMapper;
	
	@Override
	public List<Conference> getAll() {
		return conferenceMapper.getAll();
	}

	@Override
	public List<Conference> getByTypeId(long typeId) {
		return conferenceMapper.getByTypeId(typeId);
	}

}
