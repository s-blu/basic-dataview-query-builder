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
  <div>Question Component {{ $route.params.id }}</div>
  <div class="question">{{ question.question }}</div>
  <div class="answers" v-for="(answer, index) in question.answers" :key="index">
    <DqbAnsweroption :answer="answer"></DqbAnsweroption>
  </div>
</template>
