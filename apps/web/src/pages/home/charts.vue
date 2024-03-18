<script setup lang="ts">
definePage({
  path: '/charts'
})

// 一进来就调用
onMounted(() => {
  useCharts(chart, pieChartsData)
})
const chart = ref()

/**
 * @desc: 饼图数据
 */
const pieChartsData: EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
</script>

<template>
  <div h-full flex="~ 1" gap-2>
    <span absolute left-8 top-9 class="stat-value color-blue-600">正在为您持续监测植物的生长~</span>
    <div absolute left-7 top-20 pt-1 mb-3 flex="~ row" gap-5 justify-between>
      <div class="stats shadow" flex-1 flex w-72>
        <div class="stat bg-blue-400">
          <div class="stat-title color-white">叶片状态</div>
          <div class="stat-value color-white" mt-1>饱满健康</div>
        </div>
      </div>
      <div class="stats shadow" flex-1 flex w-72>
        <div class="stat bg-purple-500">
          <div class="stat-title color-white">抗病虫害能力</div>
          <div class="stat-value color-white" mt-1>较强</div>
        </div>
      </div>
      <div class="stats shadow" flex-1 flex w-72>
        <div class="stat bg-blue-600">
          <div class="stat-title color-white">根系健康</div>
          <div class="stat-value color-white" mt-1>良好</div>
        </div>
      </div>
    </div>
    <video flex-1 bg="blue/50" loop muted rd-4 pl-2 pr-2 pt-42>
      <source src="../../assets/videos/test.mp4" type="video/mp4">
      您的浏览器不支持 video 标签
    </video>
    <div w-220 h-full flex="~ col" gap-2 rd-3>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标2</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标3</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标4</div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  name: charts
</route>
