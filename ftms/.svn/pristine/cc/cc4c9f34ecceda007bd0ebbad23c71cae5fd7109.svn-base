package com.richmobi.checkin.run;

import org.apache.log4j.*;
import org.springframework.context.support.*;

import richmobi.commons.utils.Configer;

import com.richmobi.checkin.qrcode.*;

public class StartGenQRCode {

	/**
	 * @param args
	 * @throws SchedulerException
	 * @throws SchedulerException
	 * @throws ConfigurationException
	 */
	public static void main(String[] args) {
		System.setProperty("basePath", "/work/workspace/QR-Checkin-ido/src/main/webapp/");
		PropertyConfigurator.configureAndWatch("log4j.properties");

		String[] locations={"/applicationContext.xml","/applicationContext-email.xml","/applicationContext_sms_rpc.xml"};
		AbstractApplicationContext ctx = new ClassPathXmlApplicationContext(locations);
		ctx.registerShutdownHook();

		// 启动定时器
		GenerateQRCode gen = (GenerateQRCode) ctx.getBean("generateQRCode");
		gen.generate();
	}

}
