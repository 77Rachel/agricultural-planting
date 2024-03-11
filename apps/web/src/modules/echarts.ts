import * as echarts from 'echarts' //引入echarts
import type { UserModule } from '../../types/types'

// Setup Echarts
// https://echarts.apache.org/
export const install: UserModule = ({ app }) => {
  app.config.globalProperties.$echarts= echarts
}
