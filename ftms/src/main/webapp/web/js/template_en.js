(function(){
	
	template.compile('pass',
			'<div style="line-height: 14px;"><div class="indent">Exit-Entry Permit for Travelling to and from Hong Kong and Macau is a travel document for private visit to the Chinese Special Administrative Regions of Hong Kong and Macau for non-government purposes such as travel, family reunion, business, training, employment and study, which is issued by Bureau of Exit and Entry Administration of the Chinese Ministry of Public Security to inland Chinese residents. Before visiting Hong Kong or Macau, an endorsement of the visiting purpose should be issued by inland public security bureau (such as group tour, personal travel, business or other endorsements).</div>\
		　　　<div class="indent"><span>Permit type:</span>personal travel, group tour</div>\
		　　　<div class="indent"><span>Charge: </span>100 yuan for per Exit-Entry Permit for Travelling to and from Hong Kong and Macau; 20 yuan for each endorsement per time.</div>\
		　　　<div class="indent"><span>Approval time limit:</span>generally it will take around 15 work days<font>(this time limit is only for your information, and particulars shall be subject to inform of local Exit and Entry Administration Office.)</font></div>\
		　　　<div class="indent"><span>Approval process of inland residents’ exiting and entering Hong Kong and Macau for private visit</span></div>\
	　　　　　　<div class="indent">1. Hand over the original copy of your personal identification card and residence booklet for examination, and submit copies;</div>\
		　　　<div class="indent">2. Submit two small two-inch color full face photos of white background, or go to local Exit and Entry Administration Office and take photos, which generally takes about 40 yuan, and particulars shall be subject to offer of local Exit and Entry Administration Office;</div>\
		　　　<div class="indent">3. Submit fully-filled application form;</div>\
			<div class="indent">4. Must report and handle the loss of Exit-Entry Permit for Travelling to and from Hong Kong and Macau in advance if it has been lost.</div>\
		　　　<div class="indent"><span>Announcements:</span></div>\
		　　　<div class="indent">1. Those who visit Hong Kong or Macau for personal travel will be issued “G” personal travel endorsement, with which you can stay in Hong Kong or Macau for no more than seven days.</div>\
		　　　<div class="indent">2. Those who visit Hong Kong or Macau for group tour will be issued “L” group tour endorsement, with which you can stay in Hong Kong or Macau for no more than seven days, and have to exit and enter as teams.</div>\
		　　　<div class="indent">3. Endorsement can be apply for again if it is out of date or has been used; need to notice the period of validity of the permit, meaning “period of validity on the photo page” is in six months; you may need to verify with local Exit and Entry Administration Office whether your need to be issued a new permit to handle endorsement.</div>\
			<div class="indent">4. If inland resident’s Exit-Entry Permit for Travelling to and from Hong Kong and Macau is lost in inland or damaged, should apply for Exit-Entry Permit for travelling to and from Hong Kong and Macau and endorsement again. Corresponding documentation should be submitted during application. It is suggested that applicant who has lost permit submit a documentation lost statement in writing.</div></div>'
		);
		
	
	template.compile('regist_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4>Personal information</h4>\
            <div class="content">\
                <span>Distinguished sir/ madam, how are you!<br />Welcome to attend 2014 National Dealers Convention of FAW Toyota. Please successively fill in each part of information related to this activity.</span>\
                <font style="padding-left:250px;">【mandatory】</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
                    <li><strong>* Name:</strong><input name="user.name" type="text" class="input-regist required" /></li>\
                    <li><strong>* Gender:</strong><input class="required" name="user.sex" type="radio" value="1" checked/>male<input name="user.sex" type="radio" value="2" style="margin-left:20px;" />female</li>\
					{if userType.type == 1}\
						<li><strong>* Company:</strong><select index="user." id="company">\
			            <option value="0">--Please choose--</option>\
						{each selectArr[0] as t}\
			            <option value="{t.value}">{t.name}</option>\
						{/each}\
			      	</select><input name="company" type="text" class="input-eat" /><input class="required" type="hidden" name="user.company"></li>\
					<li><strong>* Position:</strong><input class="input-regist required" type="text" name="user.title"></li>\
					{else}\
					<li><strong>* Position:</strong><select index="user." id="title">\
			            <option value="0">--Please choose--</option>\
						{each selectArr[0] as t}\
			            <option value="{t.value}">{t.name}</option>\
						{/each}\
			      	</select><input name="title" type="text" class="input-eat" /><input class="required" type="hidden" name="user.title"></li>\
					{/if}\
                    <li><strong>* Date of birth:</strong><input name="user.birthDate" type="text" class="input-regist required" /></li>\
                    <li><strong>* Nationality:</strong><select index="user." id="nationality">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input class="required" type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>* ID type:</strong><select index="user." id="certificate">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>* ID number:</strong><input name="cerNum" type="text" class="input-regist required" /></li>\
                    <li><strong>* Telephone:</strong>\
						<input name="telephoneZone" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" class="required" />\
						- <input name="telephoneNum" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text" class="required"/>\
					</li>\
                    <li><strong>* Mobile phone:</strong><input name="user.mobilePhone" type="text" class="input-regist required" /></li>\
                    <li><strong>* E-mail:</strong><input name="user.email" type="text" class="input-regist required" /></li>\
                    <li><strong>* Diet taboos:</strong><select index="user." id="diet">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input class="required" type="hidden" name="user.diet"></li>\
                </ul>\
                <font style="padding-left:20px;">If it is not filled by yourself, or you wish the affairs division would contact you through others, please fill in the following information.【Optional】</font>\
                <ul>\
                    <li><strong>Name of contact person:</strong><input name="user.contactName" type="text" class="input-regist" /></li>\
                    <li><strong>Contact number:</strong>\
						<input name="contactTelephoneZone" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" />\
						- <input name="contactTelephoneNum" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text"/>\
					</li>\
                    <li><strong>Mobile phone number:</strong><input name="user.contactPhone" type="text" class="input-regist" /></li>\
                    <li><strong>E-mail:</strong><input name="user.contactEmail" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save" index="submit">Submit</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="">\
            <h4>Hotel arrangement</h4>\
	            <div class="content">\
					{if userType.type == 2}\
					<font>* The closing time point of hotel module website system is 24:00, November 28th, and you can e-mail or call the affairs division to modify your hotel information offline after the system being closed. It should be paid special attention to that the deadline of modifying hotel information offline is 18:00, December 20th, and the affairs division will make hotel reservation for your according to the hotel information you submitted in advance; in principle the room having been booked can’t be changed and the corresponding expenses should be paid along with checking in.</font>\
					{/if}\
	                <ol>\
	                <li><strong style="width:350px;">* Whether check into the hotel appointed by FTMS:</strong>\
						<div class="left">\
							<input class="required" name="hotel.isStay" type="radio" value="1" />Yes\
							<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" checked/>No\
						</div>\
						<div style="clear:both;padding-left:40px; float:left">\
							*Appointed hotel of this convention: Dongguan Jiahua Hotel\
							<a href="javascript:void(0);" id="map">check the map of the hotel</a>\
						</div>\
					</li>\
	                <li class="stayHide" style="display:none;"><strong style="width:350px;">Check in date:</strong><input name="hotel.inDate" type="text" class="input-regist isStay" /></li>\
	                <li class="stayHide" style="display:none;"><strong style="width:350px;">Check out date:</strong><input name="hotel.outDate" type="text" class="input-regist isStay" /></li>\
	                <li class="stayHide" style="display:none;"><strong style="width:350px;">Accommodation type:</strong><select index="hotel." id="room">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input class="isStay" type="hidden" name="hotel.room">\
                    </li>\
	                <li class="stayHide" style="display:none;">\
						<strong style="width:350px;">Whether assign roommate sharing room with you:</strong>\
						<div class="left">\
							<input class="required" name="hotel.isWith" type="radio" value="1" />Yes\
							<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" checked/>No\
						</div>\
						<div style="padding-left:40px; float:left">the convention affairs division will make unified arrangement if doesn’t assign roommate.</div>\
					</li>\
	                <li class="hide stayHide" style="display:none;"><strong style="width:350px;">Name of roommate:</strong><input name="hotel.withName" type="text" class="input-regist isStay" /></li>\
	                <li class="hide stayHide" style="display:none;"><strong style="width:350px;">The outlet your roommate belongs to:</strong><input name="hotel.withShop" type="text" class="input-regist isStay" /></li>\
	               	</ol>\
	               	<div class="tips">\
		                <font style="font-size:12px;"><strong>Remarks:</strong></font>\
						<font style="padding-left:36px; width:100%">1. According to the requirements of the hotel, normal check in time is after 14:00 of the day; if you arrive in advance you can have a rest in the resting area in the hall and the affairs division will help you checking in as soon as possible.</font>\
			            <font style="padding-left:36px; width:100%">2. The unified room reservation time of this convention is January 15th to 17th.</font>\
			            <font style="padding-left:36px; width:100%">3. Please pay the accommodation expense by yourself at the registration department or reception desk.</font>\
	            	</div>\
	        	<div class="operate"><a href="javascript:void(0);" class="save" index="submit">Submit</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('regist_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="">\
                <h4>Transfer arrangement</h4>\
                <div class="content">\
                    <font style="font-size:12px;">*Please note that the round-trip traffic from your residence place to Guangzhou/Shenzhen needs to be arranged by yourself, so please arrange your journey in advance, and fill your affirmed traffic arrangement information into below before December 20th.<br/>* It should be paid special attention to that the closing time point of traffci module website system is 24:00, December 10th, and you can e-mail or call the affairs division to modify your traffic information offline after the system being closed; the deadline of modifying traffic information offline is 18:00, December 20th.</font>\
                    <div class="tips">\
						<font style="font-size:12px;float:none;"><strong>Airport pick-up and drop-off service:</strong></font>\
						<font style="padding-left:72px;float:none;">Shenzhen Bao’an International Airport/Guangzhou New Baiyun International Airport</font>\
			            <font style="padding-left:72px;float:none;">Airport pick-up time: January 15th 09:00-22:00, 16th 09:00-12:00</font>\
			            <font style="padding-left:72px;float:none;">Airport drop-off time: January 17th 07:00-18:00, 18th 07:00-18:00</font>\
						<font style="padding-left:72px;float:none;">those who participate TMCI conference: Guangzhou ** Hotel to Dongguan Jiahua Hotel, 16th , time: to be confirmed</font>\
						<font style="padding-left:72px;float:none;">those who participate GTMC conference: Guangzhou ** Hotel to Shenzhen Shekou Ferry Teminal, 17th , time: to be confirmed</font>\
					</div>\
                    <ol>\
                    <li><strong style="width:380px;">* Means of transportation to come:</strong><select index="traffic." id="departureTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="departureTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.departureTrafficTool">\
					</li>\
					<div class="tips">\
			            <font style="font-size:12px;"><strong>Notice:</strong>for the guests participating TMCI conference at Guangzhou ** Hotel, TMCI affairs division will arrange vehicles to transfer you from Guangzhou ** Hotel to Dongguan Jiahua Hotel, and you can choose to use according to your own requirements.</font>\
			    	</div>\
                    <li class="depar" style="display:none;"><strong style="width:380px;">Departure city:</strong><input name="traffic.departureCity1" type="text" class="input-regist" /></li>\
					<li class="depar" style="display:none;">\
						<strong style="width:380px;">Destination city:</strong>\
						<select index="traffic." id="departureCity2">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
			          	</select><input type="hidden" name="traffic.departureCity2">\
					</li>\
                    <li class="depar" style="display:none;"><strong style="width:380px;">Flight number:</strong><input name="traffic.departureFlight" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong style="width:380px;">Date of arrival:</strong><input name="arrivalDate" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong style="width:380px;">Time of arrival:</strong><input name="arrivalTime" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;">\
						<strong style="width:380px;">Whether need airport pick-up service:</strong>\
						<input name="traffic.pickUp" type="radio" value="1" />Yes\
						<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;" checked/>No\
					</li>\
                    <li style="margin-top:20px;"><strong style="width:380px;">* Means of transportation to return:</strong><select index="traffic." id="backTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[9] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="backTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.backTrafficTool">\
					</li>\
					<div class="tips">\
			            <font style="font-size:12px;"><strong>Notice:</strong>for the guests who will go Macau to participate GTMC conference on 17th, affairs division will arrange vehicles to transfer you from Dongguan Jiahua Hotel to Shenzhen Shekou Ferry Terminal, and you can choose to use according to your own requirements.</font>\
			    	</div>\
					<li class="back" style="display:none;">\
						<strong style="width:380px;">Departure city:</strong>\
						<select index="traffic." id="backCity2">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				      	</select><input type="hidden" name="traffic.backCity2">\
					</li>\
                    <li class="back" style="display:none;"><strong style="width:380px;">Flight number:</strong><input name="traffic.backFlight" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong style="width:380px;">Date of arrival:</strong><input name="backDate" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong style="width:380px;">Take off time:</strong><input name="backTime" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;">\
						<strong style="width:380px;">Whether need airport drop-off service:</strong>\
						<input name="traffic.send" type="radio" value="1" />Yes\
						<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" checked/>No\
					</li>\
                   	</ol>\
                   	<div class="tips">\
						<font style="font-size:12px;"><strong>Remarks:</strong></font>\
			            <font style="font-size:12px;">1. Affairs division will be responsible to for arranging airport pick-up and drop-off service of Shenzhen and Guangzhou airport, and guests choosing other transportation means (such as train or cars) need to arrange the transfer to hotel by your own.</font>\
			            <font style="display:block; width:100%">2. After the switching off of system, please proactively contact the affairs division for information update if there is any information change, contact the committee: telephone: 400-110-3271;e-mail: <a style="color:blue;" href="mailto:service@ftmsdlr.cn">service@ftmsdlr.cn</a></font>\
                	</div>\
                  	<div class="operate"><a href="javascript:void(0);" class="save" index="submit">Submit</a></div>\
            	</div>\
			</div></form>'
	);
	
	template.compile('regist_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="">\
                <h4>Commercial activities</h4>\
                <div class="content">\
					<font>* It should be paid special attention to that the closing time point of commercial activities module website system is 24:00, December 10th, and you can e-mail or call the affairs division to modify your commercial activities information offline after the system being closed. The deadline of modifying commercial activities information offline is 18:00, December 20th.</font>\
                    <ol>\
                    <li>\
						<strong style="width:380px;">* Whether attend the regional conference on January 16th:</strong>\
						<div class="left">\
							<input name="other.meeting" type="radio" value="1" />Yes\
							<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" checked/>No\
						</div>\
						<div style="padding-left:40px; float:left">*in principle regional conference is attended by general managers</div>\
					</li>\
                    <li>\
						<strong style="width:430px;">* Please choose a commercial activity route you want to participate:</strong>\
						<select index="other." id="touristRoute">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[6] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
			          	</select><input name="touristRoute" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="other.touristRoute">\
					</li>\
                 	<li><strong style="width:230px;">&nbsp;</strong><a href="travel.html#review" target="_blank">Check commercial activity routes</a></li>\
					<li class="touristRouteB"  style="display:none;">\
						<strong style="width:380px;">Do you hold valid documentation to go to Hong Kong:</strong>\
						<input name="pass" type="radio" value="1" />Yes\
						<input name="pass" type="radio" value="3" style="margin-left:20px;" checked/>In progress\
					</li>\
					<li class="passHide" style="display:none;">\
						<strong style="width:380px;">&nbsp;</strong>\
						<select index="other." id="hasPass">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[7] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				    	</select>\
						<input type="hidden" name="other.hasPass" value="3" class="required">\
					</li>\
					<li class="touristRouteB" style="display:none;"><strong style="width:230px;">&nbsp;</strong><a  href="javascript:void(0);" id="passCardTip">Exit－Entry Permit for Travelling to and from Hong Kong and Macau handling tips</a></li>\
		            <li class="touristRouteB" style="color:#b91414;display:none;">*Please be sure to handle your Exit－Entry Permit for Travelling to and from Hong Kong and Macau and endorsement in time after your applying, and feedback your permit information to affairs division in time by telephone or e-mail after you finishing handling.</li>\
					<li class="hasPassHide" style="display:none;"><strong style="width:380px;">Does your Exit－Entry Permit for Travelling to and from Hong Kong and Macau have valid endorsement:</strong>\
						<input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;"/><em>Yes</em>\
						<input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" checked/><em>to be handled</em>\
					</li>\
                    <div style="display:none"  class="showMessage">\
                        <li><strong style="width:380px;">The endorsement type of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau is:</strong>\
                            <input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>G endorsement</em>\
							<input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" /><em>L endorsement</em>\
                        </li>\
                        <li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">how to distinguish endorsement type</a></li>\
                        <li><strong style="width:380px;">Your endorsement is valid until:</strong><input name="other.effectiveDate" type="text" class="input-regist" />\
                    	</li>\
                        <li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">how to distinguish endorsement’s period of valid</a></li>\
                        <li><strong style="width:580px;">Please upload the scanning copy of the first page of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau:</strong>\
							<input style="width:140px;" name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                        </li>\
                        <li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
                        <li><strong  style="width:580px;">Please upload the scanning copy of the endorsement page of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau:</strong>\
							<input style="width:140px;" name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                        </li>\
                        <li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
                  	</div>\
                  	<div style="display:none"  class="showMessage touristRouteB">\
                      	<li>Will you return to Dongguan and stay in hotel by unified bus after finishing visit:<br />\
                          	<input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" checked/><em>Yes</em><br />\
                          	<input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave from Hong Kong by myself</em><br />\
                          	<input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave form Shenzhen by myself</em>\
                      	</li>\
                  	</div>\
                 	<div style="display:none;" class="showMessage">\
                      	<li><strong style="width:380px;">Playing handicap:</strong><input name="other.playAlmost" type="text" class="input-regist" /></li>\
				      	<li style="color:#b91414">*please provide your handicap certification accurately so that we can arrange the grouping for you according to it</li>\
                      	<li><strong style="width:380px;">Height:</strong><input name="other.stature" type="text" class="input-regist" />cm</li>\
                      	<li><strong style="width:380px;">Clothing size:</strong>\
							<select index="other." id="playSize">\
			            		<option value="0">--Please choose--</option>\
								{each selectArr[8] as n}\
			            		<option value="{n.value}">{n.name}</option>\
								{/each}\
			          		</select><input type="hidden" name="other.playSize">\
                      	</li>\
						<li><strong style="width:380px;">Means of transportation after match:</strong>\
							<select index="other." id="playBack">\
								<option value="0">--Please choose--</option>\
								{each selectArr[11] as n}\
								<option value="{n.value}">{n.name}</option>\
								{/each}\
							</select><input type="hidden" name="other.playBack">\
						</li>\
						<div class="tips">\
							*17日高尔夫比赛结束后，事务局会各安排一辆车辆分别前往东莞嘉华酒店、深圳宝安机场和广州白云机场，请您根据自身需求，选择乘坐\
						</div>\
                  	</div>\
               		</ol>\
					<div class="tips"><font><strong>Remarks:</strong>all commercial activities routes have a minium of 35 people, and if the actual number of participants is less than 35 the affairs division will reserve the right to adjust your commercial activities route according to actual conditions.</font></div>\
                  	<div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save" index="submit">Submit</a></div>\
        		</div>\
			</div>\
		</form>'
	);
	
	template.compile('manage_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4><span style="float:left">Personal information</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">Unfold</a><a href="javascript:void(0);" class="remove" index="user#{userType.users[index].id}">Delete</a></div></h4>\
            <div style="display:none;" class="content">\
				<span>Distinguished sir/ madam, how are you!<br />Welcome to attend 2014 National Dealers Convention of FAW Toyota. Please successively fill in each part of information related to this activity.</span>\
	            <font style="padding-left:250px;">【mandatory】</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
					<input type="hidden" class="required" name="user.id" value="{userType.users[index].id}">\
                    <li><strong>* Name:</strong><input name="user.name" value="{userType.users[index].name}" type="text" class="input-regist required" /></li>\
                    <li><strong>* Gender:</strong><input class="required" name="user.sex" type="radio" value="1" {if userType.users[index].sex == 1}checked{/if}/>male<input name="user.sex" type="radio" value="2"{if userType.users[index].sex == 2}checked{/if} style="margin-left:20px;" />female</li>\
					{if userType.type == 1}\
						<li><strong>* Company:</strong><select  index="user." id="company">\
	                        <option value="0">--Please choose--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {select userType.users[index].company t.value}>{t.name}</option>\
							{/each}\
                      	</select><input class="required" type="hidden" name="user.company" value="{userType.users[index].company}"></li>\
						<li><strong>* Position:</strong><input class="input-regist required" type="text" name="user.title" value="{userType.users[index].title}"></li>\
					{else}\
						<li><strong>* Position:</strong>\
						<select index="user." id="title">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}" {select userType.users[index].title t.value}>{t.name}</option>\
							{/each}\
				      	</select>\
						<input name="title" {selectHide userType.users[index].title} type="text" class="input-eat" />\
						<input class="required" type="hidden" name="user.title" value="{userType.users[index].title}">\
						</li>\
					{/if}\
                    <li><strong>* Date of birth:</strong><input name="user.birthDate" value="{dateFormat userType.users[index].birthDate}" type="text" class="input-regist required" /></li>\
                    <li><strong>* Nationality:</strong>\
						<select index="user." id="nationality">\
	                    	<option value="0">--Please choose--</option>\
							{each selectArr[1] as n}\
				            <option value="{n.value}" {select userType.users[index].nationality n.value}>{n.name}</option>\
							{/each}\
                      	</select>\
						<input name="nationality" type="text" class="input-eat" {selectHide userType.users[index].nationality}/><input class="required" type="hidden" name="user.nationality" value="{userType.users[index].nationality}">\
                    </li>\
                    <li><strong>* ID type:</strong><select index="user." id="certificate">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}" {cerSelect userType.users[index].certificate n.value}>{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate" value="{cerHide0 userType.users[index].certificate}">\
                    </li>\
                    <li><strong>* ID number:</strong><input name="cerNum" type="text" class="input-regist required"  value="{cerHide1 userType.users[index].certificate}"/></li>\
                    <li><strong>* Telephone:</strong>\
						<input name="telephoneZone" value="{telephone userType.users[index].telephone 0}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" class="required" />\
						- <input name="telephoneNum" value="{telephone userType.users[index].telephone 1}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text" class="required"/>\
					</li>\
                    <li><strong>* Mobile phone:</strong><input name="user.mobilePhone" value="{userType.users[index].mobilePhone}" type="text" class="input-regist required" /></li>\
                    <li><strong>* E-mail:</strong><input name="user.email" value="{userType.users[index].email}" type="text" class="input-regist required" /></li>\
                    <li><strong>* Diet taboos:</strong><select index="user." id="diet">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}" {select userType.users[index].diet n.value}>{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" {selectHide userType.users[index].diet}/><input class="required" type="hidden" name="user.diet" value="{userType.users[index].diet}"></li>\
                </ul>\
				<font style="padding-left:20px;">If it is not filled by yourself, or you wish the affairs division would contact you through others, please fill in the following information.【Optional】</font>\
                <ul>\
                    <li><strong>Name of contact person:</strong><input name="user.contactName" value="{userType.users[index].contactName}" type="text" class="input-regist" /></li>\
                    <li><strong>Contact number:</strong>\
						<input name="contactTelephoneZone" value="{telephone userType.users[index].contactTelephone 0}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:70px;" type="text" />\
						- <input name="contactTelephoneNum" value="{telephone userType.users[index].contactTelephone 1}" style="border: 1px solid #CFCFCF;height: 24px;line-height: 24px;padding-left: 4px;width:180px;" type="text"/>\
					</li>\
                    <li><strong>Mobile phone number:</strong><input name="user.contactPhone" value="{userType.users[index].contactPhone}" type="text" class="input-regist" /></li>\
                    <li><strong>E-mail:</strong><input name="user.contactEmail" value="{userType.users[index].contactEmail}" type="text" class="input-regist" /></li>\
                </ul>\
			{if compare1()}<div class="operate"><a href="javascript:void(0);" class="save" index="update">Submit</a></div>{/if}\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="{userType.users[index].id}">\
            <h4><span style="float:left">Hotel arrangement</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">Unfold</a><a href="javascript:void(0);" class="remove" index="hotel#{userType.users[index].hotel.id}">Delete</a></div></h4>\
	            <div style="display:none;" class="content">\
					{if userType.type == 2}\
					<font>* The closing time point of hotel module website system is 24:00, November 28th, and you can e-mail or call the affairs division to modify your hotel information offline after the system being closed. It should be paid special attention to that the deadline of modifying hotel information offline is 18:00, December 20th, and the affairs division will make hotel reservation for your according to the hotel information you submitted in advance; in principle the room having been booked can’t be changed and the corresponding expenses should be paid along with checking in.</font>\
					{/if}\
	                <ol>\
	                <li><strong style="width:350px;">* Whether check into the hotel appointed by FTMS:</strong>\
						<div class="left">\
							<input class="required" name="hotel.isStay" type="radio" value="1" {if userType.users[index].hotel.isStay == 1}checked{/if}/>Yes\
							<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].hotel.isStay != 1}checked{/if}/>No\
						</div>\
						<div style="clear:both;padding-left:40px; float:left">\
							*Appointed hotel of this convention: Dongguan Jiahua Hotel\
							<a href="javascript:void(0);" id="map">check the map of the hotel</a>\
						</div>\
					</li>\
	                <li class="stayHide" {if userType.users[index].hotel.isStay != 1}style="display:none;"{/if}><strong style="width:350px;">Check in date:</strong><input name="hotel.inDate" value="{dateFormat userType.users[index].hotel.inDate}" type="text" class="input-regist  isStay {if userType.users[index].hotel.isStay == 1}required{/if}" /></li>\
	                <li class="stayHide" {if userType.users[index].hotel.isStay != 1}style="display:none;"{/if}><strong style="width:350px;">Check out date:</strong><input name="hotel.outDate" value="{dateFormat userType.users[index].hotel.outDate}" type="text" class="input-regist  isStay {if userType.users[index].hotel.isStay == 1}required{/if}" /></li>\
	                <li class="stayHide" {if userType.users[index].hotel.isStay != 1}style="display:none;"{/if}><strong style="width:350px;">Accommodation type:</strong><select index="hotel." id="room">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}" {select userType.users[index].hotel.room n.value}>{n.name}</option>\
						{/each}\
                      </select><input class=" isStay {if userType.users[index].hotel.isStay == 1}required{/if}" type="hidden" value="{userType.users[index].hotel.room}" name="hotel.room">\
                    </li>\
	                <li class="stayHide" {if userType.users[index].hotel.room != 2}style="display:none;"{/if}>\
						<strong style="width:350px;">Whether assign roommate sharing room with you:</strong>\
						<div class="left">\
							<input class="required" name="hotel.isWith" type="radio" value="1" {if userType.users[index].hotel.isWith == 1}checked{/if}/>Yes\
							<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].hotel.isWith != 1}checked{/if}/>No\
						</div>\
						<div style="padding-left:40px; float:left">the convention affairs division will make unified arrangement if doesn’t assign roommate.</div>\
					</li>\
	                <li class="hide stayHide" {if userType.users[index].hotel.isWith != 1}style="display:none;"{/if}><strong style="width:350px;">Name of roommate:</strong><input name="hotel.withName" value="{userType.users[index].hotel.withName}" type="text" class="input-regist isStay" /></li>\
	                <li class="hide stayHide" {if userType.users[index].hotel.isWith != 1}style="display:none;"{/if}><strong style="width:350px;">The outlet your roommate belongs to:</strong><input name="hotel.withShop" value="{userType.users[index].hotel.withShop}" type="text" class="input-regist isStay" /></li>\
	               	</ol>\
	               	<div class="tips">\
						<font style="font-size:12px;"><strong>Remarks:</strong></font>\
						<font style="padding-left:36px; width:100%">1. According to the requirements of the hotel, normal check in time is after 14:00 of the day; if you arrive in advance you can have a rest in the resting area in the hall and the affairs division will help you checking in as soon as possible.</font>\
			            <font style="padding-left:36px; width:100%">2. The unified room reservation time of this convention is January 15th to 17th.</font>\
			            <font style="padding-left:36px; width:100%">3. Please pay the accommodation expense by yourself at the registration department or reception desk.</font>\
		            </div>\
			{if compare1()}<div class="operate"><a href="javascript:void(0);" class="save" index="update">Submit</a></div>{/if}\
	        </div>\
	    </div></form>'
	);
	
	template.compile('manage_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="{userType.users[index].id}">\
                <h4><span style="float:left">Transfer arrangement</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">Unfold</a><a href="javascript:void(0);" class="remove" index="traffic#{userType.users[index].traffic.id}">Delete</a></div></h4>\
                <div style="display:none;" class="content">\
					<font style="font-size:12px;">*Please note that the round-trip traffic from your residence place to Guangzhou/Shenzhen needs to be arranged by yourself, so please arrange your journey in advance, and fill your affirmed traffic arrangement information into below before December 20th.<br/>* It should be paid special attention to that the closing time point of traffci module website system is 24:00, December 10th, and you can e-mail or call the affairs division to modify your traffic information offline after the system being closed; the deadline of modifying traffic information offline is 18:00, December 20th.</font>\
					<div class="tips">\
						<font style="font-size:12px;float:none;"><strong>Airport pick-up and drop-off service:</strong></font>\
						<font style="padding-left:72px; float:none;">Shenzhen Bao’an International Airport/Guangzhou New Baiyun International Airport</font>\
			            <font style="padding-left:72px; float:none;">Airport pick-up time: January 15th 09:00-22:00, 16th 09:00-12:00</font>\
			            <font style="padding-left:72px; float:none;">Airport drop-off time: January 17th 07:00-18:00, 18th 07:00-18:00</font>\
						<font style="padding-left:72px; float:none;">those who participate TMCI conference: Guangzhou ** Hotel to Dongguan Jiahua Hotel, 16th , time: to be confirmed</font>\
						<font style="padding-left:72px; float:none;">those who participate GTMC conference: Guangzhou ** Hotel to Shenzhen Shekou Ferry Teminal, 17th , time: to be confirmed</font>\
					</div>\
                    <ol>\
                    <li><strong style="width:380px;">* Means of transportation to come:</strong>\
						<select index="traffic." id="departureTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.departureTrafficTool n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input name="departureTrafficTool" type="text" {selectHide userType.users[index].traffic.departureTrafficTool} class="input-eat" style="display:none;"/>\
						<input class="required" type="hidden" value="{userType.users[index].traffic.departureTrafficTool}" name="traffic.departureTrafficTool">\
					</li>\
					<div class="tips">\
			            <font style="font-size:12px;"><strong>Notice:</strong>for the guests participating TMCI conference at Guangzhou ** Hotel, TMCI affairs division will arrange vehicles to transfer you from Guangzhou ** Hotel to Dongguan Jiahua Hotel, and you can choose to use according to your own requirements.</font>\
			    	</div>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Departure city:</strong><input name="traffic.departureCity1" value="{userType.users[index].traffic.departureCity1}" type="text" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
					<li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}>\
						<strong style="width:380px;">Destination city:</strong>\
						<select index="traffic." id="departureCity2">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.departureCity2 n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input {if userType.users[index].traffic.departureTrafficTool == 1}class="required"{/if} type="hidden" value="{userType.users[index].traffic.departureCity2}" name="traffic.departureCity2">\
					</li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Flight number:</strong><input name="traffic.departureFlight" value="{userType.users[index].traffic.departureFlight}" type="text" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Date of arrival:</strong><input name="arrivalDate" type="text" value="{dateFormat userType.users[index].traffic.arrivalDate}" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Time of arrival:</strong><input name="arrivalTime" type="text" value="{timeFormat userType.users[index].traffic.arrivalDate}" class="input-regist {if userType.users[index].traffic.departureTrafficTool == 1}required{/if}" /></li>\
                    <li class="depar" {if userType.users[index].traffic.departureTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Whether need airport pick-up service:</strong><input name="traffic.pickUp" type="radio" value="1" {if userType.users[index].traffic.pickUp == 1}checked{/if}/>Yes<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;"  {if userType.users[index].traffic.pickUp != 1}checked{/if}/>No</li>\
                    <li style="margin-top:20px;"><strong style="width:380px;">* Means of transportation to return:</strong>\
						<select index="traffic." id="backTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[9] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.backTrafficTool n.value}>{n.name}</option>\
							{/each}\
				    	</select>\
						<input name="backTrafficTool" type="text" {selectHide userType.users[index].traffic.backTrafficTool} class="input-eat" style="display:none;"/>\
						<input class="required" type="hidden" value="{userType.users[index].traffic.backTrafficTool}" name="traffic.backTrafficTool">\
					</li>\
					<div class="tips">\
			            <font style="font-size:12px;"><strong>Notice:</strong>for the guests who will go Macau to participate GTMC conference on 17th, affairs division will arrange vehicles to transfer you from Dongguan Jiahua Hotel to Shenzhen Shekou Ferry Terminal, and you can choose to use according to your own requirements.</font>\
			    	</div>\
					<li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}>\
						<strong style="width:380px;">Departure city:</strong>\
						<select index="traffic." id="backCity2">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[10] as n}\
				            <option value="{n.value}" {select userType.users[index].traffic.backCity2 n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input  {if userType.users[index].traffic.backTrafficTool == 1}class="required"{/if} type="hidden" value="{userType.users[index].traffic.backCity2}" name="traffic.backCity2">\
					</li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Flight number:</strong><input name="traffic.backFlight" value="{userType.users[index].traffic.backFlight}" type="text" class="input-regist  {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Date of arrival:</strong><input name="backDate" value="{dateFormat userType.users[index].traffic.backDate}" type="text" class="input-regist {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Take off time:</strong><input name="backTime" value="{timeFormat userType.users[index].traffic.backDate}" type="text" class="input-regist {if userType.users[index].traffic.backTrafficTool == 1}required{/if}" /></li>\
                    <li class="back" {if userType.users[index].traffic.backTrafficTool != 1}style="display:none;"{/if}><strong style="width:380px;">Whether need airport drop-off service:</strong><input name="traffic.send" type="radio" value="1" {if userType.users[index].traffic.send == 1}checked{/if}/>Yes<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].traffic.send != 1}checked{/if}/>No</li>\
                   	</ol>\
					<div class="tips">\
						<font style="font-size:12px;"><strong>Remarks:</strong></font>\
			            <font style="font-size:12px;">1. Affairs division will be responsible to for arranging airport pick-up and drop-off service of Shenzhen and Guangzhou airport, and guests choosing other transportation means (such as train or cars) need to arrange the transfer to hotel by your own.</font>\
			            <font style="display:block; width:100%">2. After the switching off of system, please proactively contact the affairs division for information update if there is any information change, contact the committee: telephone: 400-110-3271;e-mail: <a style="color:blue;" href="mailto:service@ftmsdlr.cn">service@ftmsdlr.cn</a></font>\
			    	</div>\
			{if compare2()}<div class="operate"><a href="javascript:void(0);" class="save" index="update">Submit</a></div>{/if}\
            </div>\
        </div></form>'
	);
	
	template.compile('manage_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="{userType.users[index].id}">\
                <h4><span style="float:left">Commercial activities</span><div class="operate-message"><a class="reviwe" href="javascript:void(0);">Unfold</a><a href="javascript:void(0);" class="remove" index="other#{userType.users[index].other.id}">Delete</a></div></h4>\
                <div style="display:none;" class="content">\
					<font>* It should be paid special attention to that the closing time point of commercial activities module website system is 24:00, December 10th, and you can e-mail or call the affairs division to modify your commercial activities information offline after the system being closed. The deadline of modifying commercial activities information offline is 18:00, December 20th.</font>\
                    <ol>\
                    <li><strong style="width:380px;">* Whether attend the regional conference on January 16th:</strong>\
						<div class="left">\
							<input name="other.meeting" type="radio" value="1" {if userType.users[index].other.meeting == 1}checked{/if}/>Yes\
							<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" {if userType.users[index].other.meeting != 1}checked{/if}/>No\
						</div>\
						<div style="padding-left:40px; float:left">*in principle regional conference is attended by general managers</div>\
					</li>\
                    <li>\
						<strong style="width:440px;">* Please choose a commercial activity route you want to participate:</strong>\
						<select index="other." id="touristRoute">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[6] as n}\
				            <option value="{n.value}" {select userType.users[index].other.touristRoute n.value}>{n.name}</option>\
							{/each}\
				        </select>\
						<input class="required" type="hidden" name="other.touristRoute" value="{userType.users[index].other.touristRoute}">\
					</li>\
                    <li><strong style="width:230px;">&nbsp;</strong><a href="travel.html#review" target="_blank">Check commercial activity routes</a></li>\
					<li class="touristRouteB" {if userType.users[index].other.touristRoute != 1 && userType.users[index].other.touristRoute != 2}style="display:none;"{/if}>\
						<strong style="width:380px;">Do you hold valid documentation to go to Hong Kong:</strong>\
						<input name="pass" type="radio" value="1" {if userType.users[index].other.hasPass == 1 || userType.users[index].other.hasPass == 2}checked{/if}/>Yes\
						<input name="pass" type="radio" value="3" style="margin-left:20px;" {if userType.users[index].other.hasPass == 3 || userType.users[index].other.hasPass == 0}checked{/if}/>In progress\
					</li>\
					<li class="passHide" {if userType.users[index].other.hasPass == 3 || userType.users[index].other.hasPass == 0}style="display:none;"{/if}>\
						<strong style="width:380px;">&nbsp;</strong>\
						<select index="other." id="hasPass">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[7] as n}\
				            <option value="{n.value}" {select userType.users[index].other.hasPass n.value}>{n.name}</option>\
							{/each}\
				    	</select>\
						<input type="hidden" name="other.hasPass" value="{passValue userType.users[index].other.hasPass}" class="required">\
					</li>\
                   	<li class="touristRouteB" {if userType.users[index].other.touristRoute != 1 && userType.users[index].other.touristRoute != 2}style="display:none;"{/if}><strong style="width:230px;">&nbsp;</strong><a  href="javascript:void(0);" id="passCardTip">Exit－Entry Permit for Travelling to and from Hong Kong and Macau handling tips</a></li>\
					<li class="touristRouteB" style="color:#b91414;{if userType.users[index].other.touristRoute != 1 && userType.users[index].other.touristRoute != 2}display:none;{/if}">*Please be sure to handle your Exit－Entry Permit for Travelling to and from Hong Kong and Macau and endorsement in time after your applying, and feedback your permit information to affairs division in time by telephone or e-mail after you finishing handling.</li>\
					<li class="hasPassHide" {if userType.users[index].other.hasPass != 1}style="display:none;"{/if}>\
						<strong style="width:380px;">Does your Exit－Entry Permit for Travelling to and from Hong Kong and Macau have valid endorsement:</strong>\
						<input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.isVisa == 1}checked{/if}/><em>Yes</em>\
						<input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" {if userType.users[index].other.isVisa != 1}checked{/if}/><em>to be handled</em>\
					</li>\
					<div {if userType.users[index].other.isVisa != 1}style="display:none"{/if}  class="showMessage">\
						<li><strong style="width:380px;">The endorsement type of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau is:</strong>\
							<input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" {if userType.users[index].other.sign != 2}checked{/if}/><em>G endorsement</em>\
							<input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" {if userType.users[index].other.sign == 2}checked{/if}/><em>L endorsement</em>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">how to distinguish endorsement type</a></li>\
						<li><strong style="width:380px;">Your endorsement is valid until:</strong><input name="other.effectiveDate" value="{dateFormat userType.users[index].other.effectiveDate}" type="text" class="input-regist" />\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong><a href="javascript:void(0);" class="visa">how to distinguish endorsement’s period of valid</a></li>\
						<li><strong style="width:580px;">Please upload the scanning copy of the first page of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau:</strong>\
							<input style="width:140px;" name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
						<li><strong style="width:580px;">Please upload the scanning copy of the endorsement page of your Exit－Entry Permit for Travelling to and from Hong Kong and Macau:</strong>\
							<input style="width:140px;" name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
					</div>\
                  	<div {if userType.users[index].other.touristRoute == 0 || userType.users[index].other.touristRoute == 4}style="display:none;"{/if}  class="showMessage touristRouteB">\
                      	<li>Will you return to Dongguan and stay in hotel by unified bus after finishing visit:<br />\
				 			<input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" checked/><em>Yes</em><br />\
	            			<input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave from Hong Kong by myself</em><br />\
	            			<input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave form Shenzhen by myself</em>\
                      	</li>\
                  	</div>\
                 	<div {if userType.users[index].other.touristRoute != 4}style="display:none;"{/if} class="showMessage">\
                      	<li><strong style="width:380px;">Playing handicap:</strong><input name="other.playAlmost" value="{userType.users[index].other.playAlmost}" type="text" class="input-regist" /></li>\
						<li style="color:#b91414">*please provide your handicap certification accurately so that we can arrange the grouping for you according to it</li>\
                      	<li><strong style="width:380px;">Height:</strong><input name="other.stature" type="text" class="input-regist" value="{userType.users[index].other.stature}"/>cm</li>\
                      	<li><strong style="width:380px;">Clothing size:</strong>\
							<select index="other." id="playSize">\
			            		<option value="0">--Please choose--</option>\
								{each selectArr[8] as n}\
			            		<option value="{n.value}" {select userType.users[index].other.playSize n.value}>{n.name}</option>\
								{/each}\
			          		</select><input type="hidden" name="other.playSize" value="{userType.users[index].other.playSize}">\
                      	</li>\
						<li><strong style="width:380px;">赛后您的行程如何安排：</strong>\
							<select index="other." id="playBack">\
				        		<option value="0">--请选择--</option>\
								{each selectArr[11] as n}\
				        		<option value="{n.value}" {select userType.users[index].other.playBack n.value}>{n.name}</option>\
								{/each}\
				      		</select><input type="hidden" name="other.playBack" value="{userType.users[index].other.playBack}">\
				      	</li>\
						<div class="tips">\
							*17日高尔夫比赛结束后，事务局会各安排一辆车辆分别前往东莞嘉华酒店、深圳宝安机场和广州白云机场，请您根据自身需求，选择乘坐\
						</div>\
                  	</div>\
                   	</ol>\
					<div class="tips"><font><strong>Remarks:</strong>all commercial activities routes have a minium of 35 people, and if the actual number of participants is less than 35 the affairs division will reserve the right to adjust your commercial activities route according to actual conditions.</font></div>\
					{if compare2() }<div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save" index="update">Submit</a></div>{/if}\
            	</div>\
			</div>\
		</form>'
	);
	template.compile('notice',
		'<div class="content">\
			<div class="tips-attention">\
	            <font style="font-size:12px;"><strong>Announcements:</strong></font>\
	            <font style="font-size:12px;">1. The registration information can be only submitted once, and after submitting you can click “Information Management” to enter into account information management interface to modify the information.</font>\
	            <font style="font-size:12px;">2. The registration system will be switched off step by step, and you can’t modify information on webpage once the system is closed, so you distinguished guests please make sure to the accuracy of your information when you fill in, and please contact the affairs division proactively for the changes of information if there is any after the close of system.</font>\
	            <font style="font-size:12px;">3. During the applying and proceed stages of the convention the affairs division will inform various arrangements and tips of the convention by short messages and e-mails, and please be attention to receive them at that time. </font><br/>\
				<font><strong>Tips of closing time nodes of every module in the system:</strong></font>\
				<font>1. System functions of personal information and hotel information module will be switched off at 24:00, November 28th, 2013, and you will can’t modify your personal information online after the system closing, so please know in advance and be sure to finish the submitting of relevant information before this time.</font>\
				<font>2. System functions of traffic information and tour information module will be switched off at 24:00, December 10th, 2013, and you will can’t modify your personal information online after the system closing, so please know in advance and be sure to finish the submitting of relevant information before this time.</font>\
				<font>3. Please inform the affairs division for the changes of information through phone call or e-mail if there is any information changes after the close of system.</font><br/>\
				Contact information of the affairs division hotline: 440-110-3271 e-mail: service@ftmsdlr.cn\
	    	</div>\
			{if pageName == "regist"}<div style="margin-top:40px;" class="operate"><a href="javascript:void(0);" class="confirm" index="{if user != null}{user.id}{/if}">Confirm</a></div>{/if}\
		</div>'
	);
})();