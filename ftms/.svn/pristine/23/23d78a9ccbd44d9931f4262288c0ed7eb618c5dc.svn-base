<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>二维码签到系统</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #016aa9;
	overflow:hidden;
}
.STYLE1 {
	color: #000000;
	font-size: 12px;
}
#submit_img{
	cursor:pointer;
	text-align:center;
	width:49px;
	height:17px;
	background:#292929;
	color:#fff;
	font-size:12px;
	padding-top:4px;
	border-radius: 2px;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
}
#submit_img:hover{
	background:#000;
}
#submit_disable{
	width:49px;
	font-size: 12px;
	color: white;
	text-align: center;
}
-->
</style>
<link rel="stylesheet" href="css/validationEngine.jquery.css" type="text/css" media="screen" charset="utf-8" /> 
<script type="text/javascript" src="js/LAB.js"></script>
<!-- <script type="text/javascript" src="js/jquery-1.6.1.min.js"></script> -->
<!-- <script type="text/javascript" src="js/jquery.form.js"></script> -->
<!-- <script type="text/javascript" src="js/jquery.validationEngine.js"></script> -->
<!-- <script type="text/javascript" src="js/jquery.validationEngine-zh_CN.js	"></script> -->
<script type="text/javascript">
$LAB.setOptions({AlwaysPreserveOrder:true,BasePath:"js/"})
	.script("jquery-1.6.1.min.js")
	.script("jquery.form.js")
	.script("jquery.validationEngine.js")
	.script("jquery.validationEngine-zh_CN.js")
	.wait(function(){
		
			$(document).ready(function() {
				$("#form").validationEngine({
					inlineValidation : true,
					success : false
				});
				$('#submit_img').click(function() {
					submit();
				});
				
				$("#name").focus();
				document.onkeydown = function(e){
				    var ev = document.all ? window.event : e;
				    if(ev.keyCode==13) {
				    	submit();
				    }
				  };
				  
				  function submit(){
					  login_disable();
					  if($("#form").validationEngine('validate')){
						  $('#form').ajaxSubmit({
								success:function(msg,status){
									if(msg.status == 200){
										window.location.href="admin/main.jsp";
									} else if(msg.status == 400){
										login_enable();
										alert("用户名或密码错误！");
									} else {
										login_enable();
										alert("服务器内部错误！");
									}
								}
							});
					  }else{
						  login_enable();
					  }
				  };
				  //屏蔽登录功能
				  function login_disable(){
					  $('#submit_img').attr('id','submit_disable').text('登录中');
				  };
				  //恢复登录功能
				  function login_enable(){
					  $('#submit_disable').attr('id','submit_img').text('登录');
				  };
			});
	});
	
</script>
</head>

<body>
<form id="form" action="administrator!login" method="post">

<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="962" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td height="235" background="images/login_03.gif">&nbsp;</td>
      </tr>
      <tr>
        <td height="53"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="394" height="53" background="images/login_05.gif">&nbsp;</td>
            <td width="206" background="images/login_06.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="25%" height="25"><div align="right"><span class="STYLE1">用户名:</span></div></td>
                <td width="57%" height="25"><div align="center">
                  <input id="name" class="validate[required]" type="text" name="name" style="width:105px; height:17px; background-color:#292929; border:solid 1px #7dbad7; font-size:12px; color:#6cd0ff">
                </div></td>
                <td width="20%" height="25">&nbsp;</td>
              </tr>
              <tr>
                <td height="25"><div align="right"><span class="STYLE1">密码:</span></div></td>
                <td height="25"><div align="center">
                  <input id="password" class="validate[required]" type="password" name="password" style="width:105px; height:17px; background-color:#292929; border:solid 1px #7dbad7; font-size:12px; color:#6cd0ff">
                </div></td>
                <td height="25"><div id="submit_img" style="">登录</div></td>
              </tr>
            </table></td>
            <td width="362" background="images/login_07.gif">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="213" background="images/login_08.gif">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
</table>
</form>
</body>
</html>
