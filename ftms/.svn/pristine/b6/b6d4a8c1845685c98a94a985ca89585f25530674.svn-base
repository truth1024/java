<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style type="text/css">
.red{
	color:red;
}
.green{
	color:green;
}
#signindiv{
	margin:0 auto; 
	width: 680px;
	text-align:center;
}

#qrinput {
    border-color: #9A9A9A #CDCDCD #CDCDCD #9A9A9A;
    border-style: solid;
    border-width: 1px;
    font: 16px arial;
    height: 22px;
    padding: 4px 7px;
    vertical-align: top;
    width: 400px;
}

#signinbtn,#u2{
	background: url("http://www.baidu.com/img/i2.png") repeat scroll 0 -35px #DDDDDD;
    border: 0 none;
    cursor: pointer;
    height: 32px;
    padding: 0;
    width: 95px;
}
div.infostyle {
	margin-left:50px;
	font: 13px tahoma,arial,helvetica,sans-serif;
}
#addGuestBtn{
	margin-left: 10px
}
#guestGrid{
	margin:0 auto;
}


ul {
    float: left;
    margin: 0;
    padding: 0;
    width: 350px;
}

ul li {
	margin-top:5px;
    clear: both;
    display: block;
    float: left;
    list-style: none outside none;
    padding: 3px 0;
    width: 100%;
}

ul li span {
	font-size: 12px;
    display: block;
    float: left;
    padding-top: 4px;
    text-align: right;
    width: 80px;
}

ul li em {
	font-size: 12px;
    float: left;
}

ul li .input {
    background: none repeat scroll 0 0 #FFFFFF;
    border: 1px solid #9B9B9B;
    height: 22px;
    padding-top: 3px;
}

ul li textarea{
	height: 78px;
    width: 258px;
}

</style>
<link rel="stylesheet" href="/css/jquery-ui-1.8.16.custom.css" type="text/css"/>
<script type="text/javascript" src="/js/jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="/js/niceforms.js"></script>
<script type="text/javascript" src="/js/jquery.form.js"></script>

<script type="text/javascript">
var i = 1;
//验证邮箱格式
function check_email(obj){
    var reg = /^[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*$/;
    if(obj.value!=""&&!reg.test(obj.value)){
        obj.select();
        alert('电子邮箱格式输入错误！');
        obj.value = "";
        obj.focus();
        return false;
    }else{
    	return true;
    }
};
//验证手机号码(检验13,15,18开头的手机号！)
function check_telephone(obj){
    var reg= /^[1][358]\d{9}$/;
    if(obj.value!=""&&!reg.test(obj.value)){
        alert('手机号码格式输入错误！');
        obj.value = "";
        obj.focus();
        return false;  
    }else{
	    return true;
    }
};
	$(function(){
        var jsUserName = "";
        if($.browser.msie){// IE浏览器
            $("#qrinput").get(0).onpropertychange = handle;
        }else{             // 其他浏览器
            $("#qrinput").get(0).addEventListener("input",handle,false);
        }
        
        $("#qrinput").focus().blur(function(){//保持输入框对焦
        	setTimeout(function(){
        		$("#qrinput").focus();
        	},200);
        }).keydown(function(e){
        	if(e.keyCode==13){
        	  	find();
        	}
        }).keyup(function(){
        	$("#qrinput").css("color","#000");
        });
        
        function handle(){
    		if($("#qrinput").val().indexOf(";") > 0){
    			$("#qrinput").css("color","#fff");
    			if(i == 1){
    				i++;
     				var info = new Array();
	      			info = $("#qrinput").val().split(";");
	      			var code = info[0].split(":")[1];
	      			if(code != undefined){
	      				$.post(
	      					"/admin/userAction!findUserByCode",
     						{'code': code},
     						function(data){
     							var u = data.user;
     							console.log(u);
     							if(u.daren == null || u.daren == ""){
     								alert("您未获取达人称号，不能领奖");
     								$("#qrinput").val("").css("color","#000").focus();
     							}else{
     								if(u.prize == null || u.prize == ""){
     									$("#user_info_dialog h1").text(u.daren);
     									$("#user_info_dialog input[name='id']").val(u.id);
     									$("#user_info_dialog").dialog("open");
     								}else{
     									alert("已领过奖");
     									$("#qrinput").val("").css("color","#000").focus();
     								}
     							}
     							setTimeout(function(){
	     							i = 1;
     							},500);
     						});
	      			}else{
	      				i = 1;
	      			}
    			}
    		}
    	};
        
        //获取用户信息框
		$("#user_info_dialog").dialog({
			width:565,
			autoOpen: false,
			modal:true,
			resizable: false,
			position: 'center',
			open: function() {
				$(".ui-dialog-buttonpane button").first().focus();
			}, 
			close: function(event, ui) {
				$("#qrinput").css("color","#000").val("").focus();
			},
			buttons: {
				"领奖": function() {
					$.post("/admin/userAction!updatePrize", 
						{ "user.id": $("#user_info_dialog input[name='id']").val(),"user.prize":$("#user_info_dialog input[name='prize']").val()},
						function(data) {
							alert("领奖成功");
							$('#user_info_dialog').dialog('close');
						});
				},
				"取消": function() {
					$(this).dialog("close");
				}
			}
		});
    });
	
	//查询按钮操作
	function find(QRcode) {
		if($("#qrinput").val() == ""){
			alert("请输入用户编码或手机号");
			$("#qrinput").focus();
		} else {
			QRcode = $("#qrinput").val();// 手机号码或编号
			$.post("/admin/userAction!findUserByCode",
				{ code: QRcode},
				function(data){
				     if(data.status == 200){
				    	 var u = data.user;
						if(u.daren == null || u.daren == ""){
							alert("您未获取达人称号，不能领奖");
							$("#qrinput").val("").css("color","#000").focus();
						}else{
							if(u.prize == null || u.prize == ""){
								$("#user_info_dialog h1").text(u.daren);
								$("#user_info_dialog input[name='id']").val(u.id);
								$("#user_info_dialog").dialog("open");
							}else{
								alert("已领过奖");
								$("#qrinput").val("").css("color","#000").focus();
							}
						}
				     } else if(data.status == 404){
				    	 alert("没有找到该用户");
				     } else if(data.status == 412){
				    	 alert("请求失败，请重试！");
				     } else {
				    	 alert("服务器内部错误！");
				     }
				     $("#qrinput").val("");
				   });
		}
	};
</script>
<title>二维码签到系统</title>
</head>
<body>
	<div style="margin: 0 auto;width: 100px;margin-top:50px;margin-bottom:10px"><h3>领奖</h3></div>
	<div id="signindiv" style="margin-top: 30px">
		<input type="text" id="qrinput" name="info"/>
		<input type="button" id="signinbtn" value="查询" onclick="find()" />
	</div>
	<div  id="btns" style="margin: 0 auto;width: 300px;"></div>
	<div style="margin: 0 auto;width: 300px;margin-top:5px;font-size: 12px"><span>二维码扫描内容、参会人员编号、手机号</span></div>
	
	<div id="user_info_dialog" title="用户信息" style="display:none">
		<h1></h1>	
   		<input type="hidden" name="id">
   		<input type="hidden" name="prize" value="1">
	</div>
</body>
</html>