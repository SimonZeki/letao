$(function () {
   // 柱状图
   var echars1 = echarts.init(document.querySelector(".echarts_1"));
   // 指定图表的配置项和数据
   var option1 = {
      title: {
         text: '2018年点击人数'
      },
      // 提示框组件
      tooltip: {},
      // 图例
      legend: {
         data: ['人数','点击'],
      },
      xAxis: {
         data: ["1月", "2月", "3月", "4月", "5月", "6月"]
      },
      yAxis: {},
      series: [{
            name: '人数',
            // 表示柱状图
            type: 'bar',
            data: [1000, 1500, 1800, 1200, 1000, 500],
         },
         {
            name: '点击',
            type: 'bar',
            data: [927, 1360, 528, 876, 763, 161]
         }
      ]
   };

   // 使用刚指定的配置项和数据显示图表。
   echars1.setOption(option1);


   var echars2 = echarts.init(document.querySelector(".echarts_2"));
   option2 = {
      title: {
         text: '热门品牌销售',
         subtext: '2018年11月',
         x: 'center',
         textStyle:{
            fontSize: 25,
         },
         subtextStyle:{
            fontSize: 18,
         }
      },
      tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      // 图例
      legend: {
         // 垂直排列
         orient: 'vertical',
         left: 'left',
         data: ['耐克', '阿迪', '新百伦', '李宁', '小布熊']
      },
      series: [{
         name: '品牌',
         // 饼状图
         type: 'pie',
         // 圆的大小
         radius: '65%',
         // 圆心的位置
         center: ['50%', '60%'],
         data: [{
               value: 335,
               name: '耐克'
            },
            {
               value: 310,
               name: '阿迪'
            },
            {
               value: 234,
               name: '新百伦'
            },
            {
               value: 135,
               name: '李宁'
            },
            {
               value: 1548,
               name: '小布熊'
            }
         ],
         itemStyle: {
            // 设置阴影效果
            emphasis: {
               shadowBlur: 30,
               shadowOffsetX: 0,
               shadowColor: 'rgba(0, 0, 0, 1)'
            }
         }
      }]
   };
   // 使用刚指定的配置项和数据显示图表。
   echars2.setOption(option2);
})