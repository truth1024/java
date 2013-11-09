package com.richmobi.checkin.service;

import java.util.List;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;

public interface UserTypeService {

	/**
	 * 
	* @Title: batchAdd
	* @Description: 批量插入用户ID
	* @param @param userTypes
	* @return void
	* @throws
	 */
	void batchAdd(List<UserType> userTypes);
	
	/**
	 * 
	* @Title: getById
	* @Description: 根据用户ID获取用户所有信息
	* @param @param id
	* @param @return
	* @return UserType
	* @throws
	 */
	UserType getById(String id);
	
	/**
	 * 
	* @Title: getAll
	* @Description: 获取全部用户信息
	* @param @return
	* @return List<UserType>
	* @throws
	 */
	List<UserType> getAll();
	
	/**
	 * 
	* @Title: updateById
	* @Description: 更改登录时间
	* @param @param id
	* @return void
	* @throws
	 */
	void updateById(String id);
}
