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
  `u_id` bigint(20) unsigned NOT NULL,
  `is_stay` tinyint(4) DEFAULT NULL,
  `in_date` datetime DEFAULT NULL,
  `out_date` datetime DEFAULT NULL,
  `room` tinyint(4) DEFAULT NULL,
  `is_with` tinyint(4) DEFAULT NULL,
  `with_name` varchar(100) DEFAULT NULL,
  `with_shop` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `u_id_index` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_hotel
-- ----------------------------

-- ----------------------------
-- Table structure for `t_other`
-- ----------------------------
DROP TABLE IF EXISTS `t_other`;
CREATE TABLE `t_other` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) unsigned NOT NULL,
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
  `diet` varchar(50) DEFAULT NULL,
  `effective_date` datetime DEFAULT NULL,
  `pass_image` varchar(45) DEFAULT NULL,
  `visa_image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `u_id_index` (`u_id`)
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
  `u_id` bigint(20) unsigned NOT NULL,
  `departure_traffic_tool` varchar(45) DEFAULT NULL,
  `departure_city` varchar(100) DEFAULT NULL,
  `departure_flight` varchar(45) DEFAULT NULL,
  `arrival_date` datetime DEFAULT NULL,
  `pick_up` tinyint(4) DEFAULT NULL,
  `back_traffic_tool` varchar(45) DEFAULT NULL,
  `back_city` varchar(100) DEFAULT NULL,
  `back_flight` varchar(45) DEFAULT NULL,
  `back_date` datetime DEFAULT NULL,
  `send` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `u_id_Index` (`u_id`)
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_type
-- ----------------------------
INSERT INTO `t_user_type` VALUES ('10111', '2', '华北', '北京三元桥', null);
INSERT INTO `t_user_type` VALUES ('10112', '2', '华北', '北京花乡桥', null);
INSERT INTO `t_user_type` VALUES ('10113', '2', '华北', '北京方庄', null);
INSERT INTO `t_user_type` VALUES ('10114', '2', '华北', '北京首汽', null);
INSERT INTO `t_user_type` VALUES ('10115', '2', '华北', '北京金冠兴业', null);
INSERT INTO `t_user_type` VALUES ('10116', '2', '华北', '北京奥德行', null);
INSERT INTO `t_user_type` VALUES ('10117', '2', '华北', '北京广通', null);
INSERT INTO `t_user_type` VALUES ('10118', '2', '华北', '北京北苑', null);
INSERT INTO `t_user_type` VALUES ('10119', '2', '华北', '北京中新兴达', null);
INSERT INTO `t_user_type` VALUES ('1011A', '2', '华北', '北京和裕', null);
INSERT INTO `t_user_type` VALUES ('1011b', '2', '华北', '北京森华', null);
INSERT INTO `t_user_type` VALUES ('1011C', '2', '华北', '北京华通', null);
INSERT INTO `t_user_type` VALUES ('1011D', '2', '华北', '北京运通博裕', null);
INSERT INTO `t_user_type` VALUES ('1011E', '2', '华北', '北京远通桥', null);
INSERT INTO `t_user_type` VALUES ('1011F', '2', '华北', '北京惠通四惠', null);
INSERT INTO `t_user_type` VALUES ('1011G', '2', '华北', '北京京石', null);
INSERT INTO `t_user_type` VALUES ('1011H', '2', '华北', '北京花园桥', null);
INSERT INTO `t_user_type` VALUES ('1011J', '2', '华北', '北京东仁天宇', null);
INSERT INTO `t_user_type` VALUES ('1011k', '2', '华北', '北京苹果园', null);
INSERT INTO `t_user_type` VALUES ('1011L', '2', '华北', '北京中业', null);
INSERT INTO `t_user_type` VALUES ('1011M', '2', '华北', '北京五方桥', null);
INSERT INTO `t_user_type` VALUES ('1011N', '2', '华北', '北京凯百隆', null);
INSERT INTO `t_user_type` VALUES ('1011P', '2', '华北', '北京博丰长久顺义', null);
INSERT INTO `t_user_type` VALUES ('10211', '2', '华北', '天津柳林', null);
INSERT INTO `t_user_type` VALUES ('10212', '2', '华北', '天津东联', null);
INSERT INTO `t_user_type` VALUES ('10214', '2', '华北', '天津中乒', null);
INSERT INTO `t_user_type` VALUES ('10215', '2', '华北', '天津华苑', null);
INSERT INTO `t_user_type` VALUES ('10216', '2', '华北', '天津凯达', null);
INSERT INTO `t_user_type` VALUES ('10217', '2', '华北', '天津浩物', null);
INSERT INTO `t_user_type` VALUES ('10218', '2', '华北', '天津和裕', null);
INSERT INTO `t_user_type` VALUES ('10219', '2', '华北', '天津柳林金海', null);
INSERT INTO `t_user_type` VALUES ('1021A', '2', '华北', '天津奥嘉', null);
INSERT INTO `t_user_type` VALUES ('1021B', '2', '华北', '天津奥德行津盛', null);
INSERT INTO `t_user_type` VALUES ('1021C', '2', '华北', '天津庞大丰雅', null);
INSERT INTO `t_user_type` VALUES ('10301', '2', '华北', '衡水裕华', null);
INSERT INTO `t_user_type` VALUES ('10311', '2', '华北', '唐山冀东', null);
INSERT INTO `t_user_type` VALUES ('10312', '2', '华北', '唐山弘德', null);
INSERT INTO `t_user_type` VALUES ('10321', '2', '华北', '石家庄新华', null);
INSERT INTO `t_user_type` VALUES ('10323', '2', '华北', '石家庄裕华', null);
INSERT INTO `t_user_type` VALUES ('10324', '2', '华北', '石家庄纪元', null);
INSERT INTO `t_user_type` VALUES ('10331', '2', '华北', '保定轩宇诗', null);
INSERT INTO `t_user_type` VALUES ('10332', '2', '华北', '保定通泰', null);
INSERT INTO `t_user_type` VALUES ('10341', '2', '华北', '沧州运捷', null);
INSERT INTO `t_user_type` VALUES ('10342', '2', '华北', '沧州庞大丰致', null);
INSERT INTO `t_user_type` VALUES ('10351', '2', '华北', '邯郸骏华', null);
INSERT INTO `t_user_type` VALUES ('10352', '2', '华北', '邯郸庞大龙盛丰田', null);
INSERT INTO `t_user_type` VALUES ('10361', '2', '华北', '张家口华铃', null);
INSERT INTO `t_user_type` VALUES ('10371', '2', '华北', '邢台威龙', null);
INSERT INTO `t_user_type` VALUES ('10381', '2', '华北', '秦皇岛龙之俊', null);
INSERT INTO `t_user_type` VALUES ('10391', '2', '华北', '廊坊奥德行', null);
INSERT INTO `t_user_type` VALUES ('103A1', '2', '华北', '承德弘冀行', null);
INSERT INTO `t_user_type` VALUES ('10411', '2', '东北', '呼和浩特康泰', null);
INSERT INTO `t_user_type` VALUES ('10412', '2', '东北', '呼和浩特金川', null);
INSERT INTO `t_user_type` VALUES ('10421', '2', '东北', '包头信得惠', null);
INSERT INTO `t_user_type` VALUES ('10431', '2', '东北', '鄂尔多斯北苑', null);
INSERT INTO `t_user_type` VALUES ('10432', '2', '东北', '鄂尔多斯康泰', null);
INSERT INTO `t_user_type` VALUES ('10441', '2', '东北', '赤峰康泰', null);
INSERT INTO `t_user_type` VALUES ('10451', '2', '东北', '乌海庞大泓程', null);
INSERT INTO `t_user_type` VALUES ('10461', '2', '东北', '通辽川达', null);
INSERT INTO `t_user_type` VALUES ('10462', '2', '东北', '霍林郭勒市运通宏业', null);
INSERT INTO `t_user_type` VALUES ('10471', '2', '东北', '呼伦贝尔市庞大龙盛', null);
INSERT INTO `t_user_type` VALUES ('10481', '2', '东北', '锡盟大昌', null);
INSERT INTO `t_user_type` VALUES ('104A1', '2', '东北', '兴安盟龙晟', null);
INSERT INTO `t_user_type` VALUES ('12901', '2', '华北', '忻州大昌', null);
INSERT INTO `t_user_type` VALUES ('12911', '2', '华北', '太原大昌', null);
INSERT INTO `t_user_type` VALUES ('12912', '2', '华北', '太原东龙', null);
INSERT INTO `t_user_type` VALUES ('12913', '2', '华北', '太原金谷源', null);
INSERT INTO `t_user_type` VALUES ('12921', '2', '华北', '临汾锦华', null);
INSERT INTO `t_user_type` VALUES ('12931', '2', '华北', '大同合远', null);
INSERT INTO `t_user_type` VALUES ('12941', '2', '华北', '运城黄河', null);
INSERT INTO `t_user_type` VALUES ('12951', '2', '华北', '晋城华洋', null);
INSERT INTO `t_user_type` VALUES ('12961', '2', '华北', '长治大昌', null);
INSERT INTO `t_user_type` VALUES ('12971', '2', '华北', '晋中航田', null);
INSERT INTO `t_user_type` VALUES ('12981', '2', '华北', '阳泉联华', null);
INSERT INTO `t_user_type` VALUES ('12991', '2', '华北', '吕梁瑞华', null);
INSERT INTO `t_user_type` VALUES ('20501', '2', '东北', '朝阳川达', null);
INSERT INTO `t_user_type` VALUES ('20511', '2', '东北', '沈阳华通', null);
INSERT INTO `t_user_type` VALUES ('20512', '2', '东北', '沈阳于洪', null);
INSERT INTO `t_user_type` VALUES ('20513', '2', '东北', '沈阳金廊', null);
INSERT INTO `t_user_type` VALUES ('20514', '2', '东北', '沈阳铁西华通', null);
INSERT INTO `t_user_type` VALUES ('20521', '2', '东北', '大连中升', null);
INSERT INTO `t_user_type` VALUES ('20522', '2', '东北', '大连迎宾中升', null);
INSERT INTO `t_user_type` VALUES ('20523', '2', '东北', '大连裕德', null);
INSERT INTO `t_user_type` VALUES ('20524', '2', '东北', '大连新盛荣', null);
INSERT INTO `t_user_type` VALUES ('20525', '2', '东北', '大连保税区华通', null);
INSERT INTO `t_user_type` VALUES ('20531', '2', '东北', '盘锦利星', null);
INSERT INTO `t_user_type` VALUES ('20541', '2', '东北', '锦州川达', null);
INSERT INTO `t_user_type` VALUES ('20551', '2', '东北', '鞍山北方', null);
INSERT INTO `t_user_type` VALUES ('20552', '2', '东北', '海城南环', null);
INSERT INTO `t_user_type` VALUES ('20561', '2', '东北', '营口红运', null);
INSERT INTO `t_user_type` VALUES ('20571', '2', '东北', '葫芦岛于洪川达', null);
INSERT INTO `t_user_type` VALUES ('20581', '2', '东北', '丹东弘泰', null);
INSERT INTO `t_user_type` VALUES ('20591', '2', '东北', '阜新全泰丰田', null);
INSERT INTO `t_user_type` VALUES ('205A1', '2', '东北', '辽阳繁荣', null);
INSERT INTO `t_user_type` VALUES ('205B1', '2', '东北', '抚顺沈抚', null);
INSERT INTO `t_user_type` VALUES ('205C1', '2', '东北', '铁岭金惠源', null);
INSERT INTO `t_user_type` VALUES ('205D1', '2', '东北', '本溪金廊', null);
INSERT INTO `t_user_type` VALUES ('20611', '2', '东北', '长春东环', null);
INSERT INTO `t_user_type` VALUES ('20612', '2', '东北', '长春华阳', null);
INSERT INTO `t_user_type` VALUES ('20613', '2', '东北', '长春金山', null);
INSERT INTO `t_user_type` VALUES ('20621', '2', '东北', '吉林瑞孚', null);
INSERT INTO `t_user_type` VALUES ('20622', '2', '东北', '吉林神华', null);
INSERT INTO `t_user_type` VALUES ('20631', '2', '东北', '延边金山', null);
INSERT INTO `t_user_type` VALUES ('20641', '2', '东北', '四平长久博丰', null);
INSERT INTO `t_user_type` VALUES ('20651', '2', '东北', '松原金山', null);
INSERT INTO `t_user_type` VALUES ('20701', '2', '东北', '绥化市庞大丰雅', null);
INSERT INTO `t_user_type` VALUES ('20711', '2', '东北', '哈尔滨华通', null);
INSERT INTO `t_user_type` VALUES ('20712', '2', '东北', '哈尔滨龙晟', null);
INSERT INTO `t_user_type` VALUES ('20713', '2', '东北', '哈尔滨运通', null);
INSERT INTO `t_user_type` VALUES ('20714', '2', '东北', '哈尔滨中升', null);
INSERT INTO `t_user_type` VALUES ('20721', '2', '东北', '大庆吉昌龙', null);
INSERT INTO `t_user_type` VALUES ('20722', '2', '东北', '大庆名派丰田', null);
INSERT INTO `t_user_type` VALUES ('20731', '2', '东北', '牡丹江名派', null);
INSERT INTO `t_user_type` VALUES ('20741', '2', '东北', '齐齐哈尔骏合', null);
INSERT INTO `t_user_type` VALUES ('20751', '2', '东北', '佳木斯友谊华通', null);
INSERT INTO `t_user_type` VALUES ('2101046', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2101057', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2101073', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2101075', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2102085', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2102089', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2102097', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103110', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103112', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103113', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103127', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103128', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103133', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103136', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103141', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103165', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103168', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103176', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103182', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2103238', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104304', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104356', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104359', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104361', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104378', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104380', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104388', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104391', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104412', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104417', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104465', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104467', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104503', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104524', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104529', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104531', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104532', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104561', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104573', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104583', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104646', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104661', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104672', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104673', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104676', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104694', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2104695', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108726', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108728', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108742', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108755', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108774', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108784', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108803', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108813', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108816', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108818', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108820', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108826', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108851', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108855', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108874', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108899', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108902', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108905', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108909', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108923', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108926', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108929', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108932', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108934', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108936', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108937', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108939', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108940', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108941', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2108943', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110039', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110055', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110082', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110083', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110097', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110099', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110106', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110108', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110110', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110127', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110129', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110158', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110181', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110188', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110198', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110221', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110223', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110228', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110257', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110258', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110266', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110267', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110290', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2110303', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2187002', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2191008', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2192009', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2199029', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310011', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310063', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310137', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310138', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310139', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310140', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310141', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310176', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310233', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310234', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310235', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310246', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310277', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310340', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310341', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2310342', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2403219', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2403234', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2403236', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2408802', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2408836', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410027', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410048', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410113', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410114', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410136', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410145', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410205', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410210', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410238', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410276', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410278', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410279', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410280', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2410330', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503238', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503244', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503247', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503248', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503256', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503263', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503266', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503267', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503270', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2503276', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2504505', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2508708', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2508921', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2704299', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2704428', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2704431', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2704577', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2708700', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2708807', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2708809', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2708948', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2710040', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2710041', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2710274', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2808843', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904383', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904390', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904391', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904436', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904451', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904452', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2904638', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2908736', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2908952', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2910074', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2910075', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('2910249', '1', '', '', null);
INSERT INTO `t_user_type` VALUES ('30811', '2', '华东', '上海开隆', null);
INSERT INTO `t_user_type` VALUES ('30812', '2', '华东', '上海和裕', null);
INSERT INTO `t_user_type` VALUES ('30813', '2', '华东', '上海东昌', null);
INSERT INTO `t_user_type` VALUES ('30814', '2', '华东', '上海永达', null);
INSERT INTO `t_user_type` VALUES ('30815', '2', '华东', '上海由由', null);
INSERT INTO `t_user_type` VALUES ('30816', '2', '华东', '上海联合', null);
INSERT INTO `t_user_type` VALUES ('30817', '2', '华东', '上海锦江', null);
INSERT INTO `t_user_type` VALUES ('30818', '2', '华东', '上海中汽', null);
INSERT INTO `t_user_type` VALUES ('30819', '2', '华东', '上海中升', null);
INSERT INTO `t_user_type` VALUES ('3081A', '2', '华东', '上海冠松', null);
INSERT INTO `t_user_type` VALUES ('3081B', '2', '华东', '上海万兴', null);
INSERT INTO `t_user_type` VALUES ('3081C', '2', '华东', '上海申晖', null);
INSERT INTO `t_user_type` VALUES ('3081D', '2', '华东', '上海协通', null);
INSERT INTO `t_user_type` VALUES ('3081F', '2', '华东', '上海宝和', null);
INSERT INTO `t_user_type` VALUES ('30901', '2', '华东', '常熟海邦', null);
INSERT INTO `t_user_type` VALUES ('30911', '2', '华东', '无锡常隆', null);
INSERT INTO `t_user_type` VALUES ('30912', '2', '华东', '江阴盛达', null);
INSERT INTO `t_user_type` VALUES ('30913', '2', '华东', '无锡中威', null);
INSERT INTO `t_user_type` VALUES ('30914', '2', '华东', '无锡金城', null);
INSERT INTO `t_user_type` VALUES ('30915', '2', '华东', '无锡市新洲', null);
INSERT INTO `t_user_type` VALUES ('30916', '2', '华东', '江阴常隆', null);
INSERT INTO `t_user_type` VALUES ('30922', '2', '华东', '南京朗驰', null);
INSERT INTO `t_user_type` VALUES ('30923', '2', '华东', '南京中升迎宾', null);
INSERT INTO `t_user_type` VALUES ('30924', '2', '华东', '南京中升', null);
INSERT INTO `t_user_type` VALUES ('30925', '2', '华东', '江苏冠松', null);
INSERT INTO `t_user_type` VALUES ('30931', '2', '华东', '镇江东联', null);
INSERT INTO `t_user_type` VALUES ('30932', '2', '华东', '镇江京鹏', null);
INSERT INTO `t_user_type` VALUES ('30933', '2', '华东', '丹阳新苏南广胜', null);
INSERT INTO `t_user_type` VALUES ('30942', '2', '华东', '扬州阳光', null);
INSERT INTO `t_user_type` VALUES ('30943', '2', '华东', '扬州成辉', null);
INSERT INTO `t_user_type` VALUES ('30951', '2', '华东', '常州外汽', null);
INSERT INTO `t_user_type` VALUES ('30952', '2', '华东', '常州天宁', null);
INSERT INTO `t_user_type` VALUES ('30953', '2', '华东', '常州世纪行', null);
INSERT INTO `t_user_type` VALUES ('30954', '2', '华东', '溧阳新苏南', null);
INSERT INTO `t_user_type` VALUES ('30961', '2', '华东', '苏州康福', null);
INSERT INTO `t_user_type` VALUES ('30962', '2', '华东', '苏州汇凯', null);
INSERT INTO `t_user_type` VALUES ('30963', '2', '华东', '苏州由由', null);
INSERT INTO `t_user_type` VALUES ('30964', '2', '华东', '苏州华成', null);
INSERT INTO `t_user_type` VALUES ('30965', '2', '华东', '苏州中园', null);
INSERT INTO `t_user_type` VALUES ('30966', '2', '华东', '苏州裕达', null);
INSERT INTO `t_user_type` VALUES ('30971', '2', '华东', '张家港东联', null);
INSERT INTO `t_user_type` VALUES ('30981', '2', '华东', '南通大生', null);
INSERT INTO `t_user_type` VALUES ('30982', '2', '华东', '南通长江', null);
INSERT INTO `t_user_type` VALUES ('30983', '2', '华东', '如皋益昌盛达', null);
INSERT INTO `t_user_type` VALUES ('30991', '2', '华东', '昆山通和', null);
INSERT INTO `t_user_type` VALUES ('309A1', '2', '华东', '宜兴新苏南', null);
INSERT INTO `t_user_type` VALUES ('309B1', '2', '华东', '徐州润东', null);
INSERT INTO `t_user_type` VALUES ('309B2', '2', '华东', '徐州常缘', null);
INSERT INTO `t_user_type` VALUES ('309C1', '2', '华东', '连云港天澜', null);
INSERT INTO `t_user_type` VALUES ('309D1', '2', '华东', '盐城通和', null);
INSERT INTO `t_user_type` VALUES ('309E1', '2', '华东', '泰州中升', null);
INSERT INTO `t_user_type` VALUES ('309F1', '2', '华东', '海门常嘉', null);
INSERT INTO `t_user_type` VALUES ('309G1', '2', '华东', '太仓市森丰盛达', null);
INSERT INTO `t_user_type` VALUES ('309H1', '2', '华东', '淮安众和', null);
INSERT INTO `t_user_type` VALUES ('309J1', '2', '华东', '宿迁天宁', null);
INSERT INTO `t_user_type` VALUES ('309J2', '2', '华东', '泰州中园', null);
INSERT INTO `t_user_type` VALUES ('31001', '2', '华东', '诸暨中升', null);
INSERT INTO `t_user_type` VALUES ('31011', '2', '华东', '宁波中升', null);
INSERT INTO `t_user_type` VALUES ('31012', '2', '华东', '宁波雅华', null);
INSERT INTO `t_user_type` VALUES ('31013', '2', '华东', '宁波宁兴', null);
INSERT INTO `t_user_type` VALUES ('31014', '2', '华东', '宁波轿辰', null);
INSERT INTO `t_user_type` VALUES ('31015', '2', '华东', '象山龙华', null);
INSERT INTO `t_user_type` VALUES ('31021', '2', '华东', '杭州金丰', null);
INSERT INTO `t_user_type` VALUES ('31022', '2', '华东', '杭州和诚八下里', null);
INSERT INTO `t_user_type` VALUES ('31023', '2', '华东', '杭州龙通', null);
INSERT INTO `t_user_type` VALUES ('31024', '2', '华东', '杭州江干', null);
INSERT INTO `t_user_type` VALUES ('31025', '2', '华东', '杭州康桥', null);
INSERT INTO `t_user_type` VALUES ('31026', '2', '华东', '杭州康隆', null);
INSERT INTO `t_user_type` VALUES ('31031', '2', '华东', '温州华通', null);
INSERT INTO `t_user_type` VALUES ('31032', '2', '华东', '瑞安信维', null);
INSERT INTO `t_user_type` VALUES ('31033', '2', '华东', '温州瓯通', null);
INSERT INTO `t_user_type` VALUES ('31035', '2', '华东', '温州宁兴', null);
INSERT INTO `t_user_type` VALUES ('31036', '2', '华东', '温州中升', null);
INSERT INTO `t_user_type` VALUES ('31041', '2', '华东', '嘉兴宝达', null);
INSERT INTO `t_user_type` VALUES ('31042', '2', '华东', '嘉兴良友', null);
INSERT INTO `t_user_type` VALUES ('31043', '2', '华东', '桐乡常隆', null);
INSERT INTO `t_user_type` VALUES ('31051', '2', '华东', '金华大昌', null);
INSERT INTO `t_user_type` VALUES ('31052', '2', '华东', '金华大江南', null);
INSERT INTO `t_user_type` VALUES ('31061', '2', '华东', '义乌龙田', null);
INSERT INTO `t_user_type` VALUES ('31062', '2', '华东', '义乌众邦', null);
INSERT INTO `t_user_type` VALUES ('31071', '2', '华东', '绍兴华润', null);
INSERT INTO `t_user_type` VALUES ('31072', '2', '华东', '绍兴五云', null);
INSERT INTO `t_user_type` VALUES ('31073', '2', '华东', '绍兴佳禾', null);
INSERT INTO `t_user_type` VALUES ('31081', '2', '华东', '湖州信达', null);
INSERT INTO `t_user_type` VALUES ('31082', '2', '华东', '湖州金丰', null);
INSERT INTO `t_user_type` VALUES ('31091', '2', '华东', '台州百合', null);
INSERT INTO `t_user_type` VALUES ('31092', '2', '华东', '台州刚泰', null);
INSERT INTO `t_user_type` VALUES ('310A1', '2', '华东', '衢州中恒', null);
INSERT INTO `t_user_type` VALUES ('310B1', '2', '华东', '丽水金丰', null);
INSERT INTO `t_user_type` VALUES ('310C1', '2', '华东', '慈溪常隆', null);
INSERT INTO `t_user_type` VALUES ('310D1', '2', '华东', '乐清龙华', null);
INSERT INTO `t_user_type` VALUES ('310E1', '2', '华东', '温岭宇辰丰田', null);
INSERT INTO `t_user_type` VALUES ('310F1', '2', '华东', '余姚宁兴', null);
INSERT INTO `t_user_type` VALUES ('310G1', '2', '华东', '杭州东昌', null);
INSERT INTO `t_user_type` VALUES ('310H1', '2', '华东', '海宁佳禾', null);
INSERT INTO `t_user_type` VALUES ('310J1', '2', '华东', '上虞胜康', null);
INSERT INTO `t_user_type` VALUES ('310K1', '2', '华东', '临海大江南丰田', null);
INSERT INTO `t_user_type` VALUES ('310L1', '2', '华东', '舟山龙华丰田', null);
INSERT INTO `t_user_type` VALUES ('310M1', '2', '华东', '宁波和信', null);
INSERT INTO `t_user_type` VALUES ('310N1', '2', '华东', '嵊州龙华', null);
INSERT INTO `t_user_type` VALUES ('31112', '2', '华中', '合肥安平', null);
INSERT INTO `t_user_type` VALUES ('31114', '2', '华中', '合肥风之星', null);
INSERT INTO `t_user_type` VALUES ('31115', '2', '华中', '合肥通源', null);
INSERT INTO `t_user_type` VALUES ('31121', '2', '华中', '芜湖亚夏', null);
INSERT INTO `t_user_type` VALUES ('31131', '2', '华中', '蚌埠润业', null);
INSERT INTO `t_user_type` VALUES ('31141', '2', '华中', '阜阳中源', null);
INSERT INTO `t_user_type` VALUES ('31151', '2', '华中', '安庆环丰', null);
INSERT INTO `t_user_type` VALUES ('31161', '2', '华中', '六安鑫宝', null);
INSERT INTO `t_user_type` VALUES ('31181', '2', '华中', '黄山亚新', null);
INSERT INTO `t_user_type` VALUES ('31212', '2', '华南', '福建世纪丰田', null);
INSERT INTO `t_user_type` VALUES ('31213', '2', '华南', '福州中升', null);
INSERT INTO `t_user_type` VALUES ('31214', '2', '华南', '福州玖玖', null);
INSERT INTO `t_user_type` VALUES ('31215', '2', '华南', '福州前横中升丰田汽车销售服务有限公司 ', null);
INSERT INTO `t_user_type` VALUES ('31221', '2', '华南', '泉州宾联', null);
INSERT INTO `t_user_type` VALUES ('31222', '2', '华南', '晋江新中利', null);
INSERT INTO `t_user_type` VALUES ('31223', '2', '华南', '泉州大长江', null);
INSERT INTO `t_user_type` VALUES ('31224', '2', '华南', '泉州美东', null);
INSERT INTO `t_user_type` VALUES ('31231', '2', '华南', '厦门中升', null);
INSERT INTO `t_user_type` VALUES ('31232', '2', '华南', '厦门中达', null);
INSERT INTO `t_user_type` VALUES ('31233', '2', '华南', '厦门盛元', null);
INSERT INTO `t_user_type` VALUES ('31241', '2', '华南', '龙岩天润', null);
INSERT INTO `t_user_type` VALUES ('31251', '2', '华南', '漳州盛元', null);
INSERT INTO `t_user_type` VALUES ('31261', '2', '华南', '三明玖玖', null);
INSERT INTO `t_user_type` VALUES ('31271', '2', '华南', '福建大川', null);
INSERT INTO `t_user_type` VALUES ('31281', '2', '华南', '南平华通', null);
INSERT INTO `t_user_type` VALUES ('31291', '2', '华南', '宁德华强', null);
INSERT INTO `t_user_type` VALUES ('31301', '2', '华中', '萍乡庞大恒运', null);
INSERT INTO `t_user_type` VALUES ('31311', '2', '华中', '南昌富源', null);
INSERT INTO `t_user_type` VALUES ('31312', '2', '华中', '南昌恒隆', null);
INSERT INTO `t_user_type` VALUES ('31313', '2', '华中', '南昌同驰', null);
INSERT INTO `t_user_type` VALUES ('31321', '2', '华中', '赣州同驰丰田', null);
INSERT INTO `t_user_type` VALUES ('31341', '2', '华中', '上饶富源', null);
INSERT INTO `t_user_type` VALUES ('31351', '2', '华中', '九江深业', null);
INSERT INTO `t_user_type` VALUES ('31371', '2', '华中', '吉安富源', null);
INSERT INTO `t_user_type` VALUES ('31381', '2', '华中', '新余深业', null);
INSERT INTO `t_user_type` VALUES ('31391', '2', '华中', '抚州尚仕', null);
INSERT INTO `t_user_type` VALUES ('31401', '2', '华北', '日照鸿发', null);
INSERT INTO `t_user_type` VALUES ('31411', '2', '华北', '青岛世泰', null);
INSERT INTO `t_user_type` VALUES ('31412', '2', '华北', '安利捷（青岛）', null);
INSERT INTO `t_user_type` VALUES ('31414', '2', '华北', '青岛世鑫', null);
INSERT INTO `t_user_type` VALUES ('31415', '2', '华北', '青岛驰铭', null);
INSERT INTO `t_user_type` VALUES ('31416', '2', '华北', '青岛中升', null);
INSERT INTO `t_user_type` VALUES ('31421', '2', '华北', '济南明星', null);
INSERT INTO `t_user_type` VALUES ('31422', '2', '华北', '济南鲁鹰', null);
INSERT INTO `t_user_type` VALUES ('31423', '2', '华北', '济南润华', null);
INSERT INTO `t_user_type` VALUES ('31424', '2', '华北', '济南嘉瑞', null);
INSERT INTO `t_user_type` VALUES ('31426', '2', '华北', '章丘明星丰田', null);
INSERT INTO `t_user_type` VALUES ('31431', '2', '华北', '潍坊玄武', null);
INSERT INTO `t_user_type` VALUES ('31432', '2', '华北', '潍坊广泰', null);
INSERT INTO `t_user_type` VALUES ('31433', '2', '华北', '潍坊丰华', null);
INSERT INTO `t_user_type` VALUES ('31434', '2', '华北', '青州明星', null);
INSERT INTO `t_user_type` VALUES ('31441', '2', '华北', '烟台东联', null);
INSERT INTO `t_user_type` VALUES ('31442', '2', '华北', '烟台中升', null);
INSERT INTO `t_user_type` VALUES ('31443', '2', '华北', '烟台长久', null);
INSERT INTO `t_user_type` VALUES ('31445', '2', '华北', '莱州安利捷', null);
INSERT INTO `t_user_type` VALUES ('31451', '2', '华北', '威海大友', null);
INSERT INTO `t_user_type` VALUES ('31452', '2', '华北', '荣成新广利', null);
INSERT INTO `t_user_type` VALUES ('31461', '2', '华北', '东营泛华', null);
INSERT INTO `t_user_type` VALUES ('31462', '2', '华北', '东营庞大东盛', null);
INSERT INTO `t_user_type` VALUES ('31471', '2', '华北', '泰安东方', null);
INSERT INTO `t_user_type` VALUES ('31481', '2', '华北', '淄博远方', null);
INSERT INTO `t_user_type` VALUES ('31482', '2', '华北', '淄博世纪', null);
INSERT INTO `t_user_type` VALUES ('31491', '2', '华北', '临沂泰华', null);
INSERT INTO `t_user_type` VALUES ('31492', '2', '华北', '临沂翔宇', null);
INSERT INTO `t_user_type` VALUES ('31493', '2', '华北', '临沂和裕', null);
INSERT INTO `t_user_type` VALUES ('314A1', '2', '华北', '德州天衢', null);
INSERT INTO `t_user_type` VALUES ('314A2', '2', '华北', '德州利源丰雅', null);
INSERT INTO `t_user_type` VALUES ('314B1', '2', '华北', '聊城五州', null);
INSERT INTO `t_user_type` VALUES ('314B2', '2', '华北', '聊城光岳', null);
INSERT INTO `t_user_type` VALUES ('314C1', '2', '华北', '济宁振华', null);
INSERT INTO `t_user_type` VALUES ('314C2', '2', '华北', '济宁泛华', null);
INSERT INTO `t_user_type` VALUES ('314D1', '2', '华北', '莱芜玄武', null);
INSERT INTO `t_user_type` VALUES ('314E1', '2', '华北', '滨州鸿泰', null);
INSERT INTO `t_user_type` VALUES ('314F1', '2', '华北', '枣庄和裕', null);
INSERT INTO `t_user_type` VALUES ('314G1', '2', '华北', '菏泽润华', null);
INSERT INTO `t_user_type` VALUES ('314H1', '2', '华北', '滨州西王', null);
INSERT INTO `t_user_type` VALUES ('41501', '2', '华北', '信阳世纪行', null);
INSERT INTO `t_user_type` VALUES ('41512', '2', '华北', '郑州富达', null);
INSERT INTO `t_user_type` VALUES ('41513', '2', '华北', '郑州豫中', null);
INSERT INTO `t_user_type` VALUES ('41514', '2', '华北', '郑州世纪鸿图', null);
INSERT INTO `t_user_type` VALUES ('41515', '2', '华北', '郑州裕华', null);
INSERT INTO `t_user_type` VALUES ('41521', '2', '华北', '洛阳九都', null);
INSERT INTO `t_user_type` VALUES ('41522', '2', '华北', '洛阳富源', null);
INSERT INTO `t_user_type` VALUES ('41531', '2', '华北', '平顶山世纪', null);
INSERT INTO `t_user_type` VALUES ('41541', '2', '华北', '安阳裕达', null);
INSERT INTO `t_user_type` VALUES ('41551', '2', '华北', '许昌豫中', null);
INSERT INTO `t_user_type` VALUES ('41561', '2', '华北', '南阳顺达尔', null);
INSERT INTO `t_user_type` VALUES ('41571', '2', '华北', '新乡冠誉', null);
INSERT INTO `t_user_type` VALUES ('41572', '2', '华北', '新乡顺达尔', null);
INSERT INTO `t_user_type` VALUES ('41581', '2', '华北', '焦作博汇', null);
INSERT INTO `t_user_type` VALUES ('41591', '2', '华北', '商丘中豪', null);
INSERT INTO `t_user_type` VALUES ('415A1', '2', '华北', '周口明星', null);
INSERT INTO `t_user_type` VALUES ('415B1', '2', '华北', '驻马店威龙丰田', null);
INSERT INTO `t_user_type` VALUES ('415C1', '2', '华北', '开封豫中', null);
INSERT INTO `t_user_type` VALUES ('415D1', '2', '华北', '濮阳市世纪', null);
INSERT INTO `t_user_type` VALUES ('415F1', '2', '华北', '三门峡豫中', null);
INSERT INTO `t_user_type` VALUES ('415G1', '2', '华北', '漯河豫龙', null);
INSERT INTO `t_user_type` VALUES ('41601', '2', '华中', '黄冈世纪汇恒', null);
INSERT INTO `t_user_type` VALUES ('41611', '2', '华中', '武汉黄浦', null);
INSERT INTO `t_user_type` VALUES ('41612', '2', '华中', '武汉安利捷', null);
INSERT INTO `t_user_type` VALUES ('41613', '2', '华中', '武汉中南', null);
INSERT INTO `t_user_type` VALUES ('41614', '2', '华中', '武汉实华', null);
INSERT INTO `t_user_type` VALUES ('41621', '2', '华中', '宜昌德龙', null);
INSERT INTO `t_user_type` VALUES ('41631', '2', '华中', '襄阳天和', null);
INSERT INTO `t_user_type` VALUES ('41641', '2', '华中', '荆州讯达', null);
INSERT INTO `t_user_type` VALUES ('41651', '2', '华中', '黄石恒信东方', null);
INSERT INTO `t_user_type` VALUES ('41661', '2', '华中', '恩施恒信', null);
INSERT INTO `t_user_type` VALUES ('41671', '2', '华中', '孝感黄浦', null);
INSERT INTO `t_user_type` VALUES ('41681', '2', '华中', '荆门讯隆', null);
INSERT INTO `t_user_type` VALUES ('416C1', '2', '华中', '咸宁黄浦', null);
INSERT INTO `t_user_type` VALUES ('41712', '2', '华中', '长沙华运通', null);
INSERT INTO `t_user_type` VALUES ('41713', '2', '华中', '长沙力天', null);
INSERT INTO `t_user_type` VALUES ('41714', '2', '华中', '长沙申湘', null);
INSERT INTO `t_user_type` VALUES ('41715', '2', '华中', '长沙和信', null);
INSERT INTO `t_user_type` VALUES ('41721', '2', '华中', '岳阳彤达', null);
INSERT INTO `t_user_type` VALUES ('41731', '2', '华中', '衡阳和信', null);
INSERT INTO `t_user_type` VALUES ('41741', '2', '华中', '郴州名车会', null);
INSERT INTO `t_user_type` VALUES ('41751', '2', '华中', '常德华运通', null);
INSERT INTO `t_user_type` VALUES ('41761', '2', '华中', '湘潭力天', null);
INSERT INTO `t_user_type` VALUES ('41771', '2', '华中', '株洲和信', null);
INSERT INTO `t_user_type` VALUES ('41781', '2', '华中', '邵阳华运通', null);
INSERT INTO `t_user_type` VALUES ('41791', '2', '华中', '娄底和兴', null);
INSERT INTO `t_user_type` VALUES ('417A1', '2', '华中', '永州佳昊丰田', null);
INSERT INTO `t_user_type` VALUES ('417B1', '2', '华中', '怀化凯祥迎宾', null);
INSERT INTO `t_user_type` VALUES ('41801', '2', '华南', '肇庆东联', null);
INSERT INTO `t_user_type` VALUES ('41811', '2', '华南', '深圳南方', null);
INSERT INTO `t_user_type` VALUES ('41812', '2', '华南', '深圳大兴', null);
INSERT INTO `t_user_type` VALUES ('41813', '2', '华南', '深圳华日', null);
INSERT INTO `t_user_type` VALUES ('41814', '2', '华南', '深圳深业', null);
INSERT INTO `t_user_type` VALUES ('41815', '2', '华南', '深圳都通', null);
INSERT INTO `t_user_type` VALUES ('41816', '2', '华南', '深圳兆方', null);
INSERT INTO `t_user_type` VALUES ('41817', '2', '华南', '深圳红彤', null);
INSERT INTO `t_user_type` VALUES ('41818', '2', '华南', '深圳骏爵', null);
INSERT INTO `t_user_type` VALUES ('41819', '2', '华南', '深圳易达', null);
INSERT INTO `t_user_type` VALUES ('4181A', '2', '华南', '深圳中升', null);
INSERT INTO `t_user_type` VALUES ('4181B', '2', '华南', '宝安大兴', null);
INSERT INTO `t_user_type` VALUES ('4181C', '2', '华南', '深圳中升迎宾', null);
INSERT INTO `t_user_type` VALUES ('4181D', '2', '华南', '深圳民生东都', null);
INSERT INTO `t_user_type` VALUES ('4181E', '2', '华南', '深圳大兴观澜', null);
INSERT INTO `t_user_type` VALUES ('4181F', '2', '华南', '深圳兴业', null);
INSERT INTO `t_user_type` VALUES ('41821', '2', '华南', '广州广保', null);
INSERT INTO `t_user_type` VALUES ('41822', '2', '华南', '广州沙河', null);
INSERT INTO `t_user_type` VALUES ('41823', '2', '华南', '广州龙的', null);
INSERT INTO `t_user_type` VALUES ('41824', '2', '华南', '广州迎宾', null);
INSERT INTO `t_user_type` VALUES ('41825', '2', '华南', '广州华通', null);
INSERT INTO `t_user_type` VALUES ('41826', '2', '华南', '广州庆丰', null);
INSERT INTO `t_user_type` VALUES ('41827', '2', '华南', '广州宗远', null);
INSERT INTO `t_user_type` VALUES ('41829', '2', '华南', '广州顺协', null);
INSERT INTO `t_user_type` VALUES ('4182B', '2', '华南', '广州新钜', null);
INSERT INTO `t_user_type` VALUES ('4182C', '2', '华南', '广州芳村', null);
INSERT INTO `t_user_type` VALUES ('4182D', '2', '华南', '广州南菱', null);
INSERT INTO `t_user_type` VALUES ('4182E', '2', '华南', '广州广博', null);
INSERT INTO `t_user_type` VALUES ('4182F', '2', '华南', '广州骏辉', null);
INSERT INTO `t_user_type` VALUES ('4182G', '2', '华南', '广州永佳', null);
INSERT INTO `t_user_type` VALUES ('41831', '2', '华南', '顺德合诚', null);
INSERT INTO `t_user_type` VALUES ('41832', '2', '华南', '佛山市龙江', null);
INSERT INTO `t_user_type` VALUES ('41841', '2', '华南', '江门华通', null);
INSERT INTO `t_user_type` VALUES ('41842', '2', '华南', '江门强劲', null);
INSERT INTO `t_user_type` VALUES ('41851', '2', '华南', '南海桂城', null);
INSERT INTO `t_user_type` VALUES ('41852', '2', '华南', '佛山骏安', null);
INSERT INTO `t_user_type` VALUES ('41853', '2', '华南', '佛山南海合诚', null);
INSERT INTO `t_user_type` VALUES ('41862', '2', '华南', '汕头华通', null);
INSERT INTO `t_user_type` VALUES ('41863', '2', '华南', '汕头合众', null);
INSERT INTO `t_user_type` VALUES ('41872', '2', '华南', '珠海珠光', null);
INSERT INTO `t_user_type` VALUES ('41873', '2', '华南', '珠海腾达', null);
INSERT INTO `t_user_type` VALUES ('41882', '2', '华南', '湛江骏华', null);
INSERT INTO `t_user_type` VALUES ('41891', '2', '华南', '东莞永佳', null);
INSERT INTO `t_user_type` VALUES ('41892', '2', '华南', '东莞南城', null);
INSERT INTO `t_user_type` VALUES ('41893', '2', '华南', '东莞东部', null);
INSERT INTO `t_user_type` VALUES ('41894', '2', '华南', '东莞龙华', null);
INSERT INTO `t_user_type` VALUES ('41895', '2', '华南', '东莞凯润', null);
INSERT INTO `t_user_type` VALUES ('41896', '2', '华南', '东莞天下行', null);
INSERT INTO `t_user_type` VALUES ('41897', '2', '华南', '东莞东美', null);
INSERT INTO `t_user_type` VALUES ('41898', '2', '华南', '东莞百力恒', null);
INSERT INTO `t_user_type` VALUES ('41899', '2', '华南', '东莞东城', null);
INSERT INTO `t_user_type` VALUES ('4189A', '2', '华南', '东莞安信', null);
INSERT INTO `t_user_type` VALUES ('418A1', '2', '华南', '佛山强劲', null);
INSERT INTO `t_user_type` VALUES ('418A2', '2', '华南', '佛山市三水', null);
INSERT INTO `t_user_type` VALUES ('418A3', '2', '华南', '佛山高明南菱', null);
INSERT INTO `t_user_type` VALUES ('418B1', '2', '华南', '中山中裕', null);
INSERT INTO `t_user_type` VALUES ('418B2', '2', '华南', '中山创世纪', null);
INSERT INTO `t_user_type` VALUES ('418B3', '2', '华南', '中山三联', null);
INSERT INTO `t_user_type` VALUES ('418B4', '2', '华南', '中山小榄庆丰', null);
INSERT INTO `t_user_type` VALUES ('418C1', '2', '华南', '惠州俊峰', null);
INSERT INTO `t_user_type` VALUES ('418C2', '2', '华南', '惠州展通', null);
INSERT INTO `t_user_type` VALUES ('418C3', '2', '华南', '惠州骏爵', null);
INSERT INTO `t_user_type` VALUES ('418D1', '2', '华南', '广州中升', null);
INSERT INTO `t_user_type` VALUES ('418D2', '2', '华南', '广州兆方', null);
INSERT INTO `t_user_type` VALUES ('418E1', '2', '华南', '揭阳合胜', null);
INSERT INTO `t_user_type` VALUES ('418F1', '2', '华南', '韶关利泰', null);
INSERT INTO `t_user_type` VALUES ('418G1', '2', '华南', '梅州深业', null);
INSERT INTO `t_user_type` VALUES ('418H1', '2', '华南', '茂名华通', null);
INSERT INTO `t_user_type` VALUES ('418J1', '2', '华南', '清远南方', null);
INSERT INTO `t_user_type` VALUES ('418K1', '2', '华南', '潮州合和', null);
INSERT INTO `t_user_type` VALUES ('418L1', '2', '华南', '河源中裕', null);
INSERT INTO `t_user_type` VALUES ('418M1', '2', '华南', '阳江中熙', null);
INSERT INTO `t_user_type` VALUES ('418N1', '2', '华南', '云浮中裕', null);
INSERT INTO `t_user_type` VALUES ('41901', '2', '华南', '梧州中裕', null);
INSERT INTO `t_user_type` VALUES ('41911', '2', '华南', '南宁中达', null);
INSERT INTO `t_user_type` VALUES ('41912', '2', '华南', '南宁广缘', null);
INSERT INTO `t_user_type` VALUES ('41913', '2', '华南', '南宁天下行', null);
INSERT INTO `t_user_type` VALUES ('41921', '2', '华南', '柳州航盛', null);
INSERT INTO `t_user_type` VALUES ('41931', '2', '华南', '桂林中达', null);
INSERT INTO `t_user_type` VALUES ('41941', '2', '华南', '北海易达', null);
INSERT INTO `t_user_type` VALUES ('41951', '2', '华南', '玉林骏业', null);
INSERT INTO `t_user_type` VALUES ('41961', '2', '华南', '贵港骏业', null);
INSERT INTO `t_user_type` VALUES ('419B1', '2', '华南', '防城港易达', null);
INSERT INTO `t_user_type` VALUES ('42011', '2', '华南', '海口日之星', null);
INSERT INTO `t_user_type` VALUES ('42012', '2', '华南', '海口嘉华', null);
INSERT INTO `t_user_type` VALUES ('42013', '2', '华南', '海口展通', null);
INSERT INTO `t_user_type` VALUES ('42021', '2', '华南', '三亚丰正华', null);
INSERT INTO `t_user_type` VALUES ('52101', '2', '西部', '达州启阳', null);
INSERT INTO `t_user_type` VALUES ('52111', '2', '西部', '成都安利捷', null);
INSERT INTO `t_user_type` VALUES ('52112', '2', '西部', '成都中达', null);
INSERT INTO `t_user_type` VALUES ('52113', '2', '西部', '成都中道成', null);
INSERT INTO `t_user_type` VALUES ('52114', '2', '西部', '成都三和', null);
INSERT INTO `t_user_type` VALUES ('52115', '2', '西部', '成都锦泰', null);
INSERT INTO `t_user_type` VALUES ('52116', '2', '西部', '成都启阳华通', null);
INSERT INTO `t_user_type` VALUES ('52117', '2', '西部', '成都中升', null);
INSERT INTO `t_user_type` VALUES ('52121', '2', '西部', '绵阳高新区', null);
INSERT INTO `t_user_type` VALUES ('52131', '2', '西部', '乐山安利捷', null);
INSERT INTO `t_user_type` VALUES ('52141', '2', '西部', '德阳宏泰丰田', null);
INSERT INTO `t_user_type` VALUES ('52161', '2', '西部', '南充通源', null);
INSERT INTO `t_user_type` VALUES ('52171', '2', '西部', '泸州通源', null);
INSERT INTO `t_user_type` VALUES ('52181', '2', '西部', '攀枝花正和', null);
INSERT INTO `t_user_type` VALUES ('521D1', '2', '西部', '眉山庆丰', null);
INSERT INTO `t_user_type` VALUES ('52221', '2', '西部', '重庆渝都', null);
INSERT INTO `t_user_type` VALUES ('52222', '2', '西部', '重庆人和', null);
INSERT INTO `t_user_type` VALUES ('52223', '2', '西部', '重庆百事达', null);
INSERT INTO `t_user_type` VALUES ('52224', '2', '西部', '重庆万家', null);
INSERT INTO `t_user_type` VALUES ('52225', '2', '西部', '重庆华通', null);
INSERT INTO `t_user_type` VALUES ('52311', '2', '西部', '贵阳通源', null);
INSERT INTO `t_user_type` VALUES ('52321', '2', '西部', '遵义通源', null);
INSERT INTO `t_user_type` VALUES ('52331', '2', '西部', '六盘水通源', null);
INSERT INTO `t_user_type` VALUES ('52411', '2', '西部', '昆明中升', null);
INSERT INTO `t_user_type` VALUES ('52412', '2', '西部', '云南中升迎宾', null);
INSERT INTO `t_user_type` VALUES ('52413', '2', '西部', '昆明联亚', null);
INSERT INTO `t_user_type` VALUES ('52421', '2', '西部', '曲靖中升', null);
INSERT INTO `t_user_type` VALUES ('52431', '2', '西部', '红河中升', null);
INSERT INTO `t_user_type` VALUES ('52441', '2', '西部', '大理中升', null);
INSERT INTO `t_user_type` VALUES ('52451', '2', '西部', '玉溪中升', null);
INSERT INTO `t_user_type` VALUES ('52471', '2', '西部', '文山中升', null);
INSERT INTO `t_user_type` VALUES ('52491', '2', '西部', '楚雄联亚', null);
INSERT INTO `t_user_type` VALUES ('52512', '2', '西部', '拉萨新动力', null);
INSERT INTO `t_user_type` VALUES ('62611', '2', '西部', '西安华通', null);
INSERT INTO `t_user_type` VALUES ('62612', '2', '西部', '西安航天龙腾', null);
INSERT INTO `t_user_type` VALUES ('62613', '2', '西部', '西安新铭洋', null);
INSERT INTO `t_user_type` VALUES ('62614', '2', '西部', '陕西航天盛世', null);
INSERT INTO `t_user_type` VALUES ('62631', '2', '西部', '榆林高新', null);
INSERT INTO `t_user_type` VALUES ('62661', '2', '西部', '渭南白云', null);
INSERT INTO `t_user_type` VALUES ('62671', '2', '西部', '延安航天龙腾', null);
INSERT INTO `t_user_type` VALUES ('62681', '2', '西部', '宝鸡威龙', null);
INSERT INTO `t_user_type` VALUES ('626A1', '2', '西部', '汉中恒信', null);
INSERT INTO `t_user_type` VALUES ('62711', '2', '西部', '兰州赛驰', null);
INSERT INTO `t_user_type` VALUES ('62712', '2', '西部', '兰州航天龙腾', null);
INSERT INTO `t_user_type` VALUES ('62811', '2', '西部', '乌鲁木齐华通', null);
INSERT INTO `t_user_type` VALUES ('62812', '2', '西部', '乌鲁木齐天汇博望', null);
INSERT INTO `t_user_type` VALUES ('62821', '2', '西部', '巴州华通', null);
INSERT INTO `t_user_type` VALUES ('62831', '2', '西部', '克拉玛依华通', null);
INSERT INTO `t_user_type` VALUES ('63011', '2', '西部', '西宁康南', null);
INSERT INTO `t_user_type` VALUES ('63012', '2', '西部', '西宁航天龙腾', null);
INSERT INTO `t_user_type` VALUES ('63112', '2', '西部', '银川上陵', null);
INSERT INTO `t_user_type` VALUES ('63113', '2', '西部', '银川安利捷', null);

