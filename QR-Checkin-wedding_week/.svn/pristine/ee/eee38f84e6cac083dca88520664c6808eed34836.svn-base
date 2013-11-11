package com.richmobi.checkin.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.richmobi.checkin.domain.CheckinRecd;
import com.richmobi.checkin.domain.SmsSendRecd;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;

/** 
* @ClassName: AbstractTestCase 
* @Description: 单元测试抽象类，配置测试环境
* @author shuangfei.zhang
* @date 2012-3-21 下午2:09:42 
*  
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/applicationContext.xml","/applicationContext-email.xml","/applicationContext_sms_rpc.xml"})
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
@Transactional
public class AbstractTestCase {
	@Test
	public void test(){
		
	}

	protected static final User user = new User();
	protected static final User u = new User();
	static{
		user.setName("张双飞");
		user.setCode("node");
		user.setPhone("18611747435");
		user.setEmail("shuangfei.zhang@richmobi.com");
		user.setCompany("company");
		user.setCompanyAdd("companyAdd");
		user.setImageName("10c015c8.png");
		user.setNote("note");
		user.setTitle("title");
	}
	
	protected static final CheckinRecd checkinRecd = new CheckinRecd();
	
	static{
		checkinRecd.setUserId(4L);
		checkinRecd.setCheckinWary(0);
	}
	
	protected static final SmsSendRecd smsSendRecd = new SmsSendRecd();
	
	static{
		smsSendRecd.setId(1L);
	}
	
	protected static final UserType userType = new UserType();
	
}
