package com.richmobi.checkin.action;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.mail.SendFailedException;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.service.OtherService;
import com.richmobi.checkin.service.TrafficService;
import com.richmobi.checkin.service.UserTypeService;

public class TrafficAction extends BasicAction {

	private static final long serialVersionUID = -3716945141844858871L;
	private static final Logger log = Logger.getLogger(TrafficAction.class);
	
	private Traffic traffic;
	private String arrivalDate;
	private String arrivalTime;
	private String backDate;
	private String backTime;
	private int status;
	private String method;
	private long id;
	private Other other;
	private String bigId;
	
	@Autowired
	TrafficService trafficService;
	@Autowired
	OtherService otherService;
	@Autowired
	UserTypeService userTypeService;
	
	public String saveTraffic() throws Exception{
		log.debug(traffic);
		//交通安排
		DateFormat format1 = new SimpleDateFormat("yyyy-MM-ddHH:mm");
		if(traffic.getDepartureTrafficTool().equals("1")){
			traffic.setArrivalDate(format1.parse(arrivalDate+arrivalTime));
		}else{
			traffic.setPickUp(0);
			traffic.setDepartureCity1("");
			traffic.setDepartureCity2(0);
			traffic.setArrivalDate(null);
			traffic.setDepartureFlight("");
		}
		if(traffic.getBackTrafficTool().equals("1")){
			traffic.setBackDate(format1.parse(backDate+backTime));			
		}else{
			traffic.setSend(0);
			traffic.setBackCity1("");
			traffic.setBackCity2(0);
			traffic.setBackDate(null);
			traffic.setBackFlight("");
		}
		//商务活动
		Other o = new Other();
		o.setUid(other.getUid());
		o.setMeeting(other.getMeeting());
		o.setTouristRoute(other.getTouristRoute());
		o.setTouristBack(other.getTouristBack());
		switch(other.getTouristRoute()){
			case 1:
				o.setHasPass(other.getHasPass());
				if(other.getHasPass() == 1){
					o.setIsVisa(other.getIsVisa());
					if(other.getIsVisa() == 1){						
						o.setSign(other.getSign());
						o.setEffectiveDate(other.getEffectiveDate());
					}
				}
				break;
			case 2:
				o.setHasPass(other.getHasPass());
				if(other.getHasPass() == 1){
					o.setIsVisa(other.getIsVisa());
					if(other.getIsVisa() == 1){
						o.setSign(other.getSign());
						o.setEffectiveDate(other.getEffectiveDate());
					}
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
				o.setPlayBack(other.getPlayBack());
				break;
		}
		log.debug(o);
		log.debug("bigId"+bigId);
		if(trafficService.getByUid(traffic.getUid()) == null){
			trafficService.add(traffic);
		}else{
			trafficService.update(traffic);
		}
		if(otherService.getByUid(other.getUid()) == null){
			otherService.add(o);
		}else{
			otherService.update(o);
		}
		if(bigId != null && !bigId.equals("")){
			userTypeService.regist(bigId,1);
		}
		//发送邮件
		try {
			sendEmail(o.getUid());
		} catch (SendFailedException e) {
			e.printStackTrace();
		}
		status = 1;
		return "saveTraffic";
	}
	
	public String delete(){
		trafficService.deleteTraffic(id);
		status = 1;
		return "delete";
	}
	
	
	public Traffic getTraffic() {
		return traffic;
	}
	public void setTraffic(Traffic traffic) {
		this.traffic = traffic;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public String getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public String getBackDate() {
		return backDate;
	}
	public void setBackDate(String backDate) {
		this.backDate = backDate;
	}
	public String getBackTime() {
		return backTime;
	}
	public void setBackTime(String backTime) {
		this.backTime = backTime;
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
	public Other getOther() {
		return other;
	}
	public void setOther(Other other) {
		this.other = other;
	}
	public String getBigId() {
		return bigId;
	}
	public void setBigId(String bigId) {
		this.bigId = bigId;
	}
	
}
