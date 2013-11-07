(function(){
	
	//日期格式化
	template.helper('dateFormat',function(date){
		date = date.replace('T' ,' ').replace(/-/g,"/");
		return new Date(Date.parse(date)).format('yyyy-MM-dd');
	});
	
	template.helper('timeFormat',function(date){
		date = date.replace('T' ,' ').replace(/-/g,"/");
		return new Date(Date.parse(date)).format('yyyy/MM/dd hh:mm');
	});
	
	template.helper('nation',function(value){
		if(/\d/.test(value)){
			return value;
		}else{
			return 20;
		}
	});
	
	template.compile('regist_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4>注册信息</h4>\
            <div class="content">\
                <span>尊敬的先生/女士, 您好!<br />欢迎您参加一汽丰田2014全国经销商大会，请您依次填写本次活动相关的各部分信息。</span>\
                <font>注：以下信息为必填项</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
                    <li><strong>姓名：</strong><input name="user.name" type="text" class="input-regist required" /></li>\
                    <li><strong>姓别：</strong><input class="required" name="user.sex" type="radio" value="1" checked/>男<input name="user.sex" type="radio" value="2" style="margin-left:20px;" /> 女</li>\
                    <li>\
					{if userType.type == 1}\
						<strong>公司：</strong><select index="user." id="company">\
	                        <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
                      	</select><input name="company" type="text" class="input-eat" /><input class="required" type="hidden" name="user.company">\
					{else}\
						<strong>职位：</strong><select index="user." id="title">\
				            <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
				      	</select><input name="title" type="text" class="input-eat" /><input class="required" type="hidden" name="user.title">\
					{/if}\
                    </li>\
                    <li><strong>出生日期：</strong><input name="user.birthDate" type="text" class="input-regist required" /></li>\
                    <li><strong>国籍：</strong><select index="user." id="nationality">\
                        <option value="0">--请选择--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input class="required" type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>证件类型：</strong><select index="user." id="certificate">\
                        <option value="0">--请选择--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>证件号码：</strong><input name="cerNum" type="text" class="input-regist required" /></li>\
                    <li><strong>固定电话：</strong><input name="user.telephone" type="text" class="input-regist required" /></li>\
                    <li><strong>移动电话：</strong><input name="user.mobilePhone" type="text" class="input-regist required" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.email" type="text" class="input-regist required" /></li>\
                    <li><strong>饮食忌口：</strong><select index="user." id="diet">\
                        <option value="0">--请选择--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input class="required" type="hidden" name="user.diet"></li>\
                </ul>\
                <font>如非本人填写，或者您希望事务局通过其他人联系到您, 请填写以下几项信息【可选填】</font>\
                <ul>\
                    <li><strong>联系人姓名：</strong><input name="user.contactName" type="text" class="input-regist" /></li>\
                    <li><strong>联系电话：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>手机号：</strong><input name="user.contactPhone" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.contactEmail" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="">\
            <h4>酒店安排</h4>\
	            <div class="content">\
	                <ol>\
	                <li><strong>是否入住FTMS指定酒店：</strong><div class="left"><input class="required" name="hotel.isStay" type="radio" value="1" />是<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*本次大会指定酒店：东莞嘉华酒店  <a href="#">查看酒店地图</a></div></li>\
	                <li><strong>酒店入住日期：</strong><input name="hotel.inDate" type="text" class="input-regist required" /></li>\
	                <li><strong>酒店离店日期：</strong><input name="hotel.outDate" type="text" class="input-regist required" /></li>\
	                <li><strong>住宿类型：</strong><select index="hotel." id="room">\
                        <option value="0">--请选择--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input class="required" type="hidden" name="hotel.room">\
                    </li>\
	                <li><strong>是否指定同住人：</strong><input class="required" name="hotel.isWith" type="radio" value="1" />是<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
	                <li class="hide" style="display:none;"><strong>同住人姓名：</strong><input name="hotel.withName" type="text" class="input-regist" /></li>\
	                <li class="hide" style="display:none;"><strong>同住人经销店：</strong><input name="hotel.withShop" type="text" class="input-regist" /></li>\
	               </ol>\
	               <div class="tips">\
	                <font style="font-size:12px;"><strong>备注：</strong>1、按照酒店要求正常入住时间为当日14:00之后</font>\
	                <font style="padding-left:36px; width:100%">2、本次大会事务局统一订房时间为1月15日至17日</font>\
	                <font style="padding-left:36px; width:100%">3、酒店住宿费用请前台自付</font>\
	            </div>\
	              <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('regist_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="">\
                <h4>交通安排</h4>\
                <div class="content">\
                    <font style="font-size:12px;">*请注意，您从居住地往返东莞的交通需要自行安排，请您提前安排行程，并于12月20日前将您确认后的交通安排信息填入下方。</font>\
                    <div class="tips">\
                        <font style="font-size:12px;"><strong>接送机服务：</strong>深圳宝安国际机场/广州新白云国际机场</font>\
                        <font style="padding-left:72px; width:100%">接机时间：15日 09:00-22:00 16日 09:00-12:00</font>\
                        <font style="padding-left:72px; width:100%">送机时间：17日 07:00-18:00 18日 07:00-18:00</font>\
					</div>\
                    <ol>\
                    <li><strong>来程交通方式：</strong><select index="traffic." id="departureTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="departureTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.departureTrafficTool">\
					</li>\
                    <li class="depar" style="display:none;"><strong>出发城市：</strong><input name="traffic.departureCity" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>航班号：</strong><input name="traffic.departureFlight" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达日期：</strong><input name="arrivalDate" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达时间：</strong><input name="arrivalTime" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>是否需要接机：</strong><input name="traffic.pickUp" type="radio" value="1" />是<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                    <li style="margin-top:20px;"><strong>返程交通方式：</strong><select index="traffic." id="backTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="backTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.backTrafficTool">\
					</li>\
                    <li class="back" style="display:none;"><strong>返回城市：</strong><input name="traffic.backCity" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>航班号：</strong><input name="traffic.backFlight" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>返回日期：</strong><input name="backDate" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>返回时间：</strong><input name="backTime" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>是否需要送机：</strong><input name="traffic.send" type="radio" value="1" />是<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                   </ol>\
                   <div class="tips">\
                    <font style="font-size:12px;"><strong>备注：</strong>1、事务局会负责安排深圳、广州机场的接送机服务，选择其它交通方式的贵宾，需自行安排前往酒店的交通</font>\
                    <font style="padding-left:36px; display:block; width:100%">2、系统关闭后，如有信息更改，请主动联系活动会务组进行信息更新，会务组联系</font>\
                    <font style="padding-left:36px; width:100%">联系方式：电话 13888888888 邮箱 sdfadf@adfad.com</font>\
                </div>\
                  <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="">\
                <h4>游览安排</h4>\
                <div class="content">\
                    <ol>\
                    <li><strong style="width:230px;">是否参加1月16日上午大区会议：</strong><div class="left"><input name="other.meeting" type="radio" value="1" />是<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*原则上大区会议为总经理参加 </div></li>\
                    <li><strong style="width:230px;">请选择您要参加的旅游线路：</strong><select index="other." id="touristRoute">\
			            <option value="0">--请选择--</option>\
						{each selectArr[6] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
			          </select><input name="touristRoute" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="other.touristRoute">\
					</li>\
                     <li><strong style="width:230px;">&nbsp;</strong><a href="#">查看旅游线路</a></li>\
                     	<li class="touristRouteB"  style="display:none;"><strong style="width:230px;">您是否持有有效赴港证件：</strong>\
	                         <input name="pass" type="checkbox" value="1" style="margin-top:8px; float:left;" /><em>是</em>\
								<select index="other." id="hasPass">\
					            <option value="0">--请选择--</option>\
								{each selectArr[7] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.hasPass">\
						</li>\
                          <li class="touristRouteB" style="display:none;"><strong style="width:230px;">&nbsp;</strong><a href="#">港澳通行证办理提示</a></li>\
                          <li style="color:#b91414">*请务必在报名后及时办理您的港澳通行证及签注, 并在办理完成后致电或邮件联系事务局反馈您的通行证信息</li>\
                          <div style="display:none"  class="showMessage">\
                              <li><strong style="width:230px;">您的港澳通行证是否具有有效签注：</strong>\
	                             <input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>是</em>\
								 <input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" /><em>即将办理</em>\
                             </li>\
                              <li><strong style="width:230px;">您的港澳通行证的签注类型是：</strong>\
	                             <input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>G签</em>\
								 <input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" /><em>L签</em>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注类型</a></li>\
                             <li><strong style="width:230px;">您的签注有效期至：</strong><input name="other.effectiveDate" type="text" class="input-regist" />\
                            </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注有效期</a></li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证首页扫描件：</strong><input name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证签注页扫描件：</strong><input name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-签证页扫描件）</li>\
                         </div>\
                          <div style="display:none"  class="showMessage touristRouteB">\
                              <li>游览完毕后您是否随统一大巴返回东莞住宿酒店：<br />\
                                  <input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" checked/><em>是</em><br />\
                                  <input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从香港离开</em><br />\
                                  <input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从深圳离开</em>\
                              </li>\
                          </div>\
                         <div style="display:none;" class="showMessage">\
                              <li><strong>是否打球：</strong>\
                                  <input name="other.isPlay" type="radio" value="1" style="margin-top:8px; float:left;" /><em>是</em>\
                                  <input name="other.isPlay" type="radio" value="2" style="margin-top:8px; float:left;" checked/><em>否</em>\
                              </li>\
                              <li><strong>打球差点：</strong><input name="other.playAlmost" type="text" class="input-regist" /></li>\
                              <li style="color:#b91414"><strong>&nbsp;</strong>(*请准确提供您的差点证明, 我们将据此为您安排分组)</li>\
                              <li><strong>身高：</strong><input name="other.stature" type="text" class="input-regist" />CM</li>\
                              <li><strong>服装号码：</strong>\
								<select index="other." id="playSize">\
					            <option value="0">--请选择--</option>\
								{each selectArr[8] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.playSize">\
	                          </li>\
                          </div>\
                   </ol>\
                   <div class="tips-attention">\
                    <font style="font-size:12px;"><strong>注意事项：</strong></font>\
                    <font style="font-size:12px;">1、注册信息只可提交一次，信息提交后可通过点击“信息管理”进入账户信息管理界面进行信息修改</font>\
                    <font style="font-size:12px;">2、报名系统分阶段关闭，系统一旦关闭，网页上将无法进行信息修改，请各位贵宾在填写时务必确保信息的准确性，如系统关闭后仍有信息变动，请主动联系大会事务局告知变动内容</font>\
                    <font style="font-size:12px;">3、大会报名和进行期间，事务局会通过短信和邮件提示和告知大会各项安排以及统一发放温馨提示，届时请您注意查收</font>\
                </div>\
                  <div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4><span style="float:left">注册信息</span><div class="operate-message"><a href="#">添加人员</a><a href="#">预览</a><a href="#">编辑</a><a href="#">删除</a></div></h4>\
            <div class="content">\
                <span>尊敬的先生/女士, 您好!<br />欢迎您参加一汽丰田2014全国经销商大会，请您依次填写本次活动相关的各部分信息。</span>\
                <font>注：以下信息为必填项</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
                    <li><strong>姓名：</strong><input name="user.name" value="{userType.users[index].name}" type="text" class="input-regist required" /></li>\
                    <li><strong>姓别：</strong><input class="required" name="user.sex" type="radio" value="1" {if userType.users[index].sex == 1}checked{/if}/>男<input name="user.sex" type="radio" value="2"{if userType.users[index].sex == 2}checked{/if} style="margin-left:20px;" /> 女</li>\
                    <li>\
					{if userType.type == 1}\
						<strong>公司：</strong><select  index="user." id="company">\
	                        <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {if userType.users[index].company == t.value}selected{/if}>{t.name}</option>\
							{/each}\
                      	</select><input name="company" type="text" class="input-eat" /><input class="required" type="hidden" name="user.company">\
					{else}\
						<strong>职位：</strong><select index="user." id="title">\
				            <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {if userType.users[index].title == t.value}selected{/if}>{t.name}</option>\
							{/each}\
				      	</select><input name="title" type="text" class="input-eat" /><input class="required" type="hidden" name="user.title">\
					{/if}\
                    </li>\
                    <li><strong>出生日期：</strong><input name="user.birthDate" value="{dateFormat userType.users[index].birthDate}" type="text" class="input-regist required" /></li>\
                    <li><strong>国籍：</strong><select index="user." id="nationality">\
                        <option value="0">--请选择--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}" {if ({nation userType.users[index].nationality} == n.value)}selected{/if}>{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input class="required" type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>证件类型：</strong><select index="user." id="certificate">\
                        <option value="0">--请选择--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>证件号码：</strong><input name="cerNum" type="text" class="input-regist required" /></li>\
                    <li><strong>固定电话：</strong><input name="user.telephone" type="text" class="input-regist required" /></li>\
                    <li><strong>移动电话：</strong><input name="user.mobilePhone" type="text" class="input-regist required" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.email" type="text" class="input-regist required" /></li>\
                    <li><strong>饮食忌口：</strong><select index="user." id="diet">\
                        <option value="0">--请选择--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input class="required" type="hidden" name="user.diet"></li>\
                </ul>\
                <font>如非本人填写，或者您希望事务局通过其他人联系到您, 请填写以下几项信息【可选填】</font>\
                <ul>\
                    <li><strong>联系人姓名：</strong><input name="user.contactName" type="text" class="input-regist" /></li>\
                    <li><strong>联系电话：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>手机号：</strong><input name="user.contactPhone" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.contactEmail" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="">\
            <h4><span style="float:left">酒店安排</span><div class="operate-message"><a href="#">添加人员</a><a href="#">预览</a><a href="#">编辑</a><a href="#">删除</a></div></h4>\
	            <div class="content">\
	                <ol>\
	                <li><strong>是否入住FTMS指定酒店：</strong><div class="left"><input class="required" name="hotel.isStay" type="radio" value="1" />是<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*本次大会指定酒店：东莞嘉华酒店  <a href="#">查看酒店地图</a></div></li>\
	                <li><strong>酒店入住日期：</strong><input name="hotel.inDate" type="text" class="input-regist required" /></li>\
	                <li><strong>酒店离店日期：</strong><input name="hotel.outDate" type="text" class="input-regist required" /></li>\
	                <li><strong>住宿类型：</strong><select index="hotel." id="room">\
                        <option value="0">--请选择--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input class="required" type="hidden" name="hotel.room">\
                    </li>\
	                <li><strong>是否指定同住人：</strong><input class="required" name="hotel.isWith" type="radio" value="1" />是<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
	                <li class="hide" style="display:none;"><strong>同住人姓名：</strong><input name="hotel.withName" type="text" class="input-regist" /></li>\
	                <li class="hide" style="display:none;"><strong>同住人经销店：</strong><input name="hotel.withShop" type="text" class="input-regist" /></li>\
	               </ol>\
	               <div class="tips">\
	                <font style="font-size:12px;"><strong>备注：</strong>1、按照酒店要求正常入住时间为当日14:00之后</font>\
	                <font style="padding-left:36px; width:100%">2、本次大会事务局统一订房时间为1月15日至17日</font>\
	                <font style="padding-left:36px; width:100%">3、酒店住宿费用请前台自付</font>\
	            </div>\
	              <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('manage_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="">\
                <h4><span style="float:left">交通安排</span><div class="operate-message"><a href="#">添加人员</a><a href="#">预览</a><a href="#">编辑</a><a href="#">删除</a></div></h4>\
                <div class="content">\
                    <font style="font-size:12px;">*请注意，您从居住地往返东莞的交通需要自行安排，请您提前安排行程，并于12月20日前将您确认后的交通安排信息填入下方。</font>\
                    <div class="tips">\
                        <font style="font-size:12px;"><strong>接送机服务：</strong>深圳宝安国际机场/广州新白云国际机场</font>\
                        <font style="padding-left:72px; width:100%">接机时间：15日 09:00-22:00 16日 09:00-12:00</font>\
                        <font style="padding-left:72px; width:100%">送机时间：17日 07:00-18:00 18日 07:00-18:00</font>\
					</div>\
                    <ol>\
                    <li><strong>来程交通方式：</strong><select index="traffic." id="departureTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="departureTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.departureTrafficTool">\
					</li>\
                    <li class="depar" style="display:none;"><strong>出发城市：</strong><input name="traffic.departureCity" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>航班号：</strong><input name="traffic.departureFlight" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达日期：</strong><input name="arrivalDate" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达时间：</strong><input name="arrivalTime" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>是否需要接机：</strong><input name="traffic.pickUp" type="radio" value="1" />是<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                    <li style="margin-top:20px;"><strong>返程交通方式：</strong><select index="traffic." id="backTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="backTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.backTrafficTool">\
					</li>\
                    <li class="back" style="display:none;"><strong>返回城市：</strong><input name="traffic.backCity" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>航班号：</strong><input name="traffic.backFlight" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>返回日期：</strong><input name="backDate" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>返回时间：</strong><input name="backTime" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>是否需要送机：</strong><input name="traffic.send" type="radio" value="1" />是<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                   </ol>\
                   <div class="tips">\
                    <font style="font-size:12px;"><strong>备注：</strong>1、事务局会负责安排深圳、广州机场的接送机服务，选择其它交通方式的贵宾，需自行安排前往酒店的交通</font>\
                    <font style="padding-left:36px; display:block; width:100%">2、系统关闭后，如有信息更改，请主动联系活动会务组进行信息更新，会务组联系</font>\
                    <font style="padding-left:36px; width:100%">联系方式：电话 13888888888 邮箱 sdfadf@adfad.com</font>\
                </div>\
                  <div class="operate"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="">\
                <h4><span style="float:left">游览安排</span><div class="operate-message"><a href="#">添加人员</a><a href="#">预览</a><a href="#">编辑</a><a href="#">删除</a></div></h4>\
                <div class="content">\
                    <ol>\
                    <li><strong style="width:230px;">是否参加1月16日上午大区会议：</strong><div class="left"><input name="other.meeting" type="radio" value="1" />是<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*原则上大区会议为总经理参加 </div></li>\
                    <li><strong style="width:230px;">请选择您要参加的旅游线路：</strong><select index="other." id="touristRoute">\
			            <option value="0">--请选择--</option>\
						{each selectArr[6] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
			          </select><input name="touristRoute" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="other.touristRoute">\
					</li>\
                     <li><strong style="width:230px;">&nbsp;</strong><a href="#">查看旅游线路</a></li>\
                     	<li class="touristRouteB"  style="display:none;"><strong style="width:230px;">您是否持有有效赴港证件：</strong>\
	                         <input name="pass" type="checkbox" value="1" style="margin-top:8px; float:left;" /><em>是</em>\
								<select index="other." id="hasPass">\
					            <option value="0">--请选择--</option>\
								{each selectArr[7] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.hasPass">\
						</li>\
                          <li class="touristRouteB" style="display:none;"><strong style="width:230px;">&nbsp;</strong><a href="#">港澳通行证办理提示</a></li>\
                          <li style="color:#b91414">*请务必在报名后及时办理您的港澳通行证及签注, 并在办理完成后致电或邮件联系事务局反馈您的通行证信息</li>\
                          <div style="display:none"  class="showMessage">\
                              <li><strong style="width:230px;">您的港澳通行证是否具有有效签注：</strong>\
	                             <input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>是</em>\
								 <input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" /><em>即将办理</em>\
                             </li>\
                              <li><strong style="width:230px;">您的港澳通行证的签注类型是：</strong>\
	                             <input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>G签</em>\
								 <input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" /><em>L签</em>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注类型</a></li>\
                             <li><strong style="width:230px;">您的签注有效期至：</strong><input name="other.effectiveDate" type="text" class="input-regist" />\
                            </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">如何分辨签注有效期</a></li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证首页扫描件：</strong><input name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证签注页扫描件：</strong><input name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-签证页扫描件）</li>\
                         </div>\
                          <div style="display:none"  class="showMessage touristRouteB">\
                              <li>游览完毕后您是否随统一大巴返回东莞住宿酒店：<br />\
                                  <input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" checked/><em>是</em><br />\
                                  <input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从香港离开</em><br />\
                                  <input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" /><em>否，我自行从深圳离开</em>\
                              </li>\
                          </div>\
                         <div style="display:none;" class="showMessage">\
                              <li><strong>是否打球：</strong>\
                                  <input name="other.isPlay" type="radio" value="1" style="margin-top:8px; float:left;" /><em>是</em>\
                                  <input name="other.isPlay" type="radio" value="2" style="margin-top:8px; float:left;" checked/><em>否</em>\
                              </li>\
                              <li><strong>打球差点：</strong><input name="other.playAlmost" type="text" class="input-regist" /></li>\
                              <li style="color:#b91414"><strong>&nbsp;</strong>(*请准确提供您的差点证明, 我们将据此为您安排分组)</li>\
                              <li><strong>身高：</strong><input name="other.stature" type="text" class="input-regist" />CM</li>\
                              <li><strong>服装号码：</strong>\
								<select index="other." id="playSize">\
					            <option value="0">--请选择--</option>\
								{each selectArr[8] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.playSize">\
	                          </li>\
                          </div>\
                   </ol>\
                   <div class="tips-attention">\
                    <font style="font-size:12px;"><strong>注意事项：</strong></font>\
                    <font style="font-size:12px;">1、注册信息只可提交一次，信息提交后可通过点击“信息管理”进入账户信息管理界面进行信息修改</font>\
                    <font style="font-size:12px;">2、报名系统分阶段关闭，系统一旦关闭，网页上将无法进行信息修改，请各位贵宾在填写时务必确保信息的准确性，如系统关闭后仍有信息变动，请主动联系大会事务局告知变动内容</font>\
                    <font style="font-size:12px;">3、大会报名和进行期间，事务局会通过短信和邮件提示和告知大会各项安排以及统一发放温馨提示，届时请您注意查收</font>\
                </div>\
                  <div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save">保存</a><a href="" class="edit">编辑</a></div>\
            </div>\
        </div></form>'
	);
	
})();