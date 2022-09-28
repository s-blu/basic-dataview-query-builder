<script lang="ts">
import type { AnswerOption, Question } from "@/interfaces/question";
import { useQuestionsStore } from "@/stores/questions.store";
import { mapState } from "pinia";
import DqbAnsweroption from "./dqb-answeroption.vue";

export default {
  components: { DqbAnsweroption },
  computed: {
    ...mapState(useQuestionsStore, ["questions"]),
    question(): Question {
      return this.questions[this.$route.params.id];
    },
  },
  methods: {
    selectAnswer(answer: AnswerOption) {
      console.log("jup", answer);
      this.question.selected = {
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
      <div
        class="answers"
        v-for="(answer, index) in question.answers"
        :key="index"
      >
        <DqbAnsweroption
          :answer="answer"
          @selected="selectAnswer(answer)"
        ></DqbAnsweroption>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.questionblock {
  @include box;
  font-size: var(--size-font-info);

  .header {
    @include heading;
    padding-bottom: 0.5em;
  }
}
</style>
