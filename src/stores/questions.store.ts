import { defineStore } from "pinia";
import initalQuestions from "@/assets/questions.json";
import type { AnswerOption, Question } from "./../interfaces/question";
import {
  replacePlaceholdersInQueryString,
  handleGroupByCommand,
} from "@/utilities/dataviewQuery.utility";
import { doesFulfillCondition } from "@/utilities/conditionString.utility";

export const useQuestionsStore = defineStore("questionsStore", {
  state: () => ({
    questions: initalQuestions as Array<Question>,
    currentQuestionIndex: 0,
  }),
  getters: {
    currentQuestion: (state) => state.questions[state.currentQuestionIndex],
    queryParts: (state) =>
      state.questions
        .filter((q) => q.selected?.dataview)
        .map((q) => q.selected?.dataview),
    questionsLength: (state) => state.questions.length,
    isLastQuestion: (state) => {
      if (!state.questions) return false;
      if (state.currentQuestionIndex + 1 === state.questionsLength) {
        return true;
      }

      let tempIndex = state.currentQuestionIndex;

      while (
        !doesFulfillCondition(
          state.queryParts,
          state.questions[tempIndex].condition
        ) &&
        tempIndex < state.questionsLength - 1
      ) {
        tempIndex++;
      }

      return tempIndex + 1 === state.questionsLength;
    },
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
    moveForward() {
      console.log(
        "move forward",
        this.currentQuestion,
        this.currentQuestionIndex
      );
      let tempIndex = this.currentQuestionIndex + 1;

      while (
        !doesFulfillCondition(
          this.queryParts,
          this.questions[tempIndex].condition
        )
      ) {
        tempIndex++;
      }
      this.currentQuestionIndex = tempIndex;
    },
    moveBack() {
      if (this.currentQuestionIndex === 0) return;

      let tempIndex = this.currentQuestionIndex - 1;

      while (
        !doesFulfillCondition(
          this.queryParts,
          this.questions[tempIndex].condition
        )
      ) {
        tempIndex--;
      }
      this.currentQuestionIndex = tempIndex;
    },
    resetAppState() {
      this.questions.forEach((q) => (q.selected = undefined));
      this.currentQuestionIndex = 0;
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
