package com.richmobi.checkin.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.UserType;
import com.richmobi.checkin.service.UserTypeService;
import com.richmobi.checkin.util.ExcelUtil;

public class ExcelAction extends BasicAction {

	private static final long serialVersionUID = 5977852594646199210L;

	private static Logger log = Logger.getLogger(ExcelAction.class);
	
	private File excelFile; //上传的文件
	private String excelFileFileName; //保存原始文件名     
	
	private String tip;
	
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
	
	public String importUser(){
		int successNum = 0;
		int sum = 0;
		try {
			log.debug(excelFile);
			Workbook book = createWorkBook(new FileInputStream(excelFile));
			if(book == null){
				tip = "请选择excel格式文件";
				return SUCCESS;
			}
			log.debug(book.getNumberOfSheets());
	        //获取激活的Sheet
	        log.debug(book.getActiveSheetIndex());
	        Sheet sheet = book.getSheetAt(book.getActiveSheetIndex());
	        sum = sheet.getLastRowNum();
	        List<UserType> userTypes = new ArrayList<UserType>();
	        for (int i = 1;i <= sum;i++){
	    		Row ros = sheet.getRow(i);
	    		UserType userType = new UserType();
	    		Cell cell = ros.getCell(0);
	    		log.debug(cell.getCellType());
	    		userType.setId((cell.getCellType() == HSSFCell.CELL_TYPE_STRING ? cell.getStringCellValue() : String.valueOf((int) cell.getNumericCellValue())));
	    		userType.setType((int) ros.getCell(1).getNumericCellValue());
	    		userType.setRegion(ExcelUtil.typeCast(ros.getCell(2)).toString());
	    		userType.setShortName(ExcelUtil.typeCast(ros.getCell(3)).toString());
	    		
	    		userTypes.add(userType);
	    		successNum++;
	        }
	        userTypeService.batchAdd(userTypes);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		tip = "总条数："+sum+"，成功导入："+successNum+"。";
		return SUCCESS;
	}

	public String exportUser(){
		
		return "export";
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
	
}
