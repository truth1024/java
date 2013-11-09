package com.richmobi.checkin.persistence;

import java.util.List;

import com.richmobi.checkin.domain.User;

public interface UserMapper {
	
	/**
	 * 
	* @Title: add
	* @Description: 添加用户基本信息
	* @param @param user
	* @param @return
	* @return int
	* @throws
	 */
	int add(User user);
	
	/**
	 * 
	* @Title: getByUid
	* @Description: 根据用户ID获取用户信息列表
	* @param @param uid
	* @param @return
	* @return List<User>
	* @throws
	 */
	List<User> getByUid(String uid);
	
	/**
	 * 
	* @Title: getById
	* @Description: 根据用户信息ID获取基本信息
	* @param @param id
	* @param @return
	* @return User
	* @throws
	 */
	User getById(long id);
	
	/**
	 * 
	* @Title: update
	* @Description: 更新基本信息
	* @param @param user
	* @return void
	* @throws
	 */
	void update(User user);
	
	/**
	 * 
	* @Title: delete
	* @Description: 删除用户信息
	* @param @param id
	* @return void
	* @throws
	 */
	void delete(long id);
}
