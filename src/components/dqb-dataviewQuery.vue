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
    <div class="querypart" v-for="(part, index) in queryParts" :key="index">
      {{ part }}
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
