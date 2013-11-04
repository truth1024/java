package com.richmobi.checkin.action;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.json.annotations.JSON;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;
import com.richmobi.checkin.domain.Conference;
import com.richmobi.checkin.exception.AlreadyCheckinException;
import com.richmobi.checkin.exception.UserNotFoundException;
import com.richmobi.checkin.service.CheckinService;
import com.richmobi.checkin.service.ConferenceService;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.util.Constant;

public class CheckinAction extends ActionSupport{

	private static final long serialVersionUID = 6667262204383648313L;
	
	@Autowired
	private CheckinService checkinService;
	@Autowired
	private ConferenceService conferenceService;
	
	private String code;
	
	private int status;
	
	private long userId;
	
	private int checkinWay;
	
	private List<Conference> conferences;
	
	public String gainConferences(){
		conferences = conferenceService.getAll();
		return SUCCESS;
	}
	
	public String checkin(){
		checkin(checkinWay);
		return SUCCESS;
	}
	
	public String bgCheckin(){
		//后台签到 代码：2
		checkin(Constant.CHECKIN_WARY_BACKGROUD);
		return SUCCESS;
	}
	
	
	public String checkout(){
		if(userId > 0){
			try{
				checkinService.checkout(userId);
				status = 200;
			}catch(Exception e){
				status = 500;
			}
		} else {
			status = 412;
		}
		return SUCCESS;
	}
	
	
	private void checkin(int way){
		if(StringUtils.isNotBlank(code)){
			try {
				checkinService.checkin(code, way);
				status = 200;
			} catch (UserNotFoundException e) {
				status = 404;
			} catch (AlreadyCheckinException e) {
				status = 510;
			} catch(Exception e){
				status = 500;
			}
		} else {
			status = 412;
		}
	}

	@JSON(serialize=false)
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@JSON(serialize=false)
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	@JSON(serialize=false)
	public int getCheckinWay() {
		return checkinWay;
	}
	public void setCheckinWay(int checkinWay) {
		this.checkinWay = checkinWay;
	}
	public List<Conference> getConferences() {
		return conferences;
	}
	public void setConferences(List<Conference> conferences) {
		this.conferences = conferences;
	}
}
