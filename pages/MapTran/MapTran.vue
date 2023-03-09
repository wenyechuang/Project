<template>
	<waybillMap></waybillMap>
	<!-- 这个页面是未确认页面 -->
	<!-- <view class="">
		<view style="width: 100%; height: 773rpx;background-color: aquamarine;">
			
		</view> -->
	<!-- <map id="map" class="map" :include-points="points" style="width: 100%; height: 773rpx;" :markers="markers"
		:polyline="polyline" :latitude="latitude" :longitude="longitude"></map> -->
		<!-- <view class="hand">
			<view class="hand1">
				<text class="hand2">高启强</text> 
				<text class="hand3">18888888888</text>
			</view>
			<text class="hand4">川A66666</text>
			<view class="hand1"> 
				<image class="hand7" src="../../static/物流货物运输 1.png" mode=""></image>
				<text class="hand5">水泥</text>
				<text class="hand6">规格型号</text>
			</view>
			
		</view>
		<view class="boxText">
			<view class="boxText2">
				<text class="boxText12">已完成</text>
				<view class="boxText3">
					<text class="boxText11">刷新</text>
					<image class="boxText1" src="../../static/刷新.png"></image>
				</view>
			</view>
			<view class="">
				<image class="boxText4" src="../../static/地点 1.png" mode=""></image>
				<text class="boxText9">{{markers[0].callout.content}}</text>
			</view>
			<text class="boxText10">金创大道海运生物流园</text>
			<view class="boxText8">
				<view class="">
					<view class="">
						<image class="boxText4" src="../../static/地点 11.png" mode=""></image>
						<text class="boxText9">{{markers[1].callout.content}}</text>
					</view>
					<text class="boxText10">金创大道海运生物流园</text>
				</view>
				<view class="boxText5">
					<view class="boxText7">
						<image @click="handTran" class="boxText4" src="../../static/正方体-线型.png" mode=""></image>
					<text class="boxText6" @click="handTran">运单详情</text>
					</view>
					<view class="boxText7">
						<image @click="handyundanrizhi" class="boxText4" src="../../static/表单.png" mode=""></image>
					<text class="boxText6" @click="handyundanrizhi">运单日志</text>
					</view>
				</view>
			</view>
			<view class="yunfei">
				<view class="yunfei1">
					<text class="boxText6">运费：</text>
					<text>1598</text>
					<text class="boxText6">元</text>
				</view>
			</view>
		</view>
		</view> -->
</template>
<script>
	import waybillMap  from "@/pages/map/waybillMap.vue"
	export default {
		name: "waybillMap",
		props:["prop"],
		components:{
			waybillMap
		},
		data() {
			return {
				latitude: 30.60, // 初始纬度
				longitude: 104.05, // 初始经度
				markers: [{
					id: 10001,
					longitude: 104.05,
					latitude: 30.60,
					iconPath: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png",
					width: 25,
					height: 40,
					callout: {
						content: "四川-成都",
						padding: 8,
						display: "ALWAYS"
					}
				}, {
					id: 10002,
					longitude: 106.550214,
					latitude: 29.547986,
					iconPath: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png",
					width: 25,
					height: 40,
					callout: {
						content: "重庆",
						padding: 8,
						display: "ALWAYS"
					}
				}],
				points: [{
					latitude: 30.60,
					longitude: 104.05
				}, {
					longitude: 106.550214,
					latitude: 29.54798
				}],
				pl: [],
				polyline: [{
					points: [{
						longitude: 104.05,
						latitude: 30.60
					}, {
						longitude: 106.550214,
						latitude: 29.54798
					}],
					color: '#0055ff',
					width: 6,
					borderColor: '#2f693c',
					borderWidth: 1
				}],
			}
		},
		mounted() {
			uni.request({
				url: `https://apis.map.qq.com/ws/direction/v1/driving/?key=62HBZ-E7ZCJ-UVCFJ-KL7BI-GWFE5-4XBUF&from=30.60,104.05&to=29.547986,106.550214`,
				success:(res)=> {
					var result = res.data.result
					var route = result.routes[0]
					var coors = route.polyline
					//坐标解压（返回的点串坐标，通过前向差分进行压缩）
					var kr = 1000000;
					for (var i = 2; i < coors.length; i++) {
						coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
					}
					//将解压后的坐标放入点串数组pl中
					for (var i = 0; i < coors.length; i += 2) {
						this.pl.push({
							latitude: coors[i],
							longitude: coors[i + 1]
						})
					}
					this.polyline[0].points = this.pl
				}
			})
		},
		methods:{
			handTran(){
				uni.navigateTo({
					url: '/pages/Transport/Transport'
				})
			},
			handyundanrizhi(){
				uni.navigateTo({
					url: '/pages/WaybillLog/WaybillLog'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yunfei1{
	width: 171rpx;
	height: 56rpx;
	font-size: 20rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #333333;
	
	}
	.yunfei{
		width: 710rpx;
		height: 117rpx;
		background: #ffffff;
		box-shadow: 2rpx 2rpx 2rpx 4rpx rgba(194,194,194,0.25);
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		padding: 17rpx;
	}
	.boxText12{
		width: 90rpx;
		height: 42rpx;
		font-size: 30rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #000000;
	}
	.boxText11{
		width: 48rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #808080;
	}
	.boxText10{
		width: 102rpx;
		height: 28rpx;
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #656565;
	}
	.boxText9{
		width: 119rpx;
		height: 36rpx;
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #656565;
	}
	.boxText8{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.boxText7{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.boxText6{
		width: 80rpx;
		height: 28rpx;
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	.boxText5{
		display: flex;
		transform:translate(-60rpx,0);
	}
	.boxText4{
		width: 30rpx;
		height: 30rpx;
	}
	.boxText3{
		margin-right: 60rpx;
		display: flex;
		align-items: center;
	}
	.boxText2{
		display: flex;
		justify-content: space-between;
	}
	.boxText1{
		width: 26rpx;
		height: 26rpx;
		
		opacity: 1;
	}
	.boxText{
		width: 750rpx;
		height: 536rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		opacity: 1;
		padding: 20rpx;
		transform:translate(0,-180rpx);
	}
	.hand7{
		width: 48rpx;
		height: 48rpx;
	}
	.hand6{
		width: 80rpx;
		height: 28rpx;
		font-size: 20rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.hand5{
		width: 48rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.hand1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.hand2{
		width: 102rpx;
		height: 48rpx;
		font-size: 34rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		
	}
	.hand3{
		width: 151rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-right: 20rpx;
	
	}
	.hand4{
		width: 157rpx;
		height: 48rpx;
		font-size: 34rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	
	}
	.hand{
		width: 333rpx;
		height: 174rpx;
		background: rgba(0,0,0,0.4);
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		opacity: 1;
		margin-left: 37rpx;
		transform:translate(0,-200rpx);
		padding-left: 15rpx;
		padding-top: 6rpx;
	}

</style>
