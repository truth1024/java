package com.richmobi.checkin.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.exception.UserAlreadyExistException;
import com.richmobi.checkin.qrcode.GenerateQRCode;
import com.richmobi.checkin.service.SmsService;
import com.richmobi.checkin.service.UserService;
import com.richmobi.checkin.service.UserTypeService;
import com.richmobi.checkin.util.ExcelUtil;
import com.richmobi.checkin.util.Utils;

public class ImportExcelAction extends ActionSupport{
	private static final long serialVersionUID = 2078983971691770134L;
	private static final Logger log = Logger.getLogger(ImportExcelAction.class);
	
	private String tip;
	
	private File excelFile; //上传的文件
    
    private String excelFileFileName; //保存原始文件名     
    
    private User user;

    @Autowired
	GenerateQRCode generateQRCode;
    @Autowired
    UserService userService;
    @Autowired
    SmsService smsService;
    @Autowired
    UserTypeService userTypeService;
    
    //判断文件类型
    public Workbook createWorkBook(InputStream is) throws IOException{  
        if(excelFileFileName.toLowerCase().endsWith("xls")){//excel2003
            return new HSSFWorkbook(is);  
        }else if(excelFileFileName.toLowerCase().endsWith("xlsx")){//excel2007
            return new XSSFWorkbook(is);
        }else{
        	return null;
        }
    }
    
    public String execute() throws Exception{
        Workbook book = createWorkBook(new FileInputStream(excelFile));
        if(book == null){
        	tip = "请选择excel格式文件";
        	return SUCCESS;
        }
        //book.getNumberOfSheets();  判断Excel文件有多少个sheet
        log.debug(book.getNumberOfSheets());
        //获取激活的Sheet
        log.debug(book.getActiveSheetIndex());
        Sheet sheet = book.getSheetAt(book.getActiveSheetIndex());
//        保存工作单名称
//        Row firstRow = sheet.getRow(0);
//        Iterator<Cell> iterator = firstRow.iterator();
        //保存列名
//        List<String> cellNames = new ArrayList<String>();
//        while (iterator.hasNext()) {
//            cellNames.add(iterator.next().getStringCellValue());
//        }
        int sum = sheet.getLastRowNum();
        int successNum = 0;
        StringBuilder failedPhone = new StringBuilder();
        Map typeMap = new HashMap<String,Integer>();
        List<UserType> userTypes = userTypeService.getAll();
        for(UserType ut : userTypes){
        	typeMap.put(Utils.clearSpaceCharacter(ut.getTypeName()),ut.getId());
        }
    	//遍历用户信息
    	for (int i = 1;i <= sum;i++){
    		Row ros = sheet.getRow(i);
			try {
				String firstName = ExcelUtil.typeCast(ros.getCell(0)).toString();
				String lastName = ExcelUtil.typeCast(ros.getCell(1)).toString();
				String name = "";
				if(firstName.matches("[a-z A-Z]+")){//英文名称直接拼接
					name = firstName+" "+lastName;
				}else{//中文名称颠倒拼接
					name = lastName+firstName;
				}
				String typeName = ExcelUtil.typeCast(ros.getCell(2)).toString();
				List<Long> typeId = new ArrayList<Long>();
				if(typeName.indexOf(",") > -1){//多个票类id
					String[] tid = typeName.split(",");
					for(int k = 0,len = tid.length;k<len;k++){
						typeId.add(Long.parseLong(tid[k]));
					}
				}else if(typeName.matches("[0-9]+")){//一个票类id
					typeId.add(Long.parseLong(typeName));
				}else{//一个票类名称
					String t = Utils.clearSpaceCharacter(typeName);
					if(typeMap.get(t) == null || typeMap.get(t).equals("")){//没有匹配上数据库中的票类时
						typeId.add((long) 0);
					}else{
						long ty = (Long) typeMap.get(t);
						log.debug(ty);
						typeId.add(ty);
					}
				}
				String phone = Utils.clearSpaceCharacter(ExcelUtil.typeCast(ros.getCell(3)).toString());
				User u = new User();
				//姓名
				u.setName(name);
				//手机号
				u.setPhone(phone);
				//公司
				u.setCompany(ExcelUtil.typeCast(ros.getCell(4)).toString());
				//邮箱
				u.setEmail(ExcelUtil.typeCast(ros.getCell(5)).toString());
				u.setRegisterId(Long.parseLong(ExcelUtil.typeCast(ros.getCell(6)).toString()));
//				//职位
//				u.setTitle(ExcelUtil.typeCast(ros.getCell(3)).toString());
//				//T-shirt号码
//				u.setCompanyAdd(ExcelUtil.typeCast(ros.getCell(4)).toString());
//				//车牌号
//				u.setDaren(ExcelUtil.typeCast(ros.getCell(5)).toString());
//				//是否带司机
//				u.setPrize(ExcelUtil.typeCast(ros.getCell(6)).toString());
//				//是否参加20日打球
//				u.setPhotoName(ExcelUtil.typeCast(ros.getCell(7)).toString());
				//备注
				u.setNote(ExcelUtil.typeCast(ros.getCell(8)).toString());
				log.debug("typeId.lenght:"+typeId.size());
				for(int j = 0,len = typeId.size();j<len;j++){
					u.setType(typeId.get(j));
					userService.add(u);
				}
				successNum++;
			} catch (Exception e){
				e.printStackTrace();
			}
    	}
//    		try{
//	    		if(user != null){
//	    			String pho = user.getPhone();
//	    			if(StringUtils.isNotBlank(pho)){
////		    			smsService.sendSuccessSMS(user);
//	    				successNum++;
//	    			}
//	    		}
//    		}catch(Exception e){
//    			log.error(e.getMessage());
//    		}
    	tip = "总条数："+sum+"，成功导入："+successNum+"。\n"+failedPhone.toString();
        return SUCCESS;
    }

	public File getExcelFile() {
		return excelFile;
	}

	public void setExcelFile(File excelFile) {
		this.excelFile = excelFile;
	}

	public String getExcelFileFileName() {
		return excelFileFileName;
	}

	public void setExcelFileFileName(String excelFileFileName) {
		this.excelFileFileName = excelFileFileName;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	} 
	

}
