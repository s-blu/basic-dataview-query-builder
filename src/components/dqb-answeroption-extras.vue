<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapActions } from "pinia";
import AnswerExtraInput from "./answeroption-extras/answer-extra-input.vue";
export default {
  props: {
    question: Object,
    answer: Object,
  },
  methods: {
    ...mapActions(useQuestionsStore, ["updateAnswerVariableMap"]),
    updateExtra(variable, value) {
      this.updateAnswerVariableMap(this.question, variable, value);
    },
  },
  components: { AnswerExtraInput },
};
</script>

<template>
  <div class="answeroption-extras">
    <div v-for="(extra, index) in answer.extras" :key="index">
      <AnswerExtraInput
        :input="extra"
        @updateExtra="updateExtra"
      ></AnswerExtraInput>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
