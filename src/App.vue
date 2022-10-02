<script setup lang="ts">
import { RouterView } from "vue-router";
import DqpHeader from "./components/dqb-header.vue";
import DqbFooter from "./components/dqb-footer.vue";
</script>

<template>
  <DqpHeader></DqpHeader>
  <main>
    <RouterView />
  </main>
  <DqbFooter></DqbFooter>
</template>

<style scoped lang="scss">
main,
.app-footer {
  max-width: 960px;
  margin: auto;
}

.app-footer {
  margin-top: 2em;
}
</style>
