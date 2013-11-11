package com.richmobi.checkin.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.velocity.app.VelocityEngine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;

import richmobi.commons.utils.Configer;

import com.richmobi.checkin.domain.SmsSendRecd;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.persistence.SmsSendRecdMapper;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;
import com.richmobi.sms.domain.SMS;
import com.richmobi.sms.domain.SMSParm;
import com.richmobi.sms.service.SendSmsService;
@Service
public class SmsServiceImpl implements SmsService {
	

private final Logger log = LoggerFactory.getLogger(SmsService.class);
	
	@Autowired
	SendSmsService sendSmsService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	SmsSendRecdMapper smsSendRecdMapper;
	
	@Autowired
	VelocityEngine smsVelocityEngine;
	

	@Override
	public boolean sendSMS(User user, String msg){
		if(StringUtils.isNotBlank(user.getPhone()) && StringUtils.isNotBlank(msg)){
			SMS sms=new SMS();
			SMSParm smsParm=new SMSParm();
			smsParm.setTo_phone(StringUtils.trim(user.getPhone()));
			smsParm.setMsg(msg);
			smsParm.setApp_key(Configer.get("sms.app.key"));
			try {
				log.info("start send sms to phone [{}] ...", user.getPhone());
				log.debug("phone:" + user.getPhone() + " msg:" + msg);
				 sms=sendSmsService.sendSmsMsg(smsParm);
				 log.debug("send status:{}",sms.getResultCode());
				 if(sms.getResultCode() == 0){
						smsSendRecdMapper.insert(new SmsSendRecd(user.getId()));
						log.info("send sms to phone [{}] success!",user.getPhone());
						return Boolean.TRUE;
					} else {
						log.error("send sms to phone [{}] failed!",user.getPhone());
						return Boolean.FALSE;
					}
			} catch (Exception e) {
				e.printStackTrace();
				log.error("send sms to phone [{}] failed!",user.getPhone());
				log.error(e.getMessage(),e);
				return Boolean.FALSE;
			}
		} else {
			return Boolean.FALSE;
		}
	}

	@Override
	public boolean sendNotificationSMS(User user) {
		if(user != null){
			return sendSMS(user, buildNotificationSMS(user));
		} else {
			throw new IllegalArgumentException("user cannot be null!");
		}
	}

	@Override
	public boolean sendSuccessSMS(User user) {
		if(user != null){
			return sendSMS(user, buildSuccessSMS(user));
		} else {
			throw new IllegalArgumentException("user cannot be null!");
		}
	}
	
	
	
	/**
	 * 构造通知短信内容
	 * 
	 * @param user
	 * 		用户信息
	 * @return
	 * 		通知短信内容
	 */
	private String buildNotificationSMS(User user) {
		Map<String, String> model;
		model = new HashMap<String, String>();
		model.put("name", user.getName());
		model.put("qrCode", user.getCode());
		model.put("domain", Configer.get("server.domain"));
		return getContent(Configer.get("sms.template.notification"), model);
	}
	
	/**
	 * 构造签到成功短信
	 * 
	 * @param user
	 * 		用户信息
	 * @return
	 * 		签到成功短信内容
	 */
	private String buildSuccessSMS(User user){
		Map<String, String> model;
		model = new HashMap<String, String>();
		model.put("name", user.getName());
		return getContent(Configer.get("sms.template.success"), model);
	}
	
	/**
	 * 根据模板和参数获取短信内容
	 * 
	 * @param template
	 * 			模板名称
	 * @param model
	 * 			参数
	 * @return
	 * 			短信内容
	 */
	private String getContent(String template, Map<String, String> model){
		return  VelocityEngineUtils.mergeTemplateIntoString(
				smsVelocityEngine, template, "UTF-8", model);
	}
	

}
