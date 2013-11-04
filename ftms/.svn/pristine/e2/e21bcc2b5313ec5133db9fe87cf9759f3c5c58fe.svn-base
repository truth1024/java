package com.richmobi.checkin.action;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import richmobi.commons.utils.Configer;

import com.opensymphony.xwork2.ActionSupport;
import com.richmobi.checkin.domain.User;

public class BasicAction extends ActionSupport {

	private static final long serialVersionUID = -6390491233685056370L;
	
	
	protected String getContextURL(){
		HttpServletRequest request = ServletActionContext.getRequest();
		String reqURL = request.getRequestURL().toString();
		String reqURI = request.getRequestURI();
		return reqURL.substring(0, reqURL.indexOf(reqURI)) + request.getContextPath();
	}
}
