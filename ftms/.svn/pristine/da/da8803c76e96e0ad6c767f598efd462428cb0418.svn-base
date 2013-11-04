package com.richmobi.checkin.action;


import org.apache.commons.lang.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.json.annotations.JSON;

import com.opensymphony.xwork2.ActionSupport;

import richmobi.commons.utils.Configer;


public class AdminAction extends ActionSupport{

	private static final long serialVersionUID = -6887397846403723227L;
	
	private String name;
	private String password;
	private int status;
	
	public String login(){
		if (StringUtils.isNotBlank(name) && StringUtils.isNotBlank(password)){
			System.err.println("name:" + name);
			if (StringUtils.equals(name, Configer.get("admin.name"))
					&& StringUtils.equals(password,Configer.get("admin.password"))) {
				ServletActionContext.getRequest().getSession().setAttribute("identity","admin");
				status = 200;
			} else if(StringUtils.equals(name, Configer.get("checkin.name"))
					&& StringUtils.equals(password,Configer.get("checkin.password"))){
				ServletActionContext.getRequest().getSession().setAttribute("identity","checkin");
				status = 200;
			}else{
				status = 400;				
			}
		} else {
			status = 500;
		}
		return SUCCESS;
	}
	
	public String logout(){
		ServletActionContext.getRequest().getSession().invalidate();
		status = 200;
		return SUCCESS;
	}
	
	@JSON(serialize=false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@JSON(serialize=false)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
