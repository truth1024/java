var lang = (location.pathname.indexOf('/en/') > -1 ? 'en' : 'cn');
var pageName = (location.pathname.indexOf('registMessage') > -1 ? 'regist' : 'manage');
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
			'registered' : '您已注册，如需查看或修改信息，请点击进入<a style="color:blue;" href="messageManage.html">信息管理</a>界面完成相应操作',
			'unregistered' : '尚未注册，现在马上前往<a style="color:blue;" href="registMessage.html">注册</a>',
			'saveSuccess' : '提交成功',
			'infoLack' : '您尚有信息未填写，请补充完整',
			'userLack' : '请先填写用户信息并提交',
			'add' : '添加人员',
			'upload' : '因命名不符合要求无法上传',
			'uploadSuccess' : '上传成功',
			'uploadFailure' : '上传失败',
			'imageSuffix' : '只能上传jpg、jpeg、png、bmp或gif格式的图片！',
			'deleteSuccess' : '删除成功',
			'deleteFailure' : '删除失败',
			'passHeader' : '港澳通行证办理提示',
			'functionClose' : '功能已关闭',
			'deleteHeader' : '您确认要删除此信息吗？',
			'deleteConfirm' : '确认',
			'deleteCancel' : '取消',
			'deleteTip' : '删除提示'
		},
		'en' : {
			'registered' : 'Registered already, for any review and modification, please click into <a style="color:blue;" href="messageManage.html">Information Management</a>  interface to operate.',
			'unregistered' : 'Not yet registered, <a style="color:blue;" href="registMessage.html">register now</a>',
			'saveSuccess' : 'submit successfully',
			'infoLack' : 'There is vacancy of information, please complete',
			'userLack' : 'please fill in the user information and submit',
			'add' : 'Add Dealer',
			'upload' : 'it can’t be uploaded due to the naming doesn’t meet requirement',
			'uploadSuccess' : 'upload successfully',
			'uploadFailure' : 'upload failed',
			'imageSuffix' : 'it can’t be uploaded due to the suffix doesn’t meet requirement',
			'deleteSuccess' : 'deleted successfully',
			'deleteFailure' : 'delete failed',
			'passHeader' : 'One-way exit permit handling tips',
			'functionClose' : 'Function has been shut down',
			'deleteHeader' : 'Are you sure you want to delete it ?',
			'deleteConfirm' : 'Confirm',
			'deleteCancel' : 'Cancel',
			'deleteTip' : 'Delete tip'
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