<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapActions, mapState } from "pinia";
import DqbRouterButton from "./dqb-routerButton.vue";

export default {
  props: ["hideSubtitle"],
  computed: {
    ...mapState(useQuestionsStore, [
      "questionsLength",
      "questions",
      "currentQuestionIndex",
      "currentQuestion",
      "isLastQuestion",
    ]),
    isFirstQuestion() {
      return this.currentQuestionIndex === 0;
    },
    currentAnswer() {
      return this.currentQuestion.selected || {};
    },
  },
  methods: {
    ...mapActions(useQuestionsStore, ["moveForward", "moveBack"]),
    next() {
      if (this.isLastQuestion) {
        this.$router.push("/result");
      } else {
        const moved = this.moveForward();
        if (!moved) {
          this.$router.push("/result");
        }
      }
    },
  },
  components: { DqbRouterButton },
};
</script>

<template>
  <nav class="navigation columns is-mobile">
    <div class="column">
      <dqb-router-button
        @clicked="moveBack()"
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
      <span v-if="!hideSubtitle">{{ currentQuestion.subtitle }}</span>
    </div>
    <div class="column">
      <dqb-router-button
        @clicked="next()"
        :disabled="currentAnswer.dataview === undefined"
        disabledBecause="Please select an answer first!"
        class="is-pulled-right"
      >
        <span>{{ isLastQuestion ? "Show result" : "Next" }}</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </dqb-router-button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "src/assets/mixins";
.questionprogress {
  text-align: center;
  @include mixins.heading;
}
</style>
