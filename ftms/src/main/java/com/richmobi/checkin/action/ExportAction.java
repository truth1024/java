package com.richmobi.checkin.action;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;


import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.Hotel;
import com.richmobi.checkin.domain.Other;
import com.richmobi.checkin.domain.Traffic;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.service.UserTypeService;
import com.richmobi.checkin.util.Utils;


public class ExportAction extends BasicAction {

	private static final long serialVersionUID = -3383529130948518561L;

	private static final Logger log = Logger.getLogger(ExportAction.class);  
    
    private String fileName = "UserInfo.xls";
      
    @Autowired
    UserTypeService userTypeService;
    
  
    @SuppressWarnings("deprecation")
    public InputStream getExeclStream() {  
        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet("sheet1");
        {    
            // 创建表头    
            HSSFRow row = sheet.createRow(0);    
            HSSFCell cell = row.createCell(0);    
            cell.setCellValue("登录类型");  
            cell = row.createCell(1);    
            cell.setCellValue("经销店代码/员工ID");
            cell = row.createCell(2);
            cell.setCellValue("经销店");
            cell = row.createCell(3);
            cell.setCellValue("姓名");
            cell = row.createCell(4);    
            cell.setCellValue("性别");
            cell = row.createCell(5);
            cell.setCellValue("职位");
            cell = row.createCell(6);
            cell.setCellValue("生日");
            cell = row.createCell(7);    
            cell.setCellValue("手机");
            cell = row.createCell(8);
            cell.setCellValue("座机");
            cell = row.createCell(9);
            cell.setCellValue("邮箱");
            cell = row.createCell(10);
            cell.setCellValue("联系人姓名");
            cell = row.createCell(11);
            cell.setCellValue("联系人手机");
            cell = row.createCell(12);
            cell.setCellValue("联系人座机");
            cell = row.createCell(13);
            cell.setCellValue("联系人邮箱");
            cell = row.createCell(14);
            cell.setCellValue("证件类型");
            cell = row.createCell(15);
            cell.setCellValue("证件号");
            cell = row.createCell(16);
            cell.setCellValue("国籍");
            cell = row.createCell(17);
            cell.setCellValue("房型");
            cell = row.createCell(18);
            cell.setCellValue("是否指定同住人");
            cell = row.createCell(19);
            cell.setCellValue("同住人姓名");
            cell = row.createCell(20);
            cell.setCellValue("同住人经销店");
            cell = row.createCell(21);
            cell.setCellValue("入住日期");
            cell = row.createCell(22);
            cell.setCellValue("退房日期");
            cell = row.createCell(23);
            cell.setCellValue("去程交通方式");
            cell = row.createCell(24);
            cell.setCellValue("去程日期");
            cell = row.createCell(25);
            cell.setCellValue("去程航班号");
            cell = row.createCell(26);
            cell.setCellValue("抵达城市");
            cell = row.createCell(27);
            cell.setCellValue("抵达时间");
            cell = row.createCell(28);
            cell.setCellValue("是否接机");
            cell = row.createCell(29);
            cell.setCellValue("回程交通方式");
            cell = row.createCell(30);
            cell.setCellValue("回程日期");
            cell = row.createCell(31);
            cell.setCellValue("回程航班号");
            cell = row.createCell(32);
            cell.setCellValue("离程城市");
            cell = row.createCell(33);
            cell.setCellValue("起飞时间");
            cell = row.createCell(34);
            cell.setCellValue("是否送机");
            cell = row.createCell(35);
            cell.setCellValue("游览线路");
            cell = row.createCell(36);
            cell.setCellValue("赴港证件");
            cell = row.createCell(37);
            cell.setCellValue("港澳通行证证件号");
            cell = row.createCell(38);
            cell.setCellValue("是否有有效签注");
            cell = row.createCell(39);
            cell.setCellValue("签注类型");
            cell = row.createCell(40);
            cell.setCellValue("签注有效期至");
            cell = row.createCell(41);
            cell.setCellValue("是否打球");
            cell = row.createCell(42);
            cell.setCellValue("打球差点");
            cell = row.createCell(43);
            cell.setCellValue("身高");
            cell = row.createCell(44);
            cell.setCellValue("服装尺码");
            cell = row.createCell(45);
            cell.setCellValue("饮食禁忌");
            cell = row.createCell(46);
            cell.setCellValue("更新时间");
            cell = row.createCell(47);
            cell.setCellValue("备注");
            cell = row.createCell(48);
            cell.setCellValue("大区");
            cell = row.createCell(49);
            cell.setCellValue("经销商简称");
            cell = row.createCell(50);
            cell.setCellValue("球赛后去向");
            cell = row.createCell(51);
            cell.setCellValue("唯一识别码");
            List<UserType> userTypes = userTypeService.getAll();
            for(UserType ut : userTypes){
            	for(int i=0;i<ut.getUsers().size();i++){
            		User u = ut.getUsers().get(i);
            		Traffic t = u.getTraffic();
            		Hotel h = u.getHotel();
            		Other o = u.getOther();
            		row = sheet.createRow((int) u.getId());
            		cell = row.createCell(51);
            		cell.setCellValue(Utils.idToString(u.getId()));
            		cell = row.createCell(0);
            		cell.setCellValue((ut.getType() == 1 ? "内部人员" : "经销商"));
            		cell = row.createCell(1);
            		cell.setCellValue(ut.getId());
            		cell = row.createCell(2);
            		cell.setCellValue("");
            		cell = row.createCell(3);
            		cell.setCellValue(u.getName());
            		cell = row.createCell(4);
            		cell.setCellValue(Utils.sex(u.getSex(),null));
            		cell = row.createCell(5);
            		cell.setCellValue(Utils.title(u.getTitle(),null));
            		cell = row.createCell(6);
            		cell.setCellValue(Utils.dateFormat(u.getBirthDate()));
            		cell = row.createCell(7);
            		cell.setCellValue(u.getMobilePhone());
            		cell = row.createCell(8);
            		cell.setCellValue(u.getTelephone());
            		cell = row.createCell(9);
            		cell.setCellValue(u.getEmail());
            		cell = row.createCell(10);
            		cell.setCellValue(u.getContactName());
            		cell = row.createCell(11);
            		cell.setCellValue(u.getContactPhone());
            		cell = row.createCell(12);
            		cell.setCellValue(u.getContactTelephone());
            		cell = row.createCell(13);
            		cell.setCellValue(u.getContactEmail());
            		cell = row.createCell(14);
            		String[] cers = u.getCertificate().split("#");
            		cell.setCellValue(Utils.cer(cers[0],null));
            		cell = row.createCell(15);
            		cell.setCellValue(cers[1]);
            		cell = row.createCell(16);
            		cell.setCellValue(Utils.nationality(u.getNationality(),null));
            		cell = row.createCell(45);
        			cell.setCellValue(Utils.diet(u.getDiet(),null));
            		if(h != null){
            			cell = row.createCell(17);
            			cell.setCellValue(Utils.room(h.getRoom(),null));
            			cell = row.createCell(18);
            			cell.setCellValue(Utils.yseOrNo(h.getIsWith(),null));
            			cell = row.createCell(19);
            			cell.setCellValue(h.getWithName());
            			cell = row.createCell(20);
            			cell.setCellValue(h.getWithShop());
            			cell = row.createCell(21);
            			cell.setCellValue(Utils.dateFormat(h.getInDate()));
            			cell = row.createCell(22);
            			cell.setCellValue(Utils.dateFormat(h.getOutDate()));
            		}
            		if(t != null){            			
            			cell = row.createCell(23);
            			cell.setCellValue(Utils.deparTrafficTool(t.getDepartureTrafficTool(),null));
            			cell = row.createCell(24);
            			cell.setCellValue(Utils.dateFormat(t.getArrivalDate()));
            			cell = row.createCell(25);
            			cell.setCellValue(t.getDepartureFlight());
            			cell = row.createCell(26);
            			cell.setCellValue(t.getDepartureCity1());
            			cell = row.createCell(27);
            			cell.setCellValue(Utils.timeFormat(t.getArrivalDate()));
            			cell = row.createCell(28);
            			cell.setCellValue(Utils.yseOrNo(t.getPickUp(),null));
            			cell = row.createCell(29);
            			cell.setCellValue(Utils.backTrafficTool(t.getBackTrafficTool(),null));
            			cell = row.createCell(30);
            			cell.setCellValue(Utils.dateFormat(t.getBackDate()));
            			cell = row.createCell(31);
            			cell.setCellValue(t.getBackFlight());
            			cell = row.createCell(32);
            			cell.setCellValue(Utils.city(t.getBackCity2(),null));
            			cell = row.createCell(33);
            			cell.setCellValue(Utils.timeFormat(t.getBackDate()));
            			cell = row.createCell(34);
            			cell.setCellValue(Utils.yseOrNo(t.getSend(),null));
            		}
            		if(o != null){            			
            			cell = row.createCell(35);
            			cell.setCellValue(Utils.route(o.getTouristRoute(),null));
            			cell = row.createCell(36);
            			cell.setCellValue(Utils.hasPass(o.getHasPass(),null));
            			cell = row.createCell(37);
            			cell.setCellValue("");
            			cell = row.createCell(38);
            			cell.setCellValue(Utils.visa(o.getIsVisa(),null));
            			cell = row.createCell(39);
            			cell.setCellValue(Utils.gol(o.getSign(),null));
            			cell = row.createCell(40);
            			cell.setCellValue(Utils.dateFormat(o.getEffectiveDate()));
            			cell = row.createCell(41);
            			cell.setCellValue(Utils.yseOrNo(o.getIsPlay(),null));
            			cell = row.createCell(42);
            			cell.setCellValue(o.getPlayAlmost());
            			cell = row.createCell(43);
            			cell.setCellValue(Utils.stature(o.getStature(),null));
            			cell = row.createCell(44);
            			cell.setCellValue(Utils.playSize(o.getPlaySize(),null));
            			cell = row.createCell(47);
            			cell.setCellValue("");
            			cell = row.createCell(50);
            			cell.setCellValue(Utils.playBack(o.getPlayBack(),null));
            		}
            		cell = row.createCell(46);
            		cell.setCellValue(Utils.dateFormat(ut.getLoginDate()));
            		cell = row.createCell(48);
            		cell.setCellValue(ut.getRegion());
            		cell = row.createCell(49);
            		cell.setCellValue(ut.getShortName());
            	}
            }
        }    
  
        ByteArrayOutputStream baos = new ByteArrayOutputStream();  
        try {    
            workbook.write(baos);
        } catch (IOException e) {
            e.printStackTrace();
        }    
        byte[] ba = baos.toByteArray();    
        ByteArrayInputStream bais = new ByteArrayInputStream(ba);    
        return bais;    
    }  
  
  
  
    @Override  
    public String execute() throws Exception {  
        return SUCCESS;  
    }  
    public String getFileName() {  
        return fileName;  
    }
    public void setFileName(String fileName) {  
        this.fileName = fileName;  
    }
}
