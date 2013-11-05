package com.richmobi.checkin.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import richmobi.commons.utils.Configer;

public class AuthFilter implements Filter{

	private static final Logger log = Logger.getLogger(AuthFilter.class);
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		// 获取请求url
		String requestURL = httpServletRequest.getRequestURL().toString();
		log.debug("requestURL:" + requestURL);
		if(request instanceof HttpServletRequest && response instanceof HttpServletResponse){
			HttpServletRequest req = (HttpServletRequest)request;
			HttpServletResponse res = (HttpServletResponse) response;
			String token = (String) req.getSession().getAttribute("token");
			log.debug("token : "+token);
			log.debug(requestURL.indexOf("/login") > -1 || requestURL.indexOf("/js/") > -1
					|| requestURL.indexOf("/css/") > -1|| requestURL.indexOf("/images/") > -1);
			if(requestURL.indexOf("/login") > -1 || requestURL.indexOf("/js/") > -1
					|| requestURL.indexOf("/css/") > -1 || requestURL.indexOf("/images/") > -1){
				chain.doFilter(request, response);
			}else{
				if(StringUtils.isBlank(token)){
					String accept = req.getHeader("Accept");
					log.debug("accept : " + accept);
					if (accept.indexOf("application/json") > -1) {
						res.setStatus(401);
					} else {
						res.sendRedirect("login.html");
					}
				} else {
					chain.doFilter(request, response);
				}
			}
		} else {
			request.getRequestDispatcher("error.html");
		}
	}

	@Override
	public void destroy() {
		
	}

}
