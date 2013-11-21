//解决IE6 png透明度问题
function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
    var arVersion = navigator.appVersion.split("MSIE")
    var version = parseFloat(arVersion[1])
    if ((version >= 5.5) && (document.body.filters))
    {
       for(var j=0; j<document.images.length; j++)
       {
          var img = document.images[j]
          var imgName = img.src.toUpperCase();
          if (img.src.indexOf('icon') > -1)
          {
             var imgID = (img.id) ? "id='" + img.id + "' " : ""
             var imgClass = (img.className) ? "class='" + img.className + "' " : ""
             var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
             var imgStyle = "display:inline-block;margin:8px 8px 8px 0;float:left;" + img.style.cssText
             if (img.align == "left") imgStyle = "float:left;" + imgStyle
             if (img.align == "right") imgStyle = "float:right;" + imgStyle
             if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
             var strNewHTML = "<span " + imgID + imgClass + imgTitle
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
             + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
             + "(src=\'" + img.src + "\', sizingMethod='image');\"></span>"
             img.outerHTML = strNewHTML
             j = j-1
          }
       }
    }    
};

$(function(){
	if(window.ActiveXObject){
		if($.browser.version == '6.0'){
			correctPNG();
		}
	}
	$('body').delegate('#arrivalHour,#arrivalMinute','change',function(){
		var ah = $('#arrivalHour').val();
		var am = $('#arrivalMinute').val();
		if(ah != '0' && am != '0'){
			$('input[name="arrivalTime"]').val(ah+':'+am);
		}else{
			$('input[name="arrivalTime"]').val(0);
		}
	});
	
	$('body').delegate('#backHour,#backMinute','change',function(){
		var bh = $('#backHour').val();
		var bm = $('#backMinute').val();
		if(bh != '0' && bm != '0'){
			$('input[name="backTime"]').val(bh+':'+bm);
		}else{
			$('input[name="backTime"]').val(0);
		}
	});
	
	//展开收起功能
	$('body').delegate('.reviwe','click',function(){
		var text = $(this).text();
		if(text == reviewArr[lang].review){
			$(this).parent().parent().next().show();
			$(this).text(reviewArr[lang].packup);
		}else{
			$(this).parent().parent().next().hide();
			$(this).text(reviewArr[lang].review);
		}
	});
	
	//删除功能
	$('body').delegate('.remove','click',function(){
		var index = $(this).attr('index').split('#');
		var name = $(this).attr('name');
		$('head').append($('<link id="easybug" href="/web/css/easybug.css" rel="stylesheet" type="text/css" />'));
		easyDialog.open({
			container :{
				header:tipArr[lang].deleteTip,
				content : tipArr[lang].deleteHeader,
				yesFn : function dtnFn(){
					deleteInfo(index,name);
					return true;
				},
			    noFn : true,
			    yesText : tipArr[lang].deleteConfirm,
			    noText : tipArr[lang].deleteCancel
			},
			callback:function removeEasyBug(){
				$('#easybug').remove();
			}
		});
	});
	
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
				$('.hasPassHide').hide();
				$('input[name="other.isVisa"][value="2"]').get(0).checked = true;
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
			if(value == 4 || value == 0 || value == 5){
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
				$('.hasPassHide').show();
			}else{
				$('.hasPassHide').hide();
				$('input[name="other.isVisa"][value="2"]').get(0).checked = true;
				$('#regist_other .showMessage:eq(0)').hide();
				$('#regist_other .showMessage:eq(0) input').removeClass('required');
			}
		}
	});
	
	//是否持有效签注
	$('body').delegate('input[name="other.isVisa"]','click',function(){
		if($(this).val() == 1){
			$('#regist_other .showMessage:eq(0)').show();
			$('#regist_other .showMessage:eq(0) input[name!="file"]').addClass('required');
		}else{
			$('#regist_other .showMessage:eq(0)').hide();
			$('#regist_other .showMessage:eq(0) input[name!="file"]').removeClass('required');
		}
	});
	
	//基本信息保存功能
	$('body').delegate('#user_hotel','click',function(){
		var method = $(this).attr('index');
		var name = $(this).attr('name');
		var basicFlag = verify('#regist_basic');
		var hotelFlag = verify('#regist_hotel'); 
		if(basicFlag && hotelFlag){
			$.post(
				'/web/user_saveUser',
				$('#regist_basic').serialize()+'&'+$('#regist_hotel').serialize()+'&method='+method+'&lang='+lang+'&page='+pageName,
				function(data){
					// console.log(data);
					if(data.status == 1){
						alert(tipArr[lang].saveSuccess);
						if(method == 'submit' && pageName == 'regist'){
							getMessage(0);
						}else{
							getMessage(name);
						}
					}
				}
			);
		}else{
			if(!basicFlag){
				alert(tipArr[lang].infoLack1+tipArr[lang].basicTitle+tipArr[lang].infoLack2);
				return false;
			}
			if(!hotelFlag){
				alert(tipArr[lang].infoLack1+tipArr[lang].hotelTitle+tipArr[lang].infoLack2);
				return false;
			}
		}
	});
	
	//交通信息保存功能
	$('body').delegate('#traffic_other','click',function(){
		if($('input[name="traffic.uid"]').val() == '' || $('input[name="traffic.uid"]').val() == 0){
			alert(tipArr[lang].userLack);
			return false;
		}
		var method = $(this).attr('index');
		var name = $(this).attr('name');		
		var bigId = '';
		if(pageName == 'regist'){
			bigId = $('input[name="user.uid"]').val();
		}
		var trafficFlag = verify('#regist_traffic');
		var otherFlag = verify('#regist_other');
		if(trafficFlag && otherFlag){
			if(pageName == 'regist'){
				var noticeContent = template.render('notice',null);
				easyDialog.open({
					container:{
						header:tipArr[lang].notice,
						content:noticeContent,
						yesFn : function dtnFn(){
							submit2(method,name,bigId);
							return true;
						},
						yesText : tipArr[lang].deleteConfirm
					}
				});
			}else{
				submit2(method,name,bigId);				
			}
		}else{
			if(!trafficFlag){
				alert(tipArr[lang].infoLack1+tipArr[lang].trafficTitle+tipArr[lang].infoLack2);
				return false;
			}
			if(!otherFlag){
				alert(tipArr[lang].infoLack1+tipArr[lang].otherTitle+tipArr[lang].infoLack2);
				return false;
			}
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
			$('.hasPassHide').hide();
			$('input[name="other.isVisa"][value="2"]').get(0).checked = true;
		}
		if($('#hasPass').val() == 1 && value == 1){
			$('.hasPassHide').show();
		}else{
			$('.hasPassHide').hide();
			$('input[name="other.isVisa"][value="2"]').get(0).checked = true;
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

function submit2(method,name,bigId){
	$.post(
			'/web/traffic_saveTraffic',
			$('#regist_traffic').serialize()+'&'+$('#regist_other').serialize()+'&method='+method+'&lang='+lang+'&bigId='+bigId,
			function(data){
				if(data.status == 1){
					alert(tipArr[lang].saveSuccess);
					if(method == 'submit' && pageName == 'regist'){
						location.href = 'messageManage.html';
					}else{
						getMessage(name);
					}
				}
			}
		);
};

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

//删除信息
function deleteInfo(index,name){
	var bigId = $('input[name="user.uid"]').val();
	$.post(
		'/web/'+index[0]+'_delete',
		{id:index[1],bigId:bigId},
		function(data){
//				console.log(data);
			if(data.status == 1){
				alert(tipArr[lang].deleteSuccess);
				getMessage(name);
			}else{
				alert(tipArr[lang].deleteFailure);
			}
		}
	);
};

//获取信息
function getMessage(index){
	$.post(
		'/web/user_gainUserType',
		{page:pageName,lang:lang},
		function(data){
//			console.log(data);
			setTypeName(data);
			window.data = data;
			window.data.index = index;
			$('#tagContent'+(index != 0 ? 0 : 1)).children().remove();
//			console.log(window.data.userType.users.length,index);
//			if(){
//				
//			}
			if(pageName == 'regist'){
				if(window.data.userType.registered == 1){
					$('#tagContent'+index).html(tipArr[lang].registered);
				}else{
					render();
					dateInit(window.data.userType.type);
				}
			}else{
				if(window.data.userType.registered == 0){
					$('#tagContent'+index).html(tipArr[lang].unregistered);
					$('#tags').hide();
				}else{
					//标签渲染
					tags();
					render();
					$('.tagContent').removeClass('selectTag');
					$('#tagContent'+index).addClass('selectTag');
					//日期时间初始化
					dateInit(window.data.userType.type);
				}
			}
		}
	);
};

//页面渲染
function render(){
	var user = window.data.userType.users[window.data.index];
	var uid = (user == null ? "" :user.id);
	$('#tagContent'+window.data.index).children().remove();
	window.data.hourArr = hourArr;
	window.data.minuteArr = minuteArr;
	if(user == null){
		if(compare1(window.data.systemDate)){
			$('#tagContent'+window.data.index).append($(template.render('regist_basic',window.data)));			
		}else{
			$('#tagContent'+window.data.index).text(tipArr[lang].functionClose);
			return false;
		}
	}else{
		$('#tagContent'+window.data.index).append($(template.render('manage_basic',window.data)));
	}
	if(user == null || user.hotel == null){
		$('#tagContent'+window.data.index).append($(template.render('regist_hotel',window.data)));
		$('[name="hotel.uid"]').val(uid);
	}else{
		$('#tagContent'+window.data.index).append($(template.render('manage_hotel',window.data)));
	}
	if(user == null || user.traffic == null){
		$('#tagContent'+window.data.index).append($(template.render('regist_traffic',window.data)));
		$('[name="traffic.uid"]').val(uid);
	}else{
		$('#tagContent'+window.data.index).append($(template.render('manage_traffic',window.data)));
	}
	if(user == null || user.other == null){
		$('#tagContent'+window.data.index).append($(template.render('regist_other',window.data)));
		$('[name="other.uid"]').val(uid);
	}else{
		$('#tagContent'+window.data.index).append($(template.render('manage_other',window.data)));
	}
	var info = {
		pageName : pageName,
		user : user
	};
	$('#tagContent'+window.data.index).append($(template.render('notice',info)));
	$('.save').attr('name',window.data.index);
	$('.remove').attr('name',window.data.index);
	if(!compare1(window.data.systemDate)){
		$('#regist_basic input,#regist_hotel input').attr('disabled','disabled');
		$('#regist_basic select,#regist_hotel select').attr('disabled','disabled');
		$('#regist_basic .remove,#regist_hotel .remove').remove();
	}
	if(!compare2(window.data.systemDate)){
		$('#regist_traffic input,#regist_other input').attr('disabled','disabled');
		$('#regist_traffic select,#regist_other select').attr('disabled','disabled');
		$('#regist_traffic .remove,#regist_other .remove').remove();
	}
};

//标签渲染
function tags(){
	$('#tags li:gt(0)').remove();
	var tagContent1 = '<li index="1"><a href="javascript:void(0)"></a></li>';
	var addContent = '<li index="1"><a href="javascript:void(0)">'+tipArr[lang].add+'</a></li>';
	if(window.data.userType.registered == 1 && window.data.userType.users.length != 2){
		$('#tags a').text(userTypeArr[lang][window.data.userType.type-1]+"1");
		if(window.data.userType.type == 2){
			$('#tags').append($(addContent));
		}
	}else if(window.data.userType.users.length == 2 && window.data.userType.registered == 1){
		$('#tags').append($(tagContent1));
		$('#tags li').each(function(index,el){
			$(this).children('a:eq(0)').text(userTypeArr[lang][window.data.userType.type-1]+(index+1));
		});
	}
	$('#tags li').removeClass('selectTag');
	$('#tags li').eq(window.data.index).addClass('selectTag');
	$('#tags li').show();
	$('#tags').show();
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
			    },
			minDate:'2014-01-01',
			maxDate:'2014-01-31'
		});
		$('[name="backDate"]').datepicker({
			onSelect:function(dateText,inst){
		        $('[name="arrivalDate"]').datepicker("option","maxDate",dateText);
		    },
		    minDate:'2014-01-01',
			maxDate:'2014-01-31'
		});
	}else{
		$('[name="hotel.inDate"]').datepicker(startDate);
		$('[name="hotel.outDate"]').datepicker(endDate);
		$('[name="arrivalDate"]').datepicker(startDate);
		$('[name="backDate"]').datepicker(endDate);
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
function compare1(currentDate){
	var date = "2013/12/01";
	if(window.data.userType.type == 1){
		date = "2014/01/11";
	}
	return compDate(date,currentDate);
};
//交通和游览
function compare2(currentDate){
	var date = "2013/12/11";
	if(window.data.userType.type == 1){
		date = "2014/01/11";
	}
	return compDate(date,currentDate);
}
//日期比较
function compDate(b,currentDate){
	var a = currentDate.replace('T' ,' ').replace(/-/g,"/");
	var dateA = new Date(a);
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