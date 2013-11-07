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
				$('#tagContent0').append($(template.render('manage_basic',window.data)))
				.append($(template.render('manage_hotel',window.data)))
				.append($(template.render('manage_traffic',window.data)))
				.append($(template.render('manage_other',window.data)));
			}
		}
	);
};