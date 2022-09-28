<script setup lang="ts">
import { RouterView } from "vue-router";
import DqpHeader from "./components/dqp-header.vue";
</script>

<template>
  <main>
    <DqpHeader></DqpHeader>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  min-width: 1024px;
  width: 1248px;
  margin: auto;
}
</style>
