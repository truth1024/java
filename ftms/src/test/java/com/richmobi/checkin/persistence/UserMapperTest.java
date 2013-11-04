package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;

public class UserMapperTest extends AbstractTestCase{

	@Autowired
	UserMapper userMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testAdd() {
		userMapper.add(user);
	}

	@Test
	public void testGetByUid() {
		userMapper.getByUid(1);
	}

	@Test
	public void testGetById() {
		userMapper.getById(1);
	}

	@Test
	public void testUpdate() {
		userMapper.update(u);
	}

	@Test
	public void testDelete() {
	}

}
