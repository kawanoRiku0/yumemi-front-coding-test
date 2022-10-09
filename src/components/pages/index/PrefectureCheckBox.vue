<script setup lang="ts">
import { ref, watch } from 'vue';
import { getTotalPopulations } from '../../../api/resas';
import { Population, Prefecture } from '../../../types/resasApi';
import CheckBoxButton from './CheckBoxButton.vue';

const props = defineProps<{ prefecture: Prefecture }>()
const emits = defineEmits<{
  (e: "addDataset", pref: Prefecture, populations: Population[]): void
  (e: "removeDataset", pref: Prefecture): void,
}>()


const isChecked = ref(false)
const setIsChecked = (state: boolean) => {
  isChecked.value = state
}


// watchEffectは定義時に実行されるため、watchを使用
watch([isChecked], async () => {
  if (isChecked.value) {
    const populations = await getTotalPopulations(props.prefecture.prefCode)
    if (!populations) return
    emits("addDataset", props.prefecture, populations)
  } else {
    emits("removeDataset", props.prefecture)
  }
})
</script>

<template>
  <div class="wrapper">
    <CheckBoxButton :label="prefecture.prefName" :state="isChecked" @on-state-change="setIsChecked" />
  </div>
</template>

<style scoped>
.wrapper {
  height: 2.8rem;
  width: 6.25rem;
  margin: 0.3rem;
}

@media screen and (max-width: 960px) {
  .wrapper {
    font-size: 0.8rem;
    width: 4.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    font-size: 0.5rem;
    width: 3.1rem;
  }
}
</style>
