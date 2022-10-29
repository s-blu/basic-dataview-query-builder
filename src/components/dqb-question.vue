<script lang="ts">
import type { AnswerOption, Question } from "@/interfaces/question";
import { useQuestionsStore } from "@/stores/questions.store";
import { mapActions, mapState } from "pinia";
import DqbAnsweroption from "./dqb-answeroption.vue";
import DqbAnsweroptionExtras from "./dqb-answeroption-extras.vue";

export default {
  components: { DqbAnsweroption, DqbAnsweroptionExtras },
  computed: {
    ...mapState(useQuestionsStore, ["questions", "currentQuestion"]),
  },
  methods: {
    ...mapActions(useQuestionsStore, ["setSelected"]),
    selectAnswer(answer: AnswerOption, index: number) {
      this.setSelected(this.currentQuestion, index, answer);
    },
  },
};
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <div class="questionblock">
        <div class="header">Question</div>
        <div class="question">{{ currentQuestion.question }}</div>
      </div>
    </div>
    <div class="answerblock column is-full">
      <div class="header">
        {{
          currentQuestion.multiselect ? "Choose one or multiple" : "Choose one"
        }}
      </div>
      <div
        class="answers"
        v-for="(answer, index) in currentQuestion.answers"
        :key="index"
      >
        <DqbAnsweroption
          :answer="answer"
          :index="index"
          :isSelected="currentQuestion.selected?.index === index"
          @selected="selectAnswer(answer, index)"
        ></DqbAnsweroption>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="answeroption-extras column is-full">
      <DqbAnsweroptionExtras
        v-if="currentQuestion.selected"
        :question="currentQuestion"
        :answer="currentQuestion.answers[currentQuestion.selected?.index]"
      ></DqbAnsweroptionExtras>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";

.questionblock {
  @include box;
  height: 100%;
  font-size: var(--size-font-info);
}
.header {
  @include heading;
  padding-bottom: 0.5em;
}

.answerblock {
  padding-top: 0;
}
</style>
