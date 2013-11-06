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

	@Autowired
	OtherService otherService;
	
	public String saveOther(){
		Other o = new Other();
		o.setUid(other.getUid());
		o.setMeeting(other.getMeeting());
		o.setTouristRoute(other.getTouristRoute());
		o.setHasPass(other.getHasPass());
		switch(other.getTouristRoute()){
			case 1:
				break;
			case 2:
				o.setTouristBack(other.getTouristBack());
				if(other.getHasPass() == 1){
					o.setIsVisa(other.getIsVisa());
					o.setSign(other.getSign());
					o.setEffectiveDate(other.getEffectiveDate());
				}
				break;
			case 3:
				o.setIsPlay(other.getIsPlay());
				o.setPlayAlmost(other.getPlayAlmost());
				o.setStature(other.getStature());
				o.setPlaySize(other.getPlaySize());
				break;
		}
		log.debug(o);
		otherService.add(o);
		status = 1;
		return "saveOther";
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
	
	
}
