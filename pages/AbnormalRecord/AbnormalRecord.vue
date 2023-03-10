<template>
	<view class="nav">
		<view class="box">
			<button class="box2" @click="handxiangqing">运单详情</button>
			<button class="box2" @click="handrizhi">运单日志</button>
			<button class="box1">异常记录</button>
		</view>
		<view class="body">
			<text class="body1">类型：{{seen[0].questionType}}</text>
			<text class="body1">内容描述</text>
			<view class="body2">
				<text>{{seen[0].question}}</text>
			</view>
			<text class="body1">照片</text>
			<view class="body3">
				<view class="shangchuan">
					<image :src="seen[0].photoUrl" mode="" class="shangchuan2"></image>
				</view>
				<view class="shangchuan shangchuan1">
					<image :src="seen[1].photoUrl" mode="" class="shangchuan2"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import{Abnormal} from '@/api/Waybillmap.js'
	export default{
		data(){
			return{
				yi:{
					waybillId:'1',
					questionType:''
				},
				seen:[]
			}
		},
		mounted(){
			this.handyichang()
		},
		methods:{
			async handyichang(){
				let {data} = await Abnormal(this.yi)
				this.seen = data.rows
			},
			handxiangqing(){
				uni.navigateTo({
					url:'/pages/Transport/Transport'
				})
			},
			handrizhi(){
				uni.navigateTo({
					url:'/pages/WaybillLog/WaybillLog'
				})
			}
		}
	}
</script>

<style>
	.shangchuan2{
		width: 100%;
		height: 100%;
	}
	.body3{
		display: flex;
		justify-content: space-between;
	}
	.shangchuan1{
		margin-left: 26rpx;
	}
	.shangchuan{
		width: 304rpx;
		height: 157rpx;
		background: #D9D9D9;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
	}
	.body2{
		width: 628rpx;
		height: 262rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		border: 1rpx solid #D9D9D9;
		margin-bottom: 20rpx;
	}
	.body1{
		width: 225rpx;
		height: 33rpx;
		font-size: 30rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-bottom: 20rpx;
	}
	.body{
		width: 640rpx;
		height: 929rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		margin-top: 20rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		padding: 25rpx;
		display: flex;
		flex-direction: column;
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
	.box1{
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
	.box2{
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 88rpx;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		width: 235rpx;
		height: 88rpx;
		background:#EBF1FF;
		
	}
</style>