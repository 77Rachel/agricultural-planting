<script setup lang="ts">
definePage({
  path: '/charts'
})

// 一进来就调用
onMounted(() => {
	useCharts(chart,pieChartsData)
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
    <div ref="chart" flex-1 bg="blue/50" rd-3>可视化图标1</div>
    <div w-50 h-full flex="~ col" gap-2 rd-3>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标2</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标3</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标4</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>可视化图标5</div>
      </div>
      <div flex-1 bg="green/50" rd-3>
        <div rd-3>更多</div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  name: charts
</route>
