<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useQuestionsStore, ["queryParts", "computedQuery"]),
    queryString() {
      return `\`\`\`dataview
${this.computedQuery}
\`\`\``;
    },
  },
  methods: {
    copyQuery() {
      navigator.clipboard.writeText(this.queryString);
    },
  },
};
</script>

<template>
  <div class="dataview-query">
    <button
      class="button is-ghost copybtn"
      title="Copy Query"
      @click="copyQuery()"
    >
      <span class="icon"> <i class="fa-regular fa-copy"></i></span>
    </button>
    <pre class="dataview">{{ queryString }}</pre>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.dataview-query {
  font-size: var(--size-font-info);
  font-family: Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro",
    monospace;

  @include box;
  padding: 0 16px;
  background-color: #baccde;

  .dataview {
    background-color: unset;
    padding: 0;
    color: inherit;
  }
}
button.copybtn.is-ghost {
  float: right;
  right: -12px;
  top: 4px;
}
</style>
