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
      return this.qService.getQueryParts();
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
