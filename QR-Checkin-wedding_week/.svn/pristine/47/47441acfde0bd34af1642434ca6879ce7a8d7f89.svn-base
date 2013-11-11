package com.richmobi.checkin.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richmobi.commons.utils.Configer;

import com.richmobi.checkin.domain.CheckinRecd;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.exception.AlreadyCheckinException;
import com.richmobi.checkin.exception.UserNotFoundException;
import com.richmobi.checkin.persistence.CheckinRecdMapper;
import com.richmobi.checkin.service.CheckinService;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;
import com.richmobi.checkin.util.Constant;

@Service
public class CheckinServiceImpl implements CheckinService {
	
	@Autowired
	CheckinRecdMapper checkinRecdMapper;

	@Autowired
	UserService userService;
	
	@Autowired
	private SmsService smsService;
	
	@Override
	public void checkout(long userId) {
		if(userId > 0){
			checkinRecdMapper.deleteByUserId(userId);
		} else {
			throw new IllegalArgumentException();
		}
	}

	@Override
	public boolean isCheckin(long userId) {
		if (userId > 0) {
			if(Configer.get("checkinMaxNum") != null && !Configer.get("checkinMaxNum").equals("")){
				return checkinRecdMapper.getByUserId(userId).size() > Integer.parseInt(Configer.get("checkinMaxNum")) ? Boolean.TRUE
						: Boolean.FALSE;
			}else{
				return false;
			}
		} else {
			throw new IllegalArgumentException();
		}
	}
	
	
	
	
	@Override
	public void checkin(String code, int way) throws UserNotFoundException,
			AlreadyCheckinException {
		User user;
		if(StringUtils.isNotBlank(code)){
			user = userService.getByCode(code);
			if(user != null){
				if(isCheckin(user.getId())){
					throw new AlreadyCheckinException();
				} else {
					checkinRecdMapper.insert(new CheckinRecd(user.getId(), way));
					//如果开启签到后发短信开关，则发送短信
					if(Constant.CHECKIN_AUTO_SEND_SMS == Configer.getInt("checkin.auto.send.sms")){
//						smsService.sendSuccessSMS(user);
					} 
					
				}
			} else {
				throw new UserNotFoundException();
			}
		} else {
			throw new IllegalArgumentException();
		}
	}
}
