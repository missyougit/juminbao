<template>
	<view class="huiyuandetails">
		<view style="margin: 10rpx;"></view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>编号:</text>
			</view>
			<view class="bianhao_value">
				<text>{{huiyuan.id}}</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>姓名:</text>
			</view>
			<view class="bianhao_value">
				{{huiyuan.name}}
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>性别:</text>
			</view>
			<view v-if="huiyuan.gender==0" class="bianhao_value">
				<text>男</text>
			</view>
			<view v-else class="bianhao_value">
				<text>女</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>职业:</text>
			</view>
			<view class="bianhao_value">
				<text>{{huiyuan.zhiye}}</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>年龄:</text>
			</view>
			<view class="bianhao_value">
				<text>{{huiyuan.age}}</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>生日:</text>
			</view>
			<view class="bianhao_value">
				<text>{{huiyuan.birthday}}</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>电话:</text>
			</view>
			<view class="bianhao_value" @click="call(huiyuan.phone)" style="color: #007AFF;">
				<text>{{huiyuan.phone}}</text>
			</view>
		</view>
		<view class="bianhao">
			<view class="bianhao_key">
				<text>地址:</text>
			</view>
			<view class="bianhao_value">
				<text>{{huiyuan.address}}</text>
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
				<text>{{huiyuan.remarks}}</text>
			</view>
		</view>
		
		<view class="kong"></view>
		
		<view class="bianhao yiyi" @click="updateHuiyuan" style="background: #FFE1FF;">
			<view class="bianhao_key">
				<text space="nbsp">修 改</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				huiyuan: null,
				huiyuanid: '',
				share: {
					title: '我的新会员',
					path: "/pages/tabs/details/huiyuandetails"
				}
			}
		},
		onLoad(option) {},
		
		onShow() {
			

			let huiyuanid = uni.getStorageSync("huiyuanid");
			this.huiyuanid =  parseInt(huiyuanid);
			// 通过huiyuanid查询会员信息
			uni.request({
			    url: this.baseUrl+'/huiyuan/'+this.huiyuanid,
			    success: (res) => {
					this.huiyuan = res.data.result.huiyuan;
			    }
			});
			
		},
		
		onShareAppMessage(res) {
			return {
				title: this.share.title,
				path: this.share.path
			}
		},
		onShareTimeline(res) {
			return {
				title: this.share.title,
				path: this.share.path
			}
		},
		methods: {
			
			fenxiang(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 1,
				    summary: "我的新会员\n姓名:"+this.huiyuan.name+"\n电话:"+this.huiyuan.phone
				});
			},
			
			updateHuiyuan(){
				uni.navigateTo({
					url: './update_huiyuan',
					success: (res) => {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', this.huiyuan);
					}
				});
			},
			call(e){
				uni.makePhoneCall({
				    phoneNumber: e
				});
			}
			
		}
	}
</script>

<style>

	.yiyi{
		width: 100%;
		text-align: center;
	}

	.text_xiugai{
		font-size: 36rpx;
	}

	.but{
		flex: 1;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-left: 10rpx;
		border-radius: 10rpx;
	}

	.btn{
		width: 100%;
		height: 100%;
	}

	.xiufen{
		display: flex;
		width: 100%;
		margin: 0 20rpx;
	}
	.xiugai{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-right: 10rpx;
		padding: 20rpx 0;
		border-radius: 10rpx;
	}
	.fenxiang{
		flex: 1;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-left: 10rpx;
		padding: 20rpx 0;
		border-radius: 10rpx;
	}
	
	.kong{
		margin: 10rpx;
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
	
	.huiyuandetails{
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
		background: #FFF0F5;
		padding-top: 0;
	}
	
	
</style>
