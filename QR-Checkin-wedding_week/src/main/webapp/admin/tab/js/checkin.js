Checkin = {
	checkinable : false //能否签到
};
var i = 1;
//二维码扫描处理
Checkin.handle = function(){
	if($("#qrinput").val().indexOf(";") > 0){
		$("#qrinput").css("color","#fff");
		if(i == 1){
			i++;
			var info = new Array();
  			info = $("#qrinput").val().split(";");
  			var code = info[0].split(":")[1];
  			if(code != undefined){
       			//清空信息
       			$("#checkin_infoForm")[0].reset();
       			$("#checkin_addForm")[0].reset();
  				$.post(
  					"admin/userAction!findUserByCode",
						{'code': code},
						function(data){
//							if(data.user.name == null || data.user.name == ""){
//	        				$("#aCode").val(code);
//	        				$("#imageName").val(code+".png");
//	        				$("#qrinput").val("");
//	        				$('#checkin_add_dialog').dialog('option','buttons',
//	        					{
//        						"签到": function() {
//        							var phone = $("#checkin_addForm input[name='user.phone']").get(0);
//        							var email = $("#checkin_addForm input[name='user.email']").get(0);
//        							var $aName = $("#checkin_addForm input[name='user.name']");
//        							if($aName.val() == ""){
//        								alert("请输入姓名");
//        								$aName.focus();
//        								return false;
//        							}else if(Utils.check_telephone(phone) === true && Utils.check_email(email) === true){
//        			  					$("input[name='checkinWay']").val(1);
//        			  					$('#checkin_addForm').submit();
//        							}
//        						},
//        						"取消": function() {
//        							$("#checkin_add_dialog").dialog("close");
//        						}
//        		    		 });
//	        				$("#checkin_add_dialog").dialog("open");
//        					$("#checkin_addForm input[name='user.name']").blur();
//							}else{
								Checkin.find(code);
//							}
							setTimeout(function(){
								
 							i = 1;
							},500);
						});
  			}else{
  				i = 1;
  			}
		}
	}
};

Checkin.addCallback = function(msg,status){
	if(msg.status == 200){
		alert("添加成功！");
	} else if(msg.status == 501){
		alert("该用户已经存在");
		$("#checkin_addForm input[name='user.phone']").val("").focus();
		return false;
	} else if(msg.status == 412){
		alert("添加成功，并签到");
	}else{
		alert("服务器内部错误！");
	}
	$("#checkin_add_dialog").dialog("close");
};

//多票时查询
Checkin.find_2 = function(code){
	$("#qrinput").css("color","#fff").val(code);
	Checkin.find(code);
}

//查询按钮操作
Checkin.find = function(QRcode) {
	if($("#qrinput").val() == ""){
		alert("请输入用户编码或手机号");
		$("#qrinput").focus();
	} else {
		if(QRcode == null || QRcode == ""){
			QRcode = $("#qrinput").val();// 手机号码或编号
		}
		
		$.post("admin/userAction!findUserByCode",
			{ code: QRcode},
			function(data){
				 var u = data.user;
				 var uL = data.userList;
				 var selectedType;
				 var ucon;
				 $('#conference_box input[type=radio]').each(function(){
					 if($(this).attr('checked') === 'checked'){
						 selectedType = $(this).val();
					 }
				 });
				 
				 var $iCode = $("#checkin_infoForm input[name='user.code']");
				 var $iName = $("#checkin_infoForm input[name='user.name']");
				 var $iType = $("#checkin_infoForm input[name='user.type']");
				 var $iPhone = $("#checkin_infoForm input[name='user.phone']");
				 var $iCompany = $("#checkin_infoForm input[name='user.company']");
				 var $iEmail = $("#checkin_infoForm input[name='user.email']");
				 var $iTitle = $("#checkin_infoForm input[name='user.title']");
				 var $iSeatNumber = $("#checkin_infoForm input[name='user.seatNumber']");
				 var $iCompanyAdd = $("#checkin_infoForm input[name='user.companyAdd']");
				 var $iDaren = $("#checkin_infoForm input[name='user.daren']");
				 var $iPrize = $("#checkin_infoForm input[name='user.prize']");
				 var $iPhotoName = $("#checkin_infoForm input[name='user.photoName']");
				 var $iNote = $("#checkin_infoForm textarea[name='user.note']");
				 if(data.status == 200){
					 //初始化是否可以签到标识，设置为false;
					 Checkin.checkinable = false;
					 if(u !== null || uL.length === 1){//查询只有以前记录
						 u = u || uL[0];
						 if(selectedType !== undefined && selectedType !== ""){
							 ucon = u.conferences;//用户可参加的会议
							 for(var i = 0;i<ucon.length;i++){//匹配与单选按钮选择的id,并设置为true
								 if(selectedType == ucon[i].id){
									 Checkin.checkinable = true;
									 break;
								 }
							 }
						 }else{
							 Checkin.checkinable = true;
						 }
						 //加载用户信息
						 $iCode.val(u.code);
						 $iName.val(u.name);
						 var userType = u.userType;
						 if(userType == null || userType == ""){//手机号不存在隐藏
							 $iType.parent().parent().hide();
						 }else{
							 $iType.parent().parent().show();
							 $iType.val(userType.typeName);
						 }
						 Checkin.hideOrShow($iPhone,u.phone);
						 Checkin.hideOrShow($iCompany,u.company);
						 Checkin.hideOrShow($iEmail,u.email);
						 Checkin.hideOrShow($iTitle,u.title);
						 Checkin.hideOrShow($iCompanyAdd,u.companyAdd);
						 Checkin.hideOrShow($iSeatNumber,u.seatNumber);
						 Checkin.hideOrShow($iDaren,u.daren);
						 Checkin.hideOrShow($iPrize,u.prize);
						 Checkin.hideOrShow($iPhotoName,u.photoName);
						 Checkin.hideOrShow($iNote,u.note);
						 
						 //加载用户权限信息列表
						 var c = u.conferences;
						 if(c !== undefined){
							 headTr = '<tr>\
								 <td width="15%">会议编码</td>\
								 <td width="15%">会议地点</td>\
								 <td width="50%">会议内容</td>\
								 <td width="20%">会议时间</td>\
								 </tr>';
							 $('#user_permission table').append(headTr);
							 for(var i = 0;i< c.length;i++){
								 var conferenceDate = c[i].conferenceDate.replace(/\d{4}-(\d{2})-(\d{2})T00:00:00/g,'$1月$2日');
								 var conferenceTr = document.createElement('tr');
								 if(selectedType === undefined || selectedType === '' || selectedType == c[i].id ){
									 conferenceTr.style.color = 'red';
								 }
								 $(conferenceTr).append('<td>'+c[i].id+'</td><td>'+(c[i].floor == null || c[i].floor === "" ? '':c[i].floor+' ')+c[i].conferenceRoom+'</td><td>'+c[i].conferenceContent+'</td><td>'+conferenceDate+'</td>');
								 $('#user_permission table').append($(conferenceTr));
							 }
						 }
						 //如果没有任何会议权限则隐藏用户权限信息列表
						 if($('#user_permission table tr').length === 1){
							 $('#user_permission').css('display','none');
						 }
						 
						 //检查是否达到最大签到次数
						 var $checkinInfoDialog = $('#checkin_info_dialog');
						 var $checkinWay = $("input[name='checkinWay']");
						 if(u.checkinRecds.length < data.checkinMaxNum){//是否达到最大签到次数
							 $checkinInfoDialog.dialog('option','buttons',
									 {
								 "签到": function() {
									 if(Checkin.checkinable){
										 $.post("admin/checkinAction!checkin",
												 { "code":$iCode.val(),"checkinWay":$checkinWay.val()},
												 function(data) {
													 if(data.status == 200){
														 alert("签到成功");
														 $("#"+u.code).next().text("已签到");
													 } else if(data.status == 400) {
														 alert("签到失败，没有找到用户！");
													 } else if(data.status == 510){
														 alert("该用户已经签到！");
													 }  else if(data.status == 412){
														 alert("请求失败，请重试！");
													 } else {
														 alert("服务器内部错误！");
													 }
													 $checkinInfoDialog.dialog('close');
												 });
									 }else{
										 alert('您没有参加这场会的权限');
									 }
								 },
								 "取消": function() {
									 $(this).dialog("close");
								 }
									 });
							 if(QRcode == null && QRcode == ""){
								 $checkinWay.val(1);
							 }else{
								 $checkinWay.val(0);
							 }
						 }else{
							 $('#checkin_info_dialog').dialog('option','buttons',
								 {
									 '关闭': function() {
										 $(this).dialog("close");
									 }
								 });
						 }
						 $checkinInfoDialog.dialog('open');
					 }else if(uL !== null){
						 var ticketBox = "";
				     	 for(var i= 0;i<uL.length;i++){
				     		var userCode = uL[i].code;
				     		var ut = uL[i].userType;
				     	 	ticketBox += "<li><span style='width:200px;'>姓名："+uL[i].name+"</span>"+
				     	 				 "<span>胸卡类型：</span><a id=\""+userCode+"\" href='javascript:void(0);' onclick=\"Checkin.find_2('"+userCode+"')\" >"+(ut == null ? '无':ut.typeName)+"</a>"+
				     	 				 "<span>"+(uL[i].checkinRecds.length === 0 ? '未签到' : '已签到')+"</span>"+
							     	 	 "</li>";
				     	 }
				     	 $("#ticketForm ul").append(ticketBox);
				     	 
				     	 $("#checkin_ticket_dialog").dialog("open");
					 }
				 } else if(data.status == 404){
					 alert("没有找到该用户");
				 } else if(data.status == 412){
					 alert("请求失败，请重试！");
				 } else {
					 alert("服务器内部错误！");
				 }
		     $("#qrinput").val("");
		   });
	}
};

//隐藏或显示用户信息
Checkin.hideOrShow = function(jObj,value){
	if(value == null || value == ""){
		jObj.parent().parent().hide();
	 }else{
		 jObj.parent().parent().show();
		 jObj.val(value);
	 }
};
//清楚用户权限信息
Checkin.remove = function(){
	$('#user_permission table tr').remove();
};
