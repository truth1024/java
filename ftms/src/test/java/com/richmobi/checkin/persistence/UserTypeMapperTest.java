package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;

public class UserTypeMapperTest extends AbstractTestCase {

	@Autowired
	UserTypeMapper userTypeMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testBatchAdd() {
		userTypeMapper.batchAdd(uts);
	}

	@Test
	public void testGetById() {
		userTypeMapper.getById("1");
	}

	@Test
	public void testUpdateById() {
		userTypeMapper.updateById("2");
	}

}
