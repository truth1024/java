package com.richmobi.checkin.persistence;

import static org.junit.Assert.*;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.AbstractTestCase;

public class UserMapperTest extends AbstractTestCase{
	
	@Autowired
	UserMapper userMapper;
	
	@Before
	public void setUp(){
		userMapper.insert(user);
	}
	
	@Test
	public void testInsert(){
			userMapper.insert(user);
		assertNotNull(user.getId());
	}

	@Test
	public void testGetById(){
		assertEquals(user, userMapper.getById(user.getId()));
	}
	
	@Test
	public void testDelete(){
		userMapper.delete(user.getId());
		assertNull(userMapper.getById(user.getId()));
	}
	
	@Test
	public void testUpdate(){
		user.setName("updateName");
		
		user.setPhotoName("ddddd");
		user.setDaren("re");
		userMapper.update(user);
		System.out.println("###########"+userMapper.getById(user.getId()).getPhotoName());
		System.out.println("###########"+userMapper.getById(user.getId()).getDaren());
		assertEquals(user.getName(), userMapper.getById(user.getId()).getName());
		assertEquals(user.getPhotoName(), userMapper.getById(user.getId()).getPhotoName());
		assertEquals(user.getDaren(), userMapper.getById(user.getId()).getDaren());
	}
	
	@Test
	public void testGetPhotoDateNum(){
		assertEquals(2,userMapper.getPhotoDateNum());
	}
	
	@Test
	public void testUpdataPhotoDate(){
		u.setId(47);
		userMapper.updatePhotoDate(u);
		System.out.println(userMapper.getById(47));
	}
	
	@Test
	public void testUpdataPhotoName(){
		u.setPhotoName("shenmeddd");
		userMapper.updatePhotoName(u);
		assertEquals(u.getPhotoName(),userMapper.getById(u.getId()).getPhotoName());
	}
	
	@Test
	public void testUpdataDaren(){
		u.setDaren("daren");
		userMapper.updateDaren(u);
		assertEquals(u.getDaren(),userMapper.getById(u.getId()).getDaren());
	}
	
	@Test
	public void testGetByCode(){
		assertEquals(user, userMapper.getByCode(user.getCode()));
	}
	
	@Test
	public void testGetAllUser(){
		assertTrue(userMapper.getAllUser().size() > 0);
	}

	@Test
	public void testGetUsersWithoutCodeOrImgName(){
		user.setCode(null);
		userMapper.update(user);
		assertTrue(userMapper.getUsersWithoutCodeOrImgName().size() > 0);
	}
	
}
