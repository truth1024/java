package com.richmobi.checkin.action;

import java.util.ArrayList;
import java.util.List;

import javax.mail.SendFailedException;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.json.annotations.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.EmailService;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;

public class SendSmsAction extends BasicAction{

	private static final long serialVersionUID = 3107942216889429236L;
	
	private final Logger log = LoggerFactory.getLogger(BasicAction.class);
	
	@Autowired
	UserService userService;
	
	@Autowired
	SmsService smsService;
	
	@Autowired
	EmailService emailService;
	
	private long userId;
	private long[] userIds;
	
	private int successCount;
	
	private int emailSuccessCount;
	
	private List<String> errs  = new ArrayList<String>();
	
	private List<String> emailErrs = new ArrayList<String>();
	
	private int status;
	
	public String send() {
		User user;
		if (userId > 0) {
			user = userService.getById(userId);
			if (user != null) {
				try {
					if (StringUtils.isNotBlank(user.getPhone())) {
						if(smsService.sendNotificationSMS(user)){
							successCount++;
						}else{
							errs.add(user.getPhone());
						}
					}
				} catch (Exception e) {
					status = 500;
					log.error("send sms error", e);
				}
				sendEmail(user);
				status = 200;
			} else {
				status = 404;
			}
		} else {
			status = 412;
		}
		return SUCCESS;
	}
	
	public String sendBulkSms(){
		User user;
		if(userIds.length > 0){
			try{
				for(long id: userIds){
					user = userService.getById(id);
					if(user != null){
						//send sms
						try{
							if(StringUtils.isNotBlank(user.getPhone())){
								smsService.sendNotificationSMS(user);
								successCount++;
							}
						}catch(Exception e){
							errs.add(user.getPhone());
							log.error(e.getMessage(),e);
						}
						sendEmail(user);
					}
				}
				status = 200;
			}catch(Exception e){
				status =500;
				log.error("send sms error.",e);
			}
		} else {
			status = 412;
		}
		return SUCCESS;
	}
	
	public String sendToAll(){
		try{
			List<User> users = userService.getAllUser();
			log.debug("count of user:" + users.size());
			for(User user: users){
				try{
					if(StringUtils.isNotBlank(user.getPhone())){
						log.debug("phone:[{}]",user.getPhone());
						smsService.sendNotificationSMS(user);
						successCount++;
					}
				}catch(Exception e){
					log.error(e.getMessage());
					errs.add(user.getPhone());
				}
				sendEmail(user);
			}
			status = 200;
		}catch(Exception e){
			status = 500;
			log.error(e.getMessage());
		}
		return SUCCESS;
	}
	
	
	private void sendEmail(User user){
		if(StringUtils.isNotBlank(user.getEmail())){
			try {
				emailService.sendEmail(user);
				emailSuccessCount++;
			} catch (Exception e) {
				emailErrs.add(user.getEmail());
				log.error("send email failed!",e);
				e.printStackTrace();
			}
		}
	}

	@JSON(serialize=false)
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@JSON(serialize=false)
	public long[] getUserIds() {
		return userIds;
	}

	public void setUserIds(long[] userIds) {
		this.userIds = userIds;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getSuccessCount() {
		return successCount;
	}

	public void setSuccessCount(int successCount) {
		this.successCount = successCount;
	}

	public List<String> getErrs() {
		return errs;
	}

	public void setErrs(List<String> errs) {
		this.errs = errs;
	}

	public int getEmailSuccessCount() {
		return emailSuccessCount;
	}

	public void setEmailSuccessCount(int emailSuccessCount) {
		this.emailSuccessCount = emailSuccessCount;
	}

	public List<String> getEmailErrs() {
		return emailErrs;
	}

	public void setEmailErrs(List<String> emailErrs) {
		this.emailErrs = emailErrs;
	}
	
	
	

}
