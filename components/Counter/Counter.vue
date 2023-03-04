<template>
	<view>
		<button size="mini" @tap="handleCount(-1)">-</button> {{count}} <button  @tap="handleCount(1)" size="mini" type="default">+</button>
	</view>
</template>

<script>
	/* 都可以使用各种生命周期 vue的 */
	export default {
		methods:{
			handleCount(type){
				this.$emit("oncount",type)
			}
		},
		name:"Counter",
		props:{
			count:{
				type:Number
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>