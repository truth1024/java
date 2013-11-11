Sms = {};
//加载用户信息回调函数
Sms.callBack = function(msg,status){
	Loader.killLoader();
	if(msg.status == 200){
		$("#infoTable tbody").empty();
		var us = msg.users.data;
		if(us.length > 0){
			for(i=0;i<us.length;i++){
				var tr = $("<tr>");
				tr.append("<td><input type='checkbox' name='ucheckbox' value='"+ us[i].id + "'/></td>")
				.append("<td>" + (us[i].code==null?"":us[i].code) +"</td>")
				.append("<td>" + (us[i].name==null?"":us[i].name) +"</td>")
				.append("<td>" + (us[i].userType==null?"":us[i].userType.typeName) +"</td>")
				.append("<td>" + (us[i].phone==null?"":us[i].phone) +"</td>")
				.append("<td>" + (us[i].company==null?"":us[i].company) +"</td>")
				.append("<td>" + (us[i].email==null?"":us[i].email) +"</td>")
//				.append("<td>" + (us[i].seatNumber==null?"":us[i].seatNumber) +"</td>");
				tr.append("<td>" + (us[i].note==null?"":us[i].note) +"</td>")
				.append("<td>" + us[i].smsSendRecds.length +"</td>");
				if(us[i].name != null && us[i].name != ""){
					if(us[i].smsSendRecds.length == 0){
						tr.append("<td><button onclick=Sms.sendSms('" + us[i].id + "')>发送</button></td>");
					} else {
						tr.append("<td><button onclick=Sms.sendSms(" + us[i].id + ")>重发</button></td>");
					}
				}else{
					tr.append("<td></td>");
				}
				$("#infoTable tbody").append(tr);				
			}
			$("#totalCount").html(msg.users.totalCount);
			$('#sms_conditionForm input[name="page"]').val(msg.users.currentPage);
			$("#currentPage").html(msg.users.currentPage);
			$("#totalPage").html(msg.users.totalPage);
			$("#ucheckall").attr("checked",false);
		} else {
			$("#infoTable tbody").append("<tr><td colspan='11'>没有记录</td></tr>");
		}
	} else {
		alert("服务器内部错误！");
	}
	Sms.initPageButton();
};
//单条发送
Sms.sendSms = function(id){
	$("#send_sms_dialog").dialog("open");
	$.post(
		"admin/sendSmsAction!send", 
		{ userId: id},
		function(data){
			if(data.status == 200){
				Sms.processResult(data);
			}else if(data.status == 412){
				$("#send_info").html("请求失败，请重试！");
			}else{
				$("#send_info").html("服务器内部错误！");
			}
	});
};
//选择发送
Sms.sendSmsSelected = function(){
	if($("input[name='ucheckbox']:checked").length == 0){
		alert("请选择要发送短信的用户！");
	}else{
		var ids = new Array();
		$("input[name='ucheckbox']:checked").each(function(){
			ids.push($(this).val());
		});
		var userIds = {userIds:ids};
		$("#send_sms_dialog").dialog("open");
		$.ajax({
			url:"admin/sendSmsAction!sendBulkSms",
			dataType:"json",
			data:$.param(userIds, true),
			success:function(data){
				if(data.status == 200){
					Sms.processResult(data);
				}else if(data.status == 412){
					$("#send_info").html("请求失败，请重试！");
				} else {
					$("#send_info").html("服务器内部错误！");
				}
			}
		});
	}
};
//发送全部
Sms.sendAll = function(){
	$("#send_sms_dialog").dialog("open");
	$.post(
		"admin/sendSmsAction!sendToAll", 
		{},
		function(data) {
			if(data.status == 200){
				Sms.processResult(data);
			} else {
				$("#send_info").html("服务器内部错误！");
			}
	});
};
//短信处理结果
Sms.processResult = function(data){
	$("#send_info").html("");
	$("#send_info").append("<div>短信成功发送: " + data.successCount + " 条</div>");
	$("#send_info").append("<div>短信发送失败:" + (data.errs==null?0:data.errs.length) + " 条</div>") ;
	if(data.errs!= null && data.errs.length > 0){
		var errPhones="";
		for(i=0; i<data.errs.length; i++){
			errPhones = errPhones + data.errs[i] + ";";
		}
		errPhones = errPhones.substring(0,errPhones.length-1);
		$("#send_info").append("");
		$("#send_info").append("<div>短信发送失败号码:[" +  errPhones + "]</div>");
	}
	
	$("#send_info").append("<div>邮件成功发送: " + data.emailSuccessCount + " 封</div>");
	$("#send_info").append("<div>邮件发送失败:" + (data.emailErrs==null?0:data.emailErrs.length) + " 封</div>") ;
	if(data.emailErrs!= null && data.emailErrs.length > 0){
		var errEmails="";
		for(i=0; i<data.emailErrs.length; i++){
			errEmails = errEmails + data.emailErrs[i] + ";";
		}
		errEmails = errEmails.substring(0,errEmails.length-1);
		$("#send_info").append("");
		$("#send_info").append("<div>邮件发送失败地址:[" +  errEmails + "]</div>");
	}
};

//查询
Sms.find = function(){
	Loader.showLoader();
	$('#sms_conditionForm input[name="page"]').val(1);
	$('#sms_conditionForm').submit();
};

//改变页码
Sms.changePage = function(page){
	Loader.showLoader();
	$('#sms_conditionForm input[name="page"]').val(page);
	$('#sms_conditionForm').submit();
};
//首页
Sms.first = function(){
	Sms.changePage(1);
};
//尾页
Sms.end = function(){
	Sms.changePage(parseInt($('#totalPage').html()));
};
//上一页
Sms.back = function(){
	Sms.changePage(parseInt($('#page').val()) - 1);
};
//下一页
Sms.next = function(){
	Sms.changePage(parseInt($('#page').val()) + 1);
};
//跳转到某页
Sms.gotoPage = function(){
	Sms.changePage(parseInt($('#anyPage').val()));
};
//初始化按钮
Sms.initPageButton = function(){
	if(parseInt($("#currentPage").html()) > 1){
		$('#sms_first').show();
		$('#sms_back').show();
	} else {
		$('#sms_first').hide();
		$('#sms_back').hide();
	}
	if(parseInt($("#currentPage").html()) < parseInt($("#totalPage").html())){
		$('#sms_next').show();
		$('#sms_last').show();
	} else {
		$('#sms_next').hide();
		$('#sms_last').hide();
	}
};