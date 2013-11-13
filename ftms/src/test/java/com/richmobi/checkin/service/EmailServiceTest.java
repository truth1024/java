package com.richmobi.checkin.service;

import static org.junit.Assert.*;

import javax.mail.SendFailedException;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.AbstractTestCase;

public class EmailServiceTest extends AbstractTestCase {

	@Autowired
	EmailService emailService;
	
	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testSendEmail() {
		try {
			emailService.sendEmail(u,"cn");
		} catch (SendFailedException e) {
			e.printStackTrace();
		}
	}

}
