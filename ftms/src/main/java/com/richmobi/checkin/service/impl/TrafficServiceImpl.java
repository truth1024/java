package com.richmobi.checkin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.persistence.TrafficMapper;
import com.richmobi.checkin.service.TrafficService;

@Service
public class TrafficServiceImpl implements TrafficService {

	@Autowired
	TrafficMapper trafficMapper;
	
	@Override
	public long add(Traffic traffic) {
		trafficMapper.add(traffic);
		return traffic.getId();
	}

	@Override
	public Traffic getByUid(long uid) {
		return trafficMapper.getByUid(uid);
	}

	@Override
	public void update(Traffic traffic) {
		trafficMapper.update(traffic);
	}

	@Override
	public void deleteTraffic(long id) {
		trafficMapper.delete(id);
	}

}
