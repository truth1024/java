package com.richmobi.checkin.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.richmobi.checkin.constant.Constant;

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
		if(myDate != null){
			SimpleDateFormat myFormat = new SimpleDateFormat(fromatString);
			return myFormat .format(myDate);
		}else{
			return "";
		}
	}
	
	public static String nationality(String nationality){
		if(nationality.matches("\\d{1}")){
			int cerInt = Integer.parseInt(nationality);
			return Constant.nationArr[cerInt-1].getName();
		}else{
			return nationality;
		}
	}
	
	public static String title(String title){
		if(title != null && !title.equals("") && title.matches("\\d{1}")){
			int cerInt = Integer.parseInt(title);
			return Constant.titleArr[cerInt-1].getName();
		}else{
			return title;
		}
	}
	
	public static String deparTrafficTool(String trafficTool){
		if(trafficTool.matches("\\d{1}")){
			int cerInt = Integer.parseInt(trafficTool);
			return Constant.deparTrafficArr[cerInt-1].getName();
		}else{
			return trafficTool;
		}
	}
	
	public static String backTrafficTool(String trafficTool){
		if(trafficTool.matches("\\d{1}")){
			int cerInt = Integer.parseInt(trafficTool);
			return Constant.backTrafficArr[cerInt-1].getName();
		}else{
			return trafficTool;
		}
	}
	
	public static String cer(String cer){
		if(cer.matches("\\d{1}")){
			int cerInt = Integer.parseInt(cer);
			return Constant.cerArr[cerInt-1].getName();
		}else{
			return cer;
		}
	}
	
	public static String yseOrNo(int yon){
		return (yon == 1 ? "是" :(yon == 2 ? "否" : ""));
	}
	
	public static String route(int route){
		return Constant.touristArr[route-1].getName();
		
	}
	
	public static String gol(int gol){
		return (gol == 1 ? "G签" : (gol == 2 ? "L签" : ""));
	}
	
	public static String sex(int sex){
		return (sex == 1 ? "男" : "女");
	}
	
	public static String playSize(int size){
		return (size == 0 ? "" : Constant.sizeArr[size-1].getName());
	}
	
	public static String diet(String diet){
		if(diet != null && !diet.equals("") && diet.matches("\\d{1}")){
			int cerInt = Integer.parseInt(diet);
			return Constant.dietArr[cerInt-1].getName();
		}else{
			return diet;
		}
	}
	
	public static String stature(int stature){
		return (stature == 0 ? "" : stature+"CM");
	}
	
	public static String room(int room){
		return Constant.roomArr[room-1].getName();
	}
	
	public static String hasPass(int hasPass){
		return (hasPass == 0 ? "" : Constant.passArr[hasPass-1].getName());
	}
}
