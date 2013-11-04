package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;

public class HotelMapperTest extends AbstractTestCase{

	@Autowired
	HotelMapper hotelMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testAdd() {
		hotelMapper.add(hotel);
	}

	@Test
	public void testGetByUid() {
		hotelMapper.getByUid(1);
	}

	@Test
	public void testUpdate() {
		hotelMapper.update(h);
	}

}
