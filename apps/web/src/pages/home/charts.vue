<script setup lang="ts">
import { formatMonthDay, getWeekDay } from "../../helper/format_date";
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

definePage({
  path: '/charts'
})

// 一进来就调用
onMounted(() => {
  useCharts(chart1, chartsData1)
  useCharts(chart2, chartsData2)
  useCharts(chart3, chartsData3)
})
const chart1 = ref()
const chart2 = ref()
const chart3 = ref()

/**
 * @desc: 日期数据
 */
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const date = month + "." + day;
const date1 = month + "." + (day + 1);
const date2 = month + "." + (day + 2);

/**
 * @desc: 数据图
 */
const chartsData1: EChartsOption = {
  title: {
    text: 'PH值变化图',
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [8.1, 8, 7.9, 7.7, 7.8, 8, 7.8],
      type: 'line',
      symbol: 'diamond',
      symbolSize: 20,
      lineStyle: {
        color: 'green',
        width: 4,
        type: 'solid'
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
    text: '光照强度变化图',
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: ['573.5', '531.4', '387.1', '504.7', '257.2', '234.7', '357.5', '453.2', '385.6'],
      type: 'line',
      symbol: 'circle',
      symbolSize: 20,
      lineStyle: {
        color: 'green',
        width: 4,
        type: 'solid'
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};
const chartsData3: EChartsOption = {
  title: {
    text: '二氧化碳浓度变化图',
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: ['419.3', '419.2', '419.4', '419.5', '419.4', '419.7', '419.3', '419.4', '419.1'],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: 'green',
        width: 4,
        type: 'solid'
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#EE6666',
        color: 'yellow'
      }
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
    <video flex-1 bg="blue/50" loop muted rd-4 pl-4 pr-4 pt-42>
      <source src="../../assets/videos/test.mp4" type="video/mp4">
      您的浏览器不支持 video 标签
    </video>
    <div w-220 h-full flex="~ col" gap-2 rd-3>
      <div flex="~ row" flex-1 bg="green/30" rd-3 gap-3>
        <div class="stats shadow" flex-1 flex h-40>
          <div class="stat bg-green-500" relative>
            <div class="date stat-value color-white" flex="~ row" gap-3>
              <div font-size-8>{{ formatMonthDay(date) }}</div>
              <div font-size-5>{{ getWeekDay(date) }}</div>
            </div>
            <img
              src="https://assets.msn.cn/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
              relative left-5
              >
              <div class="temperature" flex="~ col gap-1" absolute bottom-1 right-9>
                <div class="day stat-value color-white">26°C</div>
                <div class="night stat-value color-white">19°C</div>
              </div>
          </div>
        </div>
        <div class="stats shadow" flex-1 flex h-40>
          <div class="stat bg-green-500" relative>
            <div class="date stat-value color-white" flex="~ row" gap-3>
              <div font-size-8>{{ formatMonthDay(date1) }}</div>
              <div font-size-5>{{ getWeekDay(date1) }}</div>
            </div>
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyDayV2.svg"
              relative left-7
              >
              <div class="temperature" flex="~ col gap-1" absolute bottom-1 right-9>
                <div class="day stat-value color-white">21°C</div>
                <div class="night stat-value color-white">19°C</div>
              </div>
          </div>
        </div>
        <div class="stats shadow" flex-1 flex h-40>
          <div class="stat bg-green-500" relative>
            <div class="date stat-value color-white" flex="~ row" gap-3>
              <div font-size-8>{{ formatMonthDay(date2) }}</div>
              <div font-size-5>{{ getWeekDay(date2) }}</div>
            </div>
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg"
              relative left-7 top-2
              >
              <div class="temperature" flex="~ col gap-1" absolute bottom-1 right-9>
                <div class="day stat-value color-white">23°C</div>
                <div class="night stat-value color-white">21°C</div>
              </div>
          </div>
        </div>
      </div>
      <div class="stats shadow" flex-1 flex w-auto>
        <div class="stat bg-green-600" flex="~ row" justify-between>
          <div class="stat-value color-white">查看最近7日天气状况</div>
          <!-- <div class="stat-value color-white">=></div> -->
          <!-- <el-icon><DArrowRight /></el-icon> -->
          <el-button type="success"  round mt-2>点击查看</el-button>
        </div>
      </div>
      <div w-220 h-75 flex="~ row" gap-3>
        <div ref="chart3" flex-1 bg="green/50" rd-3>
          <div rd-3>ph值</div>
        </div>
        <div ref="chart2" flex-1 bg="green/50" rd-3>
        </div>
      </div>
      <div w-220 h-75 flex="~ row" gap-3>
        <div ref="chart1" flex-1 bg="green/50" rd-3>
        </div>
        <div class=" stat-value color-white" flex-1 bg="green/50" rd-3 text-center>
          <div rd-3>敬请期待</div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  name: charts
</route>
