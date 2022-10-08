<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { usePopulationByYearLineData } from '../hooks/lineData';
import { useGetPrefectures } from '../api/resas';
import PopulationByYearChart from '../components/pages/index/PopulationByYearChart.vue';
import PrefecturesChecBoxes from '../components/pages/index/PrefecturesChecBoxes.vue';


const { lineData, addDataset, removeDataset } = usePopulationByYearLineData()
const isSelected = computed(() => lineData.value.datasets.length > 0)



const { prefectures, error, loading } = useGetPrefectures()


</script>
    
<template>
  <div class="wrapper">
    <h1>都道府県別総人口グラフ</h1>

    <PrefecturesChecBoxes v-if="prefectures" :prefectures="prefectures" @add-dataset="addDataset"
      @remove-dataset="removeDataset" />
    <p v-else-if="loading">読み込み中...</p>
    <p v-else-if="error">エラーが発生しました</p>

    <PopulationByYearChart v-if="isSelected" :line-data="lineData" />
    <p v-else class="prompt-text">都道府県を選択してください</p>
  </div>

</template>
    
<style scoped>
.wrapper {
  padding: 1.5rem;
  padding-top: 0;
}

.wrapper:nth-child(n) {
  margin-top: 2rem;
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
    