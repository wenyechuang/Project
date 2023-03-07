<template>
	<view class="Ayer">
		<image class="Ayerwg" src="../../static/Rectangle.png"></image>
		<image class="Ayerwhdd" src="../../static/logobai.png"></image>
	<view class="Ayjgfr">	
		<input type="text" class="ngdou" v-model="msagess">
		<image class="inpon" src="../../static/inpon.png"></image>
		<input type="text" class="hangdoulist" v-model="titems">
			
		<image class="noneke" src="../../static/fihfa.png"></image>
	</view>
	
	<view class="tudous">
		<button class="wewdgfyy" @click="handoulisit">立即登录</button>
	</view>
	<view class="tudu" >忘记密码？</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				msagess:"请输入手机号",
				titems:"请输入密码",
			};
		},
		methods:{
			handoulisit(){
				uni.switchTab({
					url: '../home/home'
				});
			}
		}
	}
	
	
</script>
<style lang="scss">
	.Ayerwg{
		width: 300pt;
		height: 150pt;
	}
	.Ayerwhdd{
		width: 100pt;
		height: 100pt;
		position: absolute;
		top: 20pt;
		left: 90pt;
		background-color: #0982FA;
	}
	.Ayjgfr{
		width: 200pt;
		height: 80pt;
		position: absolute;
		top: 180pt;
		left: 25pt;
	}
	.inpon{
		width: 20pt;
		height: 20pt;
		position: absolute;
		top: 0pt;
		left: 200pt;
	}
	.noneke{
		width: 20pt;
		height: 20pt;
		position: absolute;
		top: 50pt;
		left: 200pt;
	}
	.hangdoulist{
		width: 200pt;
		height: 20pt;
		position: absolute;
		top: 50pt;
		left: 0pt;
		
	}.wewdgfyy{
		width: 200pt;
		height: 50pt;
		position: absolute;
		top: 325pt;
		left: 30pt;
		color: #fff;
		background-color: #0982FA;
	}

	.tudu{
		width: 500pt;
		height: 14pt;
		position: absolute;
		top: 250pt;
		left: 190pt;
	}
</style>
