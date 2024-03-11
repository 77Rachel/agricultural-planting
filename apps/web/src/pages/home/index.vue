<script setup lang="ts">
definePage({
  path: '/'
})

// 一进来就调用
onMounted(() => {
	useCharts(chart,chartsData)
  useCharts(chart1,chartsData1)
  useCharts(chart2,chartsData2)
  useCharts(chart3,chartsData3)
})

const chart = ref()
const chart1 = ref()
const chart2 = ref()
const chart3 = ref()


const chartsData: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
const chartsData1: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};
const chartsData3: EChartsOption = {
  angleAxis: {},
  radiusAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu'],
    z: 10
  },
  polar: {},
  series: [
    {
      type: 'bar',
      data: [1, 2, 3, 4],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [2, 4, 6, 8],
      coordinateSystem: 'polar',
      name: 'B',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [1, 2, 3, 4],
      coordinateSystem: 'polar',
      name: 'C',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    }
  ],
  legend: {
    show: true,
    data: ['A', 'B', 'C']
  }
};
</script>

<template>
  <div flex flex-col w-full h-full mr-3 justify-between>
    <!-- 顶部 -->
    <div mb-3 flex="~ col" gap-1 justify-between>
      <div class="stats shadow" w-full h-full flex-1 flex>
        <div class="stat bg-blue-600" w-full h-25 justify-between>
          <div class="stat-figure text-primary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-gray-400" h-full>
          <div class="stat-figure text-secondary">
            <svg color-white xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-white">25.6K</div>
        </div>
        <div class="stat bg-black" h-full>
          <div class="stat-figure text-primary">
            <svg color-red-500 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-red">25.6K</div>
        </div>
        <div class="stat bg-red-500" h-full>
          <div class="stat-figure color-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title color-white">Total Likes</div>
          <div class="stat-value color-black">25.6K</div>
        </div>
        <div class="stat bg-yellow-300" h-full>
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title color-black">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
        </div>
        <div class="stat" h-full>
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
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <div flex="~ 1" w-full gap-3>
      <!-- 左侧图表 -->
      <div flex="~ 1 col" gap-2>
        <div ref="chart" flex-1 bg="green/50" rd-3>
          可视化图标1
        </div>
        <div ref="chart1" flex-1 bg="red/70" rd-3>
          可视化图标2
        </div>
      </div>
      <!-- 中间视频 -->
      <video flex-1 h-116.8 rd-5 autoplay loop muted border="~ green 2">
        <source src="../../assets/videos/test.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <div flex="~ 1 col" gap-2>
        <!-- 右侧图表 -->
        <div ref="chart2" flex-1 bg="blue/50" rd-3>
          <!-- <div justify-center mx-auto>可视化图标1</div> -->
        </div>
        <div ref="chart3" flex-1 bg="yellow/50" rd-3>
          可视化图标2
          <!-- <div ref="chart3" flex justify-center mx-auto>可视化图标2</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .chart4{
    font-size: 20px;
    font-weight: 700;
    
  }
</style>

<route lang="yaml">
  name: home
</route>
