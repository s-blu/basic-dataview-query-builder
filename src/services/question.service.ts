import type { Question } from "@/interfaces/question";
import initalQuestions from "@/assets/questions.json";

class QuestionsService {
  questions: Array<Question> = [];
  queryParts: Array<String> = [];

  constructor() {
    this.questions = initalQuestions as Array<Question>;
  }

  updateQuestions(questions: Question[]) {
    this.questions = questions;
    this.updateQueryParts();
  }

  updateQueryParts() {
    this.queryParts = this.questions
      .filter((q) => q.selected)
      .map((q) => q.selected.dataview);
  }

  get questionLength() {
    return this.questions.length;
  }
}

export default new QuestionsService();
