function changeValidateCode(obj) {
	//获取当前的时间作为参数，无具体意义
	var timenow = new Date().getTime();
	//每次请求需要一个不同的参数，否则可能会返回同样的验证码
	//这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。
	obj.src="/web/login_randomNum?d="+timenow;
};
$(function(){
	$('#login').click(function(){
		$.post(
			'/web/login_login',
			$('#login_form').serialize(),
			function(data){
				if(data.status == 1){
					location.href = 'schedule.html';
				}else{
					alert(data.tip);
					$('input[type="text"]').val('');
				}
			}
		);
	});
});