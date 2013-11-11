User = {};
//编码排序操作
User.orderByCode = function(index,imageName){
	$('#orderType').val(index);
	$("#arrow_code").attr("src","../images/"+imageName);
	$("#arrow_date").hide();
	$("#arrow_code").show();
	User.findUsersByCodeOrDate();
}

//迭代数据
User.infoIterator = function(u){
	if(!Utils.is_array(u)){
		us = [u];
	}else{
		us = u;
	}
	for(i=0;i<us.length;i++){
		var tr = $("<tr>");
		tr.append("<td><input type='checkbox' name='ucheckbox' value='"+ us[i].id + "'/></td>")
		.append("<td>" + Utils.transform(us[i].code) +"</td>")
		.append("<td>" + Utils.transform(us[i].name) +"</td>");
		if(us[i].userType !== undefined && us[i].userType !== null){
			tr.append("<td>" + Utils.transform(us[i].userType.typeName) +"</td>");	
		}else{
			tr.append("<td></td>");
		}
		tr.append("<td>" + Utils.transform(us[i].phone) +"</td>")
		.append("<td>" + Utils.transform(us[i].company) +"</td>")
		.append("<td>" + Utils.transform(us[i].email) +"</td>");
//		.append("<td>" + Utils.transform(us[i].seatNumber) +"</td>")
//		.append("<td>" + Utils.transform(us[i].companyAdd) +"</td>")
//		.append("<td>" + Utils.transform(us[i].daren) +"</td>")
		if(us[i].name != null && us[i].name != ""){
			if(us[i].checkinRecds.length < Main.checkinMaxNum){
				tr.append("<td><a href='javascript:void(0)' onclick=User.bgCheckin('" + us[i].code + "')>签到</a></td>");
			} else {
				tr.append("<td><a href='javascript:void(0)' onclick=User.checkout(" + us[i].id + ")>取消签到</a></td>");
			}
			tr.append("<td><a href='print.jsp?c="+us[i].code+"' target='_blank')>打印</a></td>");
		}else{
			tr.append("<td></td>");
			tr.append("<td></td>");
		}
		tr.append("<td><a href='javascript:void(0)' onclick=User.updateUser('"+ us[i].code +"',this)>编辑</a></td>");
		if(!Utils.is_array(u)){
			User.config.updateTr.replaceWith(tr);
		}else{
			$("#user_infoTable tbody").append(tr);			
		}
	}
};

//请求用户信息回调函数
User.callBack = function(msg,status){
	Loader.killLoader();
	if(msg.status == 200){
		$("#user_infoTable tbody").empty();
		var us = msg.users.data;
		if(us.length > 0){
			User.infoIterator(us);
			$("#totalCount").html(msg.users.totalCount);
			$('#user_conditionForm input[name="page"]').val(msg.users.currentPage);
			$("#currentPage").html(msg.users.currentPage);
			$("#totalPage").html(msg.users.totalPage);
			$("#ucheckall").attr("checked",false);
		} else {
			$("#user_infoTable tbody").append("<tr><td colspan='100'>没有记录</td></tr>");
		}
		User.initPageButton();
	} else {
		alert("服务器内部错误！");
	}
};

//用户签到
User.bgCheckin = function(code){
	$.post(
		"admin/checkinAction!bgCheckin",
		{ code: code},
		function(data){
			User.checkinCallback(data);
	});
}

// 签到/取消签到回调函数
User.checkinCallback = function(data){
	if(data.status == 200){
		alert("签到成功");
		$('#user_conditionForm').submit();
	} else if(data.status == 400) {
		alert("签到失败，没有找到用户！");
	} else if(data.status == 510){
		alert("该用户已经签到！");
	}  else if(data.status == 412){
		alert("请求失败，请重试！");
	} else {
		alert("服务器内部错误！");
	}
};

//取消签到
User.checkout = function(id){
	$.post(
		"admin/checkinAction!checkout", 
		{ userId: id},
		function(data){
			if(data.status == 200){
				alert("取消成功");
				$('#user_conditionForm').submit();
			}  else if(data.status == 412){
				alert("请求失败，请重试！");
			} else {
				alert("服务器内部错误！");
			}
	});
};

//导出
User.exportExcel = function(){
	var vform = $('#user_conditionForm').clone();
	$("body").append(vform);
	vform.hide();
	vform.attr("action","admin/userAction!exportExcel");
	vform.attr("id","vform");
	$("#vform input").each(function(i){
		$(this).val($("#user_conditionForm input").eq(i).val());
	});
	$("#vform select").each(function(i){
		$(this).val($("#user_conditionForm select").eq(i).val());
	});
	vform.submit();
	vform.remove();
};

//通过编码和日期查找用户
User.findUsersByCodeOrDate = function (){
	$('#user_conditionForm input[name="page"]').val(1);
	$('#user_conditionForm').attr("action","admin/userAction!orderByCodeOrDate");
	$('#user_conditionForm').submit();
}
//打开用户信息框
User.add = function(){
	$('#user_add_dialog #utype option[value=0]').attr('selected','selected');
	$("#user_add_dialog").dialog("open");
};
//添加用户回调函数
User.addCallback = function(msg,status){
//	$.unblockUI(); //取消进度条显示
	if(msg.status == 200){
		alert("添加成功！");
		$("#user_add_dialog").dialog("close");
		User.find();
	} else if(msg.status == 501){
		alert("该用户已经存在");
	} else {
		alert("添加失败！");
	}
};

//删除
User.delUser = function(){
	if($("input[name='ucheckbox']:checked").length === 0){
		alert("请先选择要删除的记录！");
	}else{
		if(window.confirm('你确定要删除该记录！')){
			var ids = new Array();
			$("input[name='ucheckbox']:checked").each(function(){
				ids.push($(this).val());
			});
			var delIds = {delIds:ids};
			$.ajax({
				url:"admin/userAction!delete",
				dataType:"json",
				data:$.param(delIds, true),
				success:function(data){
					if(data.status == 200){
						alert("删除成功！");
						$('#user_conditionForm').submit();
					} else {
						alert("删除失败，请重试！");
					}
				}
			});
		}else{
			return;
		}
	}
};

//用户更新
User.config ={
	updateFlag : false,
	updateTr : null
};
User.updateUser = function(code,obj){
	User.config.updateFlag = true;
	User.config.updateTr = $(obj).parent().parent();
	$.post(
		"admin/userAction!findUserByCode",
		{"code":code},
		function(data){
			if(data.status == 200){
				var u = data.user;
			    if(u!=null && u!=''){
			    	$('#utype option[value='+u.type+']').attr('selected','selected');
			    	$("#uid").val(u.id);
			    	$("#ucode").val(u.code);
					$("#uname").val(u.name);
					$("#uphone").val(u.phone);
					$("#ucompany").val(u.company);
					$("#uemail").val(u.email);
//					$("#utitle").val(u.seatNumber);
//					$("#ucompanyAdd").val(u.companyAdd);
//					$("#udaren").val(u.daren);
					$("#info").val(u.note);
					$("#user_add_dialog").dialog("open");
				}
			    else{
			    	alert("不存在此用户或此用户已被删除！");
			    }
			}
		},
		'json'
	);
};
//临时添加用户
User.addTemporaryUser = function(){
	$("#user_infoForm").submit();
};

//查询
User.find = function(){
	$('#user_conditionForm input[name="page"]').val(1);
	Loader.showLoader();
	$('#user_conditionForm').submit();
};

User.toPrint = function(code){
	window.location.href = 'print.jsp?c='+code;
}

//改变页码
User.changePage = function(page){
	$('#user_conditionForm input[name="page"]').val(page);
	$('#user_conditionForm').submit();
	Loader.showLoader();
};
//首页
User.first = function(){
	User.changePage(1);
};
//尾页
User.end = function(){
	User.changePage(parseInt($('#totalPage').html()));
};
//上一页
User.back = function(){
	User.changePage(parseInt($('#page').val()) - 1);
};
//下一页
User.next = function(){
	User.changePage(parseInt($('#page').val()) + 1);
};
//跳转到某页
User.gotoPage = function(){
	User.changePage(parseInt($('#anyPage').val()));
};
//初始化按钮
User.initPageButton = function(){
	if(parseInt($("#currentPage").html()) > 1){
		$("#user_first").show();
		$("#user_back").show();
	} else {
		$("#user_first").hide();
		$("#user_back").hide();
	}
	if(parseInt($("#currentPage").html()) < parseInt($("#totalPage").html())){
		$("#user_next").show();
		$("#user_last").show();
	} else {
		$("#user_next").hide();
		$("#user_last").hide();
	}
};