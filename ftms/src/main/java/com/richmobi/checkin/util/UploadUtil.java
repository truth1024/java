package com.richmobi.checkin.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

public class UploadUtil {

	/**
	 * 
	* @Title: batchUpload
	* @Description: 批量上传图片
	* @param @param file
	* @param @param fileFileName
	* @param @param fileContentType
	* @param @param filePath
	* @param @return
	* @param @throws Exception
	* @return boolean
	* @throws
	 */
	public static boolean batchUpload(List<File> file,List<String> fileFileName,List<String> fileContentType,String filePath)throws Exception{
		for(int i = 0 ; i < file.size() ; i ++){
			upload(file.get(i), fileFileName.get(i), filePath);
        }
		return true;
	}
	
	public static boolean upload(File file,String fileFileName ,String filePath)throws Exception{
		
		getImagePara(file);
		
        InputStream is = new FileInputStream(file);
        
        //得到图片保存的位置(根据root来得到图片保存的路径在tomcat下的该工程里)
        File destFile = new File(filePath,fileFileName);
        
        //把图片写入到上面设置的路径里
        OutputStream os = new FileOutputStream(destFile);
        byte[] buffer = new byte[1024];
        int length  = 0 ;
        while((length = is.read(buffer))>0){
            os.write(buffer, 0, length);
        }
        is.close();
        os.close();
        return true;
	}
	
	public static Map<String,Integer> getImagePara(File file) throws FileNotFoundException, IOException{
		Map<String,Integer> para = new HashMap<String, Integer>();
		BufferedImage sourceImg =ImageIO.read(new FileInputStream(file));   
        System.out.println(String.format("%.1f",file.length()/1024.0));  
        System.out.println(sourceImg.getWidth());  
        System.out.println(sourceImg.getHeight());
        return para;
	}
	
}
