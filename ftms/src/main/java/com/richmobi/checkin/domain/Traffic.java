package com.richmobi.checkin.domain;

import java.util.Date;

/**
 * 
* @ClassName: Traffic
* @Description: 交通信息实体
* @author xuehan.li
* @date 2013年10月30日 下午5:39:20
*
 */
public class Traffic extends AbstractDomain {

	private static final long serialVersionUID = 377319947552508823L;

	private long id;						//交通信息ID
	private long uid;						//用户信息ID
	private String departureTrafficTool;	//出发交通工具
	private String departureCity;			//出发城市
	private String departureFlight;			//出发航班号
	private Date arrivalDate;				//到达时间
	private int pickUp;						//是否接机
	private String backTrafficTool;			//返回交通工具
	private String backCity;				//返回城市
	private String backFlight;				//返回航班号
	private Date backDate;					//返回时间
	private int send;						//是否送机
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public String getDepartureTrafficTool() {
		return departureTrafficTool;
	}
	public void setDepartureTrafficTool(String departureTrafficTool) {
		this.departureTrafficTool = departureTrafficTool;
	}
	public String getDepartureCity() {
		return departureCity;
	}
	public void setDepartureCity(String departureCity) {
		this.departureCity = departureCity;
	}
	public String getDepartureFlight() {
		return departureFlight;
	}
	public void setDepartureFlight(String departureFlight) {
		this.departureFlight = departureFlight;
	}
	public Date getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public int getPickUp() {
		return pickUp;
	}
	public void setPickUp(int pickUp) {
		this.pickUp = pickUp;
	}
	public String getBackTrafficTool() {
		return backTrafficTool;
	}
	public void setBackTrafficTool(String backTrafficTool) {
		this.backTrafficTool = backTrafficTool;
	}
	public String getBackCity() {
		return backCity;
	}
	public void setBackCity(String backCity) {
		this.backCity = backCity;
	}
	public String getBackFlight() {
		return backFlight;
	}
	public void setBackFlight(String backFlight) {
		this.backFlight = backFlight;
	}
	public Date getBackDate() {
		return backDate;
	}
	public void setBackDate(Date backDate) {
		this.backDate = backDate;
	}
	public int getSend() {
		return send;
	}
	public void setSend(int send) {
		this.send = send;
	}
}
