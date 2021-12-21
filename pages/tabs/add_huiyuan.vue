<template>
	<view class="tianjia">
		<view style="margin: 10rpx;"></view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>姓名:</text>
			</view>
			<view class="bianhao_value">
				<input class="xingming" @input="getname" :value="name" type="text" placeholder="请输入姓名" placeholder-style="color:#C0C0C0"/>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>性别:</text>
			</view>
			<view class="bianhao_value">
				<radio-group name="xingbie" @change="getGender">
					<label>
						<radio :value="0" checked="true" color="#FF83FA"/><text>男</text>
					</label>
					<label>
						<radio :value="1" color="#FF83FA"/><text>女</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>职业:</text>
			</view>
			<view class="bianhao_value">
				<input class="zhiye" @input="getzhiye" :value="zhiye" type="text" placeholder="请输入职业" placeholder-style="color:#C0C0C0"/>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>生日:</text>
			</view>
			<view class="bianhao_value">
				<view @click="showPicker = true">{{birthday}}</view>
				<mx-date-picker :show="showPicker" type="date" :value="birthday" :show-tips="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>电话:</text>
			</view>
			<view class="bianhao_value">
				<input type="text" @input="getPhone" :value="phone" maxlength="11" placeholder="请输入电话号码" placeholder-style="color:#C0C0C0"/>
			</view>
		</view>
		<view class="bianhao"> 
			<view class="bianhao_key">
				<text>地址:</text>
			</view>
			<view class="bianhao_value">
				<input type="text" @input="getAddress" :value="address" placeholder="请输入地址" placeholder-style="color:#C0C0C0"/>
			</view>
		</view>
		<view class="beizhu_key">
			<view class="bianhao_key">
				<text>备注:</text>
			</view>
			<view class="bianhao_value"></view>
		</view>
		<view class="beizhu_value">
			<view class="bianhao_key">
				<textarea class="wenbenyu" @input="getBeizhu" :value="remarks" maxlength="1024" placeholder-style="color:#C0C0C0" placeholder="此处添加备注..."/>
			</view>
		</view>
		<view class="kong"></view>
		<view class="bianhao yiyi" @click="addHuiyuan" style="background: #FFE1FF;">
			<view class="bianhao_key">
				<text space="nbsp">添 加</text>
			</view>
		</view>
	</view>
</template>

<script>
	import MxDatePicker from "../../components/mx-datepicker/mx-datepicker.vue";
	
	export default {
		components: {
			MxDatePicker
		},
		data() {
			const currentDate = this.getDate({
			    format: true
			});
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				name: '',
				gender: 0,
				birthday: currentDate,
				yuangongid: '',
				phone: '',
				remarks: '',
				zhiye: '',
				openId: '',
				address: '',
				showPicker: false
			}
		},
		
		onLoad(option) {},
		
		onShow() {
			this.yuangongid = uni.getStorageSync("yuangongid");
		},
		
		methods: {
			onSelected(e) {//选择
				this.showPicker = false;
				if(e){
					let {value} = e;
					this.birthday = value.replace(/\//g,"-");
				}
			},
			/**
			 * 验证是否为手机号码（移动手机）
			 */
			isMobilePhone(source) {
				var regex = /^[1][3,4,5,7,8][0-9]{9}$/;
				return regex.test(source);
			},
			// 添加会员
			addHuiyuan(){
			
				// if(this.openId==null || this.openId==''){
				// 	console.log("--00000--",this.openId)
				// 	uni.navigateTo({
				// 		url: '../logon/logon',
				// 		success: () => {
				// 			uni.showToast({
				// 			    title: "您还没有登录",
				// 				icon: 'none'
				// 			});
				// 		}
				// 	});
				// }
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
				// 姓名不能为空
				if(this.name==null || this.name==''){
					uni.showToast({
					    title: '姓名不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				
				// 职业不能为空
				if(this.zhiye==null || this.zhiye==''){
					uni.showToast({
					    title: '职业不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return;
				}
				uni.showLoading({
				    title: '加载中'
				});
				let huiyuan = {
					name:this.name,
					gender:this.gender,
					birthday:this.birthday,
					phone:this.phone,
					yuangongid:this.yuangongid,
					remarks:this.remarks,
					zhiye:this.zhiye,
					openId:this.openId,
					address:this.address
				};
				uni.request({
				    url: this.baseUrl+'/huiyuan/addHuiyuan',
					method: 'POST',
					data: huiyuan,
				    success: (res) => {
						let {status} = res.data;
						let {message} = res.data;
						if(status==200){
							this.name = '';
							this.phone = '';
							const currentDate = this.getDate({
							    format: true
							})
							this.birthday = currentDate;
							this.remarks = '';
							this.address = '';
							uni.switchTab({
								url: './huiyuan_list'
							});
						}else{
							uni.showToast({
							    title: message,
							    duration: 1000,
								icon: 'none'
							});
						}
						uni.hideLoading();
				    }
				});
				
				
			},
			// 获取备注内容
			getBeizhu(e){
				let {value} = e.detail;
				this.remarks = value.replace(/\s/g,"");
			},
			// 获取电话号码
			getPhone(e){
				let {value} = e.detail;
				this.phone = value.replace(/\s/g,"");
			},
			// 区分男女
			getGender(e){
				this.gender = e.detail.value;
			},
			// 获取姓名
			getname(e){
				let {value} = e.detail;
				this.name = value.replace(/\s/g,"");
			},
			// 获取职业
			getzhiye(e){
				let {value} = e.detail;
				this.zhiye = value.replace(/\s/g,"");
			},
			
			// 获取地址
			getAddress(e){
				let {value} = e.detail;
				this.address = value.replace(/\s/g,"");
			},			
			getDate(type) {
				
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			
			    if (type === 'start') {
			        year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
				
			}
					
		}
	}
</script>

<style>

	.yiyi{
		width: 100%;
		text-align: center;
	}
	
	.kong{
		margin: 10rpx;
	}
	
	.wenbenyu{
		width: 100%;
		height: 200rpx;
	}
	
	.beizhu_key{
		
		display: flex;
		width: 100%;
		margin: 0 20rpx;
		background: #FFF0F5;
		border-radius: 10rpx 10rpx 0 0;
		border-bottom: #FFBBFF solid;
	}
	
	.beizhu_value{
		
		display: flex;
		width: 100%;
		margin: 0 20rpx;
		background: #FFF0F5;
		border-radius: 0 0 10rpx 10rpx;
		
	}
	
	.tianjia{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 20rpx;
	}
	
	.bianhao{
		
		display: flex;
		width: 100%;
		margin: 0 20rpx;
		background: #FFF0F5;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
	}
	
	.bianhao_key{
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20rpx;
	}
	
	.bianhao_value{
		flex: 5;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20rpx;
	}
	
	.beizhu{
		background: #F1F1F1;
		padding-top: 0;
		color: #C0C0C0;
	}
	
</style>
