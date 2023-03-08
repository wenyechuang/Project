<template>
	<view class="lists">
		<view class="address">{{list.content1}}</view>
		<view class="content">{{list.content2}}</view>
		<view class="progress-show">
			<view class="progress">
				<view class="progressText">{{list.content3a}}</view>
			</view>
			<text class="number">{{list.content3b}}</text>
		</view>
		<view class="line"></view>
		<view class="allBtn">
			<view class="btn" @click="close(list.id)">关闭</view>
			<view class="btn">调度记录</view>
			<view class="btn" @click="appoint">指派</view>
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
		props:["list"],
		methods: {
			close(id){
				this.$emit("onClose",id)
			},
			appoint(){
				uni.navigateTo({
					url:"/pages/appoint/appoint"
				})
			},
			share(){
				uni.navigateTo({
					url:"/pages/share/share"
				})
			},
			
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

	.progressText{
		margin-left: 13rpx;
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
