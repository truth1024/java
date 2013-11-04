package com.richmobi.checkin.domain;

import java.util.Date;
import java.util.List;

/**
 * 
* @ClassName: UserType
* @Description: 用户类别实体
* @author xuehan.li
* @date 2013年10月30日 下午5:39:00
*
 */
public class UserType extends AbstractDomain {

	private static final long serialVersionUID = -4909563429571792574L;
	
	private long id;			//用户ID
	private int type;			//用户类别
	private Date loginDate;		//登录时间
	private List<User> users;	//用户信息列表
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public Date getLoginDate() {
		return loginDate;
	}
	public void setLoginDate(Date loginDate) {
		this.loginDate = loginDate;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
}
