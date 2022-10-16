import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";
import type { AnswerOption, Question } from "./../interfaces/question";
import {
  replacePlaceholdersInQueryString,
  handleGroupByCommand,
} from "@/utilities/dataviewQuery.utility";

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
    computedQueryParts: (state) => {
      const queryParts = state.questions.map((q) =>
        replacePlaceholdersInQueryString(q)
      );

      handleGroupByCommand(queryParts);

      return queryParts.map((q) => q.selected?.dataview || "");
    },
    computedQuery: (state) => {
      return state.computedQueryParts.reduce(
        (acc, curr) => (curr ? `${acc}${acc ? "\n" : ""}${curr}` : acc),
        ""
      );
    },
  },
  actions: {
    resetSelectedAnswers() {
      this.questions.forEach((q) => (q.selected = undefined));
    },
    setSelected(question: Question, index: any, answer: AnswerOption) {
      question.selected = {
        index: index,
        answer: answer,
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
    },
  },
});
