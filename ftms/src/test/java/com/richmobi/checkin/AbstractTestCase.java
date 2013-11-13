package com.richmobi.checkin;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.richmobi.checkin.domain.Hotel;
import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;


/** 
* @ClassName: AbstractTestCase 
* @Description: 单元测试抽象类，配置测试环境
* @author shuangfei.zhang
* @date 2012-3-21 下午2:09:42 
*  
*/
@SuppressWarnings("deprecation")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/applicationContext.xml","/applicationContext-email.xml","/applicationContext_sms_rpc.xml"})
//@ContextConfiguration(locations={"/applicationContext.xml"})
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
@Transactional
public class AbstractTestCase {
	@Test
	public void test(){
		
	}
	
	protected static Traffic traffic = new Traffic();
	protected static Traffic t = new Traffic();
	
	static{
		traffic.setUid(1);
		traffic.setDepartureTrafficTool("飞机");
		traffic.setDepartureCity1("北京");
		traffic.setDepartureFlight("CA1023");
		traffic.setArrivalDate(new Date(20131029));
		traffic.setPickUp(1);
		traffic.setBackTrafficTool("自驾");
		traffic.setBackCity1("北京");
		traffic.setBackFlight("MU2393");
		traffic.setBackDate(new Date());
		traffic.setSend(2);
		
		t.setUid(1);
		t.setDepartureTrafficTool("自驾");
		t.setDepartureCity1("上海");
		t.setDepartureFlight("CA1111");
		t.setArrivalDate(new Date());
		t.setPickUp(2);
		t.setBackTrafficTool("其他");
		t.setBackCity1("上海");
		t.setBackFlight("MU2222");
		t.setBackDate(new Date());
		t.setSend(1);
	}
	
	protected static Hotel hotel = new Hotel();
	protected static Hotel h = new Hotel();
	
	static{
		hotel.setUid(1);
		hotel.setIsStay(2);
		hotel.setInDate(new Date());
		hotel.setOutDate(new Date());
		hotel.setRoom(2);
		hotel.setIsWith(2);
		hotel.setWithName("truth");
		hotel.setWithShop("经销店");
		
		h.setUid(1);
		h.setIsStay(1);
		h.setInDate(new Date());
		h.setOutDate(new Date());
		h.setRoom(1);
		h.setIsWith(1);
		h.setWithName("dudu");
		h.setWithShop("经销商");
	}
	
	protected static Other other = new Other();
	protected static Other o = new Other();
	
	static{
		o.setUid(1);
		o.setMeeting(1);
		o.setTouristRoute(1);
		o.setHasPass(1);
		o.setIsVisa(1);
		o.setSign(1);
		o.setTouristBack(1);
		o.setIsPlay(1);
		o.setPlaySize(1);
		o.setStature(170);
		o.setPlayAlmost("我都不知道什么是打球差点");
		o.setDiet("没有");
		o.setEffectiveDate(new Date());
		o.setPassImage("图盘");
		o.setVisaImage("http://");
		
		
		other.setUid(1);
		other.setMeeting(2);
		other.setTouristRoute(2);
		other.setHasPass(2);
		other.setIsVisa(2);
		other.setSign(2);
		other.setTouristBack(2);
		other.setIsPlay(2);
		other.setPlaySize(2);
		other.setStature(180);
		other.setPlayAlmost("我都打球差点");
		other.setDiet("有");
		other.setEffectiveDate(new Date());
		other.setPassImage("图dd");
		other.setVisaImage("http://image");
	}
	
	protected static User user = new User();
	protected static User u = new User();
	
	static{
		user.setUid("1");
		user.setName("徐爽");
		user.setMobilePhone("12323232323");
		user.setTelephone("0452-4534577");
		user.setBirthDate(new Date());
		user.setSex(2);
		user.setSize(2);
		user.setColor(2);
		user.setNationality("中国");
		user.setCompany(2);
		user.setTitle("网页制作");
		user.setCertificate("1#230229198905035712");
		user.setEmail("truth88@qq.com");
		
		u.setId(1);
		u.setName("李学瀚");
		u.setMobilePhone("13439401564");
		u.setTelephone("0452-4534599");
		u.setBirthDate(new Date());
		u.setSex(1);
		u.setSize(1);
		u.setColor(1);
		u.setNationality("中国");
		u.setCompany(1);
		u.setTitle("开发");
		u.setCertificate("1#230229198905035712");
		u.setEmail("truth9988@163.com");
		u.setContactName("dudu");
		u.setContactPhone("18210825801");
		u.setContactEmail("truth1024@hotmail.com");
	}
	
	protected static UserType ut1 = new UserType();
	protected static UserType ut2 = new UserType();
	
	protected static List<UserType> uts = new ArrayList<UserType>(); 
	static{
		ut1.setId("1");
		ut1.setType(1);
		ut2.setId("2");
		ut2.setType(2);
		uts.add(ut1);
		uts.add(ut2);
	}
}
