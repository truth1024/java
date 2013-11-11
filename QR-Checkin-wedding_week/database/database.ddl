DROP DATABASE IF EXISTS `wedding_week`;
create database wedding_week default charset utf8;
grant all privileges on wedding_week.* to wedding_week@'%' identified by 'wedding_week';
grant all privileges on wedding_week.* to wedding_week@'localhost' identified by 'wedding_week';
flush privileges;
use wedding_week;

set names utf8;
-- ----------------------------
-- Table structure for `t_checkin_record`
-- ----------------------------
DROP TABLE IF EXISTS `t_checkin_record`;
CREATE TABLE `t_checkin_record` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '签到id',
  `u_id` bigint(20) unsigned NOT NULL COMMENT '用户id',
  `checkin_way` tinyint(4) NOT NULL COMMENT '签到方式',
  `checkin_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '签到时间',
  PRIMARY KEY (`id`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_checkin_record
-- ----------------------------

-- ----------------------------
-- Table structure for `t_conference`
-- ----------------------------
DROP TABLE IF EXISTS `t_conference`;
CREATE TABLE `t_conference` (
  `id` tinyint(10) unsigned NOT NULL AUTO_INCREMENT,
  `conference_room` varchar(20) DEFAULT NULL COMMENT '会议室',
  `floor` varchar(5) DEFAULT NULL COMMENT '楼层',
  `conference_content` varchar(50) DEFAULT NULL COMMENT '会议内容',
  `conference_date` date DEFAULT NULL COMMENT '会议时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_conference
-- ----------------------------
INSERT INTO `t_conference` VALUES ('1', '三亚学院', null, '婚礼讲堂', '2012-12-12');
INSERT INTO `t_conference` VALUES ('2', '三亚学院', null, '婚礼讲堂', '2012-12-13');
INSERT INTO `t_conference` VALUES ('3', '凯宾斯基宴会厅', null, '梦田灯光基础课程', '2012-12-13');
INSERT INTO `t_conference` VALUES ('4', '宴会厅', null, '餐桌设计大赛观摩', '2012-12-14');
INSERT INTO `t_conference` VALUES ('5', '凯宾斯基宴会厅', null, '婚礼讲堂', '2012-12-14');
INSERT INTO `t_conference` VALUES ('6', '凯宾斯基宴会厅', null, '餐桌设计大赛观摩', '2012-12-14');
INSERT INTO `t_conference` VALUES ('7', '凯宾斯基宴会厅', null, '婚礼讲堂', '2012-12-14');
INSERT INTO `t_conference` VALUES ('8', '凯宾斯基杜月笙故居', null, 'PB私人晚宴', '2012-12-14');
INSERT INTO `t_conference` VALUES ('9', '凯宾斯基会议室', null, '梦田灯光基础课程', '2012-12-14');
INSERT INTO `t_conference` VALUES ('10', '凯宾斯基宴会厅', null, '梦田实践观摩课程', '2012-12-14');
INSERT INTO `t_conference` VALUES ('11', '凯宾斯基宴会厅', null, '餐桌设计大赛观摩', '2012-12-15');
INSERT INTO `t_conference` VALUES ('12', '凯宾斯基宴会厅', null, '婚礼人红毯秀及颁奖晚宴', '2012-12-15');
INSERT INTO `t_conference` VALUES ('13', '凯宾斯基宴会厅', null, '餐桌设计大赛观摩', '2012-12-15');
INSERT INTO `t_conference` VALUES ('14', '凯宾斯基宴会厅', null, '婚礼人红毯秀及颁奖晚宴', '2012-12-15');
INSERT INTO `t_conference` VALUES ('15', '凯宾斯基', null, '婚尚展', '2012-12-16');
INSERT INTO `t_conference` VALUES ('16', '待定', null, '旅行婚礼摄影理念与技术交流研讨会', '2012-12-16');
INSERT INTO `t_conference` VALUES ('17', '待定', null, '婚礼手作与宴会设计工作坊', '2012-12-17');
INSERT INTO `t_conference` VALUES ('18', '待定', null, '婚礼花艺设计进阶课程', '2012-12-17');
INSERT INTO `t_conference` VALUES ('19', '待定', null, '婚礼花艺设计进阶课程', '2012-12-18');
INSERT INTO `t_conference` VALUES ('20', '待定', null, '婚礼花艺设计进阶课程', '2012-12-19');
INSERT INTO `t_conference` VALUES ('21', '待定', null, '婚礼花艺设计进阶课程', '2012-12-20');
INSERT INTO `t_conference` VALUES ('22', '待定', null, '婚礼花艺设计进阶课程', '2012-12-21');

-- ----------------------------
-- Table structure for `t_sms_send_record`
-- ----------------------------
DROP TABLE IF EXISTS `t_sms_send_record`;
CREATE TABLE `t_sms_send_record` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '短信id',
  `u_id` bigint(20) unsigned NOT NULL COMMENT '用户id',
  `send_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '短息发送时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_sms_send_record
-- ----------------------------

-- ----------------------------
-- Table structure for `t_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_type`;
CREATE TABLE `t_type` (
  `id` tinyint(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_name` varchar(30) NOT NULL COMMENT '胸卡类型名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type
-- ----------------------------
INSERT INTO `t_type` VALUES ('1', 'VIP特惠套票');
INSERT INTO `t_type` VALUES ('2', '开幕仪式');
INSERT INTO `t_type` VALUES ('3', '婚礼讲堂');
INSERT INTO `t_type` VALUES ('4', '餐桌设计大赛观摩门票');
INSERT INTO `t_type` VALUES ('5', '婚礼人颁奖典礼及晚宴');
INSERT INTO `t_type` VALUES ('6', '潮流婚尚展门票');
INSERT INTO `t_type` VALUES ('7', 'PB私人晚宴');
INSERT INTO `t_type` VALUES ('8', '梦田婚礼灯光基础课程');
INSERT INTO `t_type` VALUES ('9', '梦田晚宴灯光布场观摩');
INSERT INTO `t_type` VALUES ('10', '旅行婚礼摄影研讨会');
INSERT INTO `t_type` VALUES ('11', '宴会设计和婚礼手作班');
INSERT INTO `t_type` VALUES ('12', '婚礼花艺设计高级课程');
INSERT INTO `t_type` VALUES ('13', 'VIP特惠套票\r\n（含4晚五星级住宿）');
INSERT INTO `t_type` VALUES ('14', '餐桌设计大赛观摩套票\r\n（含1晚五星级住宿）');
INSERT INTO `t_type` VALUES ('15', '餐桌设计大赛观摩套票\r\n（含2晚五星级住宿）');
INSERT INTO `t_type` VALUES ('16', '五星级酒店住宿');
INSERT INTO `t_type` VALUES ('17', '四星级酒店住宿');
INSERT INTO `t_type` VALUES ('18', '三星级酒店住宿');
INSERT INTO `t_type` VALUES ('19', '婚礼讲堂套票（含3晚星级住宿）');
INSERT INTO `t_type` VALUES ('20', '餐桌设计大赛及颁奖晚宴豪华套票（含2晚五星级住宿）');
INSERT INTO `t_type` VALUES ('21', '婚礼摄像实战训练营');
-- ----------------------------
-- Table structure for `t_type_conference_rel`
-- ----------------------------
DROP TABLE IF EXISTS `t_type_conference_rel`;
CREATE TABLE `t_type_conference_rel` (
  `id` tinyint(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` tinyint(10) unsigned NOT NULL COMMENT '类型id',
  `conference_id` tinyint(10) unsigned NOT NULL COMMENT '会议id',
  PRIMARY KEY (`id`),
  KEY `index_conference_id` (`conference_id`) USING BTREE,
  KEY `index_type_id` (`type_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `register_id` bigint(20) NOT NULL COMMENT '注册id',
  `u_type` tinyint(4) NOT NULL COMMENT '用户类型id',
  `code` varchar(100) DEFAULT NULL COMMENT '编码',
  `name` varchar(100) DEFAULT NULL COMMENT '名称',
  `phone` varchar(50) DEFAULT NULL COMMENT '手机号',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `company` varchar(255) DEFAULT NULL COMMENT '公司',
  `title` varchar(50) DEFAULT NULL COMMENT '职位',
  `company_address` varchar(255) DEFAULT NULL COMMENT '公司地址',
  `note` text COMMENT '备注',
  `qr_img_name` varchar(255) DEFAULT NULL COMMENT '二维码图片名称',
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户创建时间',
  `photo_date` int(11) unsigned DEFAULT NULL,
  `photo_name` varchar(255) DEFAULT NULL,
  `daren` varchar(50) DEFAULT NULL,
  `prize` varchar(50) DEFAULT NULL,
  `seat_number` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `user_code` (`code`) USING BTREE,
  KEY `user_phone` (`phone`) USING BTREE,
  KEY `user_name` (`name`) USING BTREE,
  KEY `user_type` (`u_type`) USING BTREE,
  KEY `user_register_id` (`register_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;