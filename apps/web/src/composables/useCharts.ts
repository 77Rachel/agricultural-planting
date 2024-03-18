/**
 * @desc: 初始化charts
 */
export default async (initRefs: Ref, chartsData: EChartsOption) => {
	const myChart = echarts.init(initRefs.value)
	let option = chartsData
	nextTick(() => {
		myChart.setOption(option)
	})

	/**
   * @desc: 图表自适应变化
 */
	// window.addEventListener("resize", () => {
	// 	nextTick(() => {
	// 		myChart.resize()
	// 	})
	// })
}

