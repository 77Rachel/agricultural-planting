import { getMonitor } from "@/services";
import { defineStore } from "pinia";

const useMonitorStore = defineStore("monitor",{
  state: () => ({
    allMonitor: ""
  }),
  actions: {
    async fetchAllMonitor(){
      const res = await getMonitor();
      this.allMonitor = res.data.url;
    }
  }
})

export default useMonitorStore;