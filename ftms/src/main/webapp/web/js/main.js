var lang = (location.pathname.indexOf('/en/') > -1 ? 'en' : 'cn');

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
	
	$('#logout').click(function(){
		$.post(
			'/web/login_logout',
			function(data){
				if(data.status == 1){
					location.href = 'login.html';
				}
			}
		);
	});
});

//设置身份类别
function setTypeName(data){
	$('#user_type').text(userTypeArr[lang][data.userType.type-1]);
};



var userTypeArr = {
		'cn' : ['内部人员','经销商'],
		'en' : ['Toyota staff','Dealer']
};

var tipArr = {
		'cn' : {
			'registered' : '已注册',
			'unregistered' : '未注册',
			'saveSuccess' : '保存成功',
			'infoLack' : '信息填写不完整无法保存',
			'userLack' : '请先填写用户信息并保存',
			'add' : '添加',
			'upload' : '因命名不符合要求无法上传',
			'uploadSuccess' : '上传成功',
			'uploadFailure' : '上传失败',
			'imageSuffix' : '只能上传jpg、jpeg、png、bmp或gif格式的图片！',
			'deleteSuccess' : '删除成功',
			'deleteFailure' : '删除失败',
			'passHeader' : '港澳通行证办理提示'
		},
		'en' : {
			'registered' : 'registered',
			'unregistered' : 'unregistered',
			'saveSuccess' : 'saved successfully',
			'infoLack' : 'it can’t be saved due to incomplete information',
			'userLack' : 'please fill in the user information and save',
			'add' : 'Add',
			'upload' : 'it can’t be uploaded due to the naming doesn’t meet requirement',
			'uploadSuccess' : 'upload successfully',
			'uploadFailure' : 'upload failed',
			'imageSuffix' : 'it can’t be uploaded due to the suffix doesn’t meet requirement',
			'deleteSuccess' : 'deleted successfully',
			'deleteFailure' : 'delete failed',
			'passHeader' : 'One-way exit permit handling tips'
		}
};

var reviewArr = {
		'cn' :{
			'review' : '展开',
			'packup' : '收起'
		},
		'en' :{
			'review' : 'Unfold',
			'packup' : 'Pack Up'
		}
};

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