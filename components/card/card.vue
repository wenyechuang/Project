<template>
	<view class="driver">
		<view class="box">
			<view class="number">川A66666</view>
			<view>
				<image src="../../static/Rectangle 48.png" class="Rectangle"></image>
			</view>
		</view>
		<view class="line"></view>
		<view class="box">
			<view class="search">选择司机</view>
			<view style="display: flex;align-items: center;">
				<view class="search">请选择</view>
				<image src="../../static/arrow-right 1.png" class="arrow-right"></image>
			</view>
		</view>
		<view class="contact">
			<view class="search">联系方式</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.driver{
		width: 690rpx;
		height: 285rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		margin: 20rpx 25rpx;
		overflow: hidden;
	}
	.box{
		width: 625rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 25rpx;
	}
	.number{
		width: 138rpx;
		height:42rpx;
		font-size: 30rpx;
		color: #333333;
	}
	.Rectangle{
		width: 30rpx;
		height:30rpx
	}
	.line{
		width: 625rpx;
		height: 1rpx;
		background: #D9D9D9;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
		margin: 30rpx 25rpx;
	}
	.search{
		/* width:96rpx; */
		hieght:34rpx;
		font-size: 24rpx;
		color: #999999;
	}
	.arrow-right{
		width: 24rpx;
		height:24rpx;
		margin-left: 3rpx;
	}
	.contact{
		margin: 34rpx 25rpx;
	}
</style>
