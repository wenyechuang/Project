<template>
 <view class="chart">
  <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" :canvas2d="true"
   canvasId="EQMAhBJKGOtCTwawJxwGyAaHCHSPBxdH" />
 </view>
</template>

<script>
 export default {
  name: "ringChart",
  data() {
   return {
    chartData: {},
    //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
    opts: {
     rotate: false,
     rotateLock: false,
     color: ["#0982FA", "#FF9C00"],
     padding: [2,2],
     dataLabel: true,
     enableScroll: false,
     legend: {
      show: false,
      position: "right",
      lineHeight: 1  //线高度
     },
     title: {
      name: "153.0万",
      fontSize: 22,
      color: "#000000"
     },
     subtitle: {
      name: "总金额",
      fontSize: 14,
      color: "#808080"
     },
     extra: {
      ring: {
       ringWidth: 40,  //宽度
       activeOpacity: 0.5,
       activeRadius: 30, //半径
       offsetAngle: 0, //偏移角度
       labelWidth: 15, //标签宽度
       border: false, //边缘

      }
     }
    }
   };
  },
  onReady() {
   this.getServerData();
  },
  methods: {
   getServerData() {
    //模拟从服务器获取数据时的延时
    setTimeout(() => {
     //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
     let res = {
      series: [{
       data: [{
		 "name": "1",
		 "value": 16,
		 "labelText":"已付：100万"
      },{
	   "name": "2",
	   "value": 7,
	   "labelText":"未付：53万"
	  }]
	  }]
     };
     this.chartData = JSON.parse(JSON.stringify(res));
    }, 500);
   },
  }
 }
</script>

<style>
 
</style>