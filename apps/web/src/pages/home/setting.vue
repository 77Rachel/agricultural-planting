<script setup lang="ts">
definePage({
  path: '/setting',
})
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'

const value2 = ref(true)

</script>


<template>
  <div>
    <div class="stats shadow" flex-1 flex w-auto mb-2>
      <div class="stat bg-purple-500" flex justify-between>
        <div class="stat-value color-white">远程摄影</div>
        <el-switch 
         v-model="value2" 
         class="mt-2 custom-switch" 
         style="margin-left: 24px; --el-switch-off-color: #ff4949;" 
         inline-prompt 
         size="large"
         :active-icon="Check"
         :inactive-icon="Close" 
        />
      </div>
    </div>
    <div class="stats shadow" flex-1 flex w-auto mb-2>
      <div class="stat bg-purple-500" flex justify-between>
        <div class="stat-value color-white">远程光照调节</div>
        <el-switch 
         v-model="value2" 
         class="mt-2 custom-switch" 
         style="margin-left: 24px; --el-switch-off-color: #ff4949;" 
         inline-prompt 
         size="large"
         :active-icon="Check"
         :inactive-icon="Close" 
        />
      </div>
    </div>
    <div class="stats shadow" flex-1 flex w-auto mb-2>
      <div class="stat bg-purple-500" flex justify-between>
        <div class="stat-value color-white">远程识别病虫害</div>
        <el-switch 
         v-model="value2" 
         class="mt-2 custom-switch" 
         style="margin-left: 24px; --el-switch-off-color: #ff4949;" 
         inline-prompt 
         size="large"
         :active-icon="Check"
         :inactive-icon="Close" 
        />
      </div>
    </div>
    <div class="stats shadow" flex-1 flex w-auto mb-2>
      <div class="stat bg-purple-500" flex justify-between>
        <div class="stat-value color-white">远程通知提醒</div>
        <el-switch 
         v-model="value2" 
         class="mt-2 custom-switch" 
         style="margin-left: 24px; --el-switch-off-color: #ff4949;" 
         inline-prompt 
         size="large"
         :active-icon="Check"
         :inactive-icon="Close" 
        />
      </div>
    </div>
  </div>
</template>

<style>
.custom-switch .el-switch__core {
  width: 65px;
  height: 30px;
}
</style>

<route lang="yaml">
name: setting
</route>
