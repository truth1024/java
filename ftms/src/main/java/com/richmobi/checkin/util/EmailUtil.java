package com.richmobi.checkin.util;

import javax.mail.SendFailedException;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.EmailService;
import com.richmobi.checkin.service.UserSevice;

@Component
public class EmailUtil extends Thread {
	
	private static final Logger log = Logger.getLogger(EmailUtil.class);
	
	private long uid;
	private String lang;
	private UserSevice userSevice;
	private EmailService emailService;
	
	public EmailUtil(){};
	
	public EmailUtil(long uid,String lang, UserSevice userSevice,EmailService emailService){
		this.uid = uid;
		this.lang = lang;
		this.userSevice = userSevice;
		this.emailService = emailService;
	}
	
	public void run(){
		System.out.println(uid);
		System.out.println(userSevice);
		User user = userSevice.getById(uid);
		log.debug(user);
		if(user != null && user.getHotel() != null && user.getTraffic() != null && user.getOther() != null){
			try {
				lang = (lang == "en" ? lang : null);
				emailService.sendEmail(user,lang);
				System.out.println(user.getEmail()+" send successfully!");
			} catch (SendFailedException e) {
				e.printStackTrace();
			}
		}
	}

	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public UserSevice getUserSevice() {
		return userSevice;
	}
	public void setUserSevice(UserSevice userSevice) {
		this.userSevice = userSevice;
	}
	public EmailService getEmailService() {
		return emailService;
	}
	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	 
	 
}
