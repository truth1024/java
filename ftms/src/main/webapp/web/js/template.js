(function(){
	
	template.compile('pass',
		'<div class="indent">中华人民共和国往来港澳通行证，是由中华人民共和国公安部出入境管理局签发给中国内地居民因私往来香港或澳门地区旅游、探亲、从事商务、培训、就业、留学等非公务活动的旅行证件，来港澳前，必须取得内地公安部门签发有关来港澳目的签注（如团队旅游、个人旅游、商务或其他签注等）。</div>\
			　　　<div class="indent"><span>通行证类型：</span>个人旅游、团队旅游</div>\
			　　　<div class="indent"><span>收费：</span>往来港澳通行证每证100元；办理签注每项次20元。</div>\
			　　　<div class="indent"><span>审批时限：</span>一般在15个工作日左右<font>（此时间只供参考，具体以当地出入境管理处通知为准）</font></div>\
			　　　<div class="indent"><span>内地公民因私往来港澳审批程序</span></div>\
			　　　<div class="indent">1、交验本人身份证、户口簿原件，并提交复印件；</div>\
			　　　<div class="indent">2、提交正面白色背景彩色小二寸照片2张或者前往各地出入境管理处现场拍照，一般价格在40元左右，具体以各地出入境管理处报价为准；</div>\
			　　　<div class="indent">3、提交填写完整的《申请审批表》；</div>\
			　　　<div class="indent">4、往来港澳通行证遗失的，须事先进行遗报失处理。</div>\
			　　　<div class="indent"><span>注意事项:</span></div>\
			　　　<div class="indent">1、赴港澳个人游签发 “G”字头个人旅游签注，每次在香港或者澳门逗留不超过7天。</div>\
			　　　<div class="indent">2、赴港澳团队游签发 “L”字头团队旅游签注，每次在香港或者澳门逗留不超过7天，且必须以团队的名义出入境。</div>\
			　　　<div class="indent">3、签注过期或已使用，可再次申请，需要注意通行证有效期，即“照片页有效期”在6个月之内，具体需要与各城市出入境管理处核实办理签注是否需要重新换证件。</div>\
			　　　<div class="indent">4、内地居民所持往来港澳通行证在内地遗失或者损坏，应当重新申请往来港澳通行证及签注。申请时须提交相应材料。建议遗失证件的申请人提交书面的证件遗失声明。</div>'
	);
	
	template.compile('regist_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4>基本信息</h4>\
            <div class="content">\
                <font>注：标“*”为必填项</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
                    <li><strong>* 姓名：</strong><input name="user.name" type="text" class="input-regist required" /></li>\
                    <li><strong>* 姓别：</strong><input class="required" name="user.sex" type="radio" value="1" checked/>男<input name="user.sex" type="radio" value="2" style="margin-left:20px;" /> 女</li>\
					{if userType.type == 1}\
						<li><strong>* 公司：</strong><select index="user." id="company">\
	                        <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
                      	</select><input name="company" type="text" class="input-eat" /><input class="required" type="hidden" name="user.company"></li>\
						<li><strong>* 职位：</strong><input class="input-regist required" type="text" name="user.title"></li>\
					{else}\
						<li><strong>* 职位：</strong><select index="user." id="title">\
				            <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
				      	</select><input name="title" type="text" class="input-eat" /><input class="required" type="hidden" name="user.title"></li>\
					{/if}\
                    <li><strong>* 出生日期：</strong><input name="user.birthDate" type="text" class="input-regist required" /></li>\
                    <li><strong>* 国籍：</strong><select index="user." id="nationality">\
                        <option value="0">--请选择--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input class="required" type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>* 证件类型：</strong><select index="user." id="certificate">\
                        <option value="0">--请选择--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>* 证件号码：</strong><input name="cerNum" type="text" class="input-regist required" /></li>\
                    <li><strong>* 固定电话：</strong>\
						<input name="telephoneZone" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" class="required" />\
						- <input name="telephoneNum" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text" class="required"/></li>\
                    <li><strong>* 移动电话：</strong><input name="user.mobilePhone" type="text" class="input-regist required" /></li>\
                    <li><strong>* 电子邮箱：</strong><input name="user.email" type="text" class="input-regist required" /></li>\
                    <li><strong>* 饮食忌口：</strong><select index="user." id="diet">\
                        <option value="0">--请选择--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input class="required" type="hidden" name="user.diet"></li>\
                </ul>\
                <font>如非本人填写，或者您希望事务局通过其他人联系到您, 请填写以下几项信息【可选填】</font>\
                <ul>\
                    <li><strong>联系人姓名：</strong><input name="user.contactName" type="text" class="input-regist" /></li>\
                    <li><strong>联系电话：</strong>\
						<input name="contactTelephoneZone" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" />\
						- <input name="contactTelephoneNum" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text"/></li>\
                    <li><strong>手机号：</strong><input name="user.contactPhone" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.contactEmail" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save" index="submit">保存</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="">\
            <h4>酒店安排</h4>\
	            <div class="content">\
	                <ol>\
	                <li><strong>* 是否入住FTMS指定酒店：</strong><div class="left"><input class="required" name="hotel.isStay" type="radio" value="1" />是<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*本次大会指定酒店：东莞嘉华酒店  <a href="javascript:void(0);" id="map">查看酒店地图</a></div></li>\
	                <li><strong>酒店入住日期：</strong><input name="hotel.inDate" type="text" class="input-regist isStay" /></li>\
	                <li><strong>酒店离店日期：</strong><input name="hotel.outDate" type="text" class="input-regist isStay" /></li>\
	                <li><strong>住宿类型：</strong><select index="hotel." id="room">\
                        <option value="0">--请选择--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input class="isStay" type="hidden" name="hotel.room">\
                    </li>\
	                <li style="display:none;"><strong>是否指定同住人：</strong><input class="required" name="hotel.isWith" type="radio" value="1" />是<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
	                <li class="hide" style="display:none;"><strong>同住人姓名：</strong><input name="hotel.withName" type="text" class="input-regist" /></li>\
	                <li class="hide" style="display:none;"><strong>同住人经销店：</strong><input name="hotel.withShop" type="text" class="input-regist" /></li>\
	               	</ol>\
	               <div class="tips">\
	                <font style="font-size:12px;"><strong>备注：</strong>1、按照酒店要求正常入住时间为当日14:00之后，如您提前到达，可在大堂休息区先行休息，事务局会尽快协助您办理入住</font>\
	                <font style="padding-left:36px; width:100%">2、本次大会事务局统一订房时间为1月15日至17日</font>\
	                <font style="padding-left:36px; width:100%">3、酒店住宿费用请您在签到处或前台自付</font>\
	            </div>\
	              <div class="operate"><a href="javascript:void(0);" class="save" index="submit">保存</a></div>\
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
                    <li>\
						<strong>* 来程交通方式：</strong>\
						<select index="traffic." id="departureTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				    	</select><input name="departureTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.departureTrafficTool">\
					</li>\
                    <li class="depar" style="display:none;"><strong>出发城市：</strong><input name="traffic.departureCity1" type="text" class="input-regist" /></li>\
					<li class="depar" style="display:none;">\
					<strong>抵达城市：</strong>\
					<select index="traffic." id="departureCity2">\
			            <option value="0">--请选择--</option>\
						{each selectArr[10] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
		          	</select><input type="hidden" name="traffic.departureCity2">\
					</li>\
                    <li class="depar" style="display:none;"><strong>航班号：</strong><input name="traffic.departureFlight" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达日期：</strong><input name="arrivalDate" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>抵达时间：</strong><input name="arrivalTime" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong>是否需要接机：</strong><input name="traffic.pickUp" type="radio" value="1" />是<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                    <li style="margin-top:20px;">\
						<strong>* 返程交通方式：</strong>\
						<select index="traffic." id="backTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[9] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="backTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.backTrafficTool">\
					</li>\
                    <li class="back" style="display:none;">\
						<strong>出发城市：</strong>\
						<select index="traffic." id="backCity2">\
				            <option value="0">--请选择--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				      	</select><input type="hidden" name="traffic.backCity2">\
					</li>\
                    <li class="back" style="display:none;"><strong>航班号：</strong><input name="traffic.backFlight" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>返程日期：</strong><input name="backDate" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>航班起飞时间：</strong><input name="backTime" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong>是否需要送机：</strong><input name="traffic.send" type="radio" value="1" />是<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" checked/>否</li>\
                   </ol>\
                   <div class="tips">\
                    <font style="font-size:12px;"><strong>备注：</strong>1、事务局会负责安排深圳、广州机场的接送机服务，选择其它交通方式的贵宾（如火车、汽车等），需自行安排前往酒店的交通</font>\
                    <font style="padding-left:36px; display:block; width:100%">2、系统关闭后，如有信息更改，请主动联系活动事务局进行信息更新，会务组联系方式：电话：400-110-3271；邮箱：service@ftmsdlr.cn</font>\
                </div>\
                  <div class="operate"><a href="javascript:void(0);" class="save" index="submit">保存</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="">\
                <h4>游览安排</h4>\
                <div class="content">\
                    <ol>\
                    <li><strong style="width:230px;">* 是否参加1月16日上午大区会议：</strong><div class="left"><input name="other.meeting" type="radio" value="1" />是<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" checked/>否</div><div style="padding-left:40px; float:left">*原则上大区会议为总经理参加 </div></li>\
                    <li><strong style="width:230px;">* 请选择您要参加的旅游线路：</strong><select index="other." id="touristRoute">\
			            <option value="0">--请选择--</option>\
						{each selectArr[6] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
			          </select><input name="touristRoute" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="other.touristRoute">\
					</li>\
                     <li><strong style="width:230px;">&nbsp;</strong><a href="travel.html" target="_blank">查看旅游线路</a></li>\
                     	<li class="touristRouteB"  style="display:none;"><strong style="width:230px;">您是否持有有效赴港证件：</strong>\
	                         <input name="pass" type="checkbox" value="1" style="margin-top:8px; float:left;" /><em>是</em>\
								<select index="other." id="hasPass">\
					            <option value="0">--请选择--</option>\
								{each selectArr[7] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.hasPass">\
						</li>\
                          <li class="touristRouteB" style="display:none;"><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" id="passCardTip">港澳通行证办理提示</a></li>\
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
                             <li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">如何分辨签注类型</a></li>\
                             <li><strong style="width:230px;">您的签注有效期至：</strong><input name="other.effectiveDate" type="text" class="input-regist" />\
                            </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">如何分辨签注有效期</a></li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证首页扫描件：</strong><input name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
                             <li><strong style="width:230px;">请上传您的港澳通行证签注页扫描件：</strong><input name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-签证页扫描件）</li>\
                         </div>\
                          <div style="display:none"  class="showMessage">\
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
                  <div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save" index="submit">保存</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4><span style="float:left">基本信息</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">展开</a><a href="javascript:void(0);" class="remove" index="user#{userType.users[index].id}">删除</a></div></h4>\
            <div style="display:none;" class="content">\
                <font>注：标“*”为必填项</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
					<input type="hidden" class="required" name="user.id" value="{userType.users[index].id}">\
                    <li><strong>* 姓名：</strong><input name="user.name" value="{userType.users[index].name}" type="text" class="input-regist required" /></li>\
                    <li><strong>* 姓别：</strong><input class="required" name="user.sex" type="radio" value="1" {if userType.users[index].sex == 1}checked{/if}/>男<input name="user.sex" type="radio" value="2"{if userType.users[index].sex == 2}checked{/if} style="margin-left:20px;" /> 女</li>\
					{if userType.type == 1}\
					<li>\
						<strong>* 公司：</strong><select  index="user." id="company">\
	                        <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {select userType.users[index].company t.value}>{t.name}</option>\
							{/each}\
                      	</select><input class="required" type="hidden" name="user.company" value="{userType.users[index].company}">\
					</li>\
					<li><strong>* 职位：</strong><input class="input-regist required" type="text" name="user.title" value="{userType.users[index].title}"></li>\
					{else}\
					<li>\
						<strong>* 职位：</strong>\
						<select index="user." id="title">\
				            <option value="0">--请选择--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {select userType.users[index].title t.value}>{t.name}</option>\
							{/each}\
				      	</select>\
						<input name="title" {selectHide userType.users[index].title} type="text" class="input-eat" />\
						<input class="required" type="hidden" name="user.title" value="{userType.users[index].title}">\
					</li>\
					{/if}\
                    <li><strong>* 出生日期：</strong><input name="user.birthDate" value="{dateFormat userType.users[index].birthDate}" type="text" class="input-regist required" /></li>\
                    <li><strong>* 国籍：</strong>\
						<select index="user." id="nationality">\
	                    	<option value="0">--请选择--</option>\
							{each selectArr[1] as n}\
				            <option value="{n.value}" {select userType.users[index].nationality n.value}>{n.name}</option>\
							{/each}\
                      	</select>\
						<input name="nationality" type="text" class="input-eat" {selectHide userType.users[index].nationality}/><input class="required" type="hidden" name="user.nationality" value="{userType.users[index].nationality}">\
                    </li>\
                    <li><strong>* 证件类型：</strong><select index="user." id="certificate">\
                        <option value="0">--请选择--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}" {cerSelect userType.users[index].certificate n.value}>{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate" value="{cerHide0 userType.users[index].certificate}">\
                    </li>\
                    <li><strong>* 证件号码：</strong><input name="cerNum" type="text" class="input-regist required"  value="{cerHide1 userType.users[index].certificate}"/></li>\
                    <li><strong>* 固定电话：</strong>\
						<input name="telephoneZone" value="{telephone userType.users[index].telephone 0}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" class="required" />\
						- <input name="telephoneNum" value="{telephone userType.users[index].telephone 1}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text" class="required"/>\
					</li>\
                    <li><strong>* 移动电话：</strong><input name="user.mobilePhone" value="{userType.users[index].mobilePhone}" type="text" class="input-regist required" /></li>\
                    <li><strong>* 电子邮箱：</strong><input name="user.email" value="{userType.users[index].email}" type="text" class="input-regist required" /></li>\
                    <li><strong>* 饮食忌口：</strong><select index="user." id="diet">\
                        <option value="0">--请选择--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}" {select userType.users[index].diet n.value}>{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" {selectHide userType.users[index].diet}/><input class="required" type="hidden" name="user.diet" value="{userType.users[index].diet}"></li>\
                </ul>\
                <font>如非本人填写，或者您希望事务局通过其他人联系到您, 请填写以下几项信息【可选填】</font>\
                <ul>\
                    <li><strong>联系人姓名：</strong><input name="user.contactName" value="{userType.users[index].contactName}" type="text" class="input-regist" /></li>\
                    <li><strong>联系电话：</strong>\
						<input name="contactTelephoneZone" value="{telephone userType.users[index].contactTelephone 0}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" />\
						- <input name="contactTelephoneNum" value="{telephone userType.users[index].contactTelephone 1}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text"/>\
					</li>\
                    <li><strong>手机号：</strong><input name="user.contactPhone" value="{userType.users[index].contactPhone}" type="text" class="input-regist" /></li>\
                    <li><strong>电子邮箱：</strong><input name="user.contactEmail" value="{userType.users[index].contactEmail}" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save" index="update">保存</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="{userType.users[index].id}">\
            <h4><span style="float:left">酒店安排</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">展开</a><a href="javascript:void(0);" class="remove" index="hotel#{userType.users[index].hotel.id}">删除</a></div></h4>\
	            <div style="display:none;" class="content">\
	                <ol>\
	                <li><strong>* 是否入住FTMS指定酒店：</strong>\
						<div class="left">\
							<input class="required" name="hotel.isStay" type="radio" value="1" {if userType.users[index].hotel.isStay == 1}checked{/if}/>是\
							<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].hotel.isStay != 1}checked{/if}/>否\
						</div>\
						<div style="padding-left:40px; float:left">*本次大会指定酒店：东莞嘉华酒店  <a href="javascript:void(0);" id="map">查看酒店地图</a></div>\
					</li>\
	                <li><strong>酒店入住日期：</strong><input name="hotel.inDate" value="{dateFormat userType.users[index].hotel.inDate}" type="text" class="input-regist isStay {if userType.users[index].hotel.isStay == 1}required{/if}" /></li>\
	                <li><strong>酒店离店日期：</strong><input name="hotel.outDate" value="{dateFormat userType.users[index].hotel.outDate}" type="text" class="input-regist isStay {if userType.users[index].hotel.isStay == 1}required{/if}" /></li>\
	                <li><strong>住宿类型：</strong>\
						<select index="hotel." id="room">\
                        <option value="0">--请选择--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}" {select userType.users[index].hotel.room n.value}>{n.name}</option>\
						{/each}\
                      	</select><input class="isStay {if userType.users[index].hotel.isStay == 1}required{/if}" type="hidden" value="{userType.users[index].hotel.room}" name="hotel.room">\
                    </li>\
	                <li {if userType.users[index].hotel.room != 2}style="display:none;"{/if} >\
						<strong>是否指定同住人：</strong>\
						<input class="required" name="hotel.isWith" type="radio" value="1" {if userType.users[index].hotel.isWith == 1}checked{/if}/>是\
						<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].hotel.isWith != 1}checked{/if}/>否\
					</li>\
	                <li class="hide" {if userType.users[index].hotel.isWith != 1}style="display:none;"{/if}><strong>同住人姓名：</strong><input name="hotel.withName" value="{userType.users[index].hotel.withName}" type="text" class="input-regist" /></li>\
	                <li class="hide" {if userType.users[index].hotel.isWith != 1}style="display:none;"{/if}><strong>同住人经销店：</strong><input name="hotel.withShop" value="{userType.users[index].hotel.withShop}" type="text" class="input-regist" /></li>\
	               	</ol>\
	               	<div class="tips">\
	                <font style="font-size:12px;"><strong>备注：</strong>1、按照酒店要求正常入住时间为当日14:00之后，如您提前到达，可在大堂休息区先行休息，事务局会尽快协助您办理入住</font>\
	                <font style="padding-left:36px; width:100%">2、本次大会事务局统一订房时间为1月15日至17日</font>\
	                <font style="padding-left:36px; width:100%">3、酒店住宿费用请您在签到处或前台自付</font>\
	            </div>\
	              <div class="operate"><a href="javascript:void(0);" class="save" index="update">保存</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('manage_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="{userType.users[index].id}">\
                <h4><span style="float:left">交通安排</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">展开</a><a href="javascript:void(0);" class="remove" index="traffic#{userType.users[index].traffic.id}">删除</a></div></h4>\
                <div style="display:none;" class="content">\
                    <font style="font-size:12px;">*请注意，您从居住地往返东莞的交通需要自行安排，请您提前安排行程，并于12月20日前将您确认后的交通安排信息填入下方。</font>\
                    <div class="tips">\
                        <font style="font-size:12px;"><strong>接送机服务：</strong>深圳宝安国际机场/广州新白云国际机场</font>\
                        <font style="padding-left:72px; width:100%">接机时间：15日 09:00-22:00 16日 09:00-12:00</font>\
                        <font style="padding-left:72px; width:100%">送机时间：17日 07:00-18:00 18日 07:00-18:00</font>\
					</div>\
                    <ol>\
                    <li>\
						<strong>* 来程交通方式：</strong>\
						<select index="traffic." id="departureTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.departureTrafficTool n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input name="departureTrafficTool" type="text" {selectHide userType.users[index].traffic.departureTrafficTool} class="input-eat" style="display:none;"/>\
						<input class="required" type="hidden" value="{userType.users[index].traffic.departureTrafficTool}" name="traffic.departureTrafficTool">\
					</li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong>出发城市：</strong><input name="traffic.departureCity1" value="{userType.users[index].traffic.departureCity1}" type="text" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
					<li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}>\
						<strong>抵达城市：</strong>\
						<select index="traffic." id="departureCity2">\
				            <option value="0">--请选择--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.departureCity2 n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input type="hidden" {if userType.users[index].traffic.departureTrafficTool == 1}class="required"{/if} value="{userType.users[index].traffic.departureCity2}" name="traffic.departureCity2">\
					</li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong>航班号：</strong><input name="traffic.departureFlight" value="{userType.users[index].traffic.departureFlight}" type="text" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong>抵达日期：</strong><input name="arrivalDate" type="text" value="{dateFormat userType.users[index].traffic.arrivalDate}" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong>抵达时间：</strong><input name="arrivalTime" type="text" value="{timeFormat userType.users[index].traffic.arrivalDate}" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong>是否需要接机：</strong><input name="traffic.pickUp" type="radio" value="1" {if userType.users[index].traffic.pickUp == 1}checked{/if}/>是<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;"  {if userType.users[index].traffic.pickUp != 1}checked{/if}/>否</li>\
                    <li style="margin-top:20px;">\
						<strong>* 返程交通方式：</strong>\
						<select index="traffic." id="backTrafficTool">\
				            <option value="0">--请选择--</option>\
							{each selectArr[9] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.backTrafficTool n.value}>{n.name}</option>\
							{/each}\
				    	</select>\
						<input name="backTrafficTool" type="text" {selectHide userType.users[index].traffic.backTrafficTool} class="input-eat" style="display:none;"/>\
						<input class="required" type="hidden" value="{userType.users[index].traffic.backTrafficTool}" name="traffic.backTrafficTool">\
					</li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}>\
						<strong>出发城市：</strong>\
						<select index="traffic." id="backCity2">\
				            <option value="0">--请选择--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.backCity2 n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input type="hidden" {if userType.users[index].traffic.backTrafficTool == 1}class="required"{/if} value="{userType.users[index].traffic.backCity2}" name="traffic.backCity2">\
					</li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong>航班号：</strong><input name="traffic.backFlight" value="{userType.users[index].traffic.backFlight}" type="text" class="input-regist {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong>返程日期：</strong><input name="backDate" value="{dateFormat userType.users[index].traffic.backDate}" type="text" class="input-regist {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong>航班起飞时间：</strong><input name="backTime" value="{timeFormat userType.users[index].traffic.backDate}" type="text" class="input-regist {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong>是否需要送机：</strong><input name="traffic.send" type="radio" value="1" {if userType.users[index].traffic.send == 1}checked{/if}/>是<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].traffic.send != 1}checked{/if}/>否</li>\
                   </ol>\
                   <div class="tips">\
                    <font style="font-size:12px;"><strong>备注：</strong>1、事务局会负责安排深圳、广州机场的接送机服务，选择其它交通方式的贵宾（如火车、汽车等），需自行安排前往酒店的交通</font>\
                    <font style="padding-left:36px; display:block; width:100%">2、系统关闭后，如有信息更改，请主动联系活动事务局进行信息更新，会务组联系方式：电话：400-110-3271；邮箱：service@ftmsdlr.cn</font>\
                </div>\
                  <div class="operate"><a href="javascript:void(0);" class="save" index="update">保存</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="{userType.users[index].id}">\
                <h4><span style="float:left">游览安排</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">展开</a><a href="javascript:void(0);" class="remove" index="other#{userType.users[index].other.id}">删除</a></div></h4>\
                <div style="display:none;" class="content">\
                    <ol>\
                    <li><strong style="width:230px;">* 是否参加1月16日上午大区会议：</strong>\
						<div class="left">\
							<input name="other.meeting" type="radio" value="1" {if userType.users[index].other.meeting == 1}checked{/if}/>是\
							<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].other.meeting != 1}checked{/if}/>否\
						</div>\
						<div style="padding-left:40px; float:left">*原则上大区会议为总经理参加 </div>\
					</li>\
                    <li><strong style="width:230px;">* 请选择您要参加的旅游线路：</strong>\
						<select index="other." id="touristRoute">\
				            <option value="0">--请选择--</option>\
							{each selectArr[6] as n}\
				            <option value="{n.value}" {select userType.users[index].other.touristRoute n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input class="required" type="hidden" name="other.touristRoute" value="{userType.users[index].other.touristRoute}">\
					</li>\
                    <li><strong style="width:230px;">&nbsp;</strong><a href="travel.html" target="_blank">查看旅游线路</a></li>\
                 	<li class="touristRouteB" {if userType.users[index].other.touristRoute != 2}style="display:none;"{/if}>\
						<strong style="width:230px;">您是否持有有效赴港证件：</strong>\
                    	<input name="pass" type="checkbox" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.hasPass != 0}checked{/if}/><em>是</em>\
						<select index="other." id="hasPass">\
				        	<option value="0">--请选择--</option>\
							{each selectArr[7] as n}\
				            <option value="{n.value}" {select userType.users[index].other.hasPass n.value}>{n.name}</option>\
							{/each}\
				    	</select><input type="hidden" name="other.hasPass" value="{userType.users[index].other.hasPass}">\
					</li>\
                   	<li class="touristRouteB" {if userType.users[index].other.touristRoute != 2}style="display:none;"{/if}><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" id="passCardTip">港澳通行证办理提示</a></li>\
                    <li style="color:#b91414">*请务必在报名后及时办理您的港澳通行证及签注, 并在办理完成后致电或邮件联系事务局反馈您的通行证信息</li>\
					<div {if userType.users[index].other.hasPass != 1}style="display:none"{/if}  class="showMessage">\
						<li><strong style="width:230px;">您的港澳通行证是否具有有效签注：</strong>\
							<input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.isVisa != 2}checked{/if}/><em>是</em>\
							<input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" {if userType.users[index].other.isVisa == 2}checked{/if}/><em>即将办理</em>\
						</li>\
						<li><strong style="width:230px;">您的港澳通行证的签注类型是：</strong>\
							<input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.sign != 2}checked{/if}/><em>G签</em>\
							<input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" {if userType.users[index].other.sign == 2}checked{/if}/><em>L签</em>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">如何分辨签注类型</a></li>\
						<li><strong style="width:230px;">您的签注有效期至：</strong><input name="other.effectiveDate" value="{dateFormat userType.users[index].other.effectiveDate}" type="text" class="input-regist" />\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">如何分辨签注有效期</a></li>\
						<li><strong style="width:230px;">请上传您的港澳通行证首页扫描件：</strong><input name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-首页扫描件）</li>\
						<li><strong style="width:230px;">请上传您的港澳通行证签注页扫描件：</strong><input name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong>（*图片命名格式：姓名-签证页扫描件）</li>\
					</div>\
                  	<div {if userType.users[index].other.touristRoute == 4 || userType.users[index].other.touristRoute == 0}style="display:none;"{/if}  class="showMessage">\
                      	<li>游览完毕后您是否随统一大巴返回东莞住宿酒店：<br />\
                          	<input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" {if userType.users[index].other.touristBack == 1 || userType.users[index].other.touristBack == 0}checked{/if}/><em>是</em><br />\
                          	<input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" {if userType.users[index].other.touristBack == 2}checked{/if}/><em>否，我自行从香港离开</em><br />\
                          	<input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" {if userType.users[index].other.touristBack == 3}checked{/if}/><em>否，我自行从深圳离开</em>\
                      	</li>\
                  	</div>\
                 	<div {if userType.users[index].other.touristRoute != 4}style="display:none;"{/if} class="showMessage">\
                      	<li><strong>是否打球：</strong>\
                          	<input name="other.isPlay" type="radio" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.isPlay == 1}checked{/if}/><em>是</em>\
                          	<input name="other.isPlay" type="radio" value="2" style="margin-top:8px; float:left;" {if userType.users[index].other.isPlay != 1}checked{/if}/><em>否</em>\
                      	</li>\
                      	<li><strong>打球差点：</strong><input name="other.playAlmost" value="{userType.users[index].other.playAlmost}" type="text" class="input-regist" /></li>\
                      	<li style="color:#b91414"><strong>&nbsp;</strong>(*请准确提供您的差点证明, 我们将据此为您安排分组)</li>\
                      	<li><strong>身高：</strong><input name="other.stature" type="text" class="input-regist" value="{userType.users[index].other.stature}"/>CM</li>\
                      	<li><strong>服装号码：</strong>\
							<select index="other." id="playSize">\
			            		<option value="0">--请选择--</option>\
								{each selectArr[8] as n}\
			            		<option value="{n.value}" {select userType.users[index].other.playSize n.value}>{n.name}</option>\
								{/each}\
			          		</select><input type="hidden" name="other.playSize" value="{userType.users[index].other.playSize}">\
                      	</li>\
                  	</div>\
                   	</ol>\
                   	<div class="tips-attention">\
	                    <font style="font-size:12px;"><strong>注意事项：</strong></font>\
	                    <font style="font-size:12px;">1、注册信息只可提交一次，信息提交后可通过点击“信息管理”进入账户信息管理界面进行信息修改</font>\
	                    <font style="font-size:12px;">2、报名系统分阶段关闭，系统一旦关闭，网页上将无法进行信息修改，请各位贵宾在填写时务必确保信息的准确性，如系统关闭后仍有信息变动，请主动联系大会事务局告知变动内容</font>\
	                    <font style="font-size:12px;">3、大会报名和进行期间，事务局会通过短信和邮件提示和告知大会各项安排以及统一发放温馨提示，届时请您注意查收</font>\
                	</div>\
                  	<div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save" index="update">保存</a></div>\
            	</div>\
			</div></form>'
	);
	
})();