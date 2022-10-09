<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { usePopulationByYearLineData } from '../hooks/lineData';
import { useGetPrefectures } from '../api/resas';
import PopulationByYearChart from '../components/projects/charts/PopulationByYearChart.vue';
import PrefecturesChecBoxes from '../components/domain/Prefecture/PrefecturesCheckBoxes.vue';


const { lineData, addDataset, removeDataset } = usePopulationByYearLineData()
const isSelected = computed(() => lineData.value.datasets.length > 0)

// 再レンダリングなしだと、チェックボックスの状態が変わってもグラフが更新されないことがある。
// 強制的にPopulationByYearChartを再レンダリングさせるためにkeyを動的に変化させる
const dynaicKey = ref(0)
watch(lineData.value, () => {
  dynaicKey.value++
})

const { prefectures, error, loading } = useGetPrefectures()


</script>
    
<template>
  <div class="wrapper">
    <h1>都道府県別総人口グラフ</h1>

    <div>
      <PrefecturesChecBoxes v-if="prefectures" :prefectures="prefectures" @add-dataset="addDataset"
        @remove-dataset="removeDataset" />
      <p v-else-if="loading">読み込み中...</p>
      <p v-else-if="error">エラーが発生しました</p>
    </div>

    <div class="chart-wrapper">
      <PopulationByYearChart v-if="isSelected" :key="dynaicKey" :line-data="lineData" />
      <p v-else class="prompt-text">都道府県を選択してください</p>
    </div>
  </div>

</template>
    
<style scoped>
.wrapper {
  padding: 1.5rem;
  padding-top: 0;
}

.chart-wrapper {
  margin-top: 4rem;
}

h1 {
  margin: none;
  text-align: center;
}

.prompt-text {
  text-align: center;
  background-color: cornflowerblue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
    