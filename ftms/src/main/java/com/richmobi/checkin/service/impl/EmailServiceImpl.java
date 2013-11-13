package com.richmobi.checkin.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.SendFailedException;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import richmobi.commons.utils.Configer;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.EmailService;
import com.richmobi.commons.email.MailSender;
import com.richmobi.commons.email.domain.Email;
import com.richmobi.commons.email.domain.HtmlImage;

@Service
public class EmailServiceImpl implements EmailService{
	
	private static final Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);
	
	@Autowired
	MailSender mailSender;
	
	@Override
	public boolean sendEmail(User user,String lang) throws SendFailedException {
		if(user != null && StringUtils.isNotBlank(user.getEmail())){
			Email email = new Email();
			email.addTo(StringUtils.trim(user.getEmail()));
			email.setFrom(Configer.get("mail.from"));
			email.setSubject(Configer.get("mail.default.subject"));
			
			Map<String, Object> model = new HashMap<String, Object>();
			model.put("domain", Configer.get("server.domain"));
			model.put("u",user);
			
			mailSender.sendEmailWithTemplate(email, Configer.get("mail.template."+lang+".name"), model);
			return Boolean.TRUE;
		} else {
			throw new IllegalArgumentException("user cannot be null or email cannot be empty!");
		}
	}
}
