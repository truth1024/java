package com.richmobi.checkin.action;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.service.TrafficService;

public class TrafficAction extends BasicAction {

	private static final long serialVersionUID = -3716945141844858871L;
	private static final Logger log = Logger.getLogger(TrafficAction.class);
	
	private Traffic traffic;
	private String arrivalDate;
	private String arrivalTime;
	private String backDate;
	private String backTime;
	private int status;
	
	@Autowired
	TrafficService trafficService;
	
	public String saveTraffic() throws Exception{
		log.debug(traffic);
		DateFormat format1 = new SimpleDateFormat("yyyy-MM-ddHH:mm");
		if(traffic.getDepartureTrafficTool().equals("1")){
			traffic.setArrivalDate(format1.parse(arrivalDate+arrivalTime));						
		}else{
			traffic.setPickUp(0);
		}
		if(traffic.getBackTrafficTool().equals("1")){
			traffic.setBackDate(format1.parse(backDate+backTime));			
		}else{
			traffic.setSend(0);
		}
		trafficService.add(traffic);
		status = 1;
		return "saveTraffic";
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
}
