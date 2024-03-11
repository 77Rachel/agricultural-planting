/**
 * @desc: 初始化charts
 */
export default async (initRefs: Ref,chartsData: EChartsOption) => {
	const myChart = echarts.init(initRefs.value)
	let option = chartsData
	nextTick(()=> myChart.setOption(option))
}