import type { Question } from "./../interfaces/question";
export function replacePlaceholdersInQueryString(question: Question) {
  if (!question.selected?.variables || !question.selected?.dataview) {
    return question;
  }

  question.selected.dataview = question.selected.rawDataview;
  const placeholders = question.selected.dataview.matchAll(/{{([^}]+)?}}/g);

  for (const match of placeholders) {
    const replacement = question.selected.variables[match[1]];
    if (replacement) {
      question.selected.dataview = question.selected.dataview.replace(
        match[0],
        replacement
      );
    }
  }
  return question;
}
