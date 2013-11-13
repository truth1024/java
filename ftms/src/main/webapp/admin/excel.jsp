<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>导入导出</title>
<style type="text/css">
body{
	margin:0;
	padding:0;
	font-family:"微软雅黑";
}
.import {
	background: none repeat scroll 0 0 #0066ff;
     border: 1px solid #666;
    color: #FFFFFF;
    font-weight: bold;
    margin: 10px auto;
    padding: 20px;
    width: 400px;
    text-align: center;
    border-radius: 10px;
    webkit-border-radius: 10px;
    moz-border-radius: 10px;
    box-shadow: 1px 1px 4px 1px #75f;
    webkit-box-shadow: 1px 1px 4px 1px #75f;
    moz-box-shadow: 1px 1px 4px 1px #75f;
}
.import header{
	margin-bottom:20px;
	font-size:22px;
}
.import a {
	color:#ffffff;
	text-decoration: none;
}
.import a:hover {
	text-shadow:1px 1px 4px #fff;
}
.header {
	height:70px;
	font-size:40px;
	text-align:center;
	line-height:70px;
}

</style>
<script type="text/javascript">
	function formCheck(form){
		if(form.excelFile.value == ""){
			alert("请选择上传的文件");
			return false;
		}else{
			str= form.excelFile.value;
            strs=str.toLowerCase();
            arr = strs.split(".");
            extname = arr[arr.length-1];
           	if(extname != "xls" && extname != "xlsx"){
	             alert("请选择excel格式文件！");
	             return false;
            }
		}
	}
</script>
</head>
<body>
<div class="header">
	FTMS管理后台
</div>
<div class="import">
<header>内部员工/经销商登录码导入</header>
	<form name="readExcel" action="/admin/excel_importUser" method="post" enctype="multipart/form-data" onsubmit="return formCheck(this);">
	    Excel文件路径:&nbsp;<input class="input" style="width:150px" type="file" name="excelFile">
	    <input class="submit input" type="submit" value="导入">
	</form>
	<div style="position: initial;top: 20px;width: 400px;margin:10px auto;">
		${tip}
	</div>
</div>
<div class="import">
	<a href="/admin/export">导出用户信息</a>
</div>
<div class="import">
	<a href="/admin/image_download">下载图片</a>
</div>
</body>
</html>