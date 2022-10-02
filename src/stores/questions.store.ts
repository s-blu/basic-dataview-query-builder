import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";
import type { AnswerOption, Question } from "./../interfaces/question";
import { replacePlaceholdersInQueryString } from "@/utilities/dataviewQuery.utility";

export const useQuestionsStore = defineStore("questionsStore", {
  state: () => ({
    questions: initalQuestions as Array<Question>,
  }),
  getters: {
    queryParts: (state) =>
      state.questions
        .filter((q) => q.selected?.dataview)
        .map((q) => q.selected?.dataview),
    questionsLength: (state) => state.questions.length,
    computedQuery: (state) =>
      state.questions
        .filter((q) => q.selected?.dataview)
        .map((q) => replacePlaceholdersInQueryString(q))
        .reduce(
          (acc, curr) => `${acc}${acc ? "\n" : ""}${curr.selected?.dataview}`,
          ""
        ),
  },
  actions: {
    resetSelectedAnswers() {
      this.questions.forEach((q) => (q.selected = undefined));
    },
    setSelected(question: Question, index: any, answer: AnswerOption) {
      question.selected = {
        index: index,
        dataview: answer.dataview,
        rawDataview: answer.dataview,
      };
    },
    updateAnswerVariableMap(
      question: Question,
      variableName: string,
      value: string
    ): void {
      if (!question.selected) {
        console.error(
          "Cannot update variable map for non existing selected answer",
          question
        );
      }
      if (!question.selected?.variables) {
        question.selected.variables = {};
      }
      question.selected.variables[variableName] = value;
      console.log(question.selected);
    },
  },
});
