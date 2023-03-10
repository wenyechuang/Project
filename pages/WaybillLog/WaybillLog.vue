<template>
	<view class="nav">
		<view class="box">
			<button class="box2" @click="handxiangqing">运单详情</button>
			<button class="box1">运单日志</button>
			<button class="box2" @click="handyichang">异常记录</button>
		</view>
		<uni-card title="装货时间">
			<text class="uni-body">装货单</text>
			<view class="body1">
				<view class="shangchuan">
					<image :src="chu.photoUrl" mode="" class="shangchuan2"></image>
				</view>
				<view class="shangchuan shangchuan1">
					<image :src="chu.photoUrl" mode="" class="shangchuan2"></image>
				</view>
			</view>
		</uni-card>
		<uni-card title="卸货时间">
			<text class="uni-body">卸货单</text>
			<view class="body1">
				<view class="shangchuan">
					<image :src="xiehuo.photoUrl" mode="" class="shangchuan2"></image>
				</view>
				<view class="shangchuan shangchuan1">
					<image :src="xiehuo.photoUrl" mode="" class="shangchuan2"></image>
				</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
	import {
		WaybillLog
	} from "@/api/Waybillmap.js"
	export default {
		data() {
			return {
				yun: {
					waybillId: '3',
					type: ''
				},
				chu: [],
				xiehuo: []
			}
		},
		mounted() {
			this.handrizhidog()
		},

		methods: {
			async handrizhidog() {
				let {
					data
				} = await WaybillLog(this.yun)
				this.chu = data.rows[0]
				this.xiehuo = data.rows[1]
			},
			handxiangqing() {
				uni.navigateTo({
					url: '/pages/Transport/Transport'
				})
			},
			handyichang() {
				uni.navigateTo({
					url: '/pages/AbnormalRecord/AbnormalRecord'
				})
			}
		}
	}
</script>

<style>
	.shangchuan2 {
		width: 100%;
		height: 100%;
	}

	.body1 {
		display: flex;
		justify-content: space-between;
	}

	.shangchuan1 {
		margin-left: 26rpx;
	}

	.shangchuan {
		width: 304rpx;
		height: 157rpx;
		background: #D9D9D9;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
	}

	.nav {
		width: 750rpx;
		height: 1336rpx;
		background: #F3F4F5;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
		padding-top: 20rpx;
	}

	.box {
		width: 690rpx;
		height: 88rpx;
		background: #EBF1FF;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		display: flex;
		flex: 1;
		margin: 0 auto;
	}

	.box1 {
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		width: 235rpx;
		height: 88rpx;
		background: #0983FA;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		line-height: 88rpx;
	}

	.box2 {
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 88rpx;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		width: 235rpx;
		height: 88rpx;
		background: #EBF1FF;

	}
</style>
