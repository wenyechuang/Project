<template>
	<view class="lists">
		<view class="address">成都双流-曲靖宣威</view>
		<view class="content">砂石 袋装 500吨</view>
		<view class="progress-show">
			<view class="progress">已接单335吨</view>
			<text class="number">45%</text>
		</view>
		<view class="line"></view>
		<view class="allBtn">
			<view class="btn" @click="close">关闭</view>
			<view class="btn">调度记录</view>
			<view class="btn" @click="skip">指派</view>
			<view class="btn" @click="share">分享</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false
			}
		},
		methods: {
			skip(){
				uni.navigateTo({
					url:"/pages/appoint/appoint"
				})
			},
			share(){
				uni.navigateTo({
					url:"/pages/share/share"
				})
			},
			close(e){
				e.remove()
			}
		}
	}
</script>

<style>
.lists {
		// position: absolute;
		overflow: hidden;//解决塌陷
		
		width: 690rpx;
		height: 267rpx;
		background: #FFFFFF;
		margin: 30rpx;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}

	.address {
		font-size: 32rpx;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}

	.content {
		font-size: 24rpx;
		color: #999999;
		margin-top: 10rpx;
		margin-left: 30rpx;
	}

	.progress-show {
		display: flex;
		font-size: 12rpx;
		margin-top: 20rpx;
		margin-left: 30rpx;
		
		width: 290rpx;
		height: 21rpx;
		background: #F8F8F8;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
	}

	.progress {
		width: 141rpx;
		height: 21rpx;
		background: #0982FA;
		color: white;
		border-radius: 10rpx;
		
		display: flex;
		align-items: center;
	}

	.number {
		color: #0982FA;
		margin-left: 10rpx;
		
		display: flex;
		align-items: center;
	}

	.line {
		width: 630rpx;
		height: 0.99rpx;
		background: #D9D9D9;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}

	.allBtn {
		display: flex;
	}

	.btn {
		width: 140rpx;
		height: 56rpx;
		background: #0982FA;
		border-radius: 10rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}
</style>
