<template>
	<view class="logo">
		<image class="year" src="../../static/Rectangle .png"></image>
		<uni-section title="实心标签" type="line">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<!-- <image class="fhuig" src="../../static/hudf.png"></image>
			<view class="content">
				<view v-if="current === 0">
					<view class="ban">
						<view class="hangdouaubbi">本年应付总金额</view>
						<view class="hangdouzprre">本年应付总金额1000万，已付900万，未付100万</view>
						<view class="hangdouhudd">已付金额</view>
						<view class="hangdoupsud">未付金额</view>
						<image class="hangdoutabl_vh" src="../../static/Group .png"></image>
						<view class="Ayerw_vhu">
							<lineChart></lineChart>
						</view>
						<view class="hfut"><dates></dates></view>
					</view>
					<view class="werh">
						<view class="werh_h1">本年运输计划数</view>
						<view class="werh_h2">168</view>
						<view class="werh_h3">较上年</view>
						<view class="werh_h4">-6</view>
						<view class="werh_h5">本年进行计划数</view>
						<view class="werh_v5">1637个</view>
						<view class="werh_h6">较上年</view>
						<view class="werh_h7">-89</view>
						<view class="werh_h8">本年完成计划数</view>
						<view class="werh_h9">1603个</view>
						<view class="werh_v1">较上年</view>
						<view class="werh_v2">-89个</view>
					</view>
					<view class="hand">
						<view class="hand_h1">本年计划车辆数（趟）</view>
						<view class="hand_h2">168</view>
						<view class="hand_h3">较上年</view>
						<view class="hand_h4">-6</view>
						<view class="hand_h5">本年执行车辆数</view>
						<view class="hand_h6">1637吨</view>
						<view class="hand_h7">较上年</view>
						<view class="hand_h8">-89</view>
						<view class="hand_h9">本年未执行计划数</view>
						<view class="hand_v1">1603吨</view>
						<view class="hand_v2">较上年</view>
						<view class="hand_v3">-89</view>
					</view>
					<view class="hanglist">
						<view class="hanglist_h1">本年预估物资重量（吨）</view>
						<view class="hanglist_h2">1680</view>
						<view class="hanglist_h3">较上年</view>
						<view class="hanglist_h4">-6</view>
						<view class="hanglist_h5">本年运输货物总量</view>
						<view class="hanglist_h6">163766吨</view>
						<view class="hanglist_h7">较上年</view>
						<view class="hanglist_h8">-89</view>
						<view class="hanglist_h9">本年签收货物总量</view>
						<view class="hanglist_v1">1603吨</view>
						<view class="hanglist_v2">货损</view>
						<view class="hanglist_v3">89</view>
					</view>
					<view class="hangdou">
						<image class="hangdou_h1" src="../../static/Group .png" mode=""></image>
						<view class="hangdou_h2">本年调度确认</view>
						<view class="hangdou_h3">司机成功接单数</view>
						<view class="hangdou_h4">23456</view>
						<view class="hangdou_h5">司机拒绝接单数</view>
						<view class="hangdou_h6">234</view>
					</view>
				</view>
				<view v-if="current === 1">
					<view class="ban">
						<view class="hangdouaubbi">本年应付总金额</view>
						<view class="hangdouzprre">本年应付总金额153万，已付100万，未付53万</view>
						<image class="hangdoutabl" src="../../static/Group .png"></image>
						<view class="gdsd">
							<ringChart></ringChart> 
							</view>
						<view class="hfut"><dates></dates></view>
					</view>
					<view class="werh">
						<view class="werh_h1">本年运输计划数</view> 
						<view class="werh_h2">168</view>
						<view class="werh_h3">较上年</view>
						<view class="werh_h4">-6</view>
						<view class="werh_h5">本年进行计划数</view>
						<view class="werh_v5">1637个</view>
						<view class="werh_h6">较上年</view>
						<view class="werh_h7">-89</view>
						<view class="werh_h8">本年完成计划数</view>
						<view class="werh_h9">1603个</view>
						<view class="werh_v1">较上年</view>
						<view class="werh_v2">-89个</view>
					</view>
					<view class="hand">
						<view class="hand_h1">本年计划车辆数（趟）</view>
						<view class="hand_h2">168</view>
						<view class="hand_h3">较上年</view>
						<view class="hand_h4">-6</view>
						<view class="hand_h5">本年执行车辆数</view>
						<view class="hand_h6">1637吨</view>
						<view class="hand_h7">较上年</view>
						<view class="hand_h8">-89</view>
						<view class="hand_h9">本年未执行计划数</view>
						<view class="hand_v1">1603吨</view>
						<view class="hand_v2">较上年</view>
						<view class="hand_v3">-89</view>
					</view>
					<view class="hanglist">
						<view class="hanglist_h1">本年预估物资重量（吨）</view>
						<view class="hanglist_h2">1680</view>
						<view class="hanglist_h3">较上年</view>
						<view class="hanglist_h4">-6</view>
						<view class="hanglist_h5">本年运输货物总量</view>
						<view class="hanglist_h6">163766吨</view>
						<view class="hanglist_h7">较上年</view>
						<view class="hanglist_h8">-89</view>
						<view class="hanglist_h9">本年签收货物总量</view>
						<view class="hanglist_v1">1603吨</view>
						<view class="hanglist_v2">货损</view>
						<view class="hanglist_v3">89</view>
					</view>
					<view class="hangdou">
						<image class="hangdou_h1" src="../../static/Group .png" mode=""></image>
						<view class="hangdou_h2">本年调度确认</view>
						<view class="hangdou_h3">司机成功接单数</view>
						<view class="hangdou_h4">23456</view>
						<view class="hangdou_h5">司机拒绝接单数</view>
						<view class="hangdou_h6">234</view>
					</view>
				</view>
			</view>
			<view v-if="current === 2">
				<view class="ban">
					<view class="hangdouaubbi">本年应付总金额</view>
					<view class="hangdouzprre">本年应付总金额153万，已付100万，未付53万</view>
					<image class="hangdoutabl" src="../../static/Group .png"></image>
					<view class="gdsd">
						<ringChart></ringChart>
						</view>
					<view class="hfut"><dates></dates></view>
				</view>
				<view class="werh">
					<view class="werh_h1">本年运输计划数</view>
					<view class="werh_h2">168</view>
					<view class="werh_h3">较上年</view>
					<view class="werh_h4">-6</view>
					<view class="werh_h5">本年进行计划数</view>
					<view class="werh_v5">1637个</view>
					<view class="werh_h6">较上年</view>
					<view class="werh_h7">-89</view>
					<view class="werh_h8">本年完成计划数</view>
					<view class="werh_h9">1603个</view>
					<view class="werh_v1">较上年</view>
					<view class="werh_v2">-89个</view>
				</view>
				<view class="hand">
					<view class="hand_h1">本年计划车辆数（趟）</view>
					<view class="hand_h2">168</view>
					<view class="hand_h3">较上年</view>
					<view class="hand_h4">-6</view>
					<view class="hand_h5">本年执行车辆数</view>
					<view class="hand_h6">1637吨</view>
					<view class="hand_h7">较上年</view>
					<view class="hand_h8">-89</view>
					<view class="hand_h9">本年未执行计划数</view>
					<view class="hand_v1">1603吨</view>
					<view class="hand_v2">较上年</view>
					<view class="hand_v3">-89</view>
				</view>
				<view class="hanglist">
					<view class="hanglist_h1">本年预估物资重量（吨）</view>
					<view class="hanglist_h2">1680</view>
					<view class="hanglist_h3">较上年</view>
					<view class="hanglist_h4">-6</view>
					<view class="hanglist_h5">本年运输货物总量</view>
					<view class="hanglist_h6">1637吨</view>
					<view class="hanglist_h7">较上年</view>
					<view class="hanglist_h8">-89</view>
					<view class="hanglist_h9">本年签收货物总量</view>
					<view class="hanglist_v1">1603吨</view>
					<view class="hanglist_v2">货损</view>
					<view class="hanglist_v3">89</view>
				</view>
				<view class="hangdou">
					<image class="hangdou_h1" src="../../static/Group .png" mode=""></image>
					<view class="hangdou_h2">本年调度确认</view>
					<view class="hangdou_h3">司机成功接单数</view>
					<view class="hangdou_h4">20</view>
					<view class="hangdou_h5">司机拒绝接单数</view>
					<view class="hangdou_h6">0</view>
				</view>
			</view> -->
		</uni-section>



	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				items: ['年度', '月度', '昨日'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#FFDEAD', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '	#FFDEAD',
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			}
		}
	}
	
</script>



<style lang="scss">
	.hfut{ //折线图
		position: absolute;
		top: 16pt;
		left: 140pt;
	}
	.gdsd {
		//饼图
		position: absolute;
		top: 50pt;
		left: -20pt;
	}
	.year {
		width: 55.5pt;
		height: 26pt;
		position: absolute;
		top: 25pt;
		left: 25pt;
	}

	.uni-common-mt {
		width: 250pt;
		height: 150pt;
	}

	.uni-padding-wrap {
		position: absolute;
		top: 25pt;
		left: 10pt;

	}

	.logo {
		width: 375pt;
		height: 1280px;
		background-color: #0982FA;
	}



	.ban {
		width: 260pt;
		height: 281.5pt;
		background-color: #fff;
		position: absolute;
		top: 58pt;
		left: 10pt;
		border-radius: 10pt;
	}
	
	.hangdouaubbi { 
		width: 100pt;
		position: absolute;
		top: 18pt;
		left: 50pt;
		color: #000000;
	}

	.hangdouzprre {
		width: 1000pt;
		position: absolute;
		top: 35pt;
		left: 50pt;
		font-size: 8pt;
		color: #0000FF;
	}

	.hangdouhudd {
		width: 100pt;
		position: absolute;
		top: 70pt;
		left: 130pt;
		font-size: 8pt;
	}

	.hangdoupsud {
		width: 100pt;
		position: absolute;
		top: 70pt;
		left: 200pt;
		font-size: 8pt;
	}
	.hangdoutabl_vh {
		width: 17.5pt;
		height: 9.5pt;
		position: absolute;
		top: 20pt;
		left: 22pt;
		background-color: #000000;
	}

	.Ayerw_vhu {   //折线图
		width: 255pt;
		height: 200pt;
		position: absolute;
		top: 72pt;
		left: 0pt;
		
	}

	.werh {
		width: 260pt;
		height: 135pt;
		background-color: #fff;
		border-radius: 10pt;
		position: absolute;
		top: 350pt;
		left: 10pt;
	}

	.werh_h1 {
		width: 260pt;
		position: absolute;
		top: 20pt;
		left: 10pt;
		color: #000000;
	}

	.werh_h2 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 15pt;
		font-size: 20pt;
		color: #0000FF;
	}

	.werh_h3 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 20pt;
	}

	.werh_h4 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 58pt;
		color: ＃0000;
	}

	.werh_h5 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 100pt;
		font-size: 8pt;
	}

	.werh_v5 {
		width: 260pt;
		position: absolute;
		top: 50pt;
		left: 100pt;
		font-size: 15pt;
	}

	.werh_h6 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 100pt;
		font-size: 10pt;
	}

	.werh_h7 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 135pt;
	}

	.werh_h8 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 180pt;
		font-size: 8pt;
	}

	.werh_h9 {
		width: 260pt;
		position: absolute;
		top: 50pt;
		left: 180pt;
		font-size: 15pt;
	}

	.werh_v1 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 180pt;
		color: #000000;
	}

	.werh_v2 {
		width: 260pt;
		position: absolute;
		left: 180pt;
		top: 70pt;
		left: 220pt;
	}

	.hand {
		width: 260pt;
		height: 135pt;
		background-color: #fff;
		border-radius: 10pt;
		position: absolute;
		top: 495pt;
		left: 10pt;
	}

	.hand_h1 {
		width: 260pt;
		position: absolute;
		top: 20pt;
		left: 10pt;
		color: #000000;
	}

	.hand_h2 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 15pt;
		font-size: 20pt;
		color: #0000FF;
	}

	.hand_h3 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 20pt;
	}

	.hand_h4 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 58pt;
		color: ＃0000;
	}

	.hand_h5 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 100pt;
		font-size: 8pt;
	}

	.hand_h6 {
		width: 260pt;
		position: absolute;
		top: 52pt;
		left: 100pt;
		font-size: 15pt;
	}

	.hand_h7 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 100pt;
	}

	.hand_h8 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 140pt;
	}

	.hand_h9 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 180pt;
		font-size: 8pt;
	}

	.hand_v1 {
		width: 260pt;
		position: absolute;
		top: 52pt;
		left: 180pt;
	}

	.hand_v2 {
		width: 260pt;
		position: absolute;
		left: 180pt;
		top: 70pt;
		left: 180pt;
	}

	.hand_v3 {
		width: 260pt;
		position: absolute;
		left: 180pt;
		top: 70pt;
		left: 215pt;
	}

	.hanglist {
		width: 260pt;
		height: 135pt;
		background-color: #fff;
		border-radius: 10pt;
		position: absolute;
		top: 640pt;
		left: 10pt;
	}

	.hanglist_h1 {
		width: 260pt;
		position: absolute;
		top: 20pt;
		left: 10pt;
		color: #000000;
	}

	.hanglist_h2 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 15pt;
		font-size: 20pt;
		color: #0000FF;
	}

	.hanglist_h3 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 20pt;
	}

	.hanglist_h4 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 58pt;
		color: ＃0000;
	}

	.hanglist_h5 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 100pt;
		font-size: 8pt;
	}

	.hanglist_h6 {
		width: 260pt;
		position: absolute;
		top: 52pt;
		left: 100pt;
		font-size: 15pt;
	}

	.hanglist_h7 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 100pt;
	}

	.hanglist_h8 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 140pt;
	}

	.hanglist_h9 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 180pt;
		font-size: 8pt;
	}

	.hanglist_v1 {
		width: 260pt;
		position: absolute;
		top: 52pt;
		left: 180pt;
	}

	.hanglist_v2 {
		width: 260pt;
		position: absolute;
		left: 180pt;
		top: 70pt;
		left: 180pt;
	}

	.hanglist_v3 {
		width: 260pt;
		position: absolute;
		left: 180pt;
		top: 70pt;
		left: 215pt;
	}


	.ydwu {
		width: 55.5pt;
		height: 26pt;
		position: absolute;
		top: 30pt;
		left: 35pt;
	}

	.monthly {
		width: 55.5pt;
		height: 26pt;
		position: absolute;
		top: 30pt;
		left: 125pt;
	}

	.Ayer {
		width: 55.5pt;
		height: 26pt;
		position: absolute;
		top: 30pt;
		left: 200pt;
	}

	.ban {
		width: 260pt;
		height: 281.5pt;
		background-color: #fff;
		position: absolute;
		top: 58pt;
		left: 10pt;
		border-radius: 10pt;
	}

	.hangdoutabl {
		width: 17.5pt;
		height: 9.5pt;
		position: absolute;
		top: 20pt;
		left: 22pt;
		background-color: #000000;
	}

	.hangdouaubbi {
		width: 100pt;
		position: absolute;
		top: 18pt;
		left: 50pt;
		color: #000000;
	}

	.hangdouzprre {
		width: 1000pt;
		position: absolute;
		top: 35pt;
		left: 50pt;
		font-size: 8pt;
		color: #0000FF;
	}

	.Ayerw_h1 {
		width: 110pt;
		height: 125pt;
		position: absolute;
		top: 175pt;
		left: 110pt;
		font-size: 8pt;
	}


	.hangdou {
		width: 260pt;
		height: 135pt;
		background-color: #fff;
		border-radius: 10pt;
		position: absolute;
		top: 787pt;
		left: 10pt;
	}

	.hangdou_h1 {
		width: 17.5pt;
		height: 9.5pt;
		position: absolute;
		top: 20pt;
		left: 22pt;
	}

	.hangdou_h2 {
		width: 260pt;
		position: absolute;
		top: 18pt;
		left: 50pt;
		font-size: 10pt;
	}

	.hangdou_h3 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 50pt;
		font-size: 12pt;
	}

	.hangdou_h4 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 50pt;
		font-size: 30pt;
		color: #0982FA;
	}

	.hangdou_h5 {
		width: 260pt;
		position: absolute;
		top: 40pt;
		left: 165pt;
		font-size: 12pt;
	}

	.hangdou_h6 {
		width: 260pt;
		position: absolute;
		top: 70pt;
		left: 175pt;
		font-size: 30pt;
		color: #FFDEAD;
	}
</style>
