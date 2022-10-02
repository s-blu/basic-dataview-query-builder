<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapActions } from "pinia";
import AnswerExtraInput from "./answeroption-extras/answer-extra-input.vue";
import AnswerExtraHint from "./answeroption-extras/answer-extra-hint.vue";

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
  components: { AnswerExtraInput, AnswerExtraHint },
};
</script>

<template>
  <div class="answeroption-extras">
    <div v-for="(extra, index) in answer.extras" :key="index" class="extras">
      <AnswerExtraInput
        v-if="extra.type === 'input'"
        :input="extra"
        @updateExtra="updateExtra"
      ></AnswerExtraInput>
      <AnswerExtraHint
        v-if="extra.type === 'hint'"
        :input="extra"
      ></AnswerExtraHint>
    </div>
  </div>
</template>

<style scoped lang="scss">
.extras > * {
  margin-top: 1em;
}
</style>
