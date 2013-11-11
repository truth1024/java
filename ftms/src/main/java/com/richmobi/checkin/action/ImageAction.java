package com.richmobi.checkin.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.richmobi.checkin.util.CompressUtil;
import com.richmobi.checkin.util.UploadUtil;
import com.richmobi.checkin.util.Utils;

public class ImageAction extends BasicAction {

	private static final long serialVersionUID = -3232574340410404293L;
	
	private static Logger log = Logger.getLogger(ImageAction.class);

	private File file; 
	private String fileFileName; 
	private String fileFileContentType; 
	private String message = "0";
	
	public String upload() throws Exception {
		String rootPath = ServletActionContext.getServletContext().getRealPath("")+"/uploadImage/";
    	String passPath = rootPath+"passImage/";
    	String visaPath = rootPath+"visaImage/";
    	String filePath = "";
    	log.debug("fileName : "+fileFileName);
    	log.debug(filePath);
    	log.debug(fileFileName.indexOf("首页扫描件") > -1);
    	log.debug(fileFileName.indexOf("签证页扫描件") > -1);
    	
    	if(fileFileName.indexOf("首页扫描件") > -1 || fileFileName.indexOf("first page scanning copy") > -1){
    		filePath = passPath;
    	}else if(fileFileName.indexOf("签证页扫描件") > -1){
    		filePath = visaPath;
    	}
    	File imgFile = new File(rootPath);
    	File passFile = new File(passPath);
    	File visaFile = new File(visaPath);
		if (!imgFile.exists()){
			imgFile.mkdirs();
		}
		if(!passFile.exists()){
			passFile.mkdirs();			
		}
		if(!visaFile.exists()){			
			visaFile.mkdirs();
		}
    	try {
			boolean uploadFlag = UploadUtil.upload(file, fileFileName, filePath);
			if(uploadFlag){
				message = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return "upload";
	} 
	
	
	public String download(){
		String rootPath = ServletActionContext.getServletContext().getRealPath("");
		try {
			CompressUtil.zip(rootPath+"/uploadImage/",rootPath+"/uploadImage.zip");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "download";
	}
	
	
	public String getMessage() { 
		return message; 
	} 
	public void setMessage(String message) { 
		this.message = message; 
	} 
	public File getFile() { 
		return file; 
	} 
	public void setFile(File file) { 
		this.file = file; 
	} 
	public String getFileFileName() { 
		return fileFileName; 
	} 
	public void setFileFileName(String fileFileName) { 
		this.fileFileName = fileFileName; 
	} 
	public String getFileFileContentType() { 
		return fileFileContentType; 
	} 
	public void setFileFileContentType(String fileFileContentType) {
		this.fileFileContentType = fileFileContentType;
	}
	
}
