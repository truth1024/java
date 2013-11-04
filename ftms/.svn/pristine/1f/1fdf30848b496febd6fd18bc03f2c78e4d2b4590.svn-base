	var cropzoom;
	var currentOptions;
    $(document).ready(function(){
    	options = {
                width:500,
                height:360,
                bgColor: '#CCC',
                enableRotation:false,
                enableZoom:true,
                zoomSteps:5,
                selector:{        
                	w:0,
                	h:0,
                	centered: true,
                	showPositionsOnDrag:false,
                	showDimetionsOnDrag:false,
                	centered: true,
                	bgInfoLayer:'#fff',
                	borderColor: 'black',
                	animated: false,
                	/* maxWidth:150,
                	maxHeight:200, */
                	borderColorHover: 'blue' 
                },
                image:{
                	draggable:true,
                    source: "",
                    width:0,
                    height:0,
                    minZoom:1,
                    maxZoom:300
                }
            };
       
	//图片编辑弹出框
		$('#image_edit_dialog').dialog({
			autoOpen : false,
			modal : true,
			width : 535,
			height:500,
			buttons : {
				"确定" : function() {
					$('#image_edit_dialog').dialog('close');
					//显示进度条
		    		$.blockUI({ 
		    			message:  '<img src="/images/loading.gif" align="absmiddle" style="margin-right:20px">'+"正在保存图片，请稍候...",
		    			css: { width: '275px' } 
		    		});
					cropzoom.send(path+'/imageHandler', 'POST',currentOptions.displayPercent, {'uri': $("#uri").val(),'scalingPercents':currentOptions.scalingPercents}, function(imgRet) {
						if(imgRet == "500"){
							$.unblockUI(); //取消进度条显示
							alert("服务器内部错误！");
						} else {
							$.unblockUI(); //取消进度条显示
//							$("#" + currentOptions.destImgId).attr("src",path + imgRet);
//							$("#" + currentOptions.destImgURIid).val(path + imgRet);
							if(typeof(currentOptions.callBack) == "function"){
								currentOptions.callBack(imgRet.split(";"));
							}
						}
					});

				},
				"取消" : function() {
					$(this).dialog("close");
				}
			}
		});
	
		//上传弹出框
		$("#uploading_dialog").dialog({
			width:500,
			autoOpen: false,
			modal:true,
			buttons: {
				"取消": function() {
					$('#' + currentOptions.containerId).uploadifyCancel('*');
					$(this).dialog("close"); 
				} 
			}
		});
	});
    
    function initUploadImg(uploadConfig){
    	 var img    = new Image();
         img.src    = path + uploadConfig.btnImgURI;
         img.onload=function(){
        	 uploadConfig["btnW"] = img.width;
        	 uploadConfig["btnH"] = img.height;
        	 initUploadify(uploadConfig);
         };
    };
    
    //初始化上传按钮
    function initUploadify(uploadEditOptions){
    	
    	var domainPath = path;
    	$("#" + uploadEditOptions.containerId).uploadify({
    		// Required Settings
    		langFile : path + '/js/uploadify/uploadifyLang_en.js',
    		swf : path + '/uploadify/uploadify.swf',
    		uploader : path + '/imageupload;jsessionid='+$("#sessionid").attr("value"),

    		'folder'          : uploadEditOptions.folder,
    		'debug'           : false, 
    		'auto'            : true,
    		'use_query_string':true,
    		'buttonText'      : ' ',
    		'width'           : uploadEditOptions.btnW,
    		'height'          : uploadEditOptions.btnH,
    		'cancelImage'     : path + '/uploadify/cancel.png',
    		'fileSizeLimit'   : 10*1024*1000, // 3MB
    		'fileTypeDesc'    : 'Image Files',
    		'fileTypeExts'    : '*.gif;*.jpg;*.png',
    		'method'          : 'post',
    		'multi'           : false,
    		'queueID'         : 'fileQueue',
    		'queueSizeLimit'  : 1,
    		'removeCompleted' : true,
    		requeue_on_error  : false,
    		onUploadStart : function(file) {
    			currentOptions = uploadEditOptions;
    			$('#uploading_dialog').dialog('open');
    		},
    		onUploadSuccess   : function(file,data,response) {
    			var uri = data.split(";")[2];
				if(uri !=""){
					if(uploadEditOptions.displayPercent !== undefined && uploadEditOptions.displayPercent > 0){
						options.selector.h = (uploadEditOptions.destImgH*uploadEditOptions.displayPercent)/100;
						options.selector.w = (uploadEditOptions.destImgW*uploadEditOptions.displayPercent)/100;
						options.image.width = (data.split(";")[0]*uploadEditOptions.displayPercent)/100;
						options.image.height = (data.split(";")[1]*uploadEditOptions.displayPercent)/100;
					} else {
						options.selector.h = uploadEditOptions.destImgH;
						options.selector.w = uploadEditOptions.destImgW;
						options.image.width = data.split(";")[0];
						options.image.height = data.split(";")[1];
					}
					if(options.selector.h > options.height -100){
						options.height = options.selector.h + 100;
					}
					if(options.selector.w > options.width -100){
						options.width = options.selector.h + 100;
					}
					options.image.source = path + "/postcard/"+uri;
					
					$("#uri").val(uri);
					
					$('#uploading_dialog').dialog('close');
	    			cropzoom = $('#cropzoom_container').cropzoom(options);
	    			$("#zoomSlider a").css("width","0.9em");
	    			$('#image_edit_dialog').dialog('open');
				} else {
					$("#error_info").html("图片 " + file.name + " 上传失败");
	    			$("#fileQueue").html("");
				}
    		},
    		onUploadError : function(file,errorCode,errorMsg,errorString,swfuploadifyQueue) {
    			$("#error_info").html("图片 " + file.name + " 上传失败");
    			$("#fileQueue").html("");
    		}
    	});
    	
    	path = domainPath;
    	
    	$(".uploadify:last").css("background","transparent url('"+ path + uploadEditOptions.btnImgURI + "') no-repeat center top");
		$(".uploadify:last").hover(
				function(){
					$(this).css("background","transparent url('"+ path + uploadEditOptions.btnImgHoverURI + "') no-repeat center top");
				},
				function(){
					$(this).css("background","transparent url('"+ path + uploadEditOptions.btnImgURI + "') no-repeat center top");
				});
		
		//百度品茗会项目上传按钮位置纠正  
		$("#upload_btn_container").css({
	 			"margin-left":"6px",
	 			"margin-top":"3px"
	 		});
    };
