<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<% String code = request.getParameter("c"); %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>打印页面</title>
<style type="text/css">
#print_info{
	position: relative;
	top: 100px;
	width: 200px;
	left: 50%;
	margin: 0 0 0 -100px;
	font-weight:bold;
	text-align: center;
}
#print_info img{
	width: 200px;
	height: 200px;
}
#print_button {
	position: absolute;
	top: 50px;
	right: 100px;
}
</style>
<script type="text/javascript" src="/js/jquery-1.6.1.min.js"></script>
<script type="text/javascript">
var code = "<%=code%>";
	$(function(){
		$.post(
				"admin/userAction!findUserByCode",
				{"code":code},
				function(data){
					var user = data.user;
					if(user == null){
						alert("用户不存在");
						window.close();
					}else{
						$('#print_info img').attr('src','../qr/'+user.imageName);
						$("#print_info").append(user.name+"<br>"+user.phone);
					}
				}
			);
		$("#print_button").click(function(){
			$(this).hide();
			window.print();
		});
	});
</script>
</head>
<body>
	<input id="print_button" type="button" value="打印">
	<div id="print_info">
		<img alt="" src="">
	</div>
</body>
</html>