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
//		if(other.getTouristRoute() != 2){
//			other.setHasPass(0);
//			other.setSign(0);
//			other.setIsVisa(0);
//			other.setEffectiveDate(null);
//			other.setTouristBack(0);
//		}else{
//			if(other.getHasPass() != 1){
//				other.setSign(0);
//				other.setIsVisa(0);
//				other.setEffectiveDate(null);
//			}
//		}
//		if(other.getTouristRoute() == 3){
//			
//		}
		log.debug(other);
//		otherService.add(other);
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
