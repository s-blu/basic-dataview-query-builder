<script lang="ts">
import questionService from "@/services/question.service";

export default {
  data() {
    return {
      lastIndex: questionService.questionLength - 1,
    };
  },
  computed: {
    next() {
      const currentIndex = Number(this.$route.params.id);
      return currentIndex < this.lastIndex
        ? `/question/${currentIndex + 1}`
        : "/result";
    },
    previous() {
      const currentIndex = Number(this.$route.params.id);
      console.log("calc prev", currentIndex, currentIndex === 0);
      return currentIndex === 0 ? "" : `/question/${currentIndex - 1}`;
    },
  },
};
</script>

<template>
  <nav class="navigation columns">
    <div class="column is-narrow">
      <router-link :to="previous" class="button">
        <span class="icon">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Previous</span>
      </router-link>
    </div>
    <div class="app-title column is-centered">Basic Dataview Query Builder</div>
    <div class="column is-narrow">
      <router-link :to="next" class="button">
        <span>Next</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.app-title {
  text-align: center;
  @include heading;
}
</style>
