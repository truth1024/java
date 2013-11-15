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
	
	private String lang;
	private User user;
	private EmailService emailService;
	
	public EmailUtil(){};
	
	public EmailUtil(String lang, User user,EmailService emailService){
		this.lang = lang;
		this.user = user;
		this.emailService = emailService;
	}
	
	public void run(){
		lang = ((lang != null && lang.equals("en")) ? lang : null);
		try {
			emailService.sendEmail(user,lang);
			System.out.println("###################################################################################");
			System.out.println(user.getEmail()+" send successfully!");
			System.out.println("###################################################################################");
		} catch (SendFailedException e) {
			try {
				emailService.sendEmail(user,lang);
				System.out.println("###################################################################################");
				System.out.println(user.getEmail()+" send successfully!");
				System.out.println("###################################################################################");
			} catch (SendFailedException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
	}

	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
