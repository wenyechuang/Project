<template>
	<view>
		<inputs text="预估车辆数" :classFlag="false"><text class="Slot">辆</text></inputs>
		<inputs text="预估装货重量" :classFlag="false"><text class="Slot">吨</text></inputs>
		<inputs text="预估装货时间" :classFlag="false"><image src="../../static/日期 1.png" class="time1"></image></inputs>
		<inputs text="输入车牌号" :classFlag="true"><image src="../../static/搜索小 1.png" class="search1"></image></inputs>
		
		<card></card>
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
</style>
