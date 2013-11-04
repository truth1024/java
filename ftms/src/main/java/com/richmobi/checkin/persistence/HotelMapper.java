package com.richmobi.checkin.persistence;

import com.richmobi.checkin.domain.Hotel;

public interface HotelMapper {
	
	/**
	 * 
	* @Title: add
	* @Description: 添加酒店信息
	* @param @param hotel
	* @param @return
	* @return int
	* @throws
	 */
	int add(Hotel hotel);
	
	/**
	 * 
	* @Title: getByUid
	* @Description: 根据用户信息ID获取酒店信息
	* @param @param uid
	* @param @return
	* @return Hotel
	* @throws
	 */
	Hotel getByUid(long uid);
	
	/**
	 * 
	* @Title: update
	* @Description: 更新酒店信息
	* @param @param hotel
	* @return void
	* @throws
	 */
	void update(Hotel hotel);
}
