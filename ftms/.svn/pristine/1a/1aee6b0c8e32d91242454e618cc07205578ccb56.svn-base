Main = {
		//用户信息头行文字
		headLineArr : ['编码','姓名','胸卡类型','电话','公司','邮箱','备注'],
		addHeadLine : function(jqeruyObj,headLineArr,colon){ //jquery对象 标题数组
			hla = this.headLineArr;
			if(headLineArr && Utils.is_array(headLineArr)){
				hla = headLineArr;
			}
			jqeruyObj.each(function(index){
				if(!$(this).text()){
					$(this).text(hla[index]+(colon ? colon : ''));
				}
			});
		},
		//加载签到下拉列表
		addCheckinSelect : function(jqeruyObj){
			//动态加载下拉列表
			var optionBox;
			if(Main.checkinMaxNum === 1){
				for(var i = 0;i<= Main.checkinMaxNum;i++){
					optionBox = document.createElement("option");
					optionBox.value = i;
					if(i === 0){
						optionBox.innerHTML = "未签到";						
					}else{
						optionBox.innerHTML = "已签到";
					}
					jqeruyObj.append(optionBox);
				}
			}else{
				for(var i = 0;i<= Main.checkinMaxNum;i++){
					optionBox = document.createElement("option");
					optionBox.value = i;
					optionBox.innerHTML = i+"次";
					jqeruyObj.append(optionBox);
				}
			}
		},
		//动态加载类型下拉列表
		addTypeSelect : function(){
			$.post(
				'admin/userAction!gainUserType',
				function(data){
					var uts = data.userTypes;
					//动态加载下拉列表
					var typeOption;
					for(var i = 0;i< uts.length;i++){
						var ut = uts[i];
						typeOption = document.createElement("option");
						typeOption.value = ut.id;
						typeOption.innerHTML = ut.typeName;
						$('select[name="user.type"]').append(typeOption);
					}
				});
		}
};
Date.prototype.format = function(format){
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //second
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}

$(function(){
	//初始化全选按钮
	$("#ucheckall").click(function(){
		if($(this).attr("checked") == "checked"){
			$("input[name='ucheckbox']").each(function(){
				$(this).attr("checked",true);
			});
		}else{
			$("input[name='ucheckbox']").each(function(){
				$(this).attr("checked",false);
			});
		}
	});
});