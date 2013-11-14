$(function(){
	
	$('body').delegate('.input-eat','focus',function(){
		inputValue($(this).prev().attr('index'),$(this).prev().attr('id'));
	});
	
	$('body').delegate('#map','click',function(){
		easyDialog.open({
			  container : 'imgBox'
			});
	});
	
	$('body').delegate('.visa','click',function(){
		easyDialog.open({
			  container : 'imgBox2'
			});
	});
	
	$('#imgBox,#imgBox2').click(function(){
		easyDialog.close();
	});
	
	$('body').delegate('#passCardTip','click',function(){
		var passContent = template.render('pass',null);
		easyDialog.open({
			container:{
				header:tipArr[lang].passHeader,
				content:passContent
			}
		});
	});
	
	$('body').delegate('select','change',function(){
		var id = $(this).attr('id');
		var prefix = $(this).attr('index');
		var value = $(this).val();
		if(value == 20){
			$('input[name="'+id+'"]').show();
			$('input[name="'+prefix+id+'"]').val(($('input[name="'+id+'"]').val() == '' ? 0 : $('input[name="'+id+'"]').val()));
//			inputValue(prefix,id);
		}else{
			$('input[name="'+id+'"]').hide();
			$('input[name="'+prefix+id+'"]').val(value);
		}
		
		//是否指定同住人
		if(id == 'room'){
			if(value == 2){
				$(this).parent().next().show();
			}else{
				$(this).parent().nextAll().hide();
				$(this).parent().next().children('.left').children('input[value=2]').get(0).checked = true;
				$(this).parent().nextAll().children('input').removeClass('required');
			}
		}
		
		//交通工具选择
		if(id == 'departureTrafficTool'){
			if(value == 1){
				$('.depar').show();
				$('.depar input[type!=radio]').addClass('required');
			}else{
				$('.depar').hide();
				$('.depar input[type!=radio]').removeClass('required').val('');
			}
		}
		if(id == 'backTrafficTool'){
			if(value == 1){
				$('.back').show();
				$('.back input[type!=radio]').addClass('required');
			}else{
				$('.back').hide();
				$('.back input[type!=radio]').removeClass('required').val('');
			}
		}
		
		//旅游线路
		if(id == 'touristRoute'){
			if(value == 1 || value == 2){
				$('.touristRouteB').show();
			}else{
				$('.touristRouteB').hide();
				$('.passHide').hide();
				$('#regist_other .showMessage:eq(0)').hide();
				$('#regist_other .showMessage:eq(0) input').removeClass('required');
				$('input[name="pass"][value="3"]').get(0).checked = true;
				$('input[name="other.hasPass"]').val(3);
				$('#hasPass option[value="0"]').attr('selected','selected');
			}
			if(value == 4){
				$('#regist_other .showMessage:eq(2)').show();
				$('#regist_other .showMessage:eq(2) input').addClass('required');
			}else{
				$('#regist_other .showMessage:eq(2)').hide();
				$('#regist_other .showMessage:eq(2) input').removeClass('required');
			}
			if(value == 4 || value == 0){
				$('#regist_other .showMessage:eq(1)').hide();
				$('#regist_other .showMessage:eq(1) input').removeClass('required');				
			}else{				
				$('#regist_other .showMessage:eq(1)').show();
				$('#regist_other .showMessage:eq(1) input').addClass('required');
			}
		}
		
		//通行证选择
		if(id == 'hasPass'){
			if(value == 1 && $('input[name="pass"]').val() == 1){
				$('#regist_other .showMessage:eq(0)').show();
				$('#regist_other .showMessage:eq(0) input[name!="file"]').addClass('required');
			}else{
				$('#regist_other .showMessage:eq(0)').hide();
				$('#regist_other .showMessage:eq(0) input').removeClass('required');
			}
		}
	});
	
	//基本信息保存功能
	$('body').delegate('#regist_basic .save','click',function(){
		var method = $(this).attr('index');
		var name = $(this).attr('name');
		if(verify('#regist_basic')){
			$.post(
				'/web/user_saveUser',
				$('#regist_basic').serialize()+'&method='+method+'&lang='+lang,
				function(data){
					// console.log(data);
					if(data.status == 1){
						alert(tipArr[lang].saveSuccess);
						if(method == 'submit' && name == null){
							$('#regist_basic').remove();
							$('[name$=".uid"]').val(data.uid);
							location.href = '#top';
						}else{
							getMessage(name);
						}
					}
				}
			);
		}else{
			alert(tipArr[lang].infoLack);
		}
	});
	
	//酒店信息保存功能
	$('body').delegate('#regist_hotel .save','click',function(){
		if($('input[name="hotel.uid"]').val() == '' || $('input[name="hotel.uid"]').val() == 0){
			alert(tipArr[lang].userLack);
			return false;
		}
		var method = $(this).attr('index');
		var name = $(this).attr('name');
		if(verify('#regist_hotel')){
			$.post(
				'/web/hotel_saveHotel',
				$('#regist_hotel').serialize()+'&method='+method+'&lang='+lang,
				function(data){
					if(data.status == 1){
						alert(tipArr[lang].saveSuccess);
						if(method == 'submit' && name == null){
							$('#regist_hotel').remove();
							location.href = '#top';
						}else{
							getMessage(name);
						}
					}
				}
			);
		}else{
			alert(tipArr[lang].infoLack);
		}
	});
	
	//交通信息保存功能
	$('body').delegate('#regist_traffic .save','click',function(){
		if($('input[name="traffic.uid"]').val() == '' || $('input[name="traffic.uid"]').val() == 0){
			alert(tipArr[lang].userLack);
			return false;
		}
		var method = $(this).attr('index');
		var name = $(this).attr('name');
		// console.log(verify('#regist_traffic'));
		if(verify('#regist_traffic')){
			$.post(
				'/web/traffic_saveTraffic',
				$('#regist_traffic').serialize()+'&method='+method+'&lang='+lang,
				function(data){
					if(data.status == 1){
						alert(tipArr[lang].saveSuccess);
						if(method == 'submit' && name == null){
							$('#regist_traffic').remove();
							location.href = '#top';
						}else{
							getMessage(name);
						}
					}
				}
			);
		}else{
			alert(tipArr[lang].infoLack);
		}
	});
	
	//其他信息保存功能
	$('body').delegate('#regist_other .save','click',function(){
		if($('input[name="other.uid"]').val() == '' || $('input[name="other.uid"]').val() == 0){
			alert(tipArr[lang].userLack);
			return false;
		}
		var method = $(this).attr('index');
		var name = $(this).attr('name');
		// console.log(verify('#regist_other'));
		if(verify('#regist_other')){
			$.post(
				'/web/other_saveOther',
				$('#regist_other').serialize()+'&method='+method+'&lang='+lang,
				function(data){
					if(data.status == 1){
						alert(tipArr[lang].saveSuccess);
						if(method == 'submit' && name == null){
							$('#regist_other').remove();
							location.href = '#top';
						}else{
							getMessage(name);
						}
					}
				}
			);
		}else{
			alert(tipArr[lang].infoLack);
		}
	});
	
	//是否指定同住
	$('body').delegate('input[name="hotel.isWith"]','click',function(){
		if($('input[name="hotel.isWith"]:checked').val() == 1){
			$('#regist_hotel .hide').show();
			$('#regist_hotel .hide input').addClass('required');
		}else{
			$('#regist_hotel .hide').hide();
			$('#regist_hotel .hide input').removeClass('required');
		}
	});
	
	//是否有签证复选框
	$('body').delegate('input[name="pass"]','click',function(){
		//单选按钮值
		var value = $(this).val();
		//选择“是”
		if(value == 1){
			$('.passHide').show();
			$('input[name="other.hasPass"]').val(0);
		}else{
			$('.passHide').hide();
			$('input[name="other.hasPass"]').val(value);
			$('#hasPass option[value="0"]').get(0).selected = true;
		}
		if($('#hasPass').val() == 1 && value == 1){
			$('#regist_other .showMessage:eq(0)').show();
			$('#regist_other .showMessage:eq(0) input[name!="file"]').addClass('required');
		}else{
			$('#regist_other .showMessage:eq(0)').hide();
			$('#regist_other .showMessage:eq(0) input').removeClass('required');
		}
	});
	
	//是否入住FTMS指定酒店
	$('body').delegate('input[name="hotel.isStay"]','click',function(){
		if($(this).val() == 1){
			$('.stayHide:lt(3)').show();
			$('.isStay:lt(3)').addClass('required');
		}else{
			$('.stayHide').hide();
			$('.stayHide select option[value="0"]').get(0).selected = true;
			$('.stayHide input[type="radio"][value="2"]').get(0).checked = true;
			$('.stayHide input[type="text"]').val('');
			$('.isStay').removeClass('required');
		}
	});
	
});

//放入隐藏域
function inputValue(prefix,id){
	$('input[name="'+id+'"]').blur(function(){
//		console.log($(this).val());
		$('input[name="'+prefix+id+'"]').val($(this).val());
	});
};

//校验是否为空
function verify(str){
	var flag = true;
	$(str+' .required').each(function(){
//		 console.log($(this).attr('name'),$(this).val());
		if($(this).val() == '' || $(this).val() == 0){
			flag = false;
			return false;
		}
	});
	return flag;
};

//时期时间控件初始化
function dateInit(type){
	$.datepicker.setDefaults({
		dateFormat: 'yy-mm-dd'
	});
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
			    },
			minDate:'2014-01-01',
			maxDate:'2014-01-31'
		});
		$('[name="hotel.outDate"]').datepicker({
			onSelect:function(dateText,inst){
		        $('[name="hotel.inDate"]').datepicker("option","maxDate",dateText);
		    },
			minDate:'2014-01-01',
			maxDate:'2014-01-31'
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


//异步上传图片
function ajaxFileUpload(obj) {
	if(validateImage(obj)){
		$.ajaxFileUpload({
			url:'/web/image_upload',//用于文件上传的服务器端请求地址 
			secureuri:false,//一般设置为false 
			fileElementId:obj.id,//文件上传空间的id属性 <input type="file" id="file" name="file" /> 
			dataType: 'json',//返回值类型 一般设置为json 
			success: function (data, status) //服务器成功响应处理函数 
			{
				if(data.message == '1'){
					alert(tipArr[lang].uploadSuccess);//从服务器返回的json中取出message中的数据,其中message为在struts2中action中定义的成员变量 					
				}else{
					alert(tipArr[lang].failure);
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

//校验上传图片
function validateImage(obj) {
    var file = obj;
    var tmpFileValue = file.value;
    
    //校验图片格式
    if(/^.*?\.(gif|png|jpg|jpeg|bmp)$/.test(tmpFileValue.toLowerCase())){
    	var flag = (lang == 'cn' ? /.*\-[(首页扫描件)|(签证页扫描件)]/.test(tmpFileValue.toLowerCase()) : /.*\-(first page scanning copy)/.test(tmpFileValue.toLowerCase()));
	    if(flag){
	    	return true;
	    }else{
	    	alert(tipArr[lang].upload);
	    	return false;
	    }
    } else {
        alert(tipArr[lang].imageSuffix);
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
//        alert("请选择上传的文件!");
        return false;
    }
};

//个人和酒店
function compare1(){
	return compDate("2013/11/28");
};
//交通和游览
function compare2(){
	return compDate("2013/12/10");
}
//日期比较
function compDate(b){
	var dateA = new Date();
	var dateB = new Date(b);
	if(isNaN(dateA) || isNaN(dateB)){
		return null;
	}
	if(dateA >= dateB){
		return false;
	}else{
		return true;
	}
};