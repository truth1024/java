$(document).ready(function(){
	$(this).keydown(function(e){
    	if(e.keyCode==13){
    	  	User.find();
    	}
    });
	//动态加载类型下拉列表
	Main.addTypeSelect();
	
	//动态添加表头
	Main.addHeadLine($('#user_infoTable thead tr td div span'));
	Main.addHeadLine($('#user_conditionForm table tr:eq(0) td table tr td label'),undefined,"：");
	Main.headLineArr.shift();
	Main.addHeadLine($('#user_infoForm ul li span'),undefined,"：");
	
	//动态加载签到条件下拉列表
	Main.addCheckinSelect($('#user_conditionForm select[name="checkinStatus"]'));
	//初始化加载用户信息功能
	$('#user_conditionForm').submit(function(){
		var options = {
			type:'POST',
			dataType:'json',
			success: User.callBack
		}; 
		$('#user_conditionForm').ajaxSubmit(options);
		return false;  
	}); 
	//初始化用户添加功能
	$('#user_infoForm').submit(function(){
		var options = {
			type:'POST',
			dataType:'json',
			success: User.addCallback
		}; 
		$('#user_infoForm').ajaxSubmit(options);
		return false;
	});
	//初始化修改用户信息功能
	$("#user_add_dialog").dialog({
		width:450,
		autoOpen: false,
		modal:true,
		resizable: true,
		close: function(event, ui) {
			$('#user_infoForm')[0].reset();
			$("#uid").val("");
	    	$("#ucode").val("");
			$("#uname").val("");
			$("#uphone").val("");
			$("#utitle").val("");
			$("#uemail").val("");
			$("#ucompany").val("");
			$("#ucompanyAdd").val("");
			$("#info").val("");
		},
		buttons: {
			"保存": function(){
				if(User.config.updateFlag && User.config.updateTr!=null)//修改
				{
					if(!Utils.check_telephone(document.getElementById("uphone")))
					{
//     					$.unblockUI(); //取消进度条显示
						return;
					}
					if(!Utils.check_email(document.getElementById("uemail"))){
						return;
					}
					//显示进度条
//		    		$.blockUI({ 
//		    			message:  '<img src="../images/loading.gif" align="absmiddle" style="margin-right:20px">'+"正在保存数据，请稍候...",
//		    			css: { width: '275px' } 
//		    		});
					Loader.showLoader();
					$.ajax({
						url:"admin/userAction!updateUser",
						data:$('#user_infoForm').serialize(),
						type:"POST",
//						cache : false,
						success:function(data){
//							$.unblockUI(); //取消进度条显示
							if(data.status == 301){
								alert("用户已存在");
							}else{
								var u = data.user;
								if(u != null && u != ''){
									User.infoIterator(u);
								}
								User.config.updateFlag = false;
								User.config.updateTr = null;
								$("#user_add_dialog").dialog("close");
								alert("修改成功！");
							}
							Loader.killLoader();
						}
					});
				}else{//新增
					$('#user_infoForm').submit();
				}
			},
			"取消": function() {
				$("#user_add_dialog").dialog("close");
			}
		}
	});
	//初始化按照编码排序
	$("#orderByCode").toggle(
		function(){
			User.orderByCode(1,"up.ico");
		},
		function(){
			User.orderByCode(2,"down.ico");			
		}
	);
	//初始化分页按钮
	User.initPageButton();
});