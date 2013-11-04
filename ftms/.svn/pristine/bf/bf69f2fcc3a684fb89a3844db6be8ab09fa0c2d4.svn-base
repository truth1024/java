package com.richmobi.checkin.service;

import java.util.List;
import java.util.Map;

import com.richmobi.checkin.domain.PageResult;
import com.richmobi.checkin.domain.User;
import com.richmobi.checkin.exception.UserAlreadyExistException;

/** 
* @ClassName: UserService 
* @Description: 提供用户签到、查询、添加等方法
* @author shuangfei.zhang
* @date 2012-3-21 下午2:12:01 
*  
*/
public interface UserService {
	/**
	* @Title: add
	* @Description: 添加一个用户
	* @param user
	* 		用户信息
	* @throws
	*/
	public void add(User user) throws UserAlreadyExistException;
	/**
	* @Title: addUsers
	* @Description: 添加多个用户
	* @param users
	* 		用户信息
	*/
	public void addUsers(List<User> users);
	/**
	* @Title: update
	* @Description: 更新用户信息
	* @param user
	* 		用户信息
	*/
	public void update(User user);
	/**
	* @Title: getPhotoDateNum
	* @Description: 获取拍照数
	*/
	public int getPhotoDateNum();
	/**
	* @Title: updatePhotoDate
	* @Description: 添加用户拍照时间
	* @param user
	* 		用户信息
	*/
	public void updatePhotoDate(User user);
	/**
	* @Title: updatePhotoName
	* @Description: 添加用户照片名称
	* @param user
	* 		用户信息
	*/
	public void updatePhotoName(User user);
	/**
	* @Title: updateDaren
	* @Description: 添加用户达人称号
	* @param user
	* 		用户信息
	*/
	public void updateDaren(User user);
	/**
	* @Title: updatePrize
	* @Description: 添加用户领奖
	* @param user
	* 		用户信息
	*/
	public void updatePrize(User user);
	/**
	* @Title: batchUpdate
	* @Description:批量更新用户信息 
	* @param users
	* 		用户信息列表
	* @throws
	*/
	public void batchUpdate(List<User> users);
	/**
	* @Title: deleteById
	* @Description: 根据ID删除一个用户
	* @param id
	* 		用户ID
	* @throws
	*/
	public void deleteById(long id);
	/**
	* @Title: getById
	* @Description: 根据用户ID查询用户信息
	* @param id
	* 		用户ID
	* @return
	* 		用户信息
	* @throws
	*/
	public User getById(long id);
	/**
	* @Title: getByCode
	* @Description: 根据用户编码查询用户信息
	* @param code
	* 		用户编码
	* @return
	* 		用户信息
	* @throws
	*/
	public User getByCode(String code);
	
	/**
	* @Title: getByRegisterId
	* @Description: 根据用户注册id查询用户信息
	* @param registerId 用户注册id
	* @return
	* 		返回用户信息list
	* @throws
	*/
	public List<User> getByRegisterId(long registerId);
	
	/**
	* @Title: getUserByConditions
	* @Description: 组合条件查询用户信息
	* @param conditions
	* 		HashMap,key:条件名字[name,code,phone,email,company,title,isCheckin{0:全部，1:已经签到，2:未签到}]
	* @param page
	* 		当前页
	* @param count
	* 		每页显示的数目
	* @return
	* 		分页记录集
	* @throws
	*/
	@SuppressWarnings("rawtypes")
	public PageResult<User> getUserByConditions(Map conditions, int page, int count);
	
	/**
	* @Title: getAllByConditions
	* @Description: 多条件组合查询用户信息
	* @param conditions 
	* 		类型为HashMap，key:字段名字，value:条件值，部分字段为模糊查询
	* @return List<User>
	* @throws
	*/
	@SuppressWarnings("rawtypes")
	public List<User> getAllByConditions(Map conditions);
	
	/**
	* @Title: getAllUser
	* @Description: 获取所有用户信息
	* @return
	* @throws
	*/
	public List<User> getAllUser();
	
	/**
	* @Title: getAllUserWithPage
	* @Description: 分页查询所有用户信息
	* @param page
	* 		当前页
	* @param count
	* 		每页显示的条数
	* @return
	* 		分页数据集
	* @throws
	*/
	public PageResult<User> getAllUserWithPage(int page, int count);
	
	/**
	* @Title: getUsersWithoutCodeOrImgName
	* @Description: 获取未生成编码或二维码图片的用户
	* @return
	* @throws
	*/
	public List<User> getUsersWithoutCodeOrImgName();
	
	/**
	* @Title: getUserByPhone
	* @Description: 根据手机获取用户
	* @param phone 电话
	* @return
	* @throws
	*/
	public List<User> getUserByPhone(String phone);
	
	/**
	 * 
		 * 功能:按code排序
		 * 作者: xingfu.he
		 * 创建日期:2012-7-4
		 * 修改者: mender
		 * 修改日期: modifydate
		 * @return
	 */
	public PageResult<User> orderByCode(Map conditions,int page,int count);
}
