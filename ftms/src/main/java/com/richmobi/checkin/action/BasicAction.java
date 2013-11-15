package com.richmobi.checkin.action;

import javax.mail.SendFailedException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.EmailService;
import com.richmobi.checkin.service.UserSevice;
import com.richmobi.checkin.util.EmailUtil;

public class BasicAction extends ActionSupport implements Runnable{

	private static final long serialVersionUID = -6390491233685056370L;
	private static final Logger log = Logger.getLogger(BasicAction.class);
	protected String lang;
	
	@Autowired
	UserSevice userSevice;
	@Autowired
	EmailService emailService;
	
	protected String getContextURL(){
		HttpServletRequest request = ServletActionContext.getRequest();
		String reqURL = request.getRequestURL().toString();
		String reqURI = request.getRequestURI();
		log.debug(reqURL);
		log.debug(reqURI);
		return reqURL.substring(0, reqURL.indexOf(reqURI)) + request.getContextPath();
	}
	
	protected boolean sendEmail(long uid) throws SendFailedException{
		log.debug(lang);
		User user = userSevice.getById(uid);
		if(user != null && user.getHotel() != null && user.getTraffic() != null && user.getOther() != null){
			EmailUtil eu = new EmailUtil(lang, user, emailService);
			eu.start();
			return true;
		}else{
			return false;			
		}
	}

	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}

	@Override
	public void run() {
		
	}
}
