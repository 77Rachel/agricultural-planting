<script setup lang="ts">
definePage({
  path: '/setting',
})
const { demo } = useStore('user')
</script>

<template>
  <div>
    全局设置功能待开发中🚧
    {{ demo }}
  </div>
</template>

<route lang="yaml">
name: setting
</route>
