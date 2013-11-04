package com.richmobi.checkin.domain;

import java.util.Date;

/**
 * 
* @ClassName: Hotel
* @Description: 酒店信息实体
* @author xuehan.li
* @date 2013年10月30日 下午5:39:40
*
 */
public class Hotel extends AbstractDomain {

	private static final long serialVersionUID = 7873089723794617360L;
	
	private long id;			//酒店信息ID
	private long uid;			//用户信息ID
	private int isStay;			//是否入住指定酒店
	private Date inDate;		//入住时间
	private Date outDate;		//离开时间
	private int room;			//房间类型
	private int isWith;			//是否同住
	private String withName;	//同住人姓名
	private String withShop;	//入住人经销店
	
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
	public int getIsStay() {
		return isStay;
	}
	public void setIsStay(int isStay) {
		this.isStay = isStay;
	}
	public Date getInDate() {
		return inDate;
	}
	public void setInDate(Date inDate) {
		this.inDate = inDate;
	}
	public Date getOutDate() {
		return outDate;
	}
	public void setOutDate(Date outDate) {
		this.outDate = outDate;
	}
	public int getRoom() {
		return room;
	}
	public void setRoom(int room) {
		this.room = room;
	}
	public int getIsWith() {
		return isWith;
	}
	public void setIsWith(int isWith) {
		this.isWith = isWith;
	}
	public String getWithName() {
		return withName;
	}
	public void setWithName(String withName) {
		this.withName = withName;
	}
	public String getWithShop() {
		return withShop;
	}
	public void setWithShop(String withShop) {
		this.withShop = withShop;
	}
}
