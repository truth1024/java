package com.richmobi.checkin.service;

import java.util.List;

import com.richmobi.checkin.domain.SmsSendRecd;

public interface SmsSendRecdService {
	public void addRecd(SmsSendRecd smsSendRecd);
	public List<SmsSendRecd> getByUser(long userId);
}
