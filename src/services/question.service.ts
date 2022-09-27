import type { Question } from "@/interfaces/question";
import initalQuestions from "@/assets/questions.json";

class QuestionsService {
  questions: Array<Question> = [];
  constructor() {
    this.questions = initalQuestions as Array<Question>;
  }

  getQueryParts() {
    return this.questions.map((q) => q.selected.dataview);
  }
}

export default new QuestionsService();
