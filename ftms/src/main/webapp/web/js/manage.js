$(function(){
	
	
	getMessage(0);
	
	//tab点击
	$('body').delegate('#tags li','click',function(){
		getMessage($(this).attr('index'));
	});
	
	
});
