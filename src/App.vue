<script setup lang="ts">
import IndexPage from "./pages/IndexPage.vue";

const path = location.pathname

const routes = {
  indexPage: "/",
}
</script>

<template>
  <div class="main">
    <IndexPage v-if="path === routes.indexPage" />
  </div>
</template>


<style scoped>
.main {
  overflow-x: hidden;
}
</style>
