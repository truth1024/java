package com.richmobi.checkin.service;

import com.richmobi.checkin.domain.Hotel;

public interface HotelService {

	/**
	 * 
	* @Title: add
	* @Description: 添加酒店信息
	* @param @param hotel
	* @param @return
	* @return int
	* @throws
	 */
	long add(Hotel hotel);
	
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
	
	/**
	 * 
	* @Title: delete
	* @Description: 删除酒店信息
	* @param @param hotel
	* @return void
	* @throws
	 */
	void deleteHotel(long id);
}
