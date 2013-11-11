package com.richmobi.checkin.action;

import java.io.File;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.richmobi.checkin.domain.Hotel;
import com.richmobi.checkin.service.HotelService;
import com.richmobi.checkin.util.UploadUtil;

public class HotelAction extends BasicAction {

	private static final long serialVersionUID = -4987893548300076883L;
    private static final Logger log = Logger.getLogger(HotelAction.class);
	
	private File file; 
	private String fileFileName; 
	private String fileFileContentType; 
	private String message = "上传成功";
	private int status;
	private Hotel hotel;
	private String method;
	private long id;
	
	@Autowired
	HotelService hotelService;
	
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
    
    public String saveHotel(){
    	if(hotel.getIsStay() == 2){
    		hotel.setInDate(null);
    		hotel.setOutDate(null);
    		hotel.setRoom(0);
    	}
    	if(hotel.getRoom() == 1 || hotel.getRoom() == 0){
    		hotel.setIsWith(0);
    	}
    	if(hotel.getIsWith() == 2 || hotel.getIsWith() == 0){
    		hotel.setWithName("");
    		hotel.setWithShop("");
    	}
    	log.debug(hotel);
    	if(method == null || method.equals("") || method.equals("submit")){
    		hotelService.add(hotel);
    	}else{
    		hotelService.update(hotel);
    	}
    	status = 1;
    	return "saveHotel";
    }

    public String delete(){
    	log.debug("hotel id : "+id);
    	hotelService.deleteHotel(id);
    	status = 1;
    	return "delete";
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
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
