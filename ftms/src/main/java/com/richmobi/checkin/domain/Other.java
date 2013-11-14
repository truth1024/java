package com.richmobi.checkin.domain;

import java.util.Date;

/**
 * 
* @ClassName: Other
* @Description: 其他信息实体
* @author xuehan.li
* @date 2013年10月30日 下午5:40:00
*
 */
public class Other extends AbstractDomain {

	private static final long serialVersionUID = 1968369608329247562L;
	
	private long id;				//其他信息ID
	private long uid;				//用户信息ID
	private int meeting;			//是否参加会议
	private int touristRoute;		//旅游线路
	private int hasPass;			//是否有港澳通行证
	private int isVisa;				//是否有效签注
	private int sign;				//签注类型
	private int touristBack;		//游览完毕后是否随统一大巴返回
	private int isPlay;				//是否打球
	private String playAlmost;		//打球差点
	private int stature;			//身高
	private int playSize;			//服装尺码
	private String diet;			//饮食
	private int playBack;			//赛后行程
	private Date effectiveDate;		//签注有效期
	private String passImage;		//通行证首页图片链接地址
	private String visaImage;		//签注页图片链接地址
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public int getMeeting() {
		return meeting;
	}
	public void setMeeting(int meeting) {
		this.meeting = meeting;
	}
	public int getTouristRoute() {
		return touristRoute;
	}
	public void setTouristRoute(int touristRoute) {
		this.touristRoute = touristRoute;
	}
	public int getHasPass() {
		return hasPass;
	}
	public void setHasPass(int hasPass) {
		this.hasPass = hasPass;
	}
	public int getIsVisa() {
		return isVisa;
	}
	public void setIsVisa(int isVisa) {
		this.isVisa = isVisa;
	}
	public int getSign() {
		return sign;
	}
	public void setSign(int sign) {
		this.sign = sign;
	}
	public int getTouristBack() {
		return touristBack;
	}
	public void setTouristBack(int touristBack) {
		this.touristBack = touristBack;
	}
	public int getIsPlay() {
		return isPlay;
	}
	public void setIsPlay(int isPlay) {
		this.isPlay = isPlay;
	}
	public String getPlayAlmost() {
		return playAlmost;
	}
	public void setPlayAlmost(String playAlmost) {
		this.playAlmost = playAlmost;
	}
	public int getStature() {
		return stature;
	}
	public void setStature(int stature) {
		this.stature = stature;
	}
	public int getPlaySize() {
		return playSize;
	}
	public void setPlaySize(int playSize) {
		this.playSize = playSize;
	}
	public String getDiet() {
		return diet;
	}
	public void setDiet(String diet) {
		this.diet = diet;
	}
	public Date getEffectiveDate() {
		return effectiveDate;
	}
	public void setEffectiveDate(Date effectiveDate) {
		this.effectiveDate = effectiveDate;
	}
	public String getPassImage() {
		return passImage;
	}
	public void setPassImage(String passImage) {
		this.passImage = passImage;
	}
	public String getVisaImage() {
		return visaImage;
	}
	public void setVisaImage(String visaImage) {
		this.visaImage = visaImage;
	}
	public int getPlayBack() {
		return playBack;
	}
	public void setPlayBack(int playBack) {
		this.playBack = playBack;
	}
}
