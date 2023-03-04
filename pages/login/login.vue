<template>
	<view>
		<button v-if="phone" @tap="handleLogin">点击获取头像和昵称</button>
		<button v-else class="btn active" type="default" open-type="getPhoneNumber"
			@getphonenumber="handleGetPhoneNumber">微信授权一键登录</button>

		{{phone}}
		
		{{token}}
		
		<image :src="avatar"></image>

	</view>
</template>

<script>
	/* 可没有vue-router */
	let app = getApp();

	import {
		getLogin,
		getPhoneNumber,
		getInfo
	} from "../../api/center.js";
	import util from "../../utils/config.js";

	export default {
		onLoad() {
			this.token = uni.getStorageSync("token");

			if (!this.token) {
				// 登录已过期
				uni.login({
					provider: 'weixin', //使用微信登录
					success: async ({
						code
					}) => {
						let {
							data
						} = await getLogin({
							code,
							appid: util.appid
						})
						uni.setStorageSync("token", data.token);
						this.token = data.token
					}
				});
			}
		},
		methods: {
			//获取手机号

			async handleGetPhoneNumber({
				detail
			}) {

				let {
					data
				} = await getPhoneNumber({ //
					appid: util.appid,
					code: detail.code //触发获取手机号的时候
				})
				// 只是用于判断是否绑定了手机
				let res = await getInfo({
					appid: util.appid
				});


				if (!res.data.data.bindPhoneFlag) { //如果没绑定了 做什么事情 
					uni.clearStorage();
					this.token = ""
				}
				
                this.phone = data.data.phoneNumber;

			},
			handleLogin() {
				/* 		uni.checkSession({
							success() {
								//自己跳转
								console.log("OK");
							},
							fail() {
						
						
							}
						}) */

				// 绑定好了
				uni.getUserProfile({ //拿用户的头像等
					desc: '登录',
					lang: 'zh_CN',
					fail(res) {
						console.log(res);
					},
					success:(info)=> {
						//可以拿到用户的 头像和昵称
						console.log(info);
						this.avatar = info.userInfo.avatarUrl
						this.nickName =  info.userInfo.nickName
					}
				});

			},
			handleGo() {
				uni.switchTab({
					url: "/pages/index/index",
					success() {

					}
				})
			}
		},
		watch: {
			single(newVal) {
				console.log(newVal);
			}
		},
		data() {
			return {
				single: "",
				token: "",
				phone: "",
				avatar:""
			};
		}
	}
</script>

<style lang="scss" scoped>
	.modal {
		height: 400rpx;
		background-color: #fff;
		border-radius: 12rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		color: #212121;

		.tip {
			margin-top: 80rpx;
			font-size: 30rpx;
			font-weight: 500;
		}

		.action {
			margin-top: 50rpx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-direction: row;
		}

		.btn {
			width: 50%;
			border-radius: 0;
			background-color: #fff;
			color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
