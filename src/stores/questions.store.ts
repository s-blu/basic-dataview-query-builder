import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";
import type { Question } from "./../interfaces/question";

export const useQuestionsStore = defineStore("questionsStore", {
  state: () => ({
    questions: initalQuestions as Array<Question>,
  }),
  getters: {
    //questions: (state) => state.questions,
    queryParts: (state) =>
      state.questions.filter((q) => q.selected).map((q) => q.selected.dataview),
    questionsLength: (state) => state.questions.length,

  },
  actions: {
    updateQuestion(index: number, question: Question) {
      this.questions[index] = question;
    },
  },
});
