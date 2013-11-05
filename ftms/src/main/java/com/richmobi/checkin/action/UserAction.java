package com.richmobi.checkin.action;

import java.util.ArrayList;
import java.util.List;

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
	
	
	@Autowired
	UserTypeService userTypeService;
	@Autowired
	UserSevice userSevice;
	
	public String gainUserType(){
		long id = Long.parseLong(ActionContext.getContext().getSession().get("token").toString());
		log.debug("id : "+id);
		log.debug(Constant.titleArr[0].getName());
		userType = userTypeService.getById(id);
		if(page != null && page.equals("regist")){
			selectArr = new ArrayList<Arr[]>();
			selectArr.add(Constant.titleArr);
			selectArr.add(Constant.nationArr);
			selectArr.add(Constant.cerArr);
			selectArr.add(Constant.dietArr);
		}
		return "userType";
	}

	public String saveUser(){
		log.debug("user : "+user);
		user.setCertificate(cerNum+"#"+user.getCertificate());
		userSevice.add(user);
		status = 1;
		return "saveUser";
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
}
