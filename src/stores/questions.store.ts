import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";
import type { Question } from "./../interfaces/question";

export const useQuestionsStore = defineStore("questionsStore", {
  state: () => ({
    questions: initalQuestions as Array<Question>,
  }),
  getters: {
    queryParts: (state) =>
      state.questions.filter((q) => q.selected).map((q) => q.selected.dataview),
    questionsLength: (state) => state.questions.length,
    computedQuery: (state) =>
      state.questions
        .filter((q) => q.selected?.dataview)
        .reduce(
          (acc, curr) => `${acc}${acc ? "\n" : ""}${curr.selected.dataview}`,
          ""
        ),
  },
  actions: {
    resetSelectedAnswers() {
      this.questions.forEach((q) => (q.selected = { dataview: "" }));
    },
  },
});
