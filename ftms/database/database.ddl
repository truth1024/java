DROP DATABASE IF EXISTS `ftms`;
create database ftms default charset utf8;
grant all privileges on ftms.* to ftms@'%' identified by 'ftms';
grant all privileges on ftms.* to ftms@'localhost' identified by 'ftms';
flush privileges;
use ftms;

set names utf8;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_hotel`
-- ----------------------------
DROP TABLE IF EXISTS `t_hotel`;
CREATE TABLE `t_hotel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) NOT NULL,
  `is_stay` tinyint(4) DEFAULT NULL,
  `in_date` datetime DEFAULT NULL,
  `out_date` datetime DEFAULT NULL,
  `room` tinyint(4) DEFAULT NULL,
  `is_with` tinyint(4) DEFAULT NULL,
  `with_name` varchar(100) DEFAULT NULL,
  `with_shop` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_fk_u_id` (`u_id`),
  CONSTRAINT `hotel_fk_u_id` FOREIGN KEY (`u_id`) REFERENCES `t_user_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_hotel
-- ----------------------------

-- ----------------------------
-- Table structure for `t_other`
-- ----------------------------
DROP TABLE IF EXISTS `t_other`;
CREATE TABLE `t_other` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) NOT NULL,
  `meeting` tinyint(4) DEFAULT NULL,
  `tourist_route` tinyint(4) DEFAULT NULL,
  `has_pass` tinyint(4) DEFAULT NULL,
  `is_visa` tinyint(4) DEFAULT NULL,
  `sign` tinyint(4) DEFAULT NULL,
  `tourist_back` tinyint(4) DEFAULT NULL,
  `is_play` tinyint(4) DEFAULT NULL,
  `play_almost` varchar(200) DEFAULT NULL,
  `stature` int(11) DEFAULT NULL,
  `play_size` tinyint(4) DEFAULT NULL,
  `play_back` tinyint(4) DEFAULT NULL,
  `diet` varchar(50) DEFAULT NULL,
  `effective_date` datetime DEFAULT NULL,
  `pass_image` varchar(45) DEFAULT NULL,
  `visa_image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `other_fk_u_id` (`u_id`),
  CONSTRAINT `other_fk_u_id` FOREIGN KEY (`u_id`) REFERENCES `t_user_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_other
-- ----------------------------

-- ----------------------------
-- Table structure for `t_traffic`
-- ----------------------------
DROP TABLE IF EXISTS `t_traffic`;
CREATE TABLE `t_traffic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) NOT NULL,
  `departure_traffic_tool` varchar(45) DEFAULT NULL,
  `departure_city1` varchar(100) DEFAULT NULL,
  `departure_city2` tinyint(4) DEFAULT NULL,
  `departure_flight` varchar(45) DEFAULT NULL,
  `arrival_date` datetime DEFAULT NULL,
  `pick_up` tinyint(4) DEFAULT NULL,
  `back_traffic_tool` varchar(45) DEFAULT NULL,
  `back_city1` varchar(100) DEFAULT NULL,
  `back_city2` tinyint(4) DEFAULT NULL,
  `back_flight` varchar(45) DEFAULT NULL,
  `back_date` datetime DEFAULT NULL,
  `send` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `traffic_fk_u_id` (`u_id`),
  CONSTRAINT `traffic_fk_u_id` FOREIGN KEY (`u_id`) REFERENCES `t_user_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_traffic
-- ----------------------------

-- ----------------------------
-- Table structure for `t_user_info`
-- ----------------------------
DROP TABLE IF EXISTS `t_user_info`;
CREATE TABLE `t_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `size` tinyint(4) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `birth_date` datetime DEFAULT NULL,
  `nationality` varchar(200) DEFAULT NULL,
  `company` int(11) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `certificate` varchar(45) DEFAULT NULL,
  `mobile_phone` varchar(20) DEFAULT NULL,
  `telephone` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `diet` varchar(50) DEFAULT NULL,
  `contact_name` varchar(100) DEFAULT NULL,
  `contact_phone` varchar(20) DEFAULT NULL,
  `contact_telephone` varchar(20) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `u_id_index` (`u_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_info
-- ----------------------------

-- ----------------------------
-- Table structure for `t_user_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_user_type`;
CREATE TABLE `t_user_type` (
  `id` varchar(20) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `region` varchar(20) DEFAULT NULL COMMENT '大区',
  `short_name` varchar(50) DEFAULT NULL COMMENT '经销商简称',
  `login_date` datetime DEFAULT NULL,
  `registered` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
