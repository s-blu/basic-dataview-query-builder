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

export function handleGroupByCommand(questions: Array<Question>) {
  let groupByIndex;

  questions.forEach((q: Question, index: number) => {
    if (q.selected.dataview.includes("GROUP BY")) groupByIndex = index;
  });

  if (!groupByIndex) {
    return;
  }

  // 0 is always the query type (LIST/TABLE etc.) and gets executed last, alas needs the prefix
  _prependRows(questions[0]);

  // only commands after the group by need the rows. prefix
  for (let i = groupByIndex + 1; i < questions.length; i++) {
    _prependRows(questions[i]);
  }

  function _prependRows(question: Question) {
    // in case of multiple meta data fields, split by ,
    const parts = question.selected.dataview.split(",");
    const querytypeOrDataCmd = parts[0].split(" ")[0];
    parts[0] = parts[0].replace(querytypeOrDataCmd, "");

    // Hacky workaround: Don't append on LIMIT numbers. Need to think of something more general here.
    if (querytypeOrDataCmd === "LIMIT") return;

    const groupedQuery = [];
    for (let i = 0; i < parts.length; i++) {
      parts[i] = parts[i].trim();
      const prefix = parts[i] && !parts[i].startsWith("rows.") ? "rows." : "";
      groupedQuery.push(prefix + parts[i]);
    }

    question.selected.dataview =
      querytypeOrDataCmd +
      groupedQuery.reduce((acc, curr) => `${acc}${acc ? "," : ""} ${curr}`, "");
  }
}
