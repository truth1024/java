$(function(){
	
	$('body').delegate('.input-eat','focus',function(){
		inputValue($(this).prev().attr('index'),$(this).prev().attr('id'));
	});
	
	getMessage(0);
	
	//tab点击
	$('body').delegate('#tags li','click',function(){
		getMessage($(this).attr('index'));
	});
	
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
});

//获取信息
function getMessage(index){
	$.post(
		'/web/user_gainUserType',
		{page:'manage',lang:lang},
		function(data){
			window.data = data;
			window.data.index = index;
			$('#tagContent'+(index != 0 ? 0 : 1)).children().remove();
			if(window.data.userType == null || window.data.userType.users.length == 0){
				$('#tagContent'+index).append(tipArr[lang].unregistered);
			}else{
					$('#tagContent'+index).children().remove();
					//标签渲染
					tags();
					render();
					$('.tagContent').removeClass('selectTag');
					$('#tagContent'+index).addClass('selectTag');
					//日期时间初始化
					dateInit(window.data.userType.type);
			}
		}
	);
};

//页面渲染
function render(){
	var user = window.data.userType.users[window.data.index];
	var uid = (user == null ? "" :user.id);
	if(user == null){
		$('#tagContent'+window.data.index).append($(template.render('regist_basic',window.data)));
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
	$('.save').attr('name',window.data.index);
};

//标签渲染
function tags(){
	$('#tags li:gt(0)').remove();
	var tagContent1 = '<li index="1"><a href="javascript:void(0)"></a></li>';
	var addContent = '<li index="1"><a href="javascript:void(0)">'+tipArr[lang].add+'</a></li>';
	if(window.data.userType.users.length == 1){
		$('#tags a').text(userTypeArr[lang][window.data.userType.type-1]);
		if(window.data.userType.type == 2){
			$('#tags').append($(addContent));
		}
	}else if(window.data.userType.users.length == 2){
		$('#tags').append($(tagContent1));
		$('#tags a').text(userTypeArr[lang][window.data.userType.type-1]);
	}
	$('#tags li').removeClass('selectTag');
	$('#tags li').eq(window.data.index).addClass('selectTag');
	$('#tags li').show();
};