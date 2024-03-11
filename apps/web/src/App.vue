<script>
import { StarportCarrier } from 'vue-starport'
// import { provide } from "vue";

// //引入echarts
// import * as echarts from "echarts";

// //通过provide提供echarts
// provide("echarts", echarts);

export default {
    // JIEJOE produce
    // b站主页：https://space.bilibili.com/3546390319860710
    name: "App",
    methods: {
        check_loading() {
            let timer = setInterval(() => {
                if (document.readyState === "complete") {
                    clearInterval(timer);
                    this.$refs.loading.out();
                }
            }, 300);
        },
    },
    mounted() {
        this.check_loading();
        this.$router.beforeEach((to, from, next) => {
            this.$refs.loading.in(next);
        });
    },
};
</script>

<template>
    <Loading ref="loading" />
    <StarportCarrier>
      <RouterView />
    </StarportCarrier>
</template>
