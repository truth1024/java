package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.service.AbstractTestCase;

public class CheckinRecdMapperTest extends AbstractTestCase{

	@Autowired
	CheckinRecdMapper checkinRecdMapper;
	
	@Before
	public void setUp(){
		checkinRecdMapper.insert(checkinRecd);
	}
	
	@Test
	public void testInsert() {
		assertEquals(checkinRecd, checkinRecdMapper.getById(checkinRecd.getId()));
	}

	@Test
	public void testDelete() {
		checkinRecdMapper.delete(checkinRecd.getId());
		assertNull(checkinRecdMapper.getById(checkinRecd.getId()));
	}

	@Test
	public void testGetByUserId() {
		assertEquals(checkinRecd, checkinRecdMapper.getByUserId(checkinRecd.getUserId()));
	}

	@Test
	public void testGetById() {
		assertEquals(checkinRecd, checkinRecdMapper.getById(checkinRecd.getId()));
	}

}
