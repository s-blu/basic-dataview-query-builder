<script lang="ts">
import { version } from "@/../package.json";
export default {
  data() {
    return {
      version,
    };
  },
};
</script>

<template>
  <div class="app-footer">
    <span>Basic Dataview Query Builder v{{ version }} </span>
    <span
      >Found an issue or have a feature request? Open an issue on
      <a href="https://github.com/s-blu/basic-dataview-query-builder/issues"
        >github</a
      >.</span
    >
    <a
      class="icon is-pulled-right github-icon"
      href="https://github.com/s-blu/basic-dataview-query-builder"
    >
      <i class="fa-brands fa-github"></i>
    </a>
  </div>
</template>

<style scoped lang="scss">
.app-footer {
  padding: 0.5em;
  color: var(--color-text-hint);
  border-top: 1px solid var(--color-boxes);

  span {
    padding-right: 2em;
  }

  .github-icon {
    color: var(--color-text-hint);

    &:hover {
      color: var(--color-text-interactive);
    }
  }
}
</style>
