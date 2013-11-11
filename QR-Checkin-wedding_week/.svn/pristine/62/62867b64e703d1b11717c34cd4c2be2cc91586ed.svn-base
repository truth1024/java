package com.richmobi.checkin.test;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;


public class ImageTest {

	
	public static void main(String[] args) throws IOException {
		
        
        BufferedImage bufferedImage = ImageIO.read(new File("/work/workspace/QR-Checkin-ido/src/main/resources/emailTemplate/image/template.png"));
        Graphics g = bufferedImage.getGraphics();
        ImageIcon imgIcon = new ImageIcon("/work/workspace/QR-Checkin-ido/src/main/webapp/qr/292d5ca3.png"); 
        Image img = imgIcon.getImage();
        g.drawImage(img,5,10,null);
        //设置颜色。
        g.setColor(Color.BLACK);
        //最后一个参数用来设置字体的大小
        Font f = new Font("宋体",Font.BOLD,30);
        g.setFont(f);
        //10,20 表示这段文字在图片上的位置(x,y) .第一个是你设置的内容。
        g.drawString("电子入场券",10,30);
        g.dispose();
        
        File target = new File("/Users/zhangsf/Desktop/target.png");
        
        ImageIO.write(bufferedImage, "png",target);

        System.err.println("完工....");
        
//        
//      //1.jpg是你的 主图片的路径
//        InputStream is = new FileInputStream("/work/workspace/QR-Checkin-ido/src/main/resources/emailTemplate/image/template.png");
//        
//        //通过JPEG图象流创建JPEG数据流解码器
//        JPEGImageDecoder jpegDecoder = JPEGCodec.createJPEGDecoder(is);
//        //解码当前JPEG数据流，返回BufferedImage对象
//        BufferedImage buffImg = jpegDecoder.decodeAsBufferedImage();
//        //得到画笔对象
//        Graphics g = buffImg.getGraphics();
//        
//        //创建你要附加的图象。
//        //2.jpg是你的小图片的路径
//        ImageIcon imgIcon = new ImageIcon("/work/workspace/QR-Checkin-ido/src/main/webapp/qr/292d5ca3.png"); 
//        
//        //得到Image对象。
//        Image img = imgIcon.getImage();
//        
//        //将小图片绘到大图片上。
//        //5,300 .表示你的小图片在大图片上的位置。
//        g.drawImage(img,5,330,null);
//        
//        
//        //设置颜色。
//        g.setColor(Color.BLACK);
//        
//        
//        //最后一个参数用来设置字体的大小
//        Font f = new Font("宋体",Font.BOLD,30);
//        
//        g.setFont(f);
//        
//        //10,20 表示这段文字在图片上的位置(x,y) .第一个是你设置的内容。
//        g.drawString("电子入场券",10,30);
//        
//        g.dispose();
//        
//        
//        
//        OutputStream os = new FileOutputStream("/Users/zhangsf/Desktop/target.jpg");
//        
//        //创键编码器，用于编码内存中的图象数据。
//        
//        JPEGImageEncoder en = JPEGCodec.createJPEGEncoder(os);
//        en.encode(buffImg);
//        
//        
//        is.close();
//        os.close();
//        
//        System.out.println ("合成结束。。。。。。。。");
//        
        
	}
}
