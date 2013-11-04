package com.richmobi.checkin.service;

import com.richmobi.checkin.domain.Traffic;

public interface TrafficService {

	/**
	 * 
	* @Title: add
	* @Description: 添加交通信息
	* @param @param traffic
	* @param @return
	* @return int
	* @throws
	 */
	long add(Traffic traffic);
	
	/**
	 * 
	* @Title: getByUid
	* @Description: 根据用户信息ID获取交通信息
	* @param @param uid
	* @param @return
	* @return Traffic
	* @throws
	 */
	Traffic getByUid(long uid);
	
	/**
	 * 
	* @Title: update
	* @Description: 更新交通信息
	* @param @param traffic
	* @return void
	* @throws
	 */
	void update(Traffic traffic);
}
