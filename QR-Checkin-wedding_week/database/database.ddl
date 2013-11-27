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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_conference
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type
-- ----------------------------

INSERT INTO `t_type` VALUES (1,'婚礼讲堂'),(2,'餐桌设计大赛门票'),(3,'颁奖盛典及晚宴'),(4,'餐桌设计大赛观摩门票'),(5,'Preston Bailey私人晚宴'),(6,'潮流婚尚展门票'),(7,'套票A：婚礼讲堂+餐桌设计大赛'),(8,'套餐B：婚礼讲堂+餐桌设计大赛+颁奖盛典及晚宴'),(9,'套餐C：餐桌设计大赛+颁奖盛典及晚宴'),(10,'欢迎晚宴门票'),(11,'Special Events世界公关活动大赏门票'),(12,'婚礼品牌营销培训课程'),(13,'婚礼人快速手绘课程'),(14,'婚礼摄影研讨会'),(15,'五星级酒店住宿（香格里拉），需拼房'),(16,'五星级酒店住宿（香格里拉），单人间'),(17,'五星级酒店住宿（香格里拉），双人间'),(18,'三星级酒店住宿'),(19,'婚礼讲堂套票（含3晚星级住宿）'),(20,'餐桌设计大赛及颁奖晚宴豪华套票（含2晚五星级住宿）'),(21,'婚礼摄像实战训练营');

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