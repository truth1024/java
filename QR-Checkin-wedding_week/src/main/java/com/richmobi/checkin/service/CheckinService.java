package com.richmobi.checkin.service;

import com.richmobi.checkin.exception.AlreadyCheckinException;
import com.richmobi.checkin.exception.UserNotFoundException;

/** 
* @ClassName: CheckinService 
* @Description: 签到服务
* @author shuangfei.zhang
* @date 2012-3-21 下午2:11:36 
*  
*/
public interface CheckinService {
	
	/**
	* @Title: checkin
	* @Description: 用户签到
	* @param code 编号
	* @param way 签到方式
	* @throws UserNotFoundException
	* @throws AlreadyCheckinException
	* @throws
	*/
	public void checkin(String code, int way) throws UserNotFoundException,AlreadyCheckinException;
	
	/**
	* @Title: checkout
	* @Description: 取消签到
	* @param userId
	* @throws
	*/
	public void checkout(long userId);
	
	/**
	* @Title: isCheckin
	* @Description: 检查是否已经签到
	* @param userId
	* 			用户ID
	* @return
	* @throws
	*/
	public boolean isCheckin(long userId);
}

