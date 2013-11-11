package com.richmobi.checkin.uploadify;


import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.awt.image.CropImageFilter;
import java.awt.image.FilteredImageSource;
import java.awt.image.ImageFilter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class ImageHandlerAction extends ActionSupport{
	
	 private static final Logger log = Logger.getLogger(ImageHandlerAction.class);
	private static final long serialVersionUID = -4234447733625665140L;
	private String uri;
	  private Float imageH;
	  private Float imageW;
	  private Float imageX;
	  private Float imageY;
	  private Float selectorH;
	  private Float selectorW;
	  private Float selectorX;
	  private Float selectorY;
	  private int scalingPercents[];
	
	
	@Override
	public String execute() throws Exception {
		log.debug("imageH:" + this.imageH);
		log.debug("imageW:" + this.imageW);
		log.debug("imageX:" + this.imageX);
		log.debug("imageY:" + this.imageY);
		log.debug("selectorH:" + this.selectorH);
		log.debug("selectorW:" + this.selectorW);
		log.debug("selectorX:" + this.selectorX);
		log.debug("selectorY:" + this.selectorY);
		log.debug("scalingPercents:" + scalingPercents);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out = response.getWriter();
		response.setCharacterEncoding("utf-8");
		if ((this.imageH != null) && (this.imageW != null)
				&& (this.imageX != null) && (this.imageY != null)
				&& (this.selectorH != null) && (this.selectorW != null)
				&& (this.selectorX != null) && (this.selectorY != null)
				&& (StringUtils.isNotBlank(this.uri))) {
			try {
				
				String basePath = ServletActionContext.getServletContext()
						.getRealPath("");//应用的路径
				
				String baseURI = StringUtils.substring(this.uri, 0, StringUtils.lastIndexOf(this.uri, "/") + 1);//存放图片目录的相对路径(相对于应用目录)
				String oldFileName = StringUtils.substring(this.uri, StringUtils.lastIndexOf(this.uri, "/") + 1);//原图路径
				String suffix = oldFileName.substring(oldFileName
						.lastIndexOf(".") + 1);//原图片的扩展名

				String newImgFileName = new Date().getTime() + "." + suffix;//生成新的文件名

				String newImgURI = baseURI + newImgFileName;//生成新的图片的URI

				String newImgFilePath = basePath + File.separator + "postcard" + newImgURI;//新老图片的绝对路径

				String oldImgFilePath = basePath + File.separator  + "postcard" + this.uri;//老图片的绝对路径

				scaledImage(oldImgFilePath,
						Math.round(this.imageW.floatValue()),
						Math.round(this.imageH.floatValue()), oldImgFilePath,
						suffix);

				cutImage(
						oldImgFilePath,
						newImgFilePath,
						suffix,
						Math.round(this.selectorX.floatValue()
								- this.imageX.floatValue() + 1.0F),
						Math.round(this.selectorY.floatValue()
								- this.imageY.floatValue() + 1.0F),
						Math.round(this.selectorW.floatValue()),
						Math.round(this.selectorH.floatValue()));
				
				//删除旧文件
				if (oldImgFilePath != null) {
					File oldFile = new File(oldImgFilePath);
					oldFile.deleteOnExit();
				}
				
				
				StringBuilder ret = new StringBuilder();
				if(StringUtils.isNotBlank(newImgFilePath)){
					if(scalingPercents != null && scalingPercents.length > 0){
						for(int i=0 ; i< scalingPercents.length; i++){
							if(scalingPercents[i] > 0 && scalingPercents[i] <= 200){//缩放比例必须在0～200之间，否则不予于处理
								
								if(scalingPercents[i] == 100){//如果缩放百分比是100，则直接追加到返回值，不进行缩放操作
									ret.append(newImgURI);
								} else {
									String scaledImgFileName = new Date().getTime() + "." + suffix;
									//按照缩放比例缩放图片
									scaledImage(
											newImgFilePath,
											(int) ((selectorW * scalingPercents[i]) / 100),
											(int) ((selectorH * scalingPercents[i]) / 100),
											basePath + File.separator + "postcard" + baseURI + scaledImgFileName,
											suffix);
									ret.append(baseURI).append(scaledImgFileName);
								}
								//判断是否需要加分隔符 ";"
								if(i < scalingPercents.length -1){
									ret.append(";");
								}
							} else {
								continue;
							}
						}
					} else {
						ret.append(newImgURI);
					}
				} else{
					out.print("500");
					return null;
				}
				
				out.print(ret.toString());
			} catch (Exception e) {
				out.print("500");
				log.warn("image edit error!uri:" + this.uri);
				e.printStackTrace();
			}
		} else
			out.print("500");

		out.flush();
		out.close();

		return null;}
	
    /**
     * 进行图片的缩放,可以将原始路径（url）的图片缩放后放到另外的路径（newUrl）。如果
     * url和newUrl相同，那就是在原始图片的基础上做修改了
     * @author kongqz
     * @param url 要做修改的图片的物理路径，就是存放在服务器上的绝对路径
     * @param newWidth 新的宽度
     * @param newHeight 新的高度
     * @param  newUrl 要写入的路径，就是存放在服务器上的绝对路径，可以和url一样，这样就是对原始图片的修改了
     * @param  suffix 文件的后缀名，例如“jpg”
     * */
    public void scaledImage(String url, int newWidth, int newHeight, String newUrl, String suffix)throws Exception{
        //读取图片
        BufferedImage bi = ImageIO.read(new File(url));
        //判断读入图片的宽和高
//        if (bi.getHeight() > bi.getWidth())
//        {
//            //如果高比宽大,就交换两值,确保生成的图片的长个宽都在一个范围内
//            int tmp = newWidth;
//            newWidth = newHeight;
//            newHeight = tmp;
//        }
        //用Image里的方法对图片进行等比压缩,只要宽和高其一值为负,则以正的那个值为最大边进行等比压缩
        Image image2 = bi.getScaledInstance(newWidth, newHeight, Image.SCALE_AREA_AVERAGING);
        //获取压缩后图片的高和宽
        int height = image2.getHeight(null);
        int width = image2.getWidth(null);          
        //以新的高和宽构造一个新的缓存图片
        BufferedImage bi3 = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics g = bi3.getGraphics();
        //在新的缓存图片中画图,在画图的时候可以设定背景色
        g.drawImage(image2, 0, 0,Color.white, null);
        //构造IO流输出到文件
        FileOutputStream fos = new FileOutputStream(new File(newUrl));
        //将图片写入到指定的文件中
        ImageIO.write(bi3, suffix, fos);
        fos.flush();
        fos.close();
    }   


//图片经过缩放后的剪辑代码如下：

    /**
     * 将图片进行裁剪
     * @author kongqz
     * @param imgsrc 源图片文件路径
     * @param suffix 文件的后缀
     * @param imgdest 目标图片文件写入路径
     * @param x 图片的x坐标
     * @param y 图片的y坐标
     * @param width 截取框的宽
     * @param height 截取框的高
     * @throws IOException 
     * */
    public void cutImage(String imgsrc,String imgdest,String suffix,int x,int y,int width,int height) throws IOException{
//      进行截取    
        //读取源图片文件
        BufferedImage sourceImage = ImageIO.read(new File(imgsrc));
        Image croppedImage;
        ImageFilter cropFilter;
        //四个参数分别为图像起点坐标和宽高，即CropImageFilter(int x,int y,int width,int height)，详细情况请参考API
        //指定要裁剪的的文件的宽度和高度，以及起始坐标
        cropFilter =new CropImageFilter(x,y,width,height);
        //生成图片
        croppedImage= Toolkit.getDefaultToolkit().createImage(new FilteredImageSource(sourceImage.getSource(),cropFilter));
        
        //获取创建后的图片的高度
        int h1=croppedImage.getHeight(null);
        int w1=croppedImage.getWidth(null);
        
        BufferedImage bi=new BufferedImage(w1,h1,BufferedImage.TYPE_INT_RGB);
        
        Graphics g=bi.getGraphics();
        //在画图的时候可以设置背景色
        g.drawImage(croppedImage,0,0,Color.white,null);
        
        //创建要存储图片的文件,如果文件存在就读取
        File file = new File(imgdest);
        //删除文件
        file.delete(); 
        //创建文件输出流 
        FileOutputStream fos=new FileOutputStream(new File(imgdest));
        //将创建的图片写入到输出流
        ImageIO.write(bi, suffix, fos);
        fos.close();
    }
    

	public Float getImageH() {
		return imageH;
	}

	public void setImageH(Float imageH) {
		this.imageH = imageH;
	}

	public Float getImageW() {
		return imageW;
	}

	public void setImageW(Float imageW) {
		this.imageW = imageW;
	}

	public Float getImageX() {
		return imageX;
	}

	public void setImageX(Float imageX) {
		this.imageX = imageX;
	}

	public Float getImageY() {
		return imageY;
	}

	public void setImageY(Float imageY) {
		this.imageY = imageY;
	}

	public Float getSelectorH() {
		return selectorH;
	}

	public void setSelectorH(Float selectorH) {
		this.selectorH = selectorH;
	}

	public Float getSelectorW() {
		return selectorW;
	}

	public void setSelectorW(Float selectorW) {
		this.selectorW = selectorW;
	}

	public Float getSelectorX() {
		return selectorX;
	}

	public void setSelectorX(Float selectorX) {
		this.selectorX = selectorX;
	}

	public Float getSelectorY() {
		return selectorY;
	}

	public void setSelectorY(Float selectorY) {
		this.selectorY = selectorY;
	}

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public int[] getScalingPercents() {
		return scalingPercents;
	}

	public void setScalingPercents(int[] scalingPercents) {
		this.scalingPercents = scalingPercents;
	}


}
