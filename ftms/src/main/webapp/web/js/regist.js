$(function(){
	//初始化
	$.post(
		'/web/user_gainUserType',
		{'page':'regist'},
		function(data){
			console.log(data);
			if(data.userType.users.length == 0){
				$('#tags li').eq(data.userType.type-1).show();
				$('#tagContent1').append($(template.render('regist_basic',data)))
				.append($(template.render('regist_hotel',null)))
				.append($(template.render('regist_traffic',null)))
				.append($(template.render('regist_other',null)));
				$('select').bind('change',function(){
					var id = $(this).attr('id');
					var value = $(this).val();
					if(value == 3){
						$('input[name="'+id+'"]').show();
						$('input[name="user.'+id+'"]').val(0);
						inputValue(id);
					}else{
						$('input[name="'+id+'"]').hide();
						$('input[name="user.'+id+'"]').val(value);						
					}
				});
				dateInit();
			}else{
				$('#tagContent1').append('已注册');
			}
		}
	);
	
	$('body').delegate('#regist_basic .save','click',function(){
		console.log(verify('user.'));
		if(verify('user.')){			
			$.post(
				'/web/user_saveUser',
				$('#regist_basic').serialize(),
				function(data){
					console.log(data);
				}
			);
		}else{
			alert('请填写完整');
		}
	});
	
	
	
});
//放入隐藏域
function inputValue(id){
	$('input[name="'+id+'"]').blur(function(){
		$('input[name="user.'+id+'"]').val($(this).val());
	});
};

//校验是否为空
function verify(str){
	var flag = true;
	$('[name^="'+str+'"]').each(function(){
		if($(this).attr('name').indexOf('contact') > -1){
		}else{
			if($(this).val() == '' || $(this).val() == 0){
				flag = false;
				return false;
			}
		}
	});
	return flag;
};

function dateInit(){
	$('[name="user.birthDate"]').datepicker({
		changeYear:true,
		changeMonth:true,
		yearRange: "1900:2014"
	});
}
