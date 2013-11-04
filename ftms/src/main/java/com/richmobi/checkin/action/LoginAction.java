package com.richmobi.checkin.action;

import java.io.ByteArrayInputStream;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import richmobi.commons.utils.MD5Util;

import com.opensymphony.xwork2.ActionContext;
import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.service.UserTypeService;
import com.richmobi.checkin.util.RandomNumUtil;

public class LoginAction extends BasicAction {

	private static final long serialVersionUID = 4177373520089901752L;
	private static Logger log = Logger.getLogger(LoginAction.class);
	
	private ByteArrayInputStream inputStream;
	private String rand;
	
	private long id;
	private int status;
	private String tip;
	
	@Autowired
	UserTypeService userTypeService;
	
	public String randomNum() throws Exception{
		RandomNumUtil rdnu=RandomNumUtil.Instance();
		this.setInputStream(rdnu.getImage());//取得带有随机字符串的图片
		ActionContext.getContext().getSession().put("random", rdnu.getString());//取得随机字符串放入HttpSession    
		return SUCCESS;
	}
	
	
	public String login() throws Exception{
		//从session中取出RandomAction.java 中生成的验证码random
		String arandom=(String)(ActionContext.getContext().getSession().get("random"));
		log.debug("arandom : "+arandom);
		log.debug("rand : "+rand);
		log.debug("id : "+id);
		//下面就是将session中保存验证码字符串与客户输入的验证码字符串对比了
		if(!arandom.equals(this.getRand())){
			tip = "验证码错误";
			return ERROR;
		}else{
			UserType ut = userTypeService.getById(id);
			if(ut != null){
				ActionContext.getContext().getSession().put("token",MD5Util.encryptByMD5(id+""));
				userTypeService.updateById(id);
				status = 1;
				return LOGIN;
			}else{
				tip = "登录码不存在";
				return ERROR;
			}
		}
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}
	public ByteArrayInputStream getInputStream() {
		return inputStream;
	}
	public void setInputStream(ByteArrayInputStream inputStream) {
		this.inputStream = inputStream;
	}
	public String getRand() {
		return rand;
	}
	public void setRand(String rand) {
		this.rand = rand;
	}
}
