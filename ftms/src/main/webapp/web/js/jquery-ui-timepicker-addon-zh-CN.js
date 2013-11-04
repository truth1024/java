$(function(){	
	$.timepicker.regional['zh-CN'] = {
	         timeText: '时间',  
	         hourText: '小时',  
	         minuteText: '分钟',
	         secondText: '秒',  
	         currentText: '现在',  
	         closeText: '完成',
	         timeOnlyTitle:'选择时间',
			isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['zh-CN']);
});