$(function(){
	getRegist();
});

function getRegist(){
//	if(compare1()){
//		//初始化
//		$.post(
//			'/web/user_gainUserType',
//			{'page':'regist','lang':lang},
//			function(data){
//				// console.log(data);
//				setTypeName(data);
//				var type = data.userType.type;
//				if(data.userType.users.length == 0){
//					$('#tags li').eq(type-1).show();
//					$('#tagContent0').append($(template.render('regist_basic',data)))
//					.append($(template.render('regist_hotel',data)))
//					.append($(template.render('regist_traffic',data)))
//					.append($(template.render('regist_other',data)))
//					.append($(template.render('notice',null)));
//					//日期时间初始化
//					dateInit(type);
//				}else{
//					$('#tagContent0').html(tipArr[lang].registered);
//				}
//			}
//		);
		getMessage(0);
//	}else{
//		$('#tagContent0').text(tipArr[lang].functionClose);
//	}
}