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
    <div class="columns is-multiline">
      <div class="column">
        <div>Basic Dataview Query Builder v{{ version }}</div>
        <div>
          Found an issue or have a feature request? Open an issue on
          <a href="https://github.com/s-blu/basic-dataview-query-builder/issues"
            >github</a
          >
          - thanks!
        </div>
      </div>
      <div class="column is-narrow links">
        <a
          href="https://github.com/s-blu/basic-dataview-query-builder"
          target="_blank"
        >
          Github
        </a>
        <router-link to="/privacy">Privacy</router-link>
        <a
          href="https://github.com/s-blu/basic-dataview-query-builder/blob/main/CHANGELOG.md"
          target="_blank"
          >Changelog</a
        >
      </div>
      <div class="spacer"></div>
      <div class="column is-narrow links">
        <a
          href="https://blacksmithgu.github.io/obsidian-dataview/"
          target="_blank"
          >Dataview Docs</a
        >
        <a href="https://obsidian.md/" target="_blank">Obsidian</a>
      </div>
    </div>
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
}

.spacer {
  margin-right: 2em;
}

.links {
  text-align: right;
  & > * {
    display: block;
  }
}
</style>
