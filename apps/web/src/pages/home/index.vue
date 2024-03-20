<script setup lang="ts">
definePage({
  path: '/'
})

// 一进来就调用
onMounted(() => {
  useCharts(chart, chartsData)
  useCharts(chart1, chartsData1)
  useCharts(chart2, chartsData2)
  useCharts(chart3, chartsData3)
})

const chart = ref()
const chart1 = ref()
const chart2 = ref()
const chart3 = ref()


const chartsData: EChartsOption = {
  title: {
    text: '降水柱状图',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0时', '4时', '8时', '12时', '16时', '20时', '22时']
  },
  yAxis: {
    name: '单位:mm',
    type: 'value',
  },
  series: [
    {
      data: ['0.3', '0.0', 0.1, 0.0, 1.9, 0.8, 0.7],
      type: 'bar'
    }
  ]
};
const chartsData1: EChartsOption = {
  title: {
    text: '气温折线图',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0时', '4时', '8时', '12时', '16时', '20时', '22时']
  },
  yAxis: {
    name: '单位:°C',
    type: 'value',
  },
  series: [
    {
      data: ['13.8', 15.4, 16.3, 20.0, 15.1, 14.9, 12.9],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};
const chartsData2: EChartsOption = {
  title: {
    text: '相对湿度',
    subtext: '单位:%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    show: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // prettier-ignore
    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
  },
  yAxis: {
    type: 'value',
    axisPointer: {
      snap: true
    }
  },
  visualMap: {
    show: false,
    dimension: 0,
    pieces: [
      {
        lte: 6,
        color: 'green'
      },
      {
        gt: 6,
        lte: 8,
        color: 'red'
      },
      {
        gt: 8,
        lte: 14,
        color: 'green'
      },
      {
        gt: 14,
        lte: 17,
        color: 'red'
      },
      {
        gt: 17,
        color: 'green'
      }
    ]
  },
  series: [
    {
      name: '相对湿度',
      type: 'line',
      smooth: true,
      // prettier-ignore
      data: [86, 88, 95, 97, 97, 98, 98, 96, 90, 83, 78, 81, 86, 88, 90, 95, 96, 97, 98, 98, 98, 98],
      markArea: {
        itemStyle: {
          color: 'rgba(255, 173, 177, 0.4)'
        },
        data: [
          [
            {
              name: 'lowest',
              xAxis: '10:00'
            },
            {
              xAxis: '15:00'
            }
          ],
          [
            {
              name: 'highest',
              xAxis: '18:45'
            },
            {
              xAxis: '22:30'
            }
          ]
        ]
      }
    }
  ]
};
const chartsData3: EChartsOption = {
  title: {
    text: '风力风速图',
    subtext: '单位:m/s'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    left: '3%',
    right: '1%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0时', '4时', '8时', '12时', '16时', '20时', '22时']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [3.2, 2.9, 3.1, 3.3, 2.4, 3.2, 2.3],
      type: 'line',
      smooth: true
    }
  ]
};


</script>

<template>
  <div flex flex-col w-full h-full mr-3 justify-between>
    <!-- 顶部 -->
    <div mb-3 flex="~ col" gap-1 justify-between>
      <div class="stats shadow" w-full h-full flex-1 flex>
        <div class="stat bg-blue-600" w-full h-25 justify-between>
          <div class="stat-figure text-primary">
            <!-- <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg> -->
          </div>
          <div class="stat-title color-white">空气温度</div>
          <div class="stat-value color-white" mt-1>19.8°C</div>
        </div>
        <div class="stat bg-gray-400" h-full>
          <div class="stat-figure text-secondary">
            <!-- <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg> -->
          </div>
          <div class="stat-title color-white">空气湿度</div>
          <div class="stat-value color-white" mt-1>83%</div>
        </div>
        <div class="stat bg-orange" h-full>
          <div class="stat-figure text-primary">
            <!-- <svg color-green-500 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg> -->
          </div>
          <div class="stat-title color-white">风力风向</div>
          <div class="stat-value color-white" mt-1>西北风2级</div>
        </div>
        <div class="stat bg-red-500" h-full>
          <div class="stat-figure color-black">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg> -->
          </div>
          <div class="stat-title color-white">降水量</div>
          <div class="stat-value color-white" mt-1>5mm</div>
        </div>
        <div class="stat bg-green-300" h-full>
          <div class="stat-figure text-primary">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg> -->
          </div>
          <div class="stat-title color-white">天气预测</div>
          <div class="stat-value color-white" mt-1>多云</div>
        </div>
        <!-- <div class="stat" h-full>
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div> -->
      </div>
    </div>
    <!-- 中间内容 -->
    <div flex="~ 1" w-full gap-3 pb-3>
      <div absolute left-152 class="stats shadow" flex-1 flex h-62 w-152>
        <div class="stat bg-purple-800">
          <div class="stat-title color-white" pl-9 font-size-13 font-bold>今天植物的整体状态</div>
          <div class="stat-value color-white" pl-56 font-size-12>良好</div>
        </div>
      </div>
      <!-- 左侧图表 -->
      <div flex="~ 1 col" gap-3>
        <div ref="chart" class="chart" flex-1 bg="green/50" rd-3>
          可视化图标1
        </div>
        <div ref="chart1" class="chart" flex-1 bg="red/70" rd-3>
          可视化图标2
        </div>
      </div>
      <!-- 中间视频 -->
      <video flex-1 h-116.8 rd-5 mt-64 loop muted border="~ green 2">
        <source src="../../assets/videos/test.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <div flex="~ 1 col" gap-3 mr-5>
        <!-- 右侧图表 -->
        <div ref="chart2" class="chart" flex-1 bg="blue/50" rd-3>
          <!-- <div justify-center mx-auto>可视化图标1</div> -->
        </div>
        <div ref="chart3" class="chart" flex-1 bg="yellow/50" rd-3>
          可视化图标2
          <!-- <div ref="chart3" flex justify-center mx-auto>可视化图标2</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.chart {
  padding-left: 110px;
  padding-top: 25px;
}

.touched:hover {
  transform: scale(1.2);
}
</style>

<route lang="yaml">
  name: home
</route>
