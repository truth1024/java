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

import com.richmobi.checkin.constant.Constant;
import com.richmobi.checkin.domain.Hotel;
import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.EmailService;
import com.richmobi.checkin.util.Utils;
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
		log.debug("lang : "+lang);
		if(user != null && StringUtils.isNotBlank(user.getEmail())){
			Map<String, Object> model = new HashMap<String, Object>();
			Hotel h = user.getHotel();
			Traffic t = user.getTraffic();
			Other o = user.getOther();
			//个人信息
			model.put("domain", Configer.get("server.domain"));
			model.put("u",user);
			model.put("sex",Utils.sex(user.getSex(), lang));
			model.put("title",Utils.title(user.getTitle(), lang));
			model.put("company",Utils.company(user.getCompany(), lang));
			model.put("birthDate",Utils.dateFormat(user.getBirthDate()));
			model.put("nation",Utils.nationality(user.getNationality(), lang));
			String[] cers = user.getCertificate().split("#");
			model.put("cerType",Utils.cer(cers[0], lang));
			model.put("cerNum",cers[1]);
			model.put("diet",Utils.diet(user.getDiet(), lang));
			model.put("contactTelephone",((user.getContactTelephone() == null || user.getContactTelephone().equals("")) ? " " : user.getContactTelephone()));
			//酒店安排
			model.put("isStay",Utils.yseOrNo(h.getIsStay(), lang));
			model.put("inDate",Utils.dateFormat(h.getInDate()));
			model.put("outDate",Utils.dateFormat(h.getOutDate()));
			model.put("room",Utils.room(h.getRoom(), lang));
			model.put("isWith",Utils.yseOrNo(h.getIsWith(), lang));
			//交通安排
			model.put("deparTool",Utils.deparTrafficTool(t.getDepartureTrafficTool(), lang));
			model.put("deparCity2",Utils.city(t.getDepartureCity2(), lang));
			model.put("arrivalDate",Utils.dateFormat(t.getArrivalDate()));
			model.put("arrivalTime",Utils.timeFormat(t.getArrivalDate()));
			model.put("pickup",Utils.yseOrNo(t.getPickUp(), lang));
			model.put("backTool",Utils.backTrafficTool(t.getBackTrafficTool(), lang));
			model.put("backCity2",Utils.city(t.getBackCity2(), lang));
			model.put("backDate",Utils.dateFormat(t.getBackDate()));
			model.put("backTime",Utils.timeFormat(t.getBackDate()));
			model.put("send",Utils.yseOrNo(t.getSend(), lang));
			//商务活动
			model.put("meeting",Utils.yseOrNo(o.getMeeting(), lang));
			model.put("route",Utils.route(o.getTouristRoute(), lang));
			model.put("hasPass",Utils.hasPass(o.getHasPass(), lang));
			model.put("visa",Utils.visa(o.getIsVisa(), lang));
			model.put("sign",Utils.gol(o.getSign(), lang));
			model.put("eDate",Utils.dateFormat(o.getEffectiveDate()));
			model.put("back", Utils.touristBack(o.getTouristBack(), lang));
			model.put("stature", Utils.stature(o.getStature(), lang));
			model.put("size",Utils.playSize(o.getPlaySize(), lang));
			model.put("playBack",Utils.playBack(o.getPlayBack(), lang));
			model.put("playAlmost",(o.getPlayAlmost() == null || o.getPlayAlmost().equals("") ? "" : o.getPlayAlmost()));
			log.debug(o.getPlayAlmost());
			//发送邮件
			lang = (lang == null ? "cn" : lang);
			Email email = new Email();
			email.addTo(StringUtils.trim(user.getEmail()));
			email.setFrom(Configer.get("mail.from"));
			email.setSubject(Configer.get("mail."+lang+".subject"));
			mailSender.sendEmailWithTemplate(email, Configer.get("mail.template."+lang+".name"), model);
			return Boolean.TRUE;
		} else {
			throw new IllegalArgumentException("user cannot be null or email cannot be empty!");
		}
	}
}
