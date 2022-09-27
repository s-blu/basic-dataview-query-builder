<script lang="ts">
import DqbDataviewQuery from "../components/dqb-dataviewQuery.vue";
</script>

<template>
  <main>
    <div class="result">
      <div class="header">Welcome!</div>
      <div class="msg">WIP</div>
      <DqbDataviewQuery></DqbDataviewQuery>
    </div>
    <router-link to="/" class="button is-primary start-btn"
      >START OVER!</router-link
    >
  </main>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";

main {
  max-width: 960px;
}

.welcomemsg {
  @include box;
  font-size: 15pt;

  .header {
    @include heading;
  }
}

.start-btn {
  display: block;
  margin: auto;
  margin-top: 2em;
}
</style>
