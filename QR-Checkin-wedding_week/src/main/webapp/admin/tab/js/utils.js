Utils = {};
//验证邮箱格式
Utils.check_email = function(obj){
    var reg = /^[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*$/;
    if(obj.value!=""&&!reg.test(obj.value)){
        obj.select();
        alert('电子邮箱格式输入错误！');
        obj.value = "";
        obj.focus();
        return false;
    }else{
    	return true;
    }
};
//验证手机号码(检验13,15,18开头的手机号！)
Utils.check_telephone = function(obj){
    var reg= /^[1][358]\d{9}$/;
    if(obj.value!=""&&!reg.test(obj.value)){
        alert('手机号码格式输入错误！');
        obj.value = "";
        obj.focus();
        return false;
    }else{
	    return true;
    }
};
//转换
Utils.transform = function(data){
	if(data == null){
		return "";
	} else {
		return data;
	}
};
Utils.is_array = function(value){
	return Object.prototype.toString.apply(value) === '[object Array]';
};