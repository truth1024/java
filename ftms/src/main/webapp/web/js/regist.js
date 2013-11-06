$(function(){
	//初始化
	$.post(
		'/web/user_gainUserType',
		{'page':'regist'},
		function(data){
			console.log(data);
			var type = data.userType.type;
			if(data.userType.users.length == 0){
				$('#tags li').eq(type-1).show();
				$('#tagContent1').append($(template.render('regist_basic',data)))
				.append($(template.render('regist_hotel',data)))
				.append($(template.render('regist_traffic',data)))
				.append($(template.render('regist_other',data)));
				$('select').bind('change',function(){
					var id = $(this).attr('id');
					var prefix = $(this).attr('index');
					var value = $(this).val();
					if(value == 20){
						$('input[name="'+id+'"]').show();
						$('input[name="'+prefix+id+'"]').val(0);
						inputValue(prefix,id);
					}else{
						$('input[name="'+id+'"]').hide();
						$('input[name="'+prefix+id+'"]').val(value);
					}
					
					//交通工具选择
					if(id == 'departureTrafficTool'){
						if(value == 1){
							$('.depar').show();
							$('.depar input').addClass('required');
						}else{
							$('.depar').hide();
							$('.depar input').removeClass('required').val('');
						}
					}
					if(id == 'backTrafficTool'){
						if(value == 1){
							$('.back').show();
							$('.back input').addClass('required');
						}else{
							$('.back').hide();
							$('.back input').removeClass('required').val('');
						}
					}
					
					//旅游线路
					if(id == 'touristRoute'){
						if(value == 2){
							$('.touristRouteB').show();
							$('#regist_other .showMessage:eq(1) input').addClass('required');
						}else{
							$('.touristRouteB').hide();
							$('#regist_other .showMessage:eq(0)').hide();
							$('#regist_other .showMessage:eq(0) input').removeClass('required');
							$('#regist_other .showMessage:eq(1) input').removeClass('required');
							
							$('input[name="pass"]').get(0).checked = false;
							$('#hasPass option[value="0"]').attr('selected','selected');
						}
						if(value == 3){
							$('#regist_other .showMessage:eq(2)').show();
							$('#regist_other .showMessage:eq(2) input').addClass('required');
						}else{
							$('#regist_other .showMessage:eq(2)').hide();
							$('#regist_other .showMessage:eq(2) input').removeClass('required');
						}
					}
					
					//通行证选择
					if(id == 'hasPass'){
						if(value == 1 && $('input[name="pass"]').get(0).checked){
							$('#regist_other .showMessage:eq(0)').show();
							$('#regist_other .showMessage:eq(0) input[name!="file"]').addClass('required');
						}else{
							$('#regist_other .showMessage:eq(0)').hide();
							$('#regist_other .showMessage:eq(0) input').removeClass('required');
						}
					}
					
				});
				//日期时间初始化
				dateInit();
			}else{
				$('#tagContent1').append('已注册');
			}
		}
	);
	
	//基本信息保存功能
	$('body').delegate('#regist_basic .save','click',function(){
		if(verify('#regist_basic')){
			$.post(
				'/web/user_saveUser',
				$('#regist_basic').serialize(),
				function(data){
					console.log(data);
					if(data.status == 1){
						alert('保存成功');
						$('#regist_basic').remove();
						$('[name$=".uid"]').val(data.uid);
						location.href = '#top';
					}
				}
			);
		}else{
			alert('请填写完整');
		}
	});
	
	//酒店信息保存功能
	$('body').delegate('#regist_hotel .save','click',function(){
		if($('input[name="hotel.uid"]').val() == '' || $('input[name="hotel.uid"]').val() == 0){
			alert('请先填写用户信息并保存');
			return false;
		}
		if(verify('#regist_hotel')){
			$.post(
				'/web/hotel_saveHotel',
				$('#regist_hotel').serialize(),
				function(data){
					if(data.status == 1){
						alert('保存成功');
						$('#regist_hotel').remove();
						location.href = '#top';
					}
				}
			);
		}else{
			alert('请填写完整');
		}
	});
	
	//酒店信息保存功能
	$('body').delegate('#regist_traffic .save','click',function(){
		if($('input[name="traffic.uid"]').val() == '' || $('input[name="traffic.uid"]').val() == 0){
			alert('请先填写用户信息并保存');
			return false;
		}
		console.log(verify('#regist_traffic'));
		if(verify('#regist_traffic')){
			$.post(
				'/web/traffic_saveTraffic',
				$('#regist_traffic').serialize(),
				function(data){
					if(data.status == 1){
						alert('保存成功');
						$('#regist_traffic').remove();
						location.href = '#top';
					}
				}
			);
		}else{
			alert('请填写完整');
		}
	});
	
	//其他信息保存功能
	$('body').delegate('#regist_other .save','click',function(){
		if($('input[name="other.uid"]').val() == '' || $('input[name="other.uid"]').val() == 0){
			alert('请先填写用户信息并保存');
			return false;
		}
		console.log(verify('#regist_other'));
		if(verify('#regist_other')){
			$.post(
				'/web/other_saveOther',
				$('#regist_other').serialize(),
				function(data){
					if(data.status == 1){
						alert('保存成功');
						$('#regist_other').remove();
						location.href = '#top';
					}
				}
			);
		}else{
			alert('请填写完整');
		}
	});
	
	//是否指定同住
	$('body').delegate('input[name="hotel.isWith"]','click',function(){
		if($('input[name="hotel.isWith"]:checked').val() == 1){
			$('#regist_hotel .hide').addClass('required').show();
			
		}else{
			$('#regist_hotel .hide').removeClass('required').hide();
		}
	});
	
	//是否有签证复选框
	$('body').delegate('input[name="pass"]','click',function(){
		if($(this).get(0).checked){
			$('input[name="other.hasPass"]').addClass('required');
		}else{
			$('input[name="other.hasPass"]').removeClass('required');
			$('input[name="other.hasPass"]').val(0);
			$('#hasPass option[value="0"]').Attr('selected','selected');
		}
		if($('#hasPass').val() == 1 && $('input[name="pass"]').get(0).checked){
			$('#regist_other .showMessage:eq(0)').show();
			$('#regist_other .showMessage:eq(0) input[name!="file"]').addClass('required');
		}else{
			$('#regist_other .showMessage:eq(0)').hide();
			$('#regist_other .showMessage:eq(0) input').removeClass('required');
		}
	});
	
});
//放入隐藏域
function inputValue(prefix,id){
	$('input[name="'+id+'"]').blur(function(){
		$('input[name="'+prefix+id+'"]').val($(this).val());
	});
};

//校验是否为空
function verify(str){
	var flag = true;
	$(str+' .required').each(function(){
		console.log($(this).attr('name'),$(this).val());
		if($(this).val() == '' || $(this).val() == 0){
			flag = false;
			return false;
		}
	});
	return flag;
};

//时期时间控件初始化
function dateInit(type){
	//生日日期
	$('[name="user.birthDate"]').datepicker({
		changeYear:true,
		changeMonth:true,
		yearRange: "1900:2014"
	});
	
	
	//其他信息日期初始化
	$('input[name="other.effectiveDate"]').datepicker({
		changeYear:true,
		changeMonth:true
	});
	
	
	//酒店信息和交通信息部分日期初始化
	var startDate = {
			minDate:'2014-01-15',
			maxDate:'2014-01-16'
		};
	
	var endDate = {
			minDate:'2014-01-17',
			maxDate:'2014-01-18'
		};
	if(type == 1){
		$('[name="hotel.inDate"]').datepicker({
			onSelect:function(dateText,inst){  
			       $('[name="hotel.outDate"]').datepicker("option","minDate",dateText);  
			    }
		});
		$('[name="hotel.outDate"]').datepicker({
			onSelect:function(dateText,inst){
		        $('[name="hotel.inDate"]').datepicker("option","maxDate",dateText);  
		    }
		});
		$('[name="arrivalDate"]').datepicker({
			onSelect:function(dateText,inst){  
			       $('[name="backDate"]').datepicker("option","minDate",dateText);  
			    }
		});
		$('[name="arrivalTime"]').timepicker();
		$('[name="backDate"]').datepicker({
			onSelect:function(dateText,inst){
		        $('[name="arrivalDate"]').datepicker("option","maxDate",dateText);  
		    }
		});
		$('[name="backTime"]').timepicker();
		
	}else{
		$('[name="hotel.inDate"]').datepicker(startDate);
		$('[name="hotel.outDate"]').datepicker(endDate);
		$('[name="arrivalDate"]').datepicker(startDate);
		$('[name="arrivalTime"]').timepicker();
		$('[name="backDate"]').datepicker(endDate);
		$('[name="backTime"]').timepicker();
	}
};


function ajaxFileUpload(obj) {
	if(validateImage(obj)){
//		$("#loading") 
//		.ajaxStart(function(){ 
//			$(this).show(); 
//		})//开始上传文件时显示一个图片 
//		.ajaxComplete(function(){ 
//			$(this).hide(); 
//		});//文件上传完成将图片隐藏起来
		$.ajaxFileUpload({
			url:'/web/image_upload',//用于文件上传的服务器端请求地址 
			secureuri:false,//一般设置为false 
			fileElementId:obj.id,//文件上传空间的id属性 <input type="file" id="file" name="file" /> 
			dataType: 'json',//返回值类型 一般设置为json 
			success: function (data, status) //服务器成功响应处理函数 
			{
				alert(data.message);//从服务器返回的json中取出message中的数据,其中message为在struts2中action中定义的成员变量 
				if(typeof(data.error) != 'undefined'){
					if(data.error != ''){
						alert(data.error);
					}else{
						alert(data.message);
					}
				}
			},
			error: function (data, status, e)//服务器响应失败处理函数
			{
				alert(e);
			}
		});
	}
	
	return false;
};
function validateImage(obj) {
    var file = obj;
    var tmpFileValue = file.value;
    
    //校验图片格式
    if(/^.*?\.(gif|png|jpg|jpeg|bmp)$/.test(tmpFileValue.toLowerCase())){
	    if(/.*\-[(首页扫描件)|(签证页扫描件)]/.test(tmpFileValue.toLowerCase())){
	    	return true;
	    }else{
	    	alert('图片命名格式不正确');
	    	return false;
	    }
    } else {
        alert("只能上传jpg、jpeg、png、bmp或gif格式的图片！");
        return false;
    }
    
    
    //校验图片大小,这段代码需调整浏览器安全级别(调到底级)和添加可信站点(将服务器站点添加到可信站点中)
    //var imgSize = 1024 * 100; //最大100K
    //var img = new Image();
    if(file.value != ""){
        
    //    img.onreadystatechange = function(){
    //        if(img.readyState == "complete"){
    //            if(img.fileSize <=0 || img.fileSize > imgSize){
    //                alert("当前文件大小" + img.fileSize / 1024 + "KB, 超出最大限制 " + imgSize / 1024 + "KB");
    //                return false;
    //            }else{
    //                alert("OK");
    //                return true;
    //            }
    //        }
    //    }
        
    //    img.src = file.value;
        //return true;
    }else{
        alert("请选择上传的文件!");
        return false;
    }
};