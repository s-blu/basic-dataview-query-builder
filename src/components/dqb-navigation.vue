<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useQuestionsStore, ["questionsLength"]),
    next() {
      const currentIndex: number = Number(this.$route.params.id);
      return currentIndex < this.questionsLength
        ? `/question/${currentIndex + 1}`
        : "/result";
    },
    previous() {
      const currentIndex: number = Number(this.$route.params.id);
      return currentIndex === 1 ? "" : `/question/${currentIndex - 1}`;
    },
  },
};
</script>

<template>
  <nav class="navigation columns is-mobile">
    <div class="column">
      <router-link :to="previous" class="button">
        <span class="icon">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Previous</span>
      </router-link>
    </div>
    <div class="questionprogress column is-centered is-hidden-touch">
      Question {{ Number($route.params.id) }} / {{ questionsLength }}
    </div>
    <div class="column">
      <router-link :to="next" class="button is-pulled-right">
        <span>{{ next === "/result" ? "Show result" : "Next" }}</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.questionprogress {
  text-align: center;
  @include heading;
}
</style>
