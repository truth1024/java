$(function(){
	getMessage();
});

//获取信息
function getMessage(){
	$.post(
		'/web/user_gainUserType',
		{page:'manage'},
		function(data){
			window.data = data;
			window.data.index = 0;
			if(window.data.userType.users.length == 0){
				$('#tagContent0').append('未注册');
			}else{
				$('#tags a').text(userTypeArr[window.data.userType.type-1]);
				$('#tags li').show();
				render();
				//日期时间初始化
				dateInit(window.data.userType.type);
			}
		}
	);
};

//页面渲染
function render(){
	var uid = window.data.userType.users[window.data.index].id;
	$('#tagContent0').append($(template.render('manage_basic',window.data)));
	if(window.data.userType.users[window.data.index].hotel == null){
		$('#tagContent0').append($(template.render('regist_hotel',window.data)));
		$('[name="hotel.uid"]').val(uid);
	}else{
		$('#tagContent0').append($(template.render('manage_hotel',window.data)));
	}
	if(window.data.userType.users[window.data.index].traffic == null){
		$('#tagContent0').append($(template.render('regist_traffic',window.data)));
		$('[name="traffic.uid"]').val(uid);
	}else{
		$('#tagContent0').append($(template.render('manage_traffic',window.data)));
	}
	if(window.data.userType.users[window.data.index].other == null){
		$('#tagContent0').append($(template.render('regist_other',window.data)));
		$('[name="other.uid"]').val(uid);
	}else{
		$('#tagContent0').append($(template.render('manage_other',window.data)));
	}
};