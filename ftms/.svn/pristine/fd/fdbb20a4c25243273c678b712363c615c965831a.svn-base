<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script type="text/javascript" src="/js/jquery-1.6.1.min.js"></script>
<script type="text/javascript">
function create(){
	$.post(
		"/postcard/gainUserByCode!createQRImgWithoutInfo",
		{"count":$("#count").val()},
		function(){
			alert("添加结束！");
		},
		'json'
	);
}
</script>
</head>
<body>
<div>
需要生成空白二维码的数量：<input id="count"/>
<button onclick="create()">生成</button>
</div>
</body>
</html>