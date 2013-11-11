$(function(){
	
	//加载会议信息
	$.post(
		'admin/checkinAction!gainConferences',
		function(data){
			var c = data.conferences;
			var date = new Date();
			var d = date.format('MM月dd日');
			if(c !== undefined){
				for(var i = 0;i< c.length;i++){
					var conferenceDate = c[i].conferenceDate.replace(/\d{4}-(\d{2})-(\d{2})T00:00:00/g,'$1月$2日');
					if(d === conferenceDate){
						var conferenceTr = document.createElement('tr');
						var conferenceTd = document.createElement('td');
						var radioBox = document.createElement('input');
						$(radioBox).attr({'type':'radio','name':'radio','value':c[i].id});
						$(conferenceTd).append($(radioBox));
						$(conferenceTr).append($(conferenceTd));
						$(conferenceTr).append('<td>'+(c[i].floor == null || c[i].floor === "" ? '':c[i].floor+' ')+c[i].conferenceRoom+'</td><td>'+c[i].conferenceContent+'</td><td>'+conferenceDate+'</td>');
						$('#conference_box table').append($(conferenceTr));
					}
				}
			}
			if($('#conference_box table tr').length === 1){
				$('#conference_box').css('display','none');
			}
		}
	);
	
	
	//监测输入框中的内容变化
    if($.browser.msie){// IE浏览器
        $("#qrinput").get(0).onpropertychange = Checkin.handle;
    }else{             // 其他浏览器
        $("#qrinput").get(0).addEventListener("input",Checkin.handle,false);
    }
    
    $("#qrinput").focus().blur(function(){//保持输入框对焦
    	setTimeout(function(){
    		$("#qrinput").focus();
    	},200);
    }).keydown(function(e){//监控键盘回车键
    	if(e.keyCode==13){
    	  	Checkin.find();
    	}
    }).keyup(function(){
    	$("#qrinput").css("color","#000");
    });
	
    $('#checkin_addForm').submit(function(){
		var options = {
			type:'POST',
			dataType:'json',
			success: Checkin.addCallback
		}; 
		$('#checkin_addForm').ajaxSubmit(options); 
		return false;
	}); 
    
    //初始化添加用户框
    $("#checkin_add_dialog").dialog({
		width:450,
		autoOpen: false,
		modal:true,
		resizable: true, 
		open: function() {
			$(".ui-dialog-buttonpane button").eq(0).focus();
		},
		close: function(event, ui) {
			$('#checkin_addForm')[0].reset();
			$("#qrinput").css("color","#000").val("").focus();
			Checkin.remove();
		},
		buttons: {
			"签到": function() {
				var phone = $("#checkin_addForm input[name='user.phone']").get(0);
				var $aName = $("#checkin_addForm input[name='user.name']");
				if($aName.val() == ""){
					alert("请输入姓名");
					$aName.focus();
					return false;
				}else if(Utils.check_telephone(phone) == true){
  					$("input[name='checkinWay']").val(1);
  					$('#checkin_addForm').submit();
				}
			},
			"取消": function() {
				$("#checkin_add_dialog").dialog("close");
			}
		}
	});
    
    //初始化用户信息框
	$("#checkin_info_dialog").dialog({
		width:565,
		autoOpen: false,
		modal:true,
		resizable: false,
		position: 'center',
		open: function() {
			$(".ui-dialog-buttonpane button").eq(2).focus();
		}, 
		close: function(event, ui) {
			$("#qrinput").css("color","#000").val("").focus();
			Checkin.remove();
		},
		buttons: {
			"签到": function() {
				var code = $("#checkin_infoForm input[name='user.code']").val();
				$.post("admin/checkinAction!checkin", 
					{ "code":code,"checkinWay":$("input[name='checkinWay']").val()},
					function(data) {
						if(data.status == 200){
							alert("签到成功");
						} else if(data.status == 400) {
							alert("签到失败，没有找到用户！");
						} else if(data.status == 510){
							alert("该用户已经签到！");
						}  else if(data.status == 412){
							alert("请求失败，请重试！");
						} else {
							alert("服务器内部错误！");
						}
						$('#checkin_info_dialog').dialog('close');
					});
					
			},
			"取消": function() {
				$(this).dialog("close");
			}
		}
	});
	
    //用户票类信息框
    $("#checkin_ticket_dialog").dialog({
    	width:600,
    	autoOpen: false,
    	modal:true,
    	resizable: true,
    	close: function(event, ui){
    		$("#ticketForm ul li").remove();
    		$("#qrinput").css("color","#000").val("").focus();
    	},
    	open : function(){
    		$(".ui-widget-content a").css("color","blue").blur();
    	}
    });

	
	//动态加载用户信息框中的文字
	Main.addHeadLine($('#checkin_infoForm ul li span'),undefined,'：');
	Main.addHeadLine($('#checkin_addForm ul li span'),undefined,'：');
});