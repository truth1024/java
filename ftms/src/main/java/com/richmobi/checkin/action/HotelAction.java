package com.richmobi.checkin.action;

import java.io.File;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.richmobi.checkin.util.UploadUtil;

public class HotelAction extends BasicAction {

	private static final long serialVersionUID = -4987893548300076883L;
    
	private File file; 
	private String fileFileName; 
	private String fileFileContentType; 
	private String message = "上传成功";
	
    public String upload(){
    	String rootPath = ServletActionContext.getServletContext().getRealPath("")+"/uploadImage/";
    	String passPath = rootPath+"passImage/";
    	String visaPath = rootPath+"visaImage/";
    	String filePath = "";
    	if(fileFileName.indexOf("/首页扫描件/") > -1){
    		filePath = passPath;
    	}else if(fileFileName.indexOf("签证页扫描件") > -1){
    		filePath = visaPath;
    	}
    	File imgFile = new File(rootPath);
		if (!imgFile.exists()){
			imgFile.mkdirs();
			File passFile = new File(passPath);
			File visaFile = new File(visaPath);
			passFile.mkdirs();
			visaFile.mkdirs();
		}
    	try {
			boolean uploadFlag = UploadUtil.upload(file, fileFileName, filePath);
			if(!uploadFlag){
				message = "上传失败";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return SUCCESS;
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
