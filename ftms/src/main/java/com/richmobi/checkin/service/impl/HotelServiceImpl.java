package com.richmobi.checkin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.Hotel;
import com.richmobi.checkin.persistence.HotelMapper;
import com.richmobi.checkin.service.HotelService;

@Service
public class HotelServiceImpl implements HotelService {

	@Autowired
	HotelMapper hotelMapper;
	
	@Override
	public long add(Hotel hotel) {
		hotelMapper.add(hotel);
		return hotel.getId();
	}

	@Override
	public Hotel getByUid(long uid) {
		return hotelMapper.getByUid(uid);
	}

	@Override
	public void update(Hotel hotel) {
		hotelMapper.update(hotel);
	}

	@Override
	public void deleteHotel(long id) {
		hotelMapper.delete(id);
	}


}
