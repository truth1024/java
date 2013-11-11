<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
.STYLE3 {
	display:block;
	font-size: 12px;
	color: #033d61;
}
.selected{
background:#43C6E5;
}
-->
</style>
<style type="text/css">
.menu_title SPAN {
	FONT-WEIGHT: bold; LEFT: 3px; COLOR: #ffffff; POSITION: relative; TOP: 2px 
}
.menu_title2 SPAN {
	FONT-WEIGHT: bold; LEFT: 3px; COLOR: #FFCC00; POSITION: relative; TOP: 2px
}

</style>
<script type="text/javascript" src="../js/LAB.js"></script>
<script type="text/javascript">
$LAB.setOptions({AlwaysPreserveOrder:true,BasePath:"../js/"})
.script("jquery-1.6.1.min.js")
.wait();
</script>
</head>

<table width="165" height="100%" border="0" cellpadding="0" cellspacing="0">
<!--   <tr> -->
<!--     <td height="28" background="images/main_40.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0"> -->
<!--       <tr> -->
<!--         <td width="19%">&nbsp;</td> -->
<!--         <td width="81%" height="20"><span class="STYLE1">管理菜单</span></td> -->
<!--       </tr> -->
<!--     </table></td> -->
<!--   </tr> -->
  <tr>
    <td valign="top"><table width="151" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td height="23" background="images/main_47.gif" id="imgmenu1" class="menu_title" onMouseOver="this.className='menu_title2';" onClick="showsubmenu(1)" onMouseOut="this.className='menu_title';" style="cursor:hand"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="18%">&nbsp;</td>
                <td width="82%" style="font-size:12px">签到管理</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td background="images/main_51.gif" id="submenu1">
			 <div class="sec_menu" >  
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td>
	                <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
	                  <tr>
	                    <td width="16%" height="25"><div align="center"><img src="images/left.gif" width="10" height="10" /></div></td>
	                    <td width="84%" height="23"><table width="95%" border="0" cellspacing="0" cellpadding="0">
	                        <tr>
	                          <td height="20" class="selected" style="cursor:pointer" onmouseover="this.style.background='#43C6E5';this.style.borderStyle='solid';this.style.borderWidth='1';borderColor='#7bc4d3'; "onmouseout="this.style.background='';this.style.borderStyle='none'" onclick="changePage('tab/checkin.jsp',this)"><span class="STYLE3" >签到</span></td>
	                        </tr>
	                    </table></td>
	                  </tr>
	                  <c:if test="${sessionScope.identity == 'admin'}">
		                  <tr>
		                    <td height="23"><div align="center"><img src="images/left.gif" width="10" height="10" /></div></td>
		                    <td height="23"><table width="95%" border="0" cellspacing="0" cellpadding="0">
		                        <tr>
		                          <td height="20" class="menueButton" style="cursor:pointer" onmouseover="this.style.background='#43C6E5';this.style.borderStyle='solid';this.style.borderWidth='1';borderColor='#7bc4d3'; "onmouseout="this.style.background='';this.style.borderStyle='none'" onclick="changePage('userAction!findAll',this)"><span class="STYLE3" >人员信息</span></td>
		                        </tr>
		                    </table></td>
		                  </tr>
		                  <tr>
		                    <td height="23"><div align="center"><img src="images/left.gif" width="10" height="10" /></div></td>
		                    <td height="23"><table width="95%" border="0" cellspacing="0" cellpadding="0">
		                        <tr>
		                          <td height="20" class="menueButton" style="cursor:pointer" onmouseover="this.style.background='#43C6E5';this.style.borderStyle='solid';this.style.borderWidth='1';borderColor='#7bc4d3'; "onmouseout="this.style.background='';this.style.borderStyle='none'"onclick="changePage('userAction!findAllSms?smsPage=true',this)"><span class="STYLE3" >发送通知</span></td>
		                        </tr>
		                    </table></td>
		                  </tr>
	                  </c:if>
	                </table>
                </td>
              </tr>
              <tr>
                <td height="5"><img src="images/main_52.gif" width="151" height="5" /></td>
              </tr>
            </table></div></td>
          </tr>
          
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="18" background="images/main_58.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="18" valign="bottom"><div align="center" class="STYLE3">版本2012V1.0</div></td>
      </tr>
    </table></td>
  </tr>
</table>
<script type="text/javascript">
function changePage(page,obj){
	var docs;
	if (document.all){//IE
        //docs = window.parent.frames["contentFrame"]; 
        docs = window.parent.document; 
    }else{//Firefox
        docs = window.parent.document; 
    }
	$(docs).find("#contentFrame").attr("src",page);
	$(".selected").attr("class","menueButton ");
	$(obj).attr("class","selected");
}
function showsubmenu(sid)
{
	whichEl = eval("submenu" + sid);
	imgmenu = eval("imgmenu" + sid);
	if (whichEl.style.display == "none")
	{
		eval("submenu" + sid + ".style.display=\"\";");
		imgmenu.background="images/main_47.gif";
	}else{
		eval("submenu" + sid + ".style.display=\"none\";");
		imgmenu.background="images/main_48.gif";
	}
}
</script>