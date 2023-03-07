<template>
	<view class="box">
		<view class="address">
			<span class="address-q">
				成都双流-曲靖宣威
			</span>
			<span class="state">
				已完成
			</span>
		</view>
		<view class="freight">
			运费：1654元
		</view>
		<view class="material">
			<span class="materialName">
				砂石 袋装
			</span>
			<span class="materialName-q">
				34吨
			</span>
		</view>
		<view class="driver">
			<diver class="driverName">司机名称：高启强</diver><br>
			<diver class="information">联系方式：188888888</diver><br>
			<diver class="plate" >车牌号：川A666666</diver>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		list:[
			{
				id:1,
				name:"成都双流-曲靖宣威"
			},
			{
				id:2,
				name:"成都双流-曲靖宣威"
			}
		]
	},
		
	methods:{
	}
}
</script>

<style>
	.materialName-q{
		background-color:#EDEDED ;
		color: #666666 ;
		font-size: 20rpx;
		margin-left: 32rpx;
		height: 28rpx;
		width: 44rpx;
	}
	.freight{
		position: absolute;
		top: 107rpx;
		left: 474rpx;
		height: 42rpx;
		width: 200rpx;
		/* border: 1px solid red; */
		color:#3974F6 ;
		font-size: 30rpx;
	}
	.driverName{
		font-size: 20rpx;
		color: #666666;
		padding-left: 24rpx;
		margin-top: 30rpx;
	}
	.information{
		font-size: 20rpx;
		color: #666666;
		padding-left: 24rpx;
	}
	.plate{
		font-size: 20rpx;
		color: #666666;
		padding-left: 24rpx;
	}
	
	.driver{
		margin-top: 10rpx;
	}
	.material{
		padding-left: 32prx;
		color: 20rpx;
		display: flex;
	}
	
	.box{
		border-radius:20rpx;
		position: relative;
		height: 265rpx;
		width: 690rpx;
		margin-top: 20rpx;
		margin-left: 27rpx;
		/* padding-left:20rpx ; */
		background-color: #ffffff;
		/* border: 1px solid red; */
	}
	.address{
		display: flex;
		justify-content: space-between;
	}
	.address-q{
		padding: 20rpx;
		font-size: 32rpx;
		color:#000000;
	}
	.state{
		padding: 20rpx;
		font-size:26rpx;
		color:#000000;
		
		
		
		/* border: 1px solid red; */
	}
	.materialName{
		background-color:#EDEDED ;
		color: #666666 ;
		font-size: 20rpx;
		margin-left: 25rpx;
		padding-left: 7rpx;
		height: 28rpx;
		width: 86rpx;
	}
</style>