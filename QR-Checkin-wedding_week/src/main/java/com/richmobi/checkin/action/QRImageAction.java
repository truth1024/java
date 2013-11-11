package com.richmobi.checkin.action;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import richmobi.commons.utils.Configer;

import com.opensymphony.xwork2.ActionSupport;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.service.UserService;

public class QRImageAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1243402027717228278L;
	
	@Autowired
	UserService userService;
	
	private String c;
	
	private String imageURI;
	
	private String name;

	@Override
	public String execute() throws Exception {
		User user;
		if(StringUtils.isNotBlank(c)){
			user = userService.getByCode(c);
			if(user != null){
				if(StringUtils.isNotBlank(user.getImageName())){
					imageURI = Configer.get("qr.folder.name") + "/" + user.getImageName();
					name = user.getName();
					return SUCCESS;
				} else {
					return ERROR;
				}
			} else {
				return ERROR;
			}
		} else {
			return ERROR;
		}
	}

	public String getC() {
		return c;
	}
	public void setC(String c) {
		this.c = c;
	}
	public String getImageURI() {
		return imageURI;
	}
	public void setImageURI(String imageURI) {
		this.imageURI = imageURI;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
