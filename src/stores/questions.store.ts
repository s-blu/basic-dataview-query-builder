import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";

export const useQuestionsStore = defineStore("questionsStore", {
  state: () => ({
    questions: initalQuestions
  }),
  getters: {
    //questions: (state) => state.questions,
    queryParts: (state) =>
      state.questions.filter((q) => q.selected).map((q) => q.selected.dataview),
    lastQuestionIndex: (state) => state.questions.length - 1,
  },
  actions: {
    updateQuestion(index, question) {
      this.questions[index] = question;
    },
  },
});
