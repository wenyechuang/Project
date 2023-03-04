<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

				
		<Counter :count="count" @oncount="handleCount"></Counter>
		<!-- #ifdef MP-WEIXIN -->
		<button>微信支付</button>
		<!-- #endif -->
		<!-- #ifdef H5-->
		<button>支付宝支持</button>
		<!-- #endif -->
		
		{{theme}}
		
		<uni-popup ref="popup" type="top">
			"sjafhse"
		</uni-popup>
		
		<button @tap="handleOpen">芝麻开门</button> 
	</view>
</template>

<script>
	/* 推荐在页面里面 小程序的生命周期 */
	import {mapState} from "vuex";
	
	export default {
		data() {
			return {
				title: 'Hello',
				count: 1
			}
		},
		computed:{
			...mapState(["theme"])
		},
		onLoad() {
			// #ifdef MP-WEIXIN

			//这里的代码编译微信

			// #endif

			// #ifdef H5

			//编译到H5

			// #endif
		},
		methods: {
			handleOpen(){
				this.$refs.popup.open()
			},
			handleCount(type) {
              this.count += type
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
