package com.richmobi.checkin.persistence;

import java.util.List;

import com.richmobi.checkin.domain.UserType;

public interface UserTypeMapper {

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
	
	/**
	 * 
	* @Title: regist
	* @Description: 更改注册信息
	* @param @param id
	* @return void
	* @throws
	 */
	void regist(UserType userType);
}
