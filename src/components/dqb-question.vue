<script lang="ts">
import questionService from "@/services/question.service";
import DqbAnsweroption from "./dqb-answeroption.vue";

export default {
  data: function () {
    return {
      qService: questionService,
    };
  },
  computed: {
    question() {
      return this.qService.questions[this.$route.params.id];
    },
  },
  components: { DqbAnsweroption },
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
        <DqbAnsweroption :answer="answer"></DqbAnsweroption>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
.questionblock {
  @include box;
  font-size: 16pt;

  .header {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 12pt;
    padding-bottom: 0.5em;

    color: var(--color-text-hint);
  }
}
</style>
