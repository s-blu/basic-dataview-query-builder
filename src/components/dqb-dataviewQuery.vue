<script lang="ts">
import questionService from "@/services/question.service";

export default {
  data: function () {
    return {
      qService: questionService,
    };
  },
  computed: {
    queryParts() {
      console.log("query parts update", this.qService.queryParts);
      return this.qService.queryParts;
    },
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
