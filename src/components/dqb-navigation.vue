<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";


export default {
  computed: {
    ...mapState(useQuestionsStore, ["lastQuestionIndex"]),
    next() {
      const currentIndex: number = Number(this.$route.params.id);
      return currentIndex < this.lastQuestionIndex
        ? `/question/${currentIndex + 1}`
        : "/result";
    },
    previous() {
      const currentIndex: number = Number(this.$route.params.id);
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
