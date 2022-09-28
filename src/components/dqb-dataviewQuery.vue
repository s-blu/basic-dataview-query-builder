<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useQuestionsStore, ["queryParts"]),
  },
};
</script>

<template>
  <div class="dataview-query">
    <div class="dv-codeblock">```dataview</div>
    <div class="querypart" v-for="(part, index) in queryParts" :key="index">
      {{ part }}
    </div>
    <div class="dv-codeblock">```</div>
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
}
</style>
