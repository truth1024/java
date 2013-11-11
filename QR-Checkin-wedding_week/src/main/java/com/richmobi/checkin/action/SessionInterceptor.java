package com.richmobi.checkin.action;

import org.apache.log4j.Logger;
import org.apache.struts.chain.contexts.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.richmobi.checkin.domain.User;

public class SessionInterceptor extends AbstractInterceptor {

	/**
		 * 
		 */
	private static final long serialVersionUID = -68425740123730240L;
	private Logger Log = Logger.getLogger("SessionInterceptor");

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		User u = (User) ActionContext.getContext().getSession().get("user");
		String namespace = invocation.getProxy().getNamespace();
		Log.debug("Namespace is: "+namespace);
		Log.debug(ActionContext.getContext().getName());
		String actionName = ActionContext.getContext().getName();
		if(!actionName.equals("forwardAction") && !actionName.equals("answerAction")){
			return invocation.invoke();
		}
		if(u==null){
			if(namespace.equals("/postcard")){
				return "postcard";
			}
			else{
				return "answer";
			}
		}
		return invocation.invoke();
	}

}
