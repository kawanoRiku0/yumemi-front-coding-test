<!-- prefecturesのcheckbox一覧 -->

<script setup lang="ts">
import { Population, Prefecture } from '../../../types/resasApi';
import PrefectureCheckBox from './PrefectureCheckBox.vue';

defineProps<{ prefectures: Prefecture[] }>()

const emits = defineEmits<{
  (e: "removeDataset", pref: Prefecture): void
  (e: "addDataset", pref: Prefecture, populations: Population[]): void
}>()

const removeDataset = (pref: Prefecture) => {
  emits("removeDataset", pref)
}

const addDataset = (pref: Prefecture, populations: Population[]) => {
  emits("addDataset", pref, populations)
}


</script>

<template>
  <div>
    <h2>都道府県</h2>

    <div class="checkboxes-wapper">
      <PrefectureCheckBox v-for="pre in prefectures" :key="pre?.prefCode" :prefecture="pre" @add-dataset="addDataset"
        @remove-dataset="removeDataset" />
    </div>

  </div>
</template>

<style scoped>
.checkboxes-wapper {
  max-width: 75rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
