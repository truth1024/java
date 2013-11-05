package com.richmobi.checkin.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {

	private static String phoneBasic = "((?:(?:13[0-9])|(?:15[^4,\\D])|(?:18[0,2,5-9]))\\d{8})";
	/**
	 * 
		 * 功能: 去空白符，制表符，回车符
		 * 作者: Xuehan.Li
		 * 创建日期:2012-10-30
		 * 修改者: mender
		 * 修改日期: modifydate
		 * @param value
		 * @return
	 */
	public static String clearSpaceCharacter(String value){
		String regex = "(?i)[^a-zA-Z0-9\u4E00-\u9FA5]";
		return value.replaceAll(regex, "");
	}
	
	/**
	 * 
		 * 功能: 是否匹配
		 * 作者: Xuehan.Li
		 * 创建日期:2012-10-30
		 * 修改者: mender
		 * 修改日期: modifydate
		 * @param value
		 * @param basicRegex
		 * @return
	 */
	public static boolean isMatch(String value,String basicRegex){
		Pattern p = Pattern.compile(basicRegex);
		Matcher m = p.matcher(value);
		return m.matches();
	}
	public static boolean isMobile(String value){
		String phoneRegex = "^"+phoneBasic+"$";
		return isMatch(value,phoneRegex);
	}
	public static void main(String[] args) {
		System.out.println(clearSpaceCharacter("      王 冉　" ));
		System.out.println(isMobile(clearSpaceCharacter("     13434543434     ")));
	}
	
	public static String dateFormat(Date myDate){
		return basicFormat(myDate, "yyyy年MM月dd日");
	}
	
	public static String timeFormat(Date myDate){
		return basicFormat(myDate, "hh:mm");
	}
	
	public static String basicFormat(Date myDate,String fromatString){

	     SimpleDateFormat myFormat = new SimpleDateFormat(fromatString); 
	     return myFormat .format(myDate);
	}
	
	public static String cer(String cer){
		String name = "";
		int cerInt = Integer.parseInt(cer);
		switch(cerInt){
		case 1 : name = "身份证";
			break;
		case 2 : name = "护照";
			break;
		}
		return name;
	}
	
	public static String yseOrNo(int yon){
		return (yon == 1 ? "是" : "否");
	}
	
	public static String route(int route){
		String name = "";
		switch(route){
		case 1 : name = "A线路";
			break;
		case 2 : name = "B线路";
			break;	
		case 3 : name = "C线路";
			break;
		default:
				name = "默认";
			break;
		}
		return name;
	}
	
	public static String gol(int gol){
		return (gol == 1 ? "G签" : "L签");
	}
	
	public static String sex(int sex){
		return (sex == 1 ? "男" : "女");
	}
	
	public static String playSize(int size){
		String name = "";
		switch(size){
		case 1 : name = "S";
			break;
		case 2 : name = "M";
			break;	
		case 3 : name = "L";
			break;
		default:
				name = "XS";
			break;
		}
		return name;
	}
	
	public static String room(int room){
		return (room == 1 ? "一人一间" : "二人一间");
		
	}
}
