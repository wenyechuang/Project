<template>
 <view class="chart">
  <qiun-data-charts type="area" :opts="opts" :chartData="chartData" :canvas2d="true"
   canvasId="DDsiMbIAJZQvzLRapuoKCVBlXmGUDsbi" />
 </view>
</template>

<script>
 export default {
  name: "lineChart",
  data() {
   return {
    chartData: {},
    //您可以通过修改 config-ucharts.js 文件中下标为 ['area'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
    opts: {
     color: ["#0A82FA", "#FF9C00"],
     padding: [15, 15, 0, 15],
     enableScroll: false,
     legend: {},
     xAxis: {
      disableGrid: true
     },
     yAxis: {
      gridType: "dash",
      dashLength: 2
     },
     extra: {
      area: {
       type: "straight",
       opacity: 0.2,
       addLine: true,
       width: 2,
       gradient: false,
       activeType: "hollow"
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
      categories: ["一月", "二月", "三月", "四月", "五月", "六月","七月","八月","九月","十月","十一月","十二月"],
      series: [{
        name: "已付金额",
        data: [35, 8, 25, 37, 4, 20,12,11,14,25,34,33,8,]
       },
       {
        name: "未付金额",
        data: [55, 40, 65, 35, 44, 45,11,14,8,31,25,22]
       }
      ]
     };
     this.chartData = JSON.parse(JSON.stringify(res));
    }, 500);
   },
  }
 }
</script>

<style>
 .chart {
  margin: 23rpx auto;
  width: 660rpx;
  height: 440rpx;
 }
</style>