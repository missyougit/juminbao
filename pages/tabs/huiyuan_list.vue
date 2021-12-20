<template>
	<view class="huiyuan">
		<view style="margin: 10rpx;"></view>
		<!-- 搜索 -->
		<view class="sousuo">
			<view class="ssxm">
				<input class="ss" @input="getSearchStr" type="text" :value="searchText" placeholder="搜索 姓名或手机..."/>
			</view>
			<view class="chazaho" @click="chazhao">
				<image class="cz" src="../../static/icons/chazhao.png"></image>
			</view>
		</view>
		
		<view class="list" v-for="(item,index) in huiyuan_list" :key="item.id">
			<view class="xingming" @click="toHuiyuanDetails(item)">
				<text>{{item.name}}</text>
			</view>
			<view v-if="item.gender==0" class="xingbie">
				<text>男</text>
			</view>
			<view v-else class="xingbie">
				<text>女</text>
			</view>
			<view class="zhiye">
				<text>{{item.zhiye}}</text>
			</view>
			<view class="dianhua" @click="call(item.phone)">
				<text>{{item.phone}}</text>
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
				openId: '',
				yuangongid: '',
				huiyuan_list: '',
				pageCount: 1,
				total: 0,
				pageNo: 2,
				pageSize: 16,
				searchText: '',
				share: {
					title: '我的会员列表',
					path: "/pages/tabs/huiyuan_list"
				}
			}
		},

		onLoad(option) {
			// #ifdef APP-PLUS
			this.yuangongid = uni.getStorageSync("yuangongid");
			let url = this.baseUrl+'/huiyuan/by/'+this.yuangongid+"?pageNo=1&pageSize="+this.pageSize;
			// #endif
			// #ifdef MP-WEIXIN
			this.openId = uni.getStorageSync("openId");
			let url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"?pageNo=1&pageSize="+this.pageSize;
			// #endif
	
			uni.request({
			    url: url,
			    success: (res) => {
					console.log("res=>",res)
					let {status,message,result} = res.data;
					if(status==200){
						this.huiyuan_list = result.huiyuanList;
						this.pageCount = result.pageCount;
						this.total = result.total;
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
	
		onShow() {
			
			if(this.huiyuan_list==null || this.huiyuan_list=='' || this.huiyuan_list.length==0){
				
				// #ifdef APP-PLUS
				this.yuangongid = uni.getStorageSync("yuangongid");
				let url = this.baseUrl+'/huiyuan/by/'+this.yuangongid+"?pageNo=1&pageSize="+this.pageSize;
				// #endif
				// #ifdef MP-WEIXIN
				this.openId = uni.getStorageSync("openId");
				let url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"?pageNo=1&pageSize="+this.pageSize;
				// #endif
					
				uni.request({
				    url: url,
				    success: (res) => {
						console.log("res=>",res)
						let {status,message,result} = res.data;
						if(status==200){
							this.huiyuan_list = result.huiyuanList;
							this.pageCount = result.pageCount;
							this.total = result.total;
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

		onPullDownRefresh() {
			// #ifdef APP-PLUS
			let url = this.baseUrl+'/huiyuan/by/'+this.yuangongid+"?pageNo=1&pageSize="+this.pageSize;
			// #endif
			// #ifdef MP-WEIXIN
			let url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"?pageNo=1&pageSize="+this.pageSize;
			// #endif
			uni.request({
			    url: url,
			    success: (res) => {
					let {status,message,result} = res.data;
					if(status==200){
						this.huiyuan_list = result.huiyuanList;
						this.pageCount = result.pageCount;
						this.total = result.total;
						this.pageNo = 2;
					}else{
						uni.showToast({
						    title: message,
						    duration: 1000,
							icon: 'none'
						});
					}
					uni.stopPullDownRefresh();
			    }
			});
		},
		
		onReachBottom(){
			if(this.pageNo <= this.pageCount){
				// #ifdef APP-PLUS
				let url = this.baseUrl+'/huiyuan/by/'+this.yuangongid+"?pageNo="+this.pageNo+"&pageSize="+this.pageSize;
				// #endif
				// #ifdef MP-WEIXIN
				let url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"?pageNo="+this.pageNo+"&pageSize="+this.pageSize;
				// #endif
				uni.request({
				    url: url,
				    success: (res) => {
						let {status,message,result} = res.data;
						if(status==200){
							this.huiyuan_list = [...this.huiyuan_list,...result.huiyuanList];
							this.pageCount = result.pageCount;
							this.total = result.total;
							this.pageNo ++;
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
			
			chazhao(){
				let url ;
				if(this.searchText=='' || this.searchText==null){
					// #ifdef APP-PLUS
					url = this.baseUrl+'/huiyuan/by/'+this.yuangongid+"?pageNo=1&pageSize="+this.pageSize;
					// #endif
					// #ifdef MP-WEIXIN
					url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"?pageNo=1&pageSize="+this.pageSize;
					// #endif
				}else{
					// #ifdef APP-PLUS
					url = this.baseUrl+'/huiyuan/search/'+this.yuangongid+"?searchText="+this.searchText;
					// #endif
					// #ifdef MP-WEIXIN
					url = this.baseUrl+'/huiyuan/wechat/'+this.openId+"/search?searchText="+this.searchText;
					// #endif
				}
		
				uni.request({
				    url: url,
				    success: (res) => {
						let {status,message,result} = res.data;
						if(status == 200){
							this.huiyuan_list = result.huiyuanList;
							if(this.searchText=='' || this.searchText==null){
								this.pageCount = result.pageCount;
								this.total = result.total;
								this.pageNo = 2;
							}
						}else{
							this.huiyuan_list = [];
							uni.showToast({
							    title: message,
							    duration: 1000,
								icon: 'none'
							});
						}
						this.searchText = '';
				    }
				});
			},
			// 获取搜索关键字
			getSearchStr(e){
				let {value} = e.detail;
				this.searchText = value.replace(/\s/g,"");
			},
			call(e){
				uni.makePhoneCall({
				    phoneNumber: e
				});
			},
			// 跳转到会员详情页,携带会员信息
			toHuiyuanDetails(huiyuan){
				uni.navigateTo({
					url: './details/huiyuandetails',
					success: function(res) {
						uni.setStorageSync("huiyuanid",huiyuan.id);
					}
				});
			}
			
		}
	}
</script>

<style>
	
	.ssxm{
		flex: 8;
	}

	.chazaho{
		flex: 2;
		display: flex;
		align-items: center;
	}
	
	.cz{
		width: 58rpx;
		height: 58rpx;
		margin-left: 58rpx;
	}
	
	.sousuo{
		width: 100%;
		background: #FFE1FF;
		height: 68rpx;
		border-radius: 34rpx;
		display: flex;
		color: #555555;
		margin-bottom: 20rpx;
		align-items: center;
	}
	
	.ss{
		margin-left: 34rpx;
	}
	
	.list{
		display: flex;
		width: 100%;
		margin: 0 20rpx;
		background: #FFF0F5;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
	}
	
	.xingming{
		float: left;
		flex: 2;
		margin: 20rpx;
		color: #007AFF;
	}
	
	.xingbie{
		width: 100%;
		margin: 20rpx;
		flex: 1;
		display: flex;
		align-items: center;
	}
	
	.zhiye{
		width: 100%;
		margin: 20rpx;
		flex: 2;
		display: flex;
		align-items: center;
	}
	
	.dianhua{
		width: 100%;
		flex: 2;
		display: flex;
		align-items: center;
		margin: 20rpx;
		color: #007AFF;
	}
	
	.huiyuan {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 20rpx;
	}
	
</style>
