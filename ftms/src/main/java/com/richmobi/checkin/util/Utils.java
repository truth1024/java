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
		return basicFormat(myDate, "yyyy-MM-dd");
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
	
	public static String nationality(String nationality,String lang){
		if(nationality.matches("\\d{1}")){
			int cerInt = Integer.parseInt(nationality);
			return (lang == null ? Constant.nationArr[cerInt-1].getName() : Constant.nationEnArr[cerInt-1].getName());
		}else{
			return nationality;
		}
	}
	
	public static String title(String title,String lang){
		if(title != null && !title.equals("") && title.matches("\\d{1}")){
			int cerInt = Integer.parseInt(title);
			return (lang == null ? Constant.titleArr[cerInt-1].getName() : Constant.titleEnArr[cerInt-1].getName());
		}else{
			return title;
		}
	}
	
	public static String deparTrafficTool(String trafficTool,String lang){
		if(trafficTool.matches("\\d{1}")){
			int cerInt = Integer.parseInt(trafficTool);
			return (lang == null ? Constant.deparTrafficArr[cerInt-1].getName() : Constant.deparTrafficEnArr[cerInt-1].getName());
		}else{
			return trafficTool;
		}
	}
	
	public static String backTrafficTool(String trafficTool,String lang){
		if(trafficTool.matches("\\d{1}")){
			int cerInt = Integer.parseInt(trafficTool);
			return (lang == null ? Constant.backTrafficArr[cerInt-1].getName() : Constant.backTrafficEnArr[cerInt-1].getName());
		}else{
			return trafficTool;
		}
	}
	
	public static String cer(String cer,String lang){
		if(cer.matches("\\d{1}")){
			int cerInt = Integer.parseInt(cer);
			return (lang == null ? Constant.cerArr[cerInt-1].getName() : Constant.cerEnArr[cerInt-1].getName());
		}else{
			return cer;
		}
	}
	
	public static String yseOrNo(int yon,String lang){
		String yes = (lang == null ? "是" : "Yes");
		String no = (lang == null ? "否" : "No");
		return (yon == 1 ? yes :(yon == 2 ? no : ""));
	}
	
	public static String route(int route,String lang){
		return (route == 0 ? "" : (lang == null ? Constant.touristArr[route-1].getName() : Constant.touristEnArr[route-1].getName()));
		
	}
	
	public static String gol(int gol,String lang){
		String g = (lang == null ? "G签" : "G endorsement");
		String l = (lang == null ? "L签" : "L endorsement");
		return (gol == 1 ? g : (gol == 2 ? l : ""));
	}
	
	public static String sex(int sex,String lang){
		String male = (lang == null ? "男" : "male");
		String female = (lang == null ? "女" : "female");
		return (sex == 1 ? male : female);
	}
	
	public static String playSize(int size,String lang){
		return (size == 0 ? "" : (lang == null ? Constant.sizeArr[size-1].getName() : Constant.sizeEnArr[size-1].getName()));
	}
	
	public static String diet(String diet,String lang){
		if(diet != null && !diet.equals("") && diet.matches("\\d{1}")){
			int cerInt = Integer.parseInt(diet);
			return (lang == null ? Constant.dietArr[cerInt-1].getName() : Constant.dietEnArr[cerInt-1].getName());
		}else{
			return diet;
		}
	}
	
	public static String stature(int stature,String lang){
		return (stature == 0 ? "" : stature+(lang == null ? "CM" : "cm"));
	}
	
	public static String room(int room,String lang){
		return (room == 0 ? "" : (lang == null ? Constant.roomArr[room-1].getName() : Constant.roomEnArr[room-1].getName()));
	}
	
	public static String hasPass(int hasPass,String lang){
		return (hasPass == 0 ? "" : (lang == null ? Constant.passArr[hasPass-1].getName() : Constant.passEnArr[hasPass-1].getName()));
	}
	
	public static String city(int city,String lang){
		return (city == 0 ? "" : (lang == null ? Constant.cityArr[city-1].getName() : Constant.cityEnArr[city-1].getName()));
	}
	
}
