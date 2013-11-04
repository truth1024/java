package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.service.AbstractTestCase;

public class UserTypeMapperTest extends AbstractTestCase {

	@Autowired
	UserTypeMapper userTypeMapper;
	
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testGetAll() {
		System.out.println(userTypeMapper.getAll().get(5));
		assertEquals(6,userTypeMapper.getAll().size());
	}

	@Test
	public void testGetByTypeId() {
		assertEquals("",userTypeMapper.getByTypeId(3));
	}

}
