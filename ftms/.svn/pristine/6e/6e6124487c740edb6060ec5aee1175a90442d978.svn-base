Loader = new Object();
/**
 * 设置遮蔽罩背景颜色和透明度
 */
Loader.config = {
	background : '#E6E6E6',
	opacity : '0.7'
}
/**
 * 参数：opt
 * 解释：opt：可以是DOM元素或DOM元素的ID,不传默认为body
 */
Loader.showLoader = function(opt){
	var shadeWidth;
	var shadeHeight;
	var typeOfOpt = typeof(opt);
	if(opt == null){
		shadeWidth = document.body.clientWidth;
		shadeHeight = document.body.offsetHeight;
	}else{
		if(typeOfOpt == "object"){
			shadeWidth = opt.width;
			shadeHeight = opt.height;
		}else if(typeOfOpt == "string"){
			var obj = document.getElementById("opt");
			shadeWidth = obj.width;
			shadeHeight = obj.height;
		}
	}
	var canvasBox = document.createElement("div");
	canvasBox.id = "canvas_box";
	canvasBox.style.position = "absolute";
	canvasBox.style.width = shadeWidth+"px";
	canvasBox.style.height = shadeHeight+"px";
	canvasBox.style.top	= "0px";
	canvasBox.style.zIndex = 1000;
	canvasBox.style.background = Loader.config.background;
	canvasBox.style.opacity = Loader.config.opacity;
	var divBox = document.createElement("div");
	divBox.id = "canvasloader-container";
	divBox.style.position = "absolute";
	divBox.style.top = "35%";
	divBox.style.left = "50%";
	canvasBox.appendChild(divBox);
	document.body.appendChild(canvasBox);
	var cl = new CanvasLoader('canvasloader-container');
	cl.setShape('spiral'); // default is 'oval'
	cl.setDensity(50);
	cl.setDiameter(60);
	cl.show(); // Hidden by default
	// This bit is only for positioning - not necessary
	var loaderObj = document.getElementById("canvasLoader");
	loaderObj.style.position = "absolute";
	loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
}
Loader.killLoader = function(){
	var loaderObj = document.getElementById("canvas_box");
	if(loaderObj != null){
		loaderObj.parentNode.removeChild(loaderObj);
	}
};