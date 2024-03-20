<script setup>
import { postRegister } from "@/services";
import useMonitorStore from "../../store/monitor";

definePage({
  path: '/monitor'
})

// "12345","1234"
// const res = postRegister();
// console.log(res.data)

//const monitorStore = useMonitorStore();
//monitorStore.fetchAllMonitor();
//const { allMonitor } = storeToRefs(monitorStore);

let clickedDate = "";
const videoElement = ref(null);
const videoSource = ref('../../assets/videos/test.mp4');
const videoSources = [
  "../../assets/videos/test.mp4",
  "../../assets/videos/test2.mp4",
];

// const selectDate = () => {
//   const randomIndex = Math.floor(Math.random() * videoSources.length);
//   // videoSource.value = videoSources[randomIndex];
//   const videoMP4 = document.getElementById('video');
//   videoMP4.setAttribute("src","../../assets/videos/test2");
//   // videoMP4.load()
// };

// watch(videoSource, () => {
//   videoElement.value.load();
// });


</script>


<template>
  <div class="container">
    <video class="video-area" autoplay loop muted controls>
      <source id="video" src="../../assets/videos/test.mp4" type="video/mp4">
      您的浏览器不支持 video 标签。
    </video>
    <!-- 日历 -->
    <div class="function-area">
      <el-calendar>
        <template #date-cell="{ data }">
          <p :class="data.isSelected ? 'is-selected' : ''" @click="selectDate()">
            {{ data.day.split('-').slice(1).join('-') }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>

</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 1.55rem;
  margin-top: 30px;
  margin-left: 2px;

  .video-area {
    height: 39.75rem;
    --un-border-opacity: 1;
    border-color: rgb(74 222 128 / var(--un-border-opacity));
    border-radius: 1.25rem;
  }

  .function-area {
    position: relative;
    left: 100px;
    border-radius: 1.25rem;
    flex: 1 1 0%;
    --un-bg-opacity: 1;
    background-color: rgb(156 163 175 / var(--un-bg-opacity));

    .is-selected {
      color: #1989FA;
    }
  }
}
</style>

<route lang="yaml">
  name: monitor
</route>
