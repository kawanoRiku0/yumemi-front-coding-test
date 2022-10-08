<script setup lang="ts">
import { Prefecture } from '../../../types/resasApi';
import PrefectureCheckBox from './PrefectureCheckBox.vue';

defineProps<{ prefectures: Prefecture[] }>()
</script>

<template>
  <div>
    <h2>都道府県</h2>

    <div class="checkboxes-wapper">
      <PrefectureCheckBox v-for="pre in prefectures" :key="pre?.prefCode" :prefecture="pre" />
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
