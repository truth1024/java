package com.richmobi.checkin.uploadify;

import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Date;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class ImageUploadAction extends ActionSupport{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3787243227818661913L;
	private static final Logger log = Logger.getLogger(ImageUploadAction.class);
	private static final int BUFFER_SIZE = 16 * 1024;// 读文件时的缓冲区
	private String Filedata;
	private String FiledataContentType;
	private String FiledataFileName;
	private String Filename;
	private String Upload;
	private String fileTypeExts;
//	private String type;
	private String folder;
	private String conferenceId;
	private String uri;
	

	@Override
	public String execute() throws Exception {
		log.debug("Filedata:" + Filedata);
		log.debug("FiledataContentType:" + FiledataContentType);
		log.debug("FiledataFileName:" + FiledataFileName);
		log.debug("Upload:" + Upload);
		log.debug("fileTypeExts:" + fileTypeExts);
		log.debug("uri:" + uri);
		log.debug("conferenceId:" + conferenceId);
		log.debug("folder:" + folder);
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		String basePath = ServletActionContext.getServletContext().getRealPath("");

		String baseURI = "/images/upload/"
				+ (StringUtils.isNotBlank(folder) ? (folder + "/") : "")
				+ (StringUtils.isNotBlank(conferenceId) ? (conferenceId + "/")
						: "");
		log.debug("baseURI:" + baseURI);

		String imageFileName = new Date().getTime()
				+ getExtention(FiledataFileName);
		
		log.debug("imageFileName" + imageFileName);

		uri = baseURI + imageFileName;
		File dir = new File(basePath +  File.separator + "postcard" + baseURI);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		log.debug("dir path:" + dir.getAbsolutePath());
		// 创建文件
		File imageFile = new File(dir.getAbsolutePath() + File.separator + imageFileName);
		log.debug("image path:" + imageFile.getAbsolutePath());

		if (!imageFile.exists()) {
			imageFile.createNewFile();
		}
		
		copy(new File(Filedata), imageFile);// 拷贝临时文件到目标文件

		// 主机地址从配置文件中读取
		BufferedImage bi = ImageIO.read(imageFile);
		int width = bi.getWidth();
		int height = bi.getHeight();
		out.print(width + ";" + height + ";" + uri);
		
		out.flush();
		out.close();
		return null;
	}
	
	
	private static void copy(File src, File dst) {
		try {
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new BufferedInputStream(new FileInputStream(src),
						BUFFER_SIZE);
				out = new BufferedOutputStream(new FileOutputStream(dst),
						BUFFER_SIZE);
				byte[] buffer = new byte[BUFFER_SIZE];
				while (in.read(buffer) > 0) {
					out.write(buffer);
				}
			} finally {
				if (null != in) {
					in.close();
				}
				if (null != out) {
					out.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private static String getExtention(String fileName) {
		int pos = fileName.lastIndexOf(".");
		return fileName.substring(pos);
	}


	public String getFiledata() {
		return Filedata;
	}


	public void setFiledata(String filedata) {
		Filedata = filedata;
	}


	public String getFiledataContentType() {
		return FiledataContentType;
	}


	public void setFiledataContentType(String filedataContentType) {
		FiledataContentType = filedataContentType;
	}


	public String getFiledataFileName() {
		return FiledataFileName;
	}


	public void setFiledataFileName(String filedataFileName) {
		FiledataFileName = filedataFileName;
	}




	public String getUpload() {
		return Upload;
	}


	public void setUpload(String upload) {
		Upload = upload;
	}


	public String getFileTypeExts() {
		return fileTypeExts;
	}


	public void setFileTypeExts(String fileTypeExts) {
		this.fileTypeExts = fileTypeExts;
	}


	public String getFilename() {
		return Filename;
	}


	public void setFilename(String filename) {
		Filename = filename;
	}

	public String getFolder() {
		return folder;
	}


	public void setFolder(String folder) {
		this.folder = folder;
	}


	public String getConferenceId() {
		return conferenceId;
	}


	public void setConferenceId(String conferenceId) {
		this.conferenceId = conferenceId;
	}


	public String getUri() {
		return uri;
	}


	public void setUri(String uri) {
		this.uri = uri;
	}
	
	

}
