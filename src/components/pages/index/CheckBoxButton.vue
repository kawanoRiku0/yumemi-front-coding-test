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
  <div>
    <input :id="inputId" type="checkbox" :value="state" @change="onChange" /> <label :for="inputId">{{label}}</label>
  </div>

</template>

<style scoped>
input[type="checkbox"] {
  display: none;
  transition: all 0.3s;
}

label {
  display: block;
  float: left;
  margin: 0.3rem;
  width: 6.25rem;
  height: 2.8rem;
  text-align: center;
  line-height: 2.8rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
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

@media screen and (max-width: 960px) {
  label {
    margin: 0.3rem;
    font-size: 0.8rem;
    width: 4.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  label {
    margin: 0.3rem;
    font-size: 0.5rem;
    width: 3.1rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
}
</style>
