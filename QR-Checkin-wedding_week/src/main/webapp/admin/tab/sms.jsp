<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>tab</title>
<link rel="stylesheet" href="../css/jquery-ui-1.8.16.custom.css" type="text/css"/>
<link rel="stylesheet" href="tab/css/sms.min.css" type="text/css">
<script type="text/javascript" src="../js/LAB.js"></script>
<script type="text/javascript">
$LAB.setOptions({AlwaysPreserveOrder:true,BasePath:"../js/"})
	.script("jquery-1.6.1.min.js")
	.script("jquery-ui-1.8.16.custom.min.js")
	.script("jquery.form.js")
	.script("jquery-blocking-ui.js")
	.script("truth-canvasloader-min.js")
// 	.script("../admin/tab/js/utils.js")
// 	.script("../admin/tab/js/main.js")
	.script("../admin/tab/js/main.min.js")
	.wait(function(){
		Main.checkinMaxNum = ${checkinMaxNum};
	})
// 	.script("../admin/tab/js/sms.js")
// 	.script("../admin/tab/js/smsInit.js")
	.script("../admin/tab/js/smsInit.min.js")
	.wait();
</script>
</head>

<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="30" background="images/tab_05.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="12" height="30"><img src="images/tab_03.gif" width="12" height="30" /></td>
        <td>
        <form id="sms_conditionForm" action="admin/userAction!findUser">
        	<input type="hidden" name="smsPage" value="true">
		        <table width="100%" border="0" cellspacing="0" cellpadding="0">
		          <tr>
		            <td width="85%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
		              <tr>
		                <td width="13%" >
					        <label></label></dt>
					        <input type="text" name="user.code" size="6" />
		                </td>
		                <td width="13%" >
						    <label></label></dt>
						    <input type="text" name="user.name" size="6" />
		                </td>
		                <td width="12%" >
						    <label style="display:none;"></label></dt>
						    <select size="1" name="user.type">
							    <option value="0">胸卡类型</option>
							</select>
		                </td>
		               <td width="14%" >
						    <label></label></dt>
						    <input type="text" name="user.phone" size="9" />
		                </td>
		               <td width="18%" >
					       <label></label></dt>
					       <input type="text" name="user.company" size="16" />
		                </td>
		                 <td width="8%" >
					        <select size="1" name="checkinStatus">
							    <option value="">签到</option>
							</select>
		                </td>
		                <td width="7%">
							<button type="button" onclick="Sms.find()">查询</button>
		                </td>
		              </tr>
		            </table></td>
		            <td width="50%"><table border="0" align="right" cellpadding="0" cellspacing="0">
		              <tr>
		                <td width="50"><table width="90%" border="0" cellpadding="0" cellspacing="0">
		                  <tr>
		                    <td ><div><img src="images/22.gif" width="14" height="14" /></div></td>
		                    <td ><div style="cursor:pointer;" onclick="Sms.sendSmsSelected()">发送</div></td>
		                  </tr>
		                </table></td>
			                <td width="68"><table width="100%" border="0" cellpadding="0" cellspacing="0">
		                  <tr>
		                    <td ><div><img src="images/11.gif" width="14" height="14" /></div></td>
		                    <td ><div style="cursor:pointer;" onclick="Sms.sendAll()">全部发送</div></td>
		                  </tr>
		                </table></td>
		              </tr>
		            </table></td>
		          </tr>
		        </table>
		        <input type="hidden" id="page" name="page" value="${users.currentPage}">
		        <input type="hidden" name="count" value="20">
        </form>
        </td>
        <td width="16"><img src="images/tab_07.gif" width="16" height="30" /></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="8" background="images/tab_12.gif">&nbsp;</td>
        <td><table id="infoTable" width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="b5d6e6">
        <thead>
        	<tr>
	            <td width="3%" height="22" background="images/bg.gif" bgcolor="#FFFFFF"><div>
	              <input type="checkbox" id="ucheckall" value="checkbox"/>
	            </div></td>
	            <td width="7%" height="22" background="images/bg.gif" ><div><span ></span></div></td>
	            <td width="16%" height="22" background="images/bg.gif"><div><span ></span></div></td>
	            <td width="14%" height="22" background="images/bg.gif"><div><span ></span></div></td>
	            <td width="8%" height="22" background="images/bg.gif"><div><span ></span></div></td>
	            <td width="16%" height="22" background="images/bg.gif"><div><span ></span></div></td>
<!-- 	            <td width="4%" background="images/bg.gif"><div><span ></span></div></td> -->
	            <td height="22" background="images/bg.gif"><div><span ></span></div></td>
	            <td height="12" background="images/bg.gif"><div><span ></span></div></td>
	            <td width="5%" height="22" background="images/bg.gif"><div><span >已发短信</span></div></td>
	            <td width="5%" height="22" background="images/bg.gif"><div><span >发送短信</span></div></td>
          </tr>
        </thead>
        <tbody id="tbody">
          <c:if test="${users != null }">
          	<c:forEach var="u" items="${users.data}">
	          		<tr>
			            <td><input type="checkbox" name="ucheckbox" value="${u.id}"/></td>
			            <td>${u.code}</td>
			            <td>${u.name}</td>
			            <td>${u.userType.typeName}</td>
			            <td>${u.phone}</td>
			            <td>${u.company}</td>
			            <td>${u.email}</td>
<%-- 			            <td>${u.seatNumber}</td> --%>
			            <td>${u.note}</td>
			            <td>${fn:length(u.smsSendRecds)}</td>
			            <c:if test="${u.name != null && u.name != '' }">
				            <c:if test="${u.checkinRecds== null || fn:length(u.smsSendRecds) == 0}">
				            	<td><button onclick="Sms.sendSms('${u.id}')">发送</button></td>
				            </c:if>
				            <c:if test="${u.checkinRecds !=null && fn:length(u.smsSendRecds) > 0 }">
				            	<td><button onclick="Sms.sendSms(${u.id})">重发</button></td>
				            </c:if>
			            </c:if>
			            <c:if test="${u.name == null || u.name == '' }">
			            	<td></td>
			            </c:if>
		          </tr>
          	</c:forEach>
          </c:if>
          <c:if test="${users == null && users.data == null || fn:length(users.data) == 0 }">
          		<tr><td colspan="11">没有记录</td></tr>
          </c:if>
         </tbody>
        </table></td>
        <td width="8" background="images/tab_15.gif">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="35" background="images/tab_19.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="12" height="35"><img src="images/tab_18.gif" width="12" height="35" /></td>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="STYLE4">&nbsp;&nbsp;共有<span id="totalCount">${users.totalCount}</span>条记录，当前第 <span id="currentPage">${users.currentPage}</span> /<span id="totalPage">${users.totalPage}</span> 页</td>
            <td><table border="0" align="right" cellpadding="0" cellspacing="0">
                <tr>
                 	<td width="40"><img id="sms_first" src="images/first.gif" onclick="Sms.first()"/></td>
                  	<td width="45"><img id="sms_back" src="images/back.gif" width="43" height="15" onclick="Sms.back()"/></td>
                  	<td width="45"><img id="sms_next" src="images/next.gif" width="43" height="15" onclick="Sms.next()"/></td>
                  	<td width="40"><img id="sms_last" src="images/last.gif" width="37" height="15" onclick="Sms.end()"/></td>
                  <td width="100"><div><span >转到第
                  <input name="textfield" id="anyPage" type="text" size="4" style="height:15px; width:30px; border:1px solid #999999;" /> 
					<span>页</span></div></td>
                  <td width="40"><img src="images/go.gif" width="37" height="15" onclick="Sms.gotoPage(this)"/></td>
                </tr>
            </table></td>
          </tr>
        </table></td>
        <td width="16"><img src="images/tab_20.gif" width="16" height="35" /></td>
      </tr>
    </table></td>
  </tr>
</table>
<div id="send_sms_dialog" title="发送通知" style="display:none">
	<div id="send_info">短信发送中，可能需要几分钟，请耐心等待...</div>
</div>
</body>
</html>
