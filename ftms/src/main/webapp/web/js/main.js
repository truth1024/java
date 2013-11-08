var lang = (location.pathname.indexOf('/cn/') > -1 ? 'cn' : 'en');

$.ajaxSetup({
	dataType:'json',
	statusCode:{
		401:function(){
			location.href = 'login.html';
		}
	}
});
$(function(){
	$('#changeLang').click(function(){
		if(lang == 'cn'){
			location.href = location.pathname.replace('/cn/','/en/');
		}else{
			location.href = location.pathname.replace('/en/','/cn/');
		}
	});
});
var userTypeArr = {
		'cn' : ['内部人员','经销商'],
		'en' : ['Toyota staff','Dealer']
};

var tipArr = {
		'cn' : {
			'registered' : '已注册',
			'unregistered' : '未注册',
			'saveSuccess' : '保存成功',
			'infoLack' : '信息填写不完整无法提交',
			'userLack' : '请先填写用户信息并保存',
			'add' : '添加'
		},
		'en' : {
			'registered' : 'registered',
			'unregistered' : 'unregistered',
			'saveSuccess' : 'save successfully',
			'infoLack' : 'it can’t be submitted due to incomplete information',
			'userLack' : 'please fill in the user information and save',
			'add' : 'Add'
		}
}

//日期格式化
Date.prototype.format = function(format) //author: meizz 
{ 
  var o = {
    "M+" : this.getMonth()+1, //month 
    "d+" : this.getDate(),    //day 
    "h+" : this.getHours(),   //hour 
    "m+" : this.getMinutes(), //minute 
    "s+" : this.getSeconds(), //second 
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter 
    "S" : this.getMilliseconds() //millisecond 
  };
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1, 
    (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o)if(new RegExp("("+ k +")").test(format)) 
    format = format.replace(RegExp.$1, 
      RegExp.$1.length==1 ? o[k]  : 
        ("00"+ o[k] ).substr((""+ o[k] ).length)); 
  return format;
}; 