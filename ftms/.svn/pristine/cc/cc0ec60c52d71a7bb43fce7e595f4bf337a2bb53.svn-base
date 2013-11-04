<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%String basePath = request.getScheme()+"://"+request.getServerName()+(request.getServerPort() == 80 ? "": ":"+ request.getServerPort()) + request.getContextPath(); %>
<!DOCTYPE html  PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="../../css/jquery-ui-1.8.16.custom.css" type="text/css"/>
<link rel="stylesheet" href="css/checkin.css" type="text/css">
<script type="text/javascript" src="../../js/LAB.js"></script>
<script type="text/javascript">
$LAB.setOptions({AlwaysPreserveOrder:true,BasePath:"../../js/"})
	.script("jquery-1.6.1.min.js")
	.script("jquery-ui-1.8.16.custom.min.js")
// 	.script("niceforms.js")
	.script("jquery.form.js")
// 	.script("../admin/tab/js/utils.js")
// 	.script("../admin/tab/js/main.js")
// 	.script("../admin/tab/js/checkin.js")
// 	.script("../admin/tab/js/checkinInit.js")
	.script("../admin/tab/js/main.min.js")
	.script("../admin/tab/js/checkinInit.min.js")
	.wait();
</script>
<title>二维码签到系统</title>
</head>
<body>
	<div style="margin: 0 auto;width: 100px;margin-top:50px;margin-bottom:10px"><h3>签到</h3></div>
	<div id="signindiv" style="margin-top: 30px">
		<input type="text" id="qrinput" name="info"/>
		<input type="button" id="signinbtn" value="查询" onclick="Checkin.find()" />
	</div>
	<div  id="btns" style="margin: 0 auto;width: 300px;"></div>
	<div style="margin: 0 auto;width: 300px;margin-top:5px;font-size: 12px"><span>二维码扫描内容、参会人员编号、手机号</span></div>
	
	<div id="conference_box" style="position: relative;top: 50px;height: 300px;text-align: center;">
		<table cellspacing="0" cellpadding="0">
			<tr>
				<td width="10%"><input type="radio" name="radio" value=""></td>
				<td width="20%">会议地点</td>
				<td width="50%">会议内容</td>
				<td width="20%">会议时间</td>
			</tr>
		</table>
	</div>
	
	<div id="checkin_info_dialog" title="用户信息" style="display:none">
		<form id ="checkin_infoForm" action="">
		<ul>
			<li><span></span><em><input type="text" name="user.code" id="code" size="15" class="input" readonly="readonly" ></em></li>
	        <li><span></span><em><input type="text" name="user.name" id="name" size="15" class="input" readonly="readonly" ></em></li>
	        <li><span></span><em><input type="text" name="user.type" id="type" size="25" class="input" readonly="readonly" ></em></li>
	        <li><span></span><em><input type="text" name="user.phone" id="phone" size="15" class="input" readonly="readonly"></em></li>
	        <li><span></span><em><input type="text" name="user.company" id="company" size="15" class="input" readonly="readonly"></em></li>
	        <li><span></span><em><input type="text" name="user.email" id="email" size="15" class="input" readonly="readonly"></em></li>
<!-- 	        <li><span></span><em><input type="text" name="user.title" id="title" size="15" class="input" readonly="readonly"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.seatNumber" id="email" size="15" class="input" readonly="readonly"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.companyAdd" id="companyAdd" size="15" class="input" readonly="readonly"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.daren" id="daren" size="15" class="input" readonly="readonly"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.prize" id="prize" size="15" class="input" readonly="readonly"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.photoName" id="photoName" size="15" class="input" readonly="readonly"></em></li> -->
	        <li><span></span><em>
	          <textarea id="note" name="user.note" class="textarea" readonly="readonly" ></textarea>
	        </em></li>
	        <li>
		   		 <div id="user_permission">
		        	<div>用户权限</div>
		   		 	<table cellspacing="0" cellpadding="0">
					</table>
					<div style="color:red">* 有红色文字表示可以签到</div>
		   		 </div>
	        </li>
   		 </ul>
   		 <input type="hidden" name="checkinWay" value="">
		</form>
	</div>
	
	<div id="checkin_add_dialog" title="用户信息" style="display:none">
		<form id ="checkin_addForm" action="admin/userAction!add" class="niceform">
		 <ul>
		 	<li style="display:none;"><span></span><em><input type="text" size="15" class="input" readonly="readonly"></em></li>
	        <li><span></span><em><input type="text" name="user.name" size="15" class="input" ></em></li>
	        <li><span></span><em><input type="text" name="user.phone" size="15" class="input"></em></li>
	        <li><span></span><em><input type="text" name="user.company"  size="15" class="input"></em></li>
	         <li><span></span><em><input type="text" name="user.email"  size="15" class="input"></em></li>
<!-- 	        <li><span></span><em><input type="text" name="user.title" size="15" class="input" ></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.seatNumber" size="15" class="input"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.companyAdd" size="15" class="input"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.daren" size="15" class="input"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.prize" size="15" class="input"></em></li> -->
<!-- 	        <li><span></span><em><input type="text" name="user.photoName" size="15" class="input"></em></li> -->
	        <li><span></span><em>
	          <textarea id="info" name="user.note" class="textarea" tip="请在这里输入嘉宾信息。" ></textarea>
	        </em></li>
   		 </ul>
   		 <input type="hidden" name="checkinWay" value="">
   		 <input type="hidden" name="user.code" id="aCode">
   		 <input type="hidden" name="user.imageName" id="imageName">
		</form>
	</div>
	
	<div id="checkin_ticket_dialog" title="用户票类信息" style="display:none">
		<form id ="ticketForm" action="/admin/userAction!findUserByCode" class="niceform">
		 <ul>
   		 </ul>
		</form>
	</div>
</body>
</html>