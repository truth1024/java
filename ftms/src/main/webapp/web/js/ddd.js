template.compile('regist_basic',
			'<form id="regist_basic"><div class="content-regist">\
            <h4>Information Registration</h4>\
            <div class="content">\
                <span>Distinguished sir/ madam, how are you!<br />Welcome to attend 2014 National Dealers Convention of FAW Toyota. Please successively fill in each part of information related to this activity.</span>\
                <font>【mandatory】</font>\
                <ul>\
					<input type="hidden" class="required" name="user.uid" value="{userType.id}">\
                    <li><strong>Name：</strong><input name="user.name" type="text" class="input-regist required" /></li>\
                    <li><strong>Gender：</strong><input class="required" name="user.sex" type="radio" value="1" checked/>male<input name="user.sex" type="radio" value="2" style="margin-left:20px;" />female</li>\
                    <li>\
					{if userType.type == 1}\
						<strong>Company：</strong><select index="user." id="company">\
	                        <option value="0">--Please choose--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
                      	</select><input name="company" type="text" class="input-eat" /><input class="required" type="hidden" name="user.company">\
					{else}\
						<strong>Position：</strong><select index="user." id="title">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[0] as t}\
				            <option value="{t.value}">{t.name}</option>\
							{/each}\
				      	</select><input name="title" type="text" class="input-eat" /><input class="required" type="hidden" name="user.title">\
					{/if}\
                    </li>\
                    <li><strong>Date of birth：</strong><input name="user.birthDate" type="text" class="input-regist required" /></li>\
                    <li><strong>Nationality：</strong><select index="user." id="nationality">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[1] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="nationality" type="text" class="input-eat" /><input class="required" type="hidden" name="user.nationality">\
                    </li>\
                    <li><strong>ID type：</strong><select index="user." id="certificate">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[2] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="certificate" type="text" class="input-eat" /><input class="required" type="hidden" name="user.certificate">\
                    </li>\
                    <li><strong>ID number：</strong><input name="cerNum" type="text" class="input-regist required" /></li>\
                    <li><strong>Telephone：</strong><input name="user.telephone" type="text" class="input-regist required" /></li>\
                    <li><strong>Mobile phone：</strong><input name="user.mobilePhone" type="text" class="input-regist required" /></li>\
                    <li><strong>E-mail：</strong><input name="user.email" type="text" class="input-regist required" /></li>\
                    <li><strong>Diet taboos：</strong><select index="user." id="diet">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[3] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input name="diet" type="text" class="input-eat" /><input class="required" type="hidden" name="user.diet"></li>\
                </ul>\
                <font>If it is not filled by yourself, or you wish the affairs division would contact you through others, please fill in the following information.【Optional】</font>\
                <ul>\
                    <li><strong>Name of contact person：</strong><input name="user.contactName" type="text" class="input-regist" /></li>\
                    <li><strong>Contact number：</strong><input name="" type="text" class="input-regist" /></li>\
                    <li><strong>Mobile phone number：</strong><input name="user.contactPhone" type="text" class="input-regist" /></li>\
                    <li><strong>E-mail：</strong><input name="user.contactEmail" type="text" class="input-regist" /></li>\
                </ul>\
                <div class="operate"><a href="javascript:void(0);" class="save" index="submit">Save</a></div>\
            </div>\
        </div></form>'
	);
	
	template.compile('regist_hotel',
		'<form id="regist_hotel"><div class="content-regist">\
			<input type="hidden" name="hotel.uid" value="">\
            <h4>Hotel arrangement</h4>\
	            <div class="content">\
	                <ol>\
	                <li><strong style="width:350px;">Whether check into the hotel appointed by FTMS：</strong>\
						<div class="left">\
							<input class="required" name="hotel.isStay" type="radio" value="1" />Yes\
							<input class="required" name="hotel.isStay" type="radio" value="2" style="margin-left:20px;" checked/>No\
						</div>\
						<div style="clear:both;padding-left:40px; float:left">\
							*Appointed hotel of this convention: Dongguan Jiahua Hotel\
							<a href="#">check the map of the hotel</a>\
						</div>\
					</li>\
	                <li><strong style="width:350px;">Check in date：</strong><input name="hotel.inDate" type="text" class="input-regist required" /></li>\
	                <li><strong style="width:350px;">Check out date：</strong><input name="hotel.outDate" type="text" class="input-regist required" /></li>\
	                <li><strong style="width:350px;">Accommodation type：</strong><select index="hotel." id="room">\
                        <option value="0">--Please choose--</option>\
						{each selectArr[4] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
                      </select><input class="required" type="hidden" name="hotel.room">\
                    </li>\
	                <li><strong  style="width:350px;">Whether assign roommate sharing room with you：</strong>\
						<input class="required" name="hotel.isWith" type="radio" value="1" />Yes\
						<input class="required" name="hotel.isWith" type="radio" value="2" style="margin-left:20px;" checked/>No\
					</li>\
	                <li class="hide" style="display:none;"><strong style="width:250px;">Name of roommate：</strong><input name="hotel.withName" type="text" class="input-regist" /></li>\
	                <li class="hide" style="display:none;"><strong style="width:250px;">The outlet your roommate belongs to：</strong><input name="hotel.withShop" type="text" class="input-regist" /></li>\
	               	</ol>\
	               	<div class="tips">\
		                <font style="font-size:12px;"><strong>Remarks：</strong></font>\
						<font style="padding-left:36px; width:100%">1、According to the requirements of the hotel, normal check in time is after 14:00 of the day.</font>\
			            <font style="padding-left:36px; width:100%">2、 The unified room reservation time of this convention is January 15th to 17th.</font>\
			            <font style="padding-left:36px; width:100%">3、Please pay the accommodation expense by yourself at the registration department or reception desk, and pay the consumption deposit of the room by cash/credit card.</font>\
			            <font style="padding-left:36px; width:100%">4、Accommodation arrangement: presidents-main building (the price is 680 yuan per room per night), general managers-AB building (the price is 480 yuan per room per night).</font>\
	            	</div>\
	        	<div class="operate"><a href="javascript:void(0);" class="save" index="submit">Save</a></div>\
	        </div>\
	    </div></form>'
	);
	
	template.compile('regist_traffic',
		'<form id="regist_traffic"><div class="content-regist">\
			<input type="hidden" name="traffic.uid" value="">\
                <h4>Transfer arrangement</h4>\
                <div class="content">\
                    <font style="font-size:12px;">*Please note that the round-trip traffic from your residence place to Guangzhou/Shenzhen needs to be arranged by yourself, so please arrange your journey in advance, and fill your affirmed traffic arrangement information into below before December 20th.</font>\
                    <div class="tips">\
						<font style="font-size:12px;"><strong>Airport pick-up and drop-off service：</strong>Shenzhen Bao’an International Airport/Guangzhou New Baiyun International Airport</font>\
			            <font style="padding-left:72px; width:100%">Airport pick-up time: January 15th 09:00-22:00, 16th 09:00-12:00</font>\
			            <font style="padding-left:72px; width:100%">Airport drop-off time: January 17th 07:00-18:00, 18th 07:00-18:00</font>\
					</div>\
                    <ol>\
                    <li><strong style="width:250px;">Means of transportation to come：</strong><select index="traffic." id="departureTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="departureTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.departureTrafficTool">\
					</li>\
                    <li class="depar" style="display:none;"><strong style="width:250px;">Departure city：</strong><input name="traffic.departureCity" type="text" class="input-regist" /></li>\
					<li><strong style="width:250px;">Destination city：</strong>Shenzhen  Guangzhou </li>\
                    <li class="depar" style="display:none;"><strong style="width:250px;">Flight number：</strong><input name="traffic.departureFlight" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong style="width:250px;">Date of arrival：</strong><input name="arrivalDate" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;"><strong style="width:250px;">Time of arrival:</strong><input name="arrivalTime" type="text" class="input-regist" /></li>\
                    <li class="depar" style="display:none;">\
						<strong style="width:250px;">Whether need airport pick-up service：</strong>\
						<input name="traffic.pickUp" type="radio" value="1" />Yes\
						<input name="traffic.pickUp" type="radio" value="2" style="margin-left:20px;" checked/>No\
					</li>\
                    <li style="margin-top:20px;"><strong style="width:250px;">Means of transportation to return：</strong><select index="traffic." id="backTrafficTool">\
				            <option value="0">--Please choose--</option>\
							{each selectArr[5] as n}\
				            <option value="{n.value}">{n.name}</option>\
							{/each}\
				          </select><input name="backTrafficTool" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="traffic.backTrafficTool">\
					</li>\
                    <li class="back" style="display:none;"><strong style="width:250px;">Back city：</strong><input name="traffic.backCity" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong style="width:250px;">Flight number：</strong><input name="traffic.backFlight" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong style="width:250px;">Date of arrival：</strong><input name="backDate" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;"><strong style="width:250px;">Take off time：</strong><input name="backTime" type="text" class="input-regist" /></li>\
                    <li class="back" style="display:none;">\
						<strong style="width:250px;">Whether need airport drop-off service：</strong>\
						<input name="traffic.send" type="radio" value="1" />Yes\
						<input name="traffic.send" type="radio" value="2" style="margin-left:20px;" checked/>No\
					</li>\
                   	</ol>\
                   	<div class="tips">\
						<font style="font-size:12px;"><strong>Remarks：</strong></font>\
			            <font style="font-size:12px;">1、Affairs division will be responsible to for arranging airport pick-up and drop-off service of Shenzhen and Guangzhou airport, and guests choosing other transportation means need to arrange the transfer to hotel by your own.</font>\
			            <font style="display:block; width:100%">2、After the switching off of system, please proactively contact the organizing committee for information update if there is any information change, contact the committee: telephone 1232342123124 e-mail asdfasdfadsf</font>\
                	</div>\
                  	<div class="operate"><a href="javascript:void(0);" class="save" index="submit">Save</a></div>\
            	</div>\
			</div></form>'
	);
	
	template.compile('regist_other',
		'<form id="regist_other"><div class="content-regist">\
			<input type="hidden" name="other.uid" value="">\
                <h4>Tour arrangement</h4>\
                <div class="content">\
                    <ol>\
                    <li>\
						<strong style="width:380px;">Whether attend the regional conference on January 16th：</strong>\
						<div class="left">\
							<input name="other.meeting" type="radio" value="1" />Yes\
							<input name="other.meeting" type="radio" value="2" style="margin-left:20px;" checked/>No\
						</div>\
						<div style="padding-left:40px; float:left">*in principle regional conference is attended by general managers</div>\
					</li>\
                    <li><strong style="width:380px;">Please choose a tour route you want to participate：</strong><select index="other." id="touristRoute">\
			            <option value="0">--Please choose--</option>\
						{each selectArr[6] as n}\
			            <option value="{n.value}">{n.name}</option>\
						{/each}\
			          </select><input name="touristRoute" type="text" class="input-eat" style="display:none;"/><input class="required" type="hidden" name="other.touristRoute">\
					</li>\
                     <li><strong style="width:230px;">&nbsp;</strong><a href="#">Check tour routes</a></li>\
                     	<li class="touristRouteB"  style="display:none;"><strong style="width:380px;">Do you hold valid documentation to go to Hong Kong：</strong>\
	                         <input name="pass" type="checkbox" value="1" style="margin-top:8px; float:left;" /><em>Yse</em>\
								<select index="other." id="hasPass">\
					            <option value="0">--Please choose--</option>\
								{each selectArr[7] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.hasPass">\
						</li>\
						<li><strong style="width:230px;">&nbsp;</strong><a href="#">One-way exit permit handling tips</a></li>\
			            <li style="color:#b91414">*Please be sure to handle your one-way exit permit and endorsement in time after your applying, and feedback your permit information to affairs division in time by telephone or e-mail after you finishing handling.</li>\
                        <div style="display:none"  class="showMessage">\
                              <li><strong style="width:380px;">Does your one-way exit permit have valid endorsement：</strong>\
	                             <input name="other.isVisa" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>Yes</em>\
								 <input name="other.isVisa" type="radio" value="2" style="margin-top:8px; float:left;" /><em>to be handled</em>\
                             </li>\
                              <li><strong style="width:380px;">The endorsement type of your one-way exit permit is：</strong>\
	                             <input name="other.sign" type="radio" value="1" style="margin-top:8px; float:left;" checked/><em>G endorsement</em>\
								 <input name="other.sign" type="radio" value="2" style="margin-top:8px; float:left;" /><em>L endorsement</em>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">how to distinguish endorsement type</a></li>\
                             <li><strong style="width:380px;">Your endorsement is valid until：</strong><input name="other.effectiveDate" type="text" class="input-regist" />\
                            </li>\
                             <li><strong style="width:230px;">&nbsp;</strong><a href="#">how to distinguish endorsement’s period of valid</a></li>\
                             <li><strong style="width:580px;">Please upload the scanning copy of the first page of your one-way exit permit：</strong>\
								<input style="width:140px;" name="file" id="passFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
                             <li><strong  style="width:580px;">Please upload the scanning copy of the endorsement page of your one-way exit permit：</strong>\
								<input style="width:140px;" name="file" id="visaFile" type="file" onchange="return ajaxFileUpload(this);"/>\
                             </li>\
                             <li><strong style="width:230px;">&nbsp;</strong>(*picture naming format: name-first page scanning copy)</li>\
                         </div>\
                          <div style="display:none"  class="showMessage touristRouteB">\
                              <li>Will you return to Dongguan and stay in hotel by unified bus after finishing visit：<br />\
                                  <input name="other.touristBack" type="radio" value="1" style="margin:8px 0 0 220px; float:left;" checked/><em>Yes</em><br />\
                                  <input name="other.touristBack" type="radio" value="2" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave from Hong Kong by myself</em><br />\
                                  <input name="other.touristBack" type="radio" value="3" style="margin:8px 0 0 220px; float:left;" /><em>No, I will leave form Shenzhen by myself</em>\
                              </li>\
                          </div>\
                         <div style="display:none;" class="showMessage">\
                              <li><strong>Will you play a game：</strong>\
                                  <input name="other.isPlay" type="radio" value="1" style="margin-top:8px; float:left;" /><em>Yes</em>\
                                  <input name="other.isPlay" type="radio" value="2" style="margin-top:8px; float:left;" checked/><em>No</em>\
                              </li>\
                              <li><strong>Playing handicap：</strong><input name="other.playAlmost" type="text" class="input-regist" /></li>\
						      <li style="color:#b91414">(*please provide your handicap certification accurately so that we can arrange the grouping for you according to it)</li>\
                              <li><strong>Height：</strong><input name="other.stature" type="text" class="input-regist" />CM</li>\
                              <li><strong>Clothing size：</strong>\
								<select index="other." id="playSize">\
					            <option value="0">--Please choose--</option>\
								{each selectArr[8] as n}\
					            <option value="{n.value}">{n.name}</option>\
								{/each}\
					          </select><input type="hidden" name="other.playSize">\
	                          </li>\
                          </div>\
                   	</ol>\
                   	<div class="tips-attention">\
					<font style="font-size:12px;"><strong>Announcements：</strong></font>\
		            <font style="font-size:12px;">1、The registration information can be only submitted once, and after submitting you can click “Information Management” to enter into account information management interface to modify the information.</font>\
		            <font style="font-size:12px;">2、The registration system will be switched off step by step, and you can’t modify information on webpage once the system is closed, so you distinguished guests please make sure to the accuracy of your information when you fill in, and please contact the affairs division proactively for the changes of information if there is any after the close of system.</font>\
		            <font style="font-size:12px;">3、During the applying and proceed stages of the convention the affairs division will inform various arrangements and tips of the convention by short messages and e-mails, and please be attention to receive them at that time. </font>\
					</div>\
                  	<div class="operate" style="padding-bottom:20px;"><a href="javascript:void(0);" class="save" index="submit">Save</a></div>\
            	</div>\
			</div></form>'
	);