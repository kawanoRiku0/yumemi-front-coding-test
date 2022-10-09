<script setup lang="ts">

const props = defineProps<{ label: string, id?: string, state?: boolean }>()
const inputId = props.id || props.label

const emits = defineEmits<{
  (e: "onStateChange", state: boolean): void
}>()

const onChange = () => {
  emits("onStateChange", !props.state)
}

</script>

<template>
  <div class="wrapper">
    <input :id="inputId" type="checkbox" :value="state" @change="onChange" /> <label :for="inputId">{{label}}</label>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}

input[type="checkbox"] {
  display: none;
}

label {
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: black;
  border: 2px solid #006DD9;
  border-radius: 0.3rem;
  transition: all 0.3s;
  user-select: none;
}

input[type="checkbox"]:checked+label {
  background: #31A9EE;
  color: #ffffff;
}
</style>
