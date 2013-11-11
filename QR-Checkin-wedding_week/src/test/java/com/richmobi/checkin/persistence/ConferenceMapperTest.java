package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.service.AbstractTestCase;

public class ConferenceMapperTest extends AbstractTestCase {

	@Autowired
	ConferenceMapper conferenceMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testGetAll() {
		System.out.println(conferenceMapper.getAll().get(3));
		assertEquals(9,conferenceMapper.getAll().size());
	}

	@Test
	public void testGetByTypeId() {
		fail("Not yet implemented");
	}

}
