package com.richmobi.checkin.persistence;

import java.util.List;

import com.richmobi.checkin.domain.CheckinRecd;

public interface CheckinRecdMapper {
	/**
	* @Title: insert
	* @Description: 添加一条签到记录
	* @param checkinRecd
	* @throws
	*/
	public void insert(CheckinRecd checkinRecd);
	/**
	* @Title: delete
	* @Description: 删除一条签到记录
	* @param id
	* @throws
	*/
	public void delete(long id);
	
	
	/**
	* @Title: delete
	* @Description: 删除签到记录
	* @param userId
	* @throws
	*/
	public void deleteByUserId(long userId);
	
	/**
	* @Title: isCheckin
	* @Description: 检查用户是否已经注册
	* @param useId
	* @throws
	*/
	public List<CheckinRecd> getByUserId(long userId);
	
	/**
	* @Title: getById
	* @Description: 根据用户ID查询签到记录
	* @param id
	* @throws
	*/
	public CheckinRecd getById(long id);
}
