<template>
	
	<view class="content">
		<image class="beijing" :src="imageUrl"></image>
		<image class="logo" src="../../static/images/dengjumin.jpg"></image>
		<view class="text-area">
			<view class="phone-pwd">
				<input @input="getPhone" class="dianhua_mima" type="text" :value="phone" placeholder="请输入电话号码"/>
			</view>
			<view class="phone-pwd">
				<input @input="getPassword" class="dianhua_mima" type="text" :value="password" placeholder="请输入密码:6-16位" password="true" maxlength="16"/>
			</view>
			<view v-if="!isLogon" class="phone-pwd">
				<input @input="getConfirmPassword" class="dianhua_mima" type="text" :value="confirmPassword" placeholder="确认密码" password="true" maxlength="16"/>
			</view>
			<view v-if="isLogon" @click="logon" class="phone-pwd denglu">
				<text space="nbsp">登 录</text>
			</view>
			<view v-else @click="register" class="phone-pwd denglu">
				<text space="nbsp">注 册</text>
			</view>
		</view>
		<view class="tishi">
			<view v-if="isLogon" @click="isLogon=!isLogon" class="hengxian">
				<text>------------<text class="zhuce" space="nbsp">- 注册 -</text>------------</text>
			</view>
			<view v-else @click="isLogon=!isLogon" class="hengxian">
				<text>------------<text class="zhuce" space="nbsp">- 登录 -</text>------------</text>
			</view>
		</view>
		
		
		<!-- <view class="wechat_logon" @click="wechatLogon">
			<text style="color: #F8F8F8;">登录</text>
		</view> -->
		
	</view>

</template>

<script>
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				phone: '',
				password: '',
				// phone: '13551266914',
				// password: '123456',
				confirmPassword: '',
				isLogon: true,
				imageUrl: '../../static/images/shouye.jpg'
			}
		},
		onLoad() {},
		
		onShow() {},
		
		methods: {
			
			wechatLogon(){

				let openId = uni.getStorageSync("openId");				
				if(openId==null || openId==''){
					uni.login({
						provider: 'weixin',
						success: (loginRes) => {
							// 获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: (infoRes) => {
									
									
				
									let yuangong = infoRes.userInfo;
									yuangong.code = loginRes.code
									uni.request({
									    url: this.baseUrl+'/yuangong/wechat/logon',
										method: 'POST',
										data: yuangong, 
									    success: (res) => {
											
											console.log("--",infoRes)
											
											let {status,message,result} = res.data;
											if(status == 200){
												uni.showLoading({
												    title: '加载中'
												});
												uni.setStorageSync("openId",result.openId);
												uni.switchTab({
													url: '/pages/tabs/huiyuan_list',
													success: () => {
														uni.hideLoading();
													}
												});
											}else{
												uni.showToast({
												    title: message,
												    duration: 1000,
													icon: 'none'
												});
											}
											
									    }
									});
									
								}
							});
							
						}
					});
				
				}else{
					uni.request({
					    url: this.baseUrl+'/yuangong/wechatLogon/by/'+openId,
					    success: (res) => {
							let {status,message} = res.data;
							if(status == 200){
								uni.showLoading({
								    title: '加载中'
								});
								uni.switchTab({
									url: '/pages/tabs/huiyuan_list',
									success: () => {
										uni.hideLoading();
									}
								});
							}else{
								uni.showToast({
								    title: message,
								    duration: 1000,
									icon: 'none'
								});
							}
					    }
					});
				}

			},
			
			/**
			 * 验证是否为手机号码（移动手机）
			 */
			isMobilePhone(source) {
				var regex = /^[1][3,4,5,7,8][0-9]{9}$/;
				return regex.test(source);
			},
			
			logon(){
				// 电话号码不能为空
				if(this.phone==null || this.phone==''){
					uni.showToast({
					    title: '电话号码不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 电话号码不正确
				let flag = this.isMobilePhone(this.phone);
				if(!flag){
					uni.showToast({
					    title: '电话号码不正确',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 密码不能为空
				if(this.password==null || this.password==''){
					uni.showToast({
					    title: '密码不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 密码位数不对
				if(this.password.length < 6){
					uni.showToast({
					    title: '密码不少于6位',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
	
				let yuangong = {phone:this.phone,password:this.password};
				uni.request({
				    url: this.baseUrl+'/yuangong/logon',
					method: 'POST',
					data: yuangong,
				    success: (res) => {
						
						let {status,message,result} = res.data;
		
						if(status==200){
							uni.showLoading({
							    title: '加载中'
							});
							uni.setStorageSync("yuangongid",result.id);
							uni.switchTab({
								url: '/pages/tabs/huiyuan_list',
								success: () => {
									uni.hideLoading();
								}
							});
							
						}else{
							uni.showToast({
							    title: message,
							    duration: 1000,
								icon: 'none'
							});
						}
						
				    }
				});
			},
	
			register(){
				// 电话号码不能为空
				if(this.phone==null || this.phone==''){
					uni.showToast({
					    title: '电话号码不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 电话号码不正确
				let flag = this.isMobilePhone(this.phone);
				if(!flag){
					uni.showToast({
					    title: '电话号码不正确',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 密码不能为空
				if(this.password==null || this.password==''){
					uni.showToast({
					    title: '密码不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 密码位数不对
				if(this.password.length < 6){
					uni.showToast({
					    title: '密码不少于6位',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				// 两个密码不相同
				if(this.password != this.confirmPassword){
					uni.showToast({
					    title: '两个密码不相同',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				let yuangong = {phone:this.phone,password:this.password};
				uni.request({
				    url: this.baseUrl+'/yuangong/register',
					method: 'POST',
					data: yuangong,
				    success: (res) => {
						let {status} = res.data;
						let {message} = res.data;
						if(status==200 || status == 400){
							this.isLogon = !this.isLogon;
							this.password = '';
							this.confirmPassword = '';
						}
						uni.showToast({
						    title: message,
						    duration: 1000,
							icon: 'none'
						});
				    }
				});
			},
	
			// 获取输入的电话号码
			getPhone(e){
				let {value} = e.detail;
				this.phone = value.replace(/\s/g,"");
			},
			// 获取输入的密码
			getPassword(e){
				let {value} = e.detail;
				this.password = value.replace(/\s/g,"");
			},
			// 注册时获取输入的确认密码
			getConfirmPassword(e){
				let {value} = e.detail;
				this.confirmPassword = value.replace(/\s/g,"");
			}
		}
	}
</script>

<style>
	
	.wechat_logon{
		position: absolute;
		top: 40%;
		padding: 80rpx;
		right: 16%;
		font-size: 68rpx;
		font-family: 楷体;
		font-weight: 600;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
	
	.beijing{
		width: 100%;
		height: 100%;
		position: fixed; 
		z-index: -1; 
		top: 0; 
		left: 0;
	}
	
	.logo {
		height: 160rpx;
		width: 160rpx;
		margin-top: 30%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 50%;
	}
	
	.phone-pwd{
		background: #F8F8F8;
		height: 80rpx;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20rpx;
	}
	
	.dianhua_mima{
		margin: 40rpx;
	}
	
	.denglu{
		background: #FF83FA;
		color: #F8F8F8;
	}
	
	.tishi{
		position: absolute;
		bottom: 10%;
		color: #808080;
	}
	
	.zhuce{
		color: #555555;
	}
	
</style>
