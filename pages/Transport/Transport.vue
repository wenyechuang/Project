<template>
	<view class="nav">
		<view class="box">
			<button class="box1">运单详情</button>
			<button class="box2" @click="handyundan">运单日志</button>
			<button class="box2" @click="handjilu">异常记录</button>
		</view>
		<view class="title-item">
			<uni-list>
				<uni-list-item title="运单编号" :rightText="twos.waybillNo" />
				<uni-list-item title="货物名称" :rightText="twos.materialName"  />
				<uni-list-item title="规格类型" :rightText="twos.materialSpec" />
				<uni-list-item title="单价" :rightText="danjia"  />
				<uni-list-item title="司机名称" :rightText="twos.driverName" />
				<uni-list-item title="联系方式" :rightText="twos.driverPhone"  />
				<uni-list-item title="车牌号" :rightText="twos.vehicleNumber"  />
				<uni-list-item title="装货重量" :rightText="zhuang"  />
				<uni-list-item title="卸货重量" :rightText="xie"  />
				<uni-list-item title="发货地"  :rightText="twos.receiptName" />
				<uni-list-item title="发货人"  :rightText="twos.receiptPeople" />
				<uni-list-item title="联系方式"  :rightText="twos.receiptPhone" />
				<uni-list-item title="收货地"  :rightText="twos.deliverName" />
				<uni-list-item title="收货人"  :rightText="twos.deliverPeople" />
				<uni-list-item title="联系方式" :rightText="twos.deliverPhone"  />
			</uni-list>
		</view>
	</view>
</template>

<script>
	import {Waybillmap} from "@/api/Waybillmap.js"
	export default{
		data(){
			return{
				twos:[],
				danjia:'',
				zhuang:'',
				xie:'',
			}
		},
		mounted(){
			this.handtwos()
		},
		methods:{
			async handtwos (){
				let {data} = await Waybillmap()
				this.twos = data.data
				this.danjia = `${data.data.unitPrice}元`
				this.zhuang = `${data.data.loadWeight}/吨`
				this.xie = `${data.data.receiveWeight}/吨`
			},
			handyundan(){
				uni.navigateTo({
					url:'/pages/WaybillLog/WaybillLog'
				})
			},
			handjilu(){
				uni.navigateTo({
					url:'/pages/AbnormalRecord/AbnormalRecord'
				})
			}
		}
	}
</script>

<style>
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
	
	.nav {
		width: 100%;
		height: 100%;
		background-color: #F3F4F5;
		padding-top: 20rpx;
	}

	.title-item {
		width: 690rpx;
		height: 1760rpx;
		background: #FFFFFF;
		opacity: 1;
		margin-top: 20rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 20rpx;
	}
</style>
