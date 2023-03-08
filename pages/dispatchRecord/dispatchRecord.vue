<template>
	<view class="box">
		<view class="choose" >
			<view class="add-plan" :current="current" @clickItem="onClickItem">添加计划</view>
			<view class="transportation-scheduling" :current="current" @clickItem="onClickItem">运输调度</view>
		</view>
		<view class="content">
			<view v-if="current == '0'">
				<driverInformation :current="current"></driverInformation>
			</view>
			<view v-if="current == '1'">
				<driverInformation :current="current"></driverInformation>
			</view>
		</view>
	</view>

	<!-- <uni-section title="实心标签" type="line">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
		
		</uni-section> -->
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return { 
				current: 0, 

			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
		}
	}
</script>

<style>
	.choose {
		margin: 0 auto;
		width: 690rpx;
		height: 88rpx;
		background-color: #EBF1FF;
		display: flex;
	}

	.add-plan {
		flex: 1;
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
		flex: 1;
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

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}


	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		margin: 0 auto;
		width: 690rpx;
		height: 88rpx;
		background: #EBF1FF;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		font-weight: 400;
		color: #333333;
		line-height: 88rpx;
		margin-top: 20rpx;
		border: ;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.segmented-control__item {
		border-color: transparent !important;
	}
</style>
