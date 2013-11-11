<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>top</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
.STYLE1 {
	font-size: 12px;
	color: #FFFFFF;
}
.STYLE2 {font-size: 9px}
.STYLE3 {
	color: #033d61;
	font-size: 12px;
}
-->
</style>
<script type="text/javascript" src="../js/LAB.js"></script>
<script type="text/javascript">
$LAB.setOptions({BasePath:"../js/"})
	.script("jquery-1.6.1.min.js")
	.wait(function(){
		$(document).ready(function() {
			$('#logout').click(function() {
				$.get("administrator!logout", function(data){
					if(data.status == 200){
						self.parent.parent.location.href = "../login.jsp";
					} else {
						alert("服务器内部错误！");
					}
				});
			});
		});
		
		function changContent(pageURI){
			var docs;
			docs = self.parent.frames["mainFrame"];
			if (document.all){//IE
		        docs = docs.frames["middelFrame"].document; 
		    }else{//Firefox
		        docs = docs.document.getElementById("middelFrame").contentDocument; 
		    }
			$(docs).find("#contentFrame").attr("src",pageURI);
		}
		window.onload = function(){
			$("#date_now").html(getDate());
			function getDate(){
				var day="";  
		        var month="";  
		        var ampm="";  
		        var ampmhour="";  
		        var myweekday="";  
		        var year="";  
		        mydate=new Date();  
		        myweekday=mydate.getDay();  
		        mymonth=mydate.getMonth()+1;  
		        myday= mydate.getDate();  
		        year= mydate.getFullYear();  
		        if(myweekday == 0)  
		        weekday=" 星期日 ";  
		        else if(myweekday == 1)  
		        weekday=" 星期一 ";  
		        else if(myweekday == 2)  
		        weekday=" 星期二 ";  
		        else if(myweekday == 3)  
		        weekday=" 星期三 ";  
		        else if(myweekday == 4)  
		        weekday=" 星期四 ";  
		        else if(myweekday == 5)  
		        weekday=" 星期五 ";  
		        else if(myweekday == 6)  
		        weekday=" 星期六 ";
		        return "今天是：" + year+"年"+mymonth+"月"+myday+"日 "+weekday;
			}
		}
	});
</script>

</head>

<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="70" background="images/main_05.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="24"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="270" height="24" background="images/main_03.gif">&nbsp;</td>
            <td width="505" background="images/main_04.gif">&nbsp;</td>
            <td>&nbsp;</td>
            <td width="21"><img src="images/main_07.gif" width="21" height="24"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="38"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="270" height="38" background="images/main_09.gif">&nbsp;</td>
            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="90%" height="25" valign="bottom"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="220" valign="bottom"  nowrap="nowrap"><div align="left"><span id="date_now" class="STYLE1"></span></div></td>
                  </tr>
                </table></td>
                <td width="50"><div align="center"><img id="logout" src="images/main_20.gif" width="48" height="19" style="cursor:pointer"></div></td>
              </tr>
            </table></td>
            <td width="21"><img src="images/main_11.gif" width="21" height="38"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="8" style=" line-height:8px;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="270" background="images/main_29.gif" style=" line-height:8px;">&nbsp;</td>
            <td width="505" background="images/main_30.gif" style=" line-height:8px;">&nbsp;</td>
            <td style=" line-height:8px;">&nbsp;</td>
            <td width="21" style=" line-height:8px;"><img src="images/main_31.gif" width="21" height="8"></td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="28" background="images/main_36.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="177" height="28" ><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="10%"  height="22">&nbsp;</td>
            <td width="80%" valign="bottom"><div align="center" style="font-size:12px;font-weight:bold">当前用户:${sessionScope.identity}</div></td>
            <td width="10%">&nbsp;</td>
          </tr>
        </table></td>
        <td>
	        <table width="100%" border="0" cellspacing="0" cellpadding="0">
	          <tr>
	            <td width="3"><img src="images/main_34.gif" width="3" height="28"></td>
	            <td width="65" height="28"><table width="100%" border="0" cellspacing="0" cellpadding="0">
	         </table>
         </td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
        <td width="21"><img src="images/main_37.gif" width="21" height="28"></td>
      </tr>
    </table></td>
  </tr>
</table>
<script type="text/javascript">

</script>
</body>
</html>
