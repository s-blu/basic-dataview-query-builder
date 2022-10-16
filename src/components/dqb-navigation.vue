<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";
import DqbRouterButton from "./dqb-routerButton.vue";

export default {
  computed: {
    ...mapState(useQuestionsStore, ["questionsLength", "questions"]),
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
    isFirstQuestion() {
      return Number(this.$route.params.id) === 1;
    },
    currentAnswer() {
      return (
        (this.questions[Number(this.$route.params.id) - 1] || {}).selected || {}
      );
    },
  },
  components: { DqbRouterButton },
};
</script>

<template>
  <nav class="navigation columns is-mobile">
    <div class="column">
      <dqb-router-button
        :to="previous"
        :disabled="isFirstQuestion"
        disabledBecause="No previous questions available"
      >
        <span class="icon">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Previous</span>
      </dqb-router-button>
    </div>
    <div class="questionprogress column is-centered is-hidden-touch">
      Question {{ Number($route.params.id) }} / {{ questionsLength }}
    </div>
    <div class="column">
      <dqb-router-button
        :to="next"
        :disabled="currentAnswer.dataview === undefined"
        disabledBecause="Please select an answer first!"
        class="is-pulled-right"
      >
        <span>{{ next === "/result" ? "Show result" : "Next" }}</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </dqb-router-button>
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
