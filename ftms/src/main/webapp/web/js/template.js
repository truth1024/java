(function(){
	
	//日期格式化
	template.helper('dateFormat',function(date){
		date = date.replace('T' ,' ').replace(/-/g,"/");
		return new Date(Date.parse(date)).format('yyyy/MM/dd');
	});
	
	template.helper('timeFormat',function(date){
		date = date.replace('T' ,' ').replace(/-/g,"/");
		return new Date(Date.parse(date)).format('yyyy/MM/dd hh:mm');
	});
	
	template.compile('regist_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4>注册信息</h4>\
            <div class="content">\
                <span>尊敬的先生/女士, 您好!<br />欢迎您参加一汽丰田2014全国经销商大会，请您依次填写本次活动相关的各部分信息。</span>\
                <font>注：以下信息为必填项</font>\
                <ul>\
                    <li><strong>姓名：</strong><input name="user.name" type="text" class="input-regist" /></li>\
                    <li><strong>姓别：</strong><input name="user.sex" type="radio" value="1"/> 男<input name="user.sex" type="radio" value="2" style="margin-left:20px;" /> 女</li>\
                    <li><strong>职位：</strong><select id="title">\
                        <option value="0">--请选择--</option>\
						{each selectArr[0] as t}\
			            <option value="{t.value}">{t.name}</option>\
						{/each}\
                      </select><input name="title" type="text" class="input-eat" /><input type="hidden" name="user.title">\
                    </li>\
                    <li><strong>出生日期：</strong><input name="user.birthDate" type="text" class="input-regist" /></li>\
                    <li><strong>国籍：</strong><select id="nationality">\
                        <option value="0">--请选择--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>证件类型：</strong><select id="certificate">\
                        <option value="0">--请选择--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>证件号码：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>固定电话：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>移动电话：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>饮食忌口：</strong><select id="diet">\
                        <option value="0">--请选择--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input type="hidden" name="user.diet"></li>\
                </ul>\
                <font>如非本人填写，或者您希望事务局通过其他人联系到您, 请填写以下几项信息【可选填】</font>\
                <ul>\
                    <li><strong>联系人姓名：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>联系电话：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>手机号：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="#" class="save">保存</a><a href="#" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
            <h4>酒店安排</h4>\
	            <div class="content">\
	                <ol>\
	                <li><strong>是否入住FTMS指定酒店：</strong><div class="left"><input name="" type="radio" value="" /> 是<input name="" type="radio" value="" style="margin-left:20px;" /> 否 </div><div style="padding-left:40px; float:left">*本次大会指定酒店：东莞嘉华酒店  <a href="#">查看酒店地图</a></div></li>\
	                <li><strong>酒店入住日期：</strong><input name="" type="text" class="input-regist" /></li>\
	                <li><strong>酒店离店日期：</strong><input name="" type="text" class="input-regist" /></li>\
	                <li><strong>住宿类型：</strong><select name="select" id="select">\
	                        <option value="y">--请选择--</option>\
	                        <option value="y">y</option>\
	                        <option value="y">y</option>\
	                      </select>\
	                    </li>\
	                <li><strong>是否指定同住人：</strong><input name="" type="radio" value="" /> 是<input name="" type="radio" value="" style="margin-left:20px;" /> 否</li>\
	                <li><strong>同住人姓名：</strong><input name="" type="text" class="input-regist" /></li>\
	                <li><strong>同住人经销店：</strong><input name="" type="text" class="input-regist" /></li>\
	               </ol>\
	               <div class="tips">\
	                <font style="font-size:12px;"><strong>备注：</strong>1、按照酒店要求正常入住时间为当日14:00之后</font>\
	                <font style="padding-left:36px; width:100%">2、本次大会事务局统一订房时间为1月15日至17日</font>\
	                <font style="padding-left:36px; width:100%">3、酒店住宿费用请前台自付</font>\
	            </div>\
	              <div class="operate"><a href="#" class="save">保存</a><a href="#" class="edit">编辑</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('regist_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
                <h4>交通安排</h4>\
                <div class="content">\
                    <font style="font-size:12px;">*请注意，您从居住地往返东莞的交通需要自行安排，请您提前安排行程，并于12月20日前将您确认后的交通安排信息填入下方。</font>\
                    <div class="tips">\
                        <font style="font-size:12px;"><strong>接送机服务：</strong>深圳宝安国际机场/广州新白云国际机场</font>\
                        <font style="padding-left:72px; width:100%">接机时间：15日 09:00-22:00 16日 09:00-12:00</font>\
                        <font style="padding-left:72px; width:100%">送机时间：17日 07:00-18:00 18日 07:00-18:00</font>\
					</div>\
                    <ol>\
                    <li><strong>来程交通方式：</strong><div class="left"><input name="" type="radio" value="" /> 飞机<input name="" type="radio" value="" style="margin-left:20px;" /> 自驾</div></li>\
                    <li><strong>&nbsp;</strong><input name="" type="radio" value="" /> 其它 <input name="" type="text" class="input-other" /></li>\
                    <li><strong>出发城市：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>抵达城市：</strong>深圳 广州</li>\
                    <li><strong>航班号：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>抵达日期：</strong><select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select>\
                        </li>\
                        <li><strong>抵达时间：</strong>\
                        <select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select> <em>时</em>\
                          <select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select> <em>分</em>\
                        </li>\
                    <li><strong>是否需要接机：</strong><input name="" type="radio" value="" /> 是<input name="" type="radio" value="" style="margin-left:20px;" /> 否</li>\
                    <li style="margin-top:20px;"><strong>返程交通方式：</strong><div class="left"><input name="" type="radio" value="" /> 飞机<input name="" type="radio" value="" style="margin-left:20px;" /> 自驾</div></li>\
                    <li><strong>&nbsp;</strong><input name="" type="radio" value="" /> 其它 <input name="" type="text" class="input-other" /></li>\
                    <li><strong>出发城市：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>抵达城市：</strong>深圳 广州</li>\
                    <li><strong>航班号：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>抵达日期：</strong><select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select>\
                        </li>\
                        <li><strong>抵达时间：</strong><select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select> <em>时</em>\
                          <select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">y</option>\
                            <option value="y">y</option>\
                          </select> <em>分</em>\
                        </li>\
                    <li><strong>是否需要接机：</strong><input name="" type="radio" value="" /> 是<input name="" type="radio" value="" style="margin-left:20px;" /> 否</li>\
                   </ol>\
                   <div class="tips">\
                    <font style="font-size:12px;"><strong>备注：</strong>1、事务局会负责安排深圳、广州机场的接送机服务，选择其它交通方式的贵宾，需自行安排前往酒店的交通</font>\
                    <font style="padding-left:36px; display:block; width:100%">2、系统关闭后，如有信息更改，请主动联系活动会务组进行信息更新，会务组联系</font>\
                    <font style="padding-left:36px; width:100%">联系方式：电话 13888888888 邮箱 sdfadf@adfad.com</font>\
                </div>\
                  <div class="operate"><a href="#" class="save">保存</a><a href="#" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_other',
		'<form id="regist_other"><div class="content-regist">\
                <h4>游览安排</h4>\
                <div class="content">\
                    <ol>\
                    <li><strong style="width:230px;">是否参加1月16日上午大区会议：</strong><div class="left"><input name="" type="radio" value="" /> 是<input name="" type="radio" value="" style="margin-left:20px;" /> 否 </div><div style="padding-left:40px; float:left">*原则上大区会议为总经理参加 </div></li>\
                    <li><strong style="width:230px;">请选择您要参加的旅游线路：</strong><select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">a、东莞可园、石排塘尾古村、松山湖一日游</option>\
                            <option value="y">B、香港自由行</option>\
                            <option value="y">C、高尔夫</option>\
                          </select></li>\
                     <li><strong style="width:230px;">&nbsp;</strong><a href="#">查看旅游线路</a></li>\
                     <li><strong style="width:230px;">您是否持有有效赴港证件：</strong>\
                         <input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>是</em>\
                         <select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">港澳通行证</option>\
                            <option value="y">我是外籍人士，可直接凭护照赴港</option>\
                            <option value="y">正在办理中</option>\
                          </select></li>\
                          <li><strong style="width:230px;">&nbsp;</strong><a href="#">港澳通行证办理提示</a></li>\
                          <li style="color:#b91414">*请务必在报名后及时办理您的港澳通行证及签注, 并在办理完成后致电或邮件联系事务局反馈您的通行证信息</li>\
                          <div style="display:none"  class="showMessage">\
                              <li><strong style="width:230px;">您的港澳通行证是否具有有效签注：</strong>\
                             <input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>是</em><input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>即将办理</em>\
                             </li>\
                              <li><strong style="width:230px;">您的港澳通行证的签注类型是：</strong>\
                             <input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>G签</em><input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>L签</em>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注类型</a></li>\
                             <li><strong style="width:230px;">您的签注有效期至：</strong><select name="select" id="select">\
                                <option value="y">--请选择--</option>\
                                <option value="y">y</option>\
                                <option value="y">y</option>\
                              </select> <em>年</em>\
                              <select name="select" id="select">\
                                <option value="y">--请选择--</option>\
                                <option value="y">y</option>\
                                <option value="y">y</option>\
                              </select> <em>月</em>\
                              <select name="select" id="select">\
                                <option value="y">--请选择--</option>\
                                <option value="y">y</option>\
                                <option value="y">y</option>\
                              </select> <em>日</em>\
                            </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注有效期</a></li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证首页扫描件：</strong><input name="" type="file" />\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证签注页扫描件：</strong><input name="" type="file" />\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
                         </div>\
                          <div style="display:none"  class="showMessage">\
                              <li>游览完毕后您是否随统一大巴返回东莞住宿酒店：<br />\
                                  <input name="" type="radio" value="" style="margin:8px 0 0 220px; float:left;" /><em>是</em><br />\
                                  <input name="" type="radio" value="" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从香港离开</em><br />\
                                  <input name="" type="radio" value="" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从深圳离开</em>\
                              </li>\
                          </div>\
                         <div style="display:block" class="showMessage">\
                              <li><strong>是否打球：</strong>\
                                  <input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>是</em>\
                                  <input name="" type="radio" value="" style="margin-top:8px; float:left;" /><em>否</em>\
                              </li>\
                              <li><strong>打球差点：</strong><input name="" type="text" class="input-regist" /></li>\
                              <li style="color:#b91414"><strong>&nbsp;</strong>(*请准确提供您的差点证明, 我们将据此为您安排分组)</li>\
                              <li><strong>身高：</strong><input name="" type="text" class="input-regist" />CM</li>\
                              <li><strong>服装号码：</strong><select name="select" id="select">\
                            <option value="y">--请选择--</option>\
                            <option value="y">S</option>\
                            <option value="y">M</option>\
                            <option value="y">L</option>\
                            <option value="y">XL</option>\
                            <option value="y">XXL</option>\
                            <option value="y">XXXL</option>\
                          </select></li>\
                          </div>\
                   </ol>\
                   <div class="tips-attention">\
                    <font style="font-size:12px;"><strong>注意事项：</strong></font>\
                    <font style="font-size:12px;">1、注册信息只可提交一次，信息提交后可通过点击“信息管理”进入账户信息管理界面进行信息修改</font>\
                    <font style="font-size:12px;">2、报名系统分阶段关闭，系统一旦关闭，网页上将无法进行信息修改，请各位贵宾在填写时务必确保信息的准确性，如系统关闭后仍有信息变动，请主动联系大会事务局告知变动内容</font>\
                    <font style="font-size:12px;">3、大会报名和进行期间，事务局会通过短信和邮件提示和告知大会各项安排以及统一发放温馨提示，届时请您注意查收</font>\
                </div>\
                  <div class="operate" style="padding-bottom:20px;"><a href="#" class="save">保存</a><a href="#" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
})();