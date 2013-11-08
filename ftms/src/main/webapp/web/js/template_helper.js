//日期格式化
template.helper('dateFormat',function(date){
	if(date == null){
		return '';
	}
	date = date.replace('T' ,' ').replace(/-/g,"/");
	return new Date(Date.parse(date)).format('yyyy-MM-dd');
});

template.helper('timeFormat',function(date){
	if(date == null){
		return '';
	}
	date = date.replace('T' ,' ').replace(/-/g,"/");
	return new Date(Date.parse(date)).format('hh:mm');
});

template.helper('select',function(value,value2){
	if(/\d/.test(value)){
		return (value == value2 ? 'selected' : '');
	}else{
		return (value2 == 20 ? 'selected' : '');
	}
});

template.helper('selectHide',function(value){
	if(!/\d/.test(value)){
		return 'style="display:block;" value="'+value+'"';
	}
});

template.helper('cerSelect',function(value,value2){
	return (value.split('#')[0] == value2 ? 'selected' : '');
});

template.helper('cerHide0',function(value){
	return value.split('#')[0];
});

template.helper('cerHide1',function(value){
	return value.split('#')[1];
});