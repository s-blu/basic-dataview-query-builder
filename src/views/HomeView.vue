<script lang="ts"></script>

<template>
  <main>
    <div class="welcomemsg">
      <div class="header">Welcome!</div>
      <div class="msg">
        Welcome to the Basic Dataview Query Builder. This page will guide you
        through some multiple choice questions to put together a basic dataview
        query for your use case - either to use directly or as a starting point
        to refine further. <br />
        Click the button to start!
      </div>
    </div>
    <router-link to="/question/0" class="button is-success is-large start-btn"
      >START!</router-link
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
