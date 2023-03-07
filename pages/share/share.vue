<template>
	<view>
		<inputs text="预估车辆数" :classFlag="false"><text class="Slot">辆</text></inputs>
		<inputs text="预估装货重量" :classFlag="false"><text class="Slot">吨</text></inputs>
		<inputs text="预估装货时间" :classFlag="false">
			<image src="../../static/日期 1.png" class="time1"></image>
		</inputs>
		<inputs text="输入车牌号" :classFlag="true">
			<image src="../../static/搜索小 1.png" class="search1"></image>
		</inputs>
		
		<view class="box">
			<view class="boxHead">
				<image src="../../static/Rectangle 1.png" class="Rectangle1"></image>
				<view class="imgBox"></view>
			</view>
			<view class="information">货源信息</view>
			<view class="line"></view>
			<view class="informationBox">
				<view class="informationContent">货物名称</view>
				<view class="informationContent">砂石</view>
			</view>
			<view class="informationBox">
				<view class="informationContent">规格型号</view>
				<view class="informationContent">砂石</view>
			</view>
			<view class="informationBox">
				<view class="informationContent">运价</view>
				<view class="informationContent">16元/吨</view>
			</view>
			<view class="informationBox">
				<view class="informationContent">发货地</view>
				<view class="informationContent">环球中心n3</view>
			</view>
			<view class="informationBox">
				<view class="informationContent">收货地</view>
				<view class="informationContent">环球中心n5</view>
			</view>
		</view>
		<button>分享</button>
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
	page{
		background: #F3F4F5;
		height: 1520rpx;
	}
	
	.Slot{
		font-size: 24rpx;
		color: #666666;
	}
	.time1{
		width: 36rpx;
		height:36rpx
	}
	.search1{
		width: 30rpx;
		height:30rpx
	}
	
	.box{
		width: 659rpx;
		height: 949rpx;
		background: #FFFFFF;
		margin: 43rpx 45rpx;
		
	}
	.boxHead{
		width: 659rpx;
		height:467rpx;
		position: relative;
	}
	.Rectangle1{
		width: 659rpx;
		height:443rpx
	}
	.imgBox{
		width: 368rpx;
		height: 368rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		position: absolute;
		left: 146rpx;
		bottom: 0;
	}
	.information{
		font-size: 30rpx;
		color: #333333;
		margin: 26rpx 60rpx;
	}
	.line{
		width: 535rpx;
		height: 1rpx;
		background: #D9D9D9;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
		margin: 30rpx 60rpx;
	}
	.informationBox{
		display: flex;
		justify-content: space-between;
		margin: 34rpx 60rpx;
	}
	.informationContent{
		font-size: 24rpx;
		color: #0982FA;
	}
	button{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		color: #FFFFFF;
		
		width: 280rpx;
		height: 86rpx;
		background: #0982FA;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		/* margin: 55rpx 235rpx; */
		/* margin-bottom: 24rpx; */
	}
</style>
