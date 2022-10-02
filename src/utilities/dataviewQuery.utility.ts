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

export function handleGroupByCommand(questions) {
  let groupByIndex;
  console.log("hello!");

  questions.forEach((q, index) => {
    console.log(q.selected.dataview.includes("GROUP BY"), q.selected.dataview);
    if (q.selected.dataview.includes("GROUP BY")) groupByIndex = index;
  });
  console.log(groupByIndex);

  if (groupByIndex) {
    // is always the query type (LIST/TABLE etc.) and gets executed last, alas needs the prefix
    _prependRows(questions[0]);

    for (let i = groupByIndex + 1; i < questions.length; i++) {
      _prependRows(questions[i]);
    }
  }

  function _prependRows(question: Question) {
    const parts = question.selected.dataview.split(",");
    const querytypeOrDataCmd = parts[0].split(" ")[0];

    if (querytypeOrDataCmd === "LIMIT") return;
    parts[0] = parts[0].replace(parts[0].split(" ")[0], "");
    console.log(parts);

    let groupedQuery = [];
    for (let i = 0; i < parts.length; i++) {
      const prefix = parts[i].trim().startsWith("rows.") ? "" : "rows.";
      groupedQuery.push(prefix + parts[i].trim());
    }
    console.log(groupedQuery);
    question.selected.dataview =
      querytypeOrDataCmd +
      groupedQuery.reduce((acc, curr) => `${acc}${acc ? "," : ""} ${curr}`, "");
    console.log(question.selected.dataview);
  }
}
