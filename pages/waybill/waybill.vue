<template>
	<view class="qql">
		<view class="all">
			<view class="ture" @click="changeNav(1)" :class="{'navActive':current==1}">
				全部
			</view>
			<view class="ture" @click="changeNav(2)" :class="{'navActive':current==2}">
				执行中
			</view>
			<view class="ture" @click="changeNav(3)" :class="{'navActive':current==3}">
				未确认
			</view>
			<view class="ture" @click="changeNav(4)" :class="{'navActive':current==4}">
				已确认
			</view>
		</view>
		<view v-if="current == 1">
			<view class="time">
				<view class="times">
					时间范围
				</view>
				
				<view class="uni-list-cell">
					<view class="uni-list-cell-db-qq">
						<picker mode="time" :value="time" @change="bindTimeChange">
							<view class="uni-input">{{time}}</view>
						</picker>
					</view>
					<view class="uni-list-cell-db-aa">
						至
					</view>
					<view class="uni-list-cell-db">
						<picker mode="time" :value="time" @change="bindTimeChanges">
							<view class="uni-input">{{timeEnd}}</view>
						</picker>
					</view>
					
				</view>
				<view class="sousuo">
					<img src="../../static/sousuo.png" alt="" class="tupian">
				</view>
			</view>
			<view>
				<en></en>
				<en></en>
				<en></en>
			</view>
		</view>
		<view v-if="current == 2">
			<view>
				<en></en>
				<en></en>

			</view>
		</view>
		<view v-if="current == 3">
			<view>
				<en></en>

			</view>
		</view>
		<view v-if="current == 4">
			<view>
				<en></en>
				<en></en>
				<en></en>
			</view>
		</view>
	</view>
</template>

<script>
	import en from '../../components/en/en.vue'
	import confirmed from '../../components/en/confirmed.vue'
	export default {
		components: {
			en,
			confirmed
		},
		data() {
			return {
				timeEnd:"结束时间",
				time: "开始时间",
				current: 1,
				activeColor: '#007aff',
			}
		},
		methods: {
			changeNav(index) {
				this.current = index
				uni.navigateTo({
					url: '/pages/MapWay/MapWay'
				})
			},
			bindTimeChange(time) {
				 this.time = time.detail.value
				//  console.log(time);
				// console.log(time.detail.value);
			},
			bindTimeChanges(time){
				this.timeEnd = time.detail.value
			}
		},
	}
</script>

<style lang="scss">
	.time{
		display: flex;
		height: 78rpx;
		width: 690rpx;
		// border: 1px solid red;
		text-align: center;
		line-height: 78rpx;
		margin-left: 30rpx;
		border: 0.4rpx solid #0982FA;
		margin-top: 20rpx;
	}
	.uni-list-cell-db-qq{
		height: 34rpx;
		width: 100rpx;
		color: #666666;
		font-size: 24rpx;
		margin-left:48rpx ;
	}
	.uni-list-cell-db-aa{
		height: 34rpx;
		width: 24rpx;
		color: #666666;
		font-size: 24rpx;
		margin-left:88rpx ;
	}
	.tupian{
		height: 30rpx;
		width: 30rpx;
	}
	.sousuo{
		height: 78rpx;
		width: 86rpx;
		background-color: #0983FA;
		margin-left:48rpx;
	}
	.times{
		height: 34rpx;
		width: 97rpx;
		color: #000000;
		font-size: 24rpx;
		margin-left: 21rpx;
	}
	.uni-list-cell{
		display: flex;
	}
	.uni-list-cell-db{
		height: 34rpx;
		width: 100rpx;
		color: #666666;
		font-size: 24rpx;
		margin-left: 87rpx;
	}
	.all {
		display: flex;
		height: 88rpx;
		width: 690rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
		// border: 1px solid red;
		background-color: #EBF1FF;
	}

	.complete {
		height: 88rpx;
		width: 157rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 26rpx;
		color: white;
	}

	.ture {
		border-radius: 16rpx;
		margin-left: 12.4rpx;
		height: 88rpx;
		width: 157rpx;
		font-size: 26rpx;
		line-height: 88rpx;
		text-align: center;
		background-color: #EBF1FF;
		border: none;
	}

	.navActive {
		background-color: #0983FA;
		color: white;
	}

	.qql {
		height: 100vh;
		background-color: #F3F4F5;
	}
	::v-deep uni-checkbox .uni-checkbox-input{
		    margin-right: 5px;
		    -webkit-appearance: none;
		    appearance: none;
		    outline: 0;
		    border: 1px solid #d1d1d1;
		    background-color: #fff;
		    border-radius: 3px;
		    width: 53px;
		    height: 2px;
		    position: relative;
	}
</style>
