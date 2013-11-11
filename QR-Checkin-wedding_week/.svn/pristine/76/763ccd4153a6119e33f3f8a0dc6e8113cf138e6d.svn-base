package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.service.AbstractTestCase;

public class SmsSendRecdMapperTest extends AbstractTestCase{
	
	@Autowired
	SmsSendRecdMapper smsSendRecdMapper;
	
	@Before
	public void setUp(){
		smsSendRecdMapper.insert(smsSendRecd);
	}

	@Test
	public void testInsert() {
		assertEquals(smsSendRecd, smsSendRecdMapper.getById(smsSendRecd.getId()));
	}

	@Test
	public void testGetById() {
		assertEquals(smsSendRecd, smsSendRecdMapper.getById(smsSendRecd.getId()));
	}

	@Test
	public void testGetByUserId() {
		List ret = smsSendRecdMapper.getByUserId(smsSendRecd.getUserId());
		System.err.println(ret);
		assertNotNull(smsSendRecdMapper.getByUserId(smsSendRecd.getUserId()));
	}

}
