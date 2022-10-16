<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useQuestionsStore, [
      "queryParts",
      "computedQuery",
      "computedQueryParts",
    ]),
    queryString() {
      return `\`\`\`dataview
${this.computedQuery}
\`\`\``;
    },
    queryParts() {
      if (this.computedQueryParts.length < Number(this.$route.params.id)) {
        console.log([...this.computedQueryParts, ""]);
        return [...this.computedQueryParts, ""];
      }
      return this.computedQueryParts;
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
    <p>```dataview</p>
    <container v-for="(part, index) in queryParts" :key="index">
      <p
        v-if="part"
        :class="{ active: Number($route.params.id) === index + 1 }"
      >
        {{ part }}
      </p>
    </container>
    <p>```</p>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.dataview-query {
  font-size: var(--size-font-info);
  font-family: Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro",
    monospace;

  @include box;
  padding: 0 20px;
  background-color: #baccde;

  .dataview {
    background-color: unset;
    padding: 0;
    color: inherit;
  }

  .active {
    font-weight: bold;

    &::before {
      content: ">";
      position: absolute;
      left: -0.8em;
      font-size: 15pt;
      color: var(--color-text-hint);
      font-weight: bold;
      height: 100%;
    }
  }
}
button.copybtn.is-ghost {
  float: right;
  right: -12px;
  top: 4px;
  z-index: 10;
}
</style>
