package com.richmobi.checkin.action;


import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;
import com.richmobi.checkin.util.Utils;

public class GetQRCodeSms extends BasicAction{

	/** 
	* @Fields serialVersionUID : TODO
	*/ 
	private static final long serialVersionUID = 1804347134192935232L;
	
	private final Logger log = LoggerFactory.getLogger(BasicAction.class);
	
	private final String defaultToken = "0000013633f9dda8717200000000199621d3";
	
	private int status;
	
	@Autowired
	UserService userService;
	
	@Autowired
	SmsService smsService;
	
	
	
	@Override
	public String execute() throws Exception {
		List<User> users;
		HttpServletRequest request = ServletActionContext.getRequest();
		String phone = request.getParameter("phone");
		log.debug("phone:[{}]",phone);
		String token = request.getHeader("auth-token");
		log.debug("auth-token:[{}]",token);
		if(StringUtils.isNotBlank(token) && StringUtils.equals(token, defaultToken)){
			if(StringUtils.isNotBlank(phone) && Utils.isMobile(phone)){
				users = userService.getUserByPhone(phone);
				if(users.size() != 0){
					for(User user : users){
						smsService.sendNotificationSMS(user);						
					}
					status = 200;
				} else {
					status = 404;
				}
			} else {
				status = 412;
			}
		} else {
			status = 401;
		}
		log.debug("status:[{}]",status);
		return super.execute();
	}

	public int getStatus() {
		return status;
	}



	public void setStatus(int status) {
		this.status = status;
	}

}
