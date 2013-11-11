package com.richmobi.checkin.qrcode;

import java.util.*;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.*;

import com.richmobi.checkin.domain.*;
import com.richmobi.checkin.service.*;
import com.richmobi.checkin.util.*;

public class GenerateQRCode {
	@Autowired
	private UserService userService;
	private QRcodeUtil qrCodeUtil = new QRcodeUtil();
	private int width = 200;
	private int height = 200;
	private String suffix = ".png";

	private final Logger logger = LoggerFactory.getLogger(GenerateQRCode.class);

	public void generate() {
		// 获取用户信息
		List<User> users = userService.getUsersWithoutCodeOrImgName();
		for (User user : users) {
			generate(user);
		}
	}
	
	public void generate(User user){
		System.out.println(user.getId());
		String code = null;
		code = user.getId() + ":" + System.currentTimeMillis();
		System.out.println(code);
		for(;;){//如果包含89或64的code重新生成
			code = CodeUtil.calculateCrc32(code);
			if(code.indexOf("89") < 0 && code.indexOf("64") < 0){
				break;
			}
		}
		
		// 成功生成二维码
		user.setCode(code);
		if (qrCodeUtil.encode(user, width, height, code + suffix)) {
			// 更新user信息
			user.setImageName(code + suffix);
			try {
				userService.update(user);
			} catch (Exception e) {
				logger.error("update user [{}] failed!", user.getId(), e);
			}
			// 执行更新
		} else {
			logger.error(
					"generate qrcode fail: id : [{}], phone : [{}] name : [{}]",
					new Object[] { user.getId(), user.getPhone(),
							user.getName() });
		}
	}

	public int getHeight() {
		return height;
	}

	public int getWidth() {
		return width;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public void setWidth(int width) {
		this.width = width;
	}

}
