<template>
	<view class="">
		<!-- 调度待确认 -->
		<view class="box"  v-show="current=='0'" >
			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<button class="dispatch-record">已确认</button>
			</view>

			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<button class="dispatch-no">已拒绝</button>
			</view>

			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="yes-no">
					<button class="yes">确认</button>
					<button class="no">拒绝</button>

				</view>
			</view>

			<button  class="confirm">确认</button>
		</view>


		<!-- 这里是司机待确认 -->
		<view class="box" v-show="current=='1'" >
			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="dispatch-record-1">司机已确认</view>
			</view>

			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="dispatch-record-1">司机已确认</view>
			</view>

			<view class="driver-info">
				<view class="driver">
					<view class="name">
						<view>司机名称：</view>
						<view>高启强</view>
					</view>
					<view class="license-plate">
						<view>车牌号：</view>
						<view>川A66666</view>
					</view>
					<view class="time">
						<view>到厂时间：</view>
						<view>2022-2-2</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="dispatch-record-2">司机已拒绝</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "Item",
		props:{
			current:{
				type:[String,Number]
			}
		},
		data() {
			return {

			};
		},
		
	}
</script>

<style> 
	.box {
		width: 100%;
		height: 100%;
		background-color: #F3F4F5;
	}

	.driver-info {
		margin-top: 20rpx;
		width: 690rpx;
		height: 302rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;

	}


	.driver {
		display: flex;
		flex-direction: column;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		line-height: 28rpx;
	}

	.name {
		display: flex;
		padding: 30rpx 0 0 25rpx;
	}

	.license-plate {
		display: flex;
		padding: 30rpx 0 0 25rpx;
	}

	.time {
		display: flex;
		padding: 30rpx 0 0 25rpx;

	}


	.line {
		width: 630rpx;
		height: 1rpx;
		background: #D9D9D9;
		opacity: 1;
		margin: 25rpx 0 0 30rpx;
	}

	.yes-no { 
		padding: 20rpx 0 0 345rpx;
		width: 300rpx;
		height: 56rpx;
		display: flex; 
	}

	.yes {
		width: 140rpx;
		height: 56rpx;
		background: #0982FA;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		font-size: 24rpx ;
		color: #FFFFFF;
	}

	.no {
		width: 140rpx;
		height: 56rpx;
		background: #0982FA;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		font-size: 24rpx;
		color: #FFFFFF;
	}

	.dispatch-record {
		margin: 20rpx 0 0 520rpx;
		width: 140rpx;
		height: 56rpx;
		background: #C7C7C7;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		font-size: 24rpx;
		color: #333333;
		text-align: center;
	}
	.dispatch-no {
		margin: 20rpx 0 0 520rpx;
		width: 140rpx;
		height: 56rpx;
		background: #C7C7C7;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		font-size: 24rpx;
		color: #333333;
		text-align: center;
	}

	.dispatch-record-1 {
		margin: 20rpx 0 0 520rpx;
		width: 140rpx;
		height: 56rpx;
		opacity: 1;
		font-size: 24rpx;
		color: #04D919;
		text-align: center;
	}

	.dispatch-record-2 {
		margin: 20rpx 0 0 520rpx;
		width: 140rpx;
		height: 56rpx;
		opacity: 1;
		font-size: 24rpx;
		color: #EC0000;
		text-align: center;
	}

	.dispatch-refuse {
		margin: 20rpx 0 0 520rpx;
		width: 119rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-weight: 400;
		background-color: #C7C7C7;
		line-height: 28rpx;

	}

	.confirm {
		position: fixed;
		top: 974rpx;
		left: 235rpx;
		width: 280rpx;
		height: 86rpx;
		background: #0982FA;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		text-align: center;
		line-height: 86rpx;
		opacity: 1;
		 color: #FFFFFF;

	}
	button::after {
	border: none;
	}
	
	button[type=primary][plain] {
	background-color: transparent;
	border: none;
	color: #333333;
	}
</style>
