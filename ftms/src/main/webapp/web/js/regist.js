$(function(){
	//初始化
	$.post(
		'/web/user_gainUserType',
		{'page':'regist'},
		function(data){
			// console.log(data);
			var type = data.userType.type;
			if(data.userType.users.length == 0){
				$('#tags li').eq(type-1).show();
				$('#tagContent1').append($(template.render('regist_basic',data)))
				.append($(template.render('regist_hotel',data)))
				.append($(template.render('regist_traffic',data)))
				.append($(template.render('regist_other',data)));
				//日期时间初始化
				dateInit(type);
			}else{
				$('#tagContent1').append('已注册');
			}
		}
	);
});