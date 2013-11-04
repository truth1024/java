DROP DATABASE IF EXISTS `ftms`;
create database ftms default charset utf8;
grant all privileges on ftms.* to ftms@'%' identified by 'ftms';
grant all privileges on ftms.* to ftms@'localhost' identified by 'ftms';
flush privileges;
use ftms;

set names utf8;