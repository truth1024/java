package com.richmobi.checkin.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URI;

import org.apache.commons.io.IOUtils;
import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipOutputStream;

public class CompressUtil {
	
	/** 
     *  
     * @param inputFileName 输入一个文件夹 
     * @param zipFileName   输出一个压缩文件夹，打包后文件名字 
     * @throws Exception 
     */ 
//    public static void zip(String inputFileName, String zipFileName) throws Exception {  
//        System.out.println(zipFileName);  
//        zip(zipFileName, new File(inputFileName));  
//    }  
// 
//    private static void zip(String zipFileName, File inputFile) throws Exception {  
//        ZipOutputStream out = new ZipOutputStream(new FileOutputStream(  
//                zipFileName));  
//        zip(out, inputFile, "");  
//        System.out.println("zip done");  
//        out.close();  
//    }  
// 
//    private static void zip(ZipOutputStream out, File f, String base) throws Exception {  
//        if (f.isDirectory()) {  //判断是否为目录  
//            File[] fl = f.listFiles();  
//            ZipEntry zipEntry = new ZipEntry(base + "/");
//            out.putNextEntry(zipEntry);  
//            zipEntry.setUnixMode(755);
////            out.putNextEntry(new ZipEntry(base + "/"));  
//            base = base.length() == 0 ? "" : base + "/";  
//            for (int i = 0; i < fl.length; i++) {  
//                zip(out, fl[i], (base + fl[i].getName()));  
//            }  
//        } else {                //压缩目录中的所有文件  
////            out.putNextEntry(new org.apache.tools.zip.ZipEntry(base));  
//            out.putNextEntry(new ZipEntry(base));  
//            out.setEncoding("utf-8");
//            FileInputStream in = new FileInputStream(f);  
//            int b;  
//            System.out.println(base);  
//            while ((b = in.read()) != -1) {  
//                out.write(b);  
//            }  
//            in.close();  
//        }  
//    }   
    
    /**
    	     * @param inputFileName
    	     *            输入一个文件夹
    	     * @param zipFileName
    	     *            输出一个压缩文件夹，打包后文件名字
    	     * @throws Exception
    	     */
    	    public static void zip(String inputFileName, String zipFileName) throws Exception
    	    {
    	        zip(zipFileName, new File(inputFileName));
    	    }
    	 
    	    private static OutputStream zip(String zipFileName, File inputFile) throws Exception
    	    {
    	    	File zipFile = new File(zipFileName);
    	    	System.out.println(zipFile);
    	    	zipFile.delete();
    	        ZipOutputStream out = new ZipOutputStream(new FileOutputStream(
    	                zipFileName));
    	        out.setEncoding("GBK");//解决linux乱码  根据linux系统的实际编码设置,可以使用命令 vi/etc/sysconfig/i18n 查看linux的系统编码
    	        zip(out, inputFile, "");
    	        out.close();
    	        return out;
    	    }
    	 
    	    private static void zip(ZipOutputStream out, File f, String base) throws Exception
    	    {
    	        if (f.isDirectory())
    	        { // 判断是否为目录
    	            File[] fl = f.listFiles();
    	            // out.putNextEntry(new org.apache.tools.zip.ZipEntry(base + "/"));
    	//            out.putNextEntry(new ZipEntry(base + "/"));
    	            ZipEntry zipEntry=new ZipEntry(base + "/");
    	            zipEntry.setUnixMode(755);//解决linux乱码
    	            out.putNextEntry(zipEntry);
    	            base = base.length() == 0 ? "" : base + "/";
//    	            base = base.length() == 0 ? "" : base + System.getProperties().getProperty("file.separator");
    	            for (int i = 0; i < fl.length; i++)
    	            {
    	            	System.out.println(fl[i].getName());
    	                zip(out, fl[i], base + fl[i].getName());
    	            }
    	        }
    	        else
    	        { // 压缩目录中的所有文件
    	            // out.putNextEntry(new org.apache.tools.zip.ZipEntry(base));
    	            ZipEntry zipEntry=new ZipEntry(base);
    	            zipEntry.setUnixMode(644);//解决linux乱码
    	            out.putNextEntry(zipEntry);
    	            FileInputStream in = new FileInputStream(f);
    	            int b;
    	            while ((b = in.read()) != -1)
    	            {
    	                out.write(b);
    	            }
    	            in.close();
    	        }
    	    }
}
