<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=1,user-scalable=no;">
<title>二维码</title>
<style>
body {
	margin:0px;
	padding:0px;
	text-align:center;
	color:#3477A8;
	font-family: "微软雅黑",Verdana, Arial, Helvetica, sans-serif;
	min-height: 470px;
}
h1,h4 {
	letter-spacing:4px
}
h3{
	margin:0px 0px 2px;
}
h3,h4{
	font-size: 1.0em;
}
h1 {
	font-size: 1.7em;margin:0px 0px 2px;
}
#golf{
	font-size: 1.5em;
}
h4 {
	margin:0px 0px 5px;
}
.small {
	font-weight:normal;font-size:0.8em;
}
span {
	color:red;
}
</style>
<script type="text/javascript">
addEventListener("load", function(){
	setTimeout(hideURLbar, 0);
}, false);
function hideURLbar(){
	window.scrollTo(0, 1);
}
</script>
</head>
<body>
	<img alt="" src="images/email/banner.jpg" width="100%">
<!-- 	<h3>太平洋联盟<i>Greg Norman</i> 先生邀请您</h3> -->
<!-- 	<h1 id="golf">共享高尔夫盛宴</h1> -->
<!-- 	<h1 style="margin: 0px">签到二维码</h1> -->
	<img alt="" src="${imageURI}" width="150" >
	<h4 class="small" style="margin: 20px 4% 10px 6%;text-align:left;">尊敬的<b>${name}</b>先生/女士：<br>恭喜您，已经成功购买北京国际婚礼时尚周门票！"北京国际婚礼时尚周"作为中国婚礼专业人士的第一品牌盛会，将于2013年12月10日至15日期间在中国首都北京举行。北京国际婚礼时尚周组委会诚挚邀请您的到来，请您于现场出示该二维码或将邮件打印并携带以换取您的胸牌。</h4>
<%-- 	<h4 style="font-size:1.3em;">${name}</h4> --%>
</body>
</html>