<script lang="ts">
export default {};
</script>

<template>
  <nav class="navigation columns">
    <div class="column is-narrow">
      <button class="button">
        <span class="icon">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Previous</span>
      </button>
    </div>
    <div class="app-title column is-centered">Basic Dataview Query Builder</div>
    <div class="column is-narrow">
      <button class="button">
        <span>Next</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.app-title {
  text-align: center;
  @include heading;
}
</style>
