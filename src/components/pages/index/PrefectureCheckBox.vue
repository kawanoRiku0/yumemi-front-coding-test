<script setup lang="ts">
import { ref } from 'vue';
import { Prefecture } from '../../../types/resasApi';
import CheckBoxButton from './CheckBoxButton.vue';

defineProps<{ prefecture: Prefecture }>()

const isChecked = ref(false)
const setIsChecked = (state: boolean) => {
  isChecked.value = state
}

</script>

<template>
  <CheckBoxButton :label="prefecture.prefName" :state="isChecked" @on-state-change="setIsChecked" />
</template>


