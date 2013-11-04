package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;
import com.richmobi.checkin.domain.Traffic;

public class TrafficMapperTest extends AbstractTestCase {

	@Autowired
	TrafficMapper trafficMapper;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testAdd() {
		trafficMapper.add(traffic);
	}

	@Test
	public void testGetByUid() {
		Traffic ts = trafficMapper.getByUid(1); 
//		assertEquals("其他", ts.getDepartureTrafficTool());
	}

	@Test
	public void testUpdate() {
		trafficMapper.update(t);
	}

}
