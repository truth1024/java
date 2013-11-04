package com.richmobi.checkin.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richmobi.checkin.domain.PageResult;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.exception.UserAlreadyExistException;
import com.richmobi.checkin.persistence.UserMapper;
import com.richmobi.checkin.qrcode.GenerateQRCode;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	GenerateQRCode generateQRCode;
	
	@Autowired
	SmsService smsService;

	@Override
	public void add(User user) throws UserAlreadyExistException {
		if(user!= null){
			userMapper.insert(user);
			generateQRCode.generate(user);
//			smsService.send(user.getPhone());
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public void update(User user) {
		if(user != null){
			userMapper.update(user);
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public void batchUpdate(List<User> users) {
		
	}

	@Override
	public void deleteById(long id) {
		if(id > 0){
			userMapper.delete(id);
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public User getById(long id) {
		if(id > 0){
			return userMapper.getById(id);
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public User getByCode(String code) {
		if(StringUtils.isNotBlank(code)){
			return userMapper.getByCode(code);
		} else {
			throw new IllegalArgumentException();
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public PageResult<User> getUserByConditions(Map conditions, int page,
			int count) {
		System.err.println("page:" + page);
		PageResult<User> userPageResult = new PageResult<User>(page, count);
		if(page > 0 && count > 0){
			if(conditions == null){
				conditions = new HashMap();
			}
			conditions.put("start", userPageResult.getStart());
			conditions.put("limit", count);
			List<User> users =  userMapper.getByConditionsWithPage(conditions);
			userPageResult.setData(users);
			userPageResult.setTotalCount(userMapper.getCountByConditions(conditions));
			return userPageResult;
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public List<User> getAllUser() {
		return userMapper.getAllUser();
	}

	@SuppressWarnings({"rawtypes", "unchecked" })
	@Override
	public PageResult<User> getAllUserWithPage(int page, int count) {
		if(page > 0 && count > 0){
			PageResult<User> userPageResult = new PageResult<User>(page, count);
			Map startAndLimit = new HashMap();
			startAndLimit.put("start", userPageResult.getStart());
			startAndLimit.put("limit", count);
			List<User> users =  userMapper.getAllUserWithPage(startAndLimit);
			userPageResult.setData(users);
			return userPageResult;
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public List<User> getUsersWithoutCodeOrImgName() {
		return userMapper.getUsersWithoutCodeOrImgName();
	}


	@Override
	public void updatePhotoDate(User user) {
		userMapper.updatePhotoDate(user);
	}

	@Override
	public void updatePhotoName(User user) {
		userMapper.updatePhotoName(user);
	}

	@Override
	public void updateDaren(User user) {
		userMapper.updateDaren(user);
	}

	@Override
	@SuppressWarnings({"rawtypes", "unchecked" })
	public PageResult<User> orderByCode(Map conditions,int page,int count) {
		PageResult<User> userPageResult = new PageResult<User>(page, count);
		if(page > 0 && count > 0){
			if(conditions == null){
				conditions = new HashMap();
			}
			conditions.put("start", userPageResult.getStart());
			conditions.put("limit", count);
			List<User> users =  userMapper.orderByCodeOrDate(conditions);
			userPageResult.setData(users);
			userPageResult.setTotalCount(userMapper.getCountByConditions(conditions));
			return userPageResult;
		} else {
			throw new IllegalArgumentException();
		}

	}

	@Override
	public int getPhotoDateNum() {
		return userMapper.getPhotoDateNum();
	}

	@Override
	public void updatePrize(User user) {
		userMapper.updatePrize(user);
	}

	@Override
	public void addUsers(List<User> users) {
		userMapper.batchInsertUser(users);
	}

	@Override
	public List<User> getAllByConditions(Map conditions) {
		return userMapper.getAllByConditions(conditions);
	}

	@Override
	public List<User> getUserByPhone(String phone) {
		return userMapper.getByPhone(phone);
	}

	@Override
	public List<User> getByRegisterId(long registerId) {
		return userMapper.getByRegisterId(registerId);
	}
	
	
	
}
