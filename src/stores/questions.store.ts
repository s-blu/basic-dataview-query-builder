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
        .map((q) => {
          // TODO refactor into own function and clean up
          if (!q.selected.variables) return q;
          if (!q.selected.rawDataview) {
            q.selected.rawDataview = q.selected.dataview;
          } else {
            q.selected.dataview = q.selected.rawDataview;
          }

          const placeholders = q.selected.dataview.matchAll(/{{([^}]+)?}}/g);

          for (const match of placeholders) {
            console.log("sdlah", match);
            const replacement = q.selected.variables[match[1]];
            if (replacement) {
              q.selected.dataview = q.selected.dataview.replace(
                match[0],
                replacement
              );
            }
          }
          return q;
        })
        .reduce(
          (acc, curr) => `${acc}${acc ? "\n" : ""}${curr.selected.dataview}`,
          ""
        ),
  },
  actions: {
    resetSelectedAnswers() {
      this.questions.forEach((q) => (q.selected = { dataview: "" }));
    },
    updateAnswerVariableMap(
      question: Question,
      variableName: string,
      value: string
    ): void {
      console.log("updateAnswerVariableMap", question, variableName, value);
      if (!question.selected.variables) {
        question.selected.variables = {};
      }
      question.selected.variables[variableName] = value;
      console.log(question.selected);
    },
  },
});
