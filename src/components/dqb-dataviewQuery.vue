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
    <!-- <pre class="dataview">{{ queryString }}</pre> -->

    <container v-for="(part, index) in queryParts" :key="index">
      <p v-if="part">
        <span v-if="Number($route.params.id) === index + 1">>></span>
        {{ index }} {{ part }}
      </p>
    </container>

    <p>```</p>
    rote {{ $route.params.id }}
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
