<!-- 総人口-年度グラフ -->

<script setup lang="ts">
import { Chart, ChartData, registerables } from "chart.js";
import { LineChart } from "vue-chart-3"
Chart.register(...registerables);

defineProps<{ lineData: ChartData<"line"> }>()

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: '年度'
      },
    },
    y: {
      title: {
        display: true,
        text: '人口数'
      }
    }
  }
}


</script>
  
<template>
  <div>
    <h2>総人口-年度グラフ</h2>
    <LineChart :chart-data="lineData" :options="options" chart-id="population" />
  </div>
</template>
  
<style scoped>
h2 {
  text-align: left;
}
</style>
