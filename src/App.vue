<script setup lang="ts">
import { RouterView } from "vue-router";
import DqpHeader from "./components/dqb-header.vue";
</script>

<template>
  <DqpHeader></DqpHeader>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/bulma.scss";

main {
  min-width: 1024px;
  width: 1248px;
  margin: auto;
}
</style>
