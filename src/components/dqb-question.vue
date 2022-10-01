<script lang="ts">
import type { AnswerOption, Question } from "@/interfaces/question";
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";
import DqbAnsweroption from "./dqb-answeroption.vue";
import DqbAnsweroptionExtras from "./dqb-answeroption-extras.vue";

export default {
  components: { DqbAnsweroption, DqbAnsweroptionExtras },
  computed: {
    ...mapState(useQuestionsStore, ["questions"]),
    question(): Question {
      return this.questions[this.$route.params.id - 1];
    },
  },
  methods: {
    selectAnswer(answer: AnswerOption, index: number) {
      this.question.selected = {
        index: index,
        answer: answer,
        dataview: answer.dataview,
      };
    },
  },
};
</script>

<template>
  <div class="columns">
    <div class="questionblock column is-half">
      <div class="header">Question</div>
      <div class="question">{{ question.question }}</div>
    </div>
    <div class="answerblock column is-half">
      <div class="header">
        {{ question.multiselect ? "Choose one or multiple" : "Choose one" }}
      </div>
      <div
        class="answers"
        v-for="(answer, index) in question.answers"
        :key="index"
      >
        <DqbAnsweroption
          :answer="answer"
          :index="index"
          :isSelected="question.selected.index === index"
          :isMultiselect="question.multiselect"
          @selected="selectAnswer(answer, index)"
        ></DqbAnsweroption>
      </div>
    </div>
  </div>
  <div class="columns">
    <div
      class="answeroption-extras column is-full"
      v-if="question.selected?.index"
    >
      <DqbAnsweroptionExtras
        :question="question"
        :answer="question.answers[question.selected.index]"
      ></DqbAnsweroptionExtras>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.questionblock {
  @include box;
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
