//日期格式化
template.helper('dateFormat',function(date){
	if(date == null){
		return '';
	}
	date = date.replace('T' ,' ').replace(/-/g,"/");
	return new Date(Date.parse(date)).format('yyyy-MM-dd');
});

//时间格式化
template.helper('timeFormat',function(date,value,index){
	if(date == null){
		return '';
	}
	date = date.replace('T' ,' ').replace(/-/g,"/");
	var time = new Date(Date.parse(date)).format('hh:mm');
	if(value == null){
		return time;
	}else{
		return (time.split(':')[index] == value ? 'selected' : '');
	}
});

//个人和酒店系统关闭比较
template.helper('compare1',function(){
	return compare1(window.data.systemDate);
});

//交通和游览系统关闭比较
template.helper('compare2',function(){
	return compare2(window.data.systemDate);
});

//选择下拉菜单
template.helper('select',function(value,value2){
	if(/\d/.test(value)){
		return (value == value2 ? 'selected' : '');
	}else{
		return (value2 == 20 ? 'selected' : '');
	}
});

//隐藏域的下拉菜单值
template.helper('selectHide',function(value){
	if(!/\d/.test(value)){
		return 'style="display:block;" value="'+value+'"';
	}
});

//身份证件类型
template.helper('cerSelect',function(value,value2){
	return (value.split('#')[0] == value2 ? 'selected' : '');
});

//隐藏域身份类型值
template.helper('cerHide0',function(value){
	return value.split('#')[0];
});

//身份证件值
template.helper('cerHide1',function(value){
	return value.split('#')[1];
});

//拆分固定电话
template.helper('telephone',function(value,value2){
	return ((value == null || value == '') ? '' : value.split('-')[value2]);
});

template.helper('passValue',function(value){
	return (value == 0 ? 3 : value);
});