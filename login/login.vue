<template>
	<view>
		<view class="gduir">
			<view class="gduir-box">
			</view>
			<view class="hangdoulisit">
				<image src="../../static/logobai.png" style="width: 134rpx;height: 136rpx;margin: 94rpx 308rpx"></image>
			</view>
		</view>
		<view class="input">
			<view style="display: flex;justify-content: space-between;">
				<input type="number" v-model="data.username" placeholder="请输入手机号" maxlength="11">
				
				<image src="../../static/inpon.png" style="width: 40rpx;height: 40rpx;"></image>
			</view>
			<br style="width: 597rpx;height: 0rpx;opacity: 1;border: 1rpx solid #DBDBDB;">

			<view style="display: flex;justify-content: space-between;">
				<input class="input-box" v-model="data.password" type="password"placeholder="请输入密码" style="margin: 120rpx 0 0 0;">
				
				<image src="../../static/fihfa.png" style="width: 40rpx;height: 40rpx;margin: 120rpx 0 0 0;"></image>
			</view>
			<br style="width: 597rpx;height: 0rpx;opacity: 1;border: 1rpx solid #DBDBDB;">
			<navigator url="login.vue"
				style="font-weight: 400;color: #878787;font-size: 20rpx;margin: 13rpx 0 0 497rpx;">
				忘记密码？
			</navigator>
		</view>
		<button class="tudus" @click="login">立即登录</button>
	</view>
</template>

<script>
	import {
			getLogin
		}
		from '../../api/center.js'
		export default {
			data() {
				return {
					// 18000512601    12345678
					data:{
						username: '',
						password: ''
				}
				
				}
				
			},
			methods: {
				async login() {
					let {
						data
					} = await getLogin(this.data)
					uni.setStorageSync("token", data.token)
					if (data.code == 200) {
						console.log(data.token)
						uni.switchTab({
							url: '../home/home'
						})
					} else {
						console.log(data.msg)
					}
					
	
				}
			}
		}


</script>
<style lang="scss" scoped>
	.gduir {
		width: 750rpx;
		height: 463rpx;
		display: flex;
		flex-direction: column;

	.gduir-box {
		width: 750rpx;
		height: 80rpx;
		background-color: #0982FA
	}

	.hangdoulisit {
		width: 750rpx;
		height: 383rpx;
		background-image: url('../../static/Rectangle.png');
		background-size: cover;
		}
	}

	.input {
		margin: 198rpx 76rpx;
		width: 596.5rpx;
		height: 200rpx;
	}
	.tudus{
		width: 200pt;
		height: 35pt;
		color: #fff;
		background-color: #0982FA;
	}
</style>
