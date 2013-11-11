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

public class AuthFilter implements Filter{

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		if(request instanceof HttpServletRequest && response instanceof HttpServletResponse){
			HttpServletRequest req = (HttpServletRequest)request;
			HttpServletResponse res = (HttpServletResponse) response;
			String name = (String) req.getSession().getAttribute("identity");
			if(StringUtils.isBlank(name)){
				res.sendRedirect("../login.jsp");
			} else {
				chain.doFilter(request, response);
			}
		} else {
			request.getRequestDispatcher("../error.jsp");
		}
	}

	@Override
	public void destroy() {
		
	}

}
