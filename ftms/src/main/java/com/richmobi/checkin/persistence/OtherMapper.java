package com.richmobi.checkin.persistence;

import com.richmobi.checkin.domain.Other;

public interface OtherMapper {

	/**
	 * 
	* @Title: add
	* @Description: 添加其他信息
	* @param @param other
	* @param @return
	* @return int
	* @throws
	 */
	int add(Other other);
	
	/**
	 * 
	* @Title: getByUid
	* @Description: 根据用户信息ID获取其他信息
	* @param @param uid
	* @param @return
	* @return Other
	* @throws
	 */
	Other getByUid(long uid);
	
	/**
	 * 
	* @Title: update
	* @Description: 更新其他信息
	* @param @param other
	* @return void
	* @throws
	 */
	void update(Other other);
}
