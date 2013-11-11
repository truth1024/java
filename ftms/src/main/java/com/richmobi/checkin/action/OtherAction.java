package com.richmobi.checkin.action;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.service.OtherService;

public class OtherAction extends BasicAction {

	private static final long serialVersionUID = 4710396194153479571L;
	private static final Logger log = Logger.getLogger(OtherAction.class);
	
	private Other other;
	private int status;
	private String method;
	private long id;
	
	@Autowired
	OtherService otherService;
	
	public String saveOther(){
		Other o = new Other();
		o.setUid(other.getUid());
		o.setMeeting(other.getMeeting());
		o.setTouristRoute(other.getTouristRoute());
		o.setTouristBack(other.getTouristBack());
		switch(other.getTouristRoute()){
			case 1:
				break;
			case 2:
				o.setHasPass(other.getHasPass());
				if(other.getHasPass() == 1){
					o.setIsVisa(other.getIsVisa());
					o.setSign(other.getSign());
					o.setEffectiveDate(other.getEffectiveDate());
				}
				break;
			case 3:
				break;
			case 4:
				o.setIsPlay(other.getIsPlay());
				o.setPlayAlmost(other.getPlayAlmost());
				o.setStature(other.getStature());
				o.setPlaySize(other.getPlaySize());
				o.setTouristBack(0);
				break;
		}
		log.debug(o);
		if(method == null || method.equals("") || method.equals("submit")){
			otherService.add(o);			
		}else{
			otherService.update(o);
		}
		status = 1;
		return "saveOther";
	}
	
	public String delete(){
		otherService.deleteOther(id);
		status = 1;
		return "delete";
	}
	
	public Other getOther() {
		return other;
	}
	public void setOther(Other other) {
		this.other = other;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
