import type { Question } from "@/interfaces/question";
import initalQuestions from "@/assets/questions.json";

class QuestionsService {
  questions: Array<Question> = [];
  constructor() {
    this.questions = initalQuestions as Array<Question>;
  }

  getQueryParts() {
    return this.questions
      .filter((q) => q.selected)
      .map((q) => q.selected.dataview);
  }

  get questionLength() {
    return this.questions.length;
  }
}

export default new QuestionsService();
