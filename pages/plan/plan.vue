<template>
	<view>
		<view class="nav">
			<view @click="changeNav(1)" class="navList" :class="{'navActive':current==1}">添加计划</view>
			<view @click="changeNav(2)" class="navList" :class="{'navActive':current==2}">运输调度</view>
			<view @click="changeNav(3)" class="navList" :class="{'navActive':current==3}">计划记录</view>
		</view>
		<view v-if="current === 1">添加计划</view>
		<view v-if="current === 2">
			<plan v-for="item in lists" :list="item" @onClose="close">{{item.content1}}</plan>
		</view>
		<view v-if="current === 3"><planRecord></planRecord></view>
	</view>
</template>


<script>
	export default {
		components: {},
		data() {
			return {
				current: 1,
				activeColor: '#007aff',
				styleType: 'button',
				
				lists:[{
					id:"cd001",
					content1:"成都双流-曲靖宣威",
					content2:"砂石 袋装 500吨",
					content3a:"已接单335吨",
					content3b:"45%",
				},
				{
					id:"cd002",
					content1:"成都双流-曲靖宣威",
					content2:"砂石 袋装 500吨",
					content3a:"已接单335吨",
					content3b:"45%",
				}]
			}
		},
		methods: {
			changeNav(index){
				this.current=index
			},
			close(id) {
				this.lists=this.lists.filter((item)=>item.id!=id)
			}
		}
	}
</script>



<style lang="scss">
	page {
		background: #F3F4F5;
	}

	.nav {
		width: 690rpx;
		height: 88rpx;
		background: #EBF1FF;
		margin-top: 20rpx;
		margin-left: 30rpx;
		border-radius: 16rpx;
		
		display: flex;
		// justify-content: space-around;
		align-items: center;
		font-size: 26rpx;
	}
	.navList{
		width: 235rpx;
		height: 88rpx;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 1;
		
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.navActive{
		background: #0983FA;
		color: #FFFFFF;
	}

	
</style>
