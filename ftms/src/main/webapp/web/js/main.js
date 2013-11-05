$.ajaxSetup({
//	contentType:'json',
	statusCode:{
		401:function(){
			location.href = 'login.html';
		}
	}
});

var userTypeArr = ['内部人员','经销商'];