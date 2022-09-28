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
    <div>```dataview</div>
    <div v-for="(part, index) in queryParts" :key="index">
      <div>{{ part }}</div>
    </div>
    <div>```</div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.dataview-query {
  margin-top: 2em;

  @include box;
}
</style>
