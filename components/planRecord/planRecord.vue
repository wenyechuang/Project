<template>
	<view class="">
		<view class="info" :data="categoryList">
			<view class="route">
				<view>{{categoryList.deliverName}}</view>
				<view>-</view>
				<view>{{categoryList.receiptName}}</view>
			</view>
			<view class="concrete-object">
				<span>{{categoryList.materialName}}</span>
				<span class="materia">袋装</span>
				<span class="number">{{categoryList.totalWeight}}吨</span>
			</view>
			<view class="line"></view>
			<button class="dispatch-record" @click="handebtn">调度记录</button>

		</view>
		<view class="info" :data="categoryList">
			<view class="route">
				<view>{{categoryList.deliverName}}</view>
				<view>-</view>
				<view>{{categoryList.receiptName}}</view>
			</view>
			<view class="concrete-object">
				<span>{{categoryList.materialName}}</span>
				<span class="materia">袋装</span>
				<span class="number">{{categoryList.totalWeight}}吨</span>
			</view>
			<view class="line"></view>
			<button class="dispatch-record" @click="handebtn">调度记录</button>
		
		</view>
	</view>
</template>

<script> 
	import {getPlanRecord} from "../../api/planRecord.js"
	import util from "../../utils/config.js";
	export default {
		name: "Item",
		data() {
			return {
				categoryList:[],
					
				queryParams:{
					
				}
				
			


			};
		},
		mounted(){
			 
			this.fn()
		},

		methods: {
			 
			async fn(){
				let {data}= await getPlanRecord() 
				console.log(data)
				this.categoryList= data.data
			},
			
			handebtn() {
				uni.navigateTo({
					url: "/pages/dispatchRecord/dispatchRecord"
				})
			}
		}
	}
</script>

<style>
	.info {
		margin: 0 auto;
		width: 690rpx;
		height: 234rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		margin-top: 20rpx;

	}

	.route {
		display: flex;
		/* width: 273rpx; */
		height: 45rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #000000;
		line-height: 38rpx;
		padding: 20rpx 0px 10rpx 30rpx;
	}

	.concrete-object {
		margin: 10rpx 0rpx 0 30rpx;
		/* width: 177rpx; */
		height: 34rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		line-height: 28rpx;
		display: flex; 
	}
	.materia{
		padding-left: 20rpx ;
	}
	.number{
		padding-left: 20rpx ;
	}

	.line {
		width: 630rpx;
		height: 1rpx;
		background: #D9D9D9;
		opacity: 1;
		margin: 25rpx 0 0 30rpx;
	}

	.dispatch-record {
		margin: 20rpx 0 0 520rpx;
		width: 160rpx;
		height: 56rpx;
		font-size: 24rpx;
		background: #0982FA;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		text-align: center;
		color: #FFFFFF;

	}
</style>
