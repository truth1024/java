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

#signinbtn{
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
</style>
<title>IBM 会议签到系统</title>
</head>
<body>
	<!-- <div style="margin: 0 auto;width: 300px;margin-top:50px;margin-bottom:40px">二维码扫描内容或手动录入参会人员编号</div> -->
	<div id="signindiv" style="margin-top: 100px">
		<input type="text" id="qrinput" name="qrcode" onkeypress=""/>
		<!-- <input type="button" id="signinbtn" value="签到" onclick="" /> -->
	</div>
	<div  id="btns" style="margin: 0 auto;width: 300px;">
	</div>
</body>
</html>