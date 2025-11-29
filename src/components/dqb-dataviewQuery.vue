<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { determineAppendixId } from "@/utilities/dataviewQuery.utility";
import { mapState } from "pinia";

export default {
  props: {
    showHighlight: String,
  },
  computed: {
    ...mapState(useQuestionsStore, [
      "queryParts",
      "computedQuery",
      "computedQueryParts",
      "currentQuestionIndex",
      "currentQuestion",
    ]),
    queryString() {
      return `\`\`\`dataview
${this.computedQuery.trim()}
\`\`\``;
    },
    queryParts() {
      if (!this.showHighlight) {
        return this.computedQueryParts.filter((p) => p);
      } else {
        return this.computedQueryParts;
      }
    },
    activeIndex() {
      return determineAppendixId(
        this.currentQuestion,
        this.currentQuestionIndex
      );
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
    <template v-for="(part, index) in queryParts" :key="index">
      <p
        v-if="part"
        :class="{ active: activeIndex === index && showHighlight }"
      >
        {{ part }}
      </p>
    </template>
    <p>```</p>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/mixins";
.dataview-query {
  font-size: var(--size-font-info);
  font-family: Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro",
    monospace;

  @include mixins.box;
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
