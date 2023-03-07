<template>
	<view class="box">
		<view class="choose">
			<view class="add-plan">添加计划</view>
			<view class="transportation-scheduling">运输调度</view>
			<view class="plan-record">计划记录</view>
		</view>
		<view class="info">
			<view class="route">
				<span>成都双流</span>
				<span>-</span>
				<span>曲靖宣威</span>
			</view>
			<view class="concrete-object">
				<span>砂石</span>
				<span>袋装</span>
				<span>550吨</span>
			</view>
			<view class="line"></view>
			<button class="dispatch-record">调度记录</button>
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
	.box {
		background-color: #F3F4F5;
	}

	/* choose的样式 */
	.choose {
		margin: 0 auto;
		width: 690rpx;
		height: 88rpx;
		background-color: #EBF1FF;
		display: flex;
	}

	.add-plan {
		width: 235rpx;
		height: 88rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #333333;
		text-align: center;
		line-height: 88rpx;
	}

	.add-plan:hover {
		background: #0983FA;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
	}

	.transportation-scheduling {
		width: 220rpx;
		height: 88rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #333333;
		text-align: center;
		line-height: 88rpx;
	}

	.transportation-scheduling:hover {
		background: #0983FA;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
	}

	.plan-record {
		width: 235rpx;
		height: 88rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #333333;
		text-align: center;
		line-height: 88rpx;
	}

	.plan-record:hover {
		background: #0983FA;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
	}

	.info {
		width: 750rpx;
		height: 1336rpx;
		background: #F3F4F5;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
	}

	.route {
		width: 273rpx;
		height: 45rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #000000;
		line-height: 38rpx;
	}

	.concrete-object {
		width: 177rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 28rpx;
	}

	.line {
		width: 630rpx;
		height: 1rpx;
		background: #D9D9D9;
		opacity: 1;
	}

	.dispatch-record {
		width: 140rpx;
		height: 56rpx;
		font-size: 24rpx;
		font-weight: 400;
		background: #0982FA;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		text-align: center;
	}
</style>
