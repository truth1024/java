package com.richmobi.checkin.action;

import java.util.ArrayList;
import java.util.List;

import javax.mail.SendFailedException;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionContext;
import com.richmobi.checkin.constant.Constant;
import com.richmobi.checkin.domain.Arr;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.service.UserSevice;
import com.richmobi.checkin.service.UserTypeService;

public class UserAction extends BasicAction {

	private static final long serialVersionUID = 5043575841057533939L;
	private static Logger log = Logger.getLogger(UserAction.class);
	
	private UserType userType;
	private String tip;
	private int status;
	private String page;
	private List<Arr[]> selectArr;
	private User user;
	private String cerNum;
	private long uid;
	private String method;
//	private String lang;
	private long id;
	private String telephoneZone;
	private String telephoneNum;
	private String contactTelephoneZone;
	private String contactTelephoneNum;
	
	
	@Autowired
	UserTypeService userTypeService;
	@Autowired
	UserSevice userSevice;
	
	public String gainUserType(){
		String id = ActionContext.getContext().getSession().get("token").toString();
		log.debug("id : "+id);
		log.debug(Constant.titleArr[0].getName());
		userType = userTypeService.getById(id);
		if(page != null && !page.equals("")){
			selectArr = new ArrayList<Arr[]>();
			
			List<Arr> passList = new ArrayList<Arr>();
			List<Arr> passEnList = new ArrayList<Arr>();
			for(int i= 0;i<Constant.passArr.length;i++){
				passList.add(Constant.passArr[i]);
				passEnList.add(Constant.passEnArr[i]);
			}
			passList.remove(2);
			passEnList.remove(2);
			Arr[] newPassArr = new Arr[2];
			Arr[] newPassEnArr = new Arr[2];
			for(int i = 0;i< newPassArr.length;i++){
				newPassArr[i] = passList.get(i);
				newPassEnArr[i] = passEnList.get(i);
			}
			
			if(lang != null && lang.equals("cn")){
				if(userType.getType() == 1){
					selectArr.add(Constant.companyArr);
				}else{
					selectArr.add(Constant.titleArr);
				}
				selectArr.add(Constant.nationArr);
				selectArr.add(Constant.cerArr);
				selectArr.add(Constant.dietArr);
				selectArr.add(Constant.roomArr);
				selectArr.add(Constant.deparTrafficArr);
				selectArr.add(Constant.touristArr);
				selectArr.add(newPassArr);
				selectArr.add(Constant.sizeArr);
				selectArr.add(Constant.backTrafficArr);
				selectArr.add(Constant.cityArr);
				selectArr.add(Constant.playBackArr);
			}else{
				if(userType.getType() == 1){
					selectArr.add(Constant.companyEnArr);
				}else{
					selectArr.add(Constant.titleEnArr);
				}
				selectArr.add(Constant.nationEnArr);
				selectArr.add(Constant.cerEnArr);
				selectArr.add(Constant.dietEnArr);
				selectArr.add(Constant.roomEnArr);
				selectArr.add(Constant.deparTrafficEnArr);
				selectArr.add(Constant.touristEnArr);
				selectArr.add(newPassEnArr);
				selectArr.add(Constant.sizeEnArr);
				selectArr.add(Constant.backTrafficEnArr);
				selectArr.add(Constant.cityEnArr);
				selectArr.add(Constant.playBackEnArr);
			}
		}
		return "userType";
	}

	public String saveUser(){
		log.debug("user : "+user);
		user.setCertificate(user.getCertificate()+"#"+cerNum);
		user.setTelephone(telephoneZone+"-"+telephoneNum);
		if(StringUtils.isNotBlank(contactTelephoneZone) && StringUtils.isNotBlank(contactTelephoneNum)){
			user.setContactTelephone(contactTelephoneZone+"-"+contactTelephoneNum);
		}
		if(method.equals("submit")){
			userSevice.add(user);
		}else{
			userSevice.update(user);
		}
		uid = user.getId();
		log.debug("uid : "+uid);
		try {
			sendEmail(uid);
		} catch (SendFailedException e) {
			e.printStackTrace();
		}
		status = 1;
		return "saveUser";
	}
	
	public String delete(){
		userSevice.delete(id);
		status = 1;
		return "delete";
	}
	
	public UserType getUserType() {
		return userType;
	}
	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public List<Arr[]> getSelectArr() {
		return selectArr;
	}
	public void setSelectArr(List<Arr[]> selectArr) {
		this.selectArr = selectArr;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getCerNum() {
		return cerNum;
	}
	public void setCerNum(String cerNum) {
		this.cerNum = cerNum;
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
//	public String getLang() {
//		return lang;
//	}
//	public void setLang(String lang) {
//		this.lang = lang;
//	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTelephoneZone() {
		return telephoneZone;
	}
	public void setTelephoneZone(String telephoneZone) {
		this.telephoneZone = telephoneZone;
	}
	public String getTelephoneNum() {
		return telephoneNum;
	}
	public void setTelephoneNum(String telephoneNum) {
		this.telephoneNum = telephoneNum;
	}
	public String getContactTelephoneZone() {
		return contactTelephoneZone;
	}
	public void setContactTelephoneZone(String contactTelephoneZone) {
		this.contactTelephoneZone = contactTelephoneZone;
	}
	public String getContactTelephoneNum() {
		return contactTelephoneNum;
	}
	public void setContactTelephoneNum(String contactTelephoneNum) {
		this.contactTelephoneNum = contactTelephoneNum;
	}
}
