package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;

public class OtherMapperTest extends AbstractTestCase{

	@Autowired
	OtherMapper otherMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testAdd() {
		otherMapper.add(other);
	}

	@Test
	public void testGetByUid() {
		otherMapper.getByUid(1);
	}

	@Test
	public void testUpdate() {
		otherMapper.update(o);
	}

}
