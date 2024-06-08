import type { Question } from "./../interfaces/question";
import { doesFulfillCondition } from "./conditionString.utility";

export function replacePlaceholdersInQueryString(
  question: Question,
  ignoreAppendixQuestions = true
) {
  if (!question.selected) {
    return question;
  }
  if (question.appendix && ignoreAppendixQuestions) {
    question.selected.dataview = "";
    return question;
  }

  if (!question.selected.variables) {
    return question;
  }

  const placeholders = question.selected.rawDataview.matchAll(/{{([^}]+)?}}/g);

  let newDataview = question.selected.rawDataview;
  for (const match of placeholders) {
    const replacement = question.selected.variables[match[1]];
    if (replacement) {
      newDataview = newDataview.replace(match[0], replacement);
    }
  }
  question.selected.dataview = newDataview;

  return question;
}

export function addAppendix(question: Question) {
  if (!question.selected || !question.selected.appendixDataviews) {
    return question;
  }

  let newDataview = question.selected.dataview;
  if (question.selected.appendixDataviews) {
    question.selected.appendixDataviews.forEach((ap) => {
      if (ap) {
        newDataview += " " + ap;
      }
    });
  }

  question.selected.dataview = newDataview;
  return question;
}

export function enhanceWithAppendixes(
  questions: Array<Question>,
  queryParts: string[]
) {
  if (!questions) return;

  questions.forEach((question, i) => {
    if (!question.appendix || !question.selected) return;

    const appI = determineAppendixId(question, i);
    if (
      question.condition &&
      !doesFulfillCondition(queryParts, question.condition)
    ) {
      if (questions[appI].selected?.appendixDataviews) {
        questions[appI].selected.appendixDataviews[i] = null;
      }
      return;
    }

    replacePlaceholdersInQueryString(question, false);
    if (questions[appI].selected) {
      if (!questions[appI].selected.appendixDataviews) {
        questions[appI].selected.appendixDataviews = [];
      }

      questions[appI].selected.appendixDataviews[i] =
        question.selected.dataview;
    }
  });
}

export function determineAppendixId(question: Question, i: number) {
  if (!question?.appendix) return i;

  let appI;
  if (question.appendix.startsWith(".")) {
    const relative = Number(question.appendix.substring(1));
    appI = i + relative;
  } else {
    appI = Number(question.appendix);
  }
  return appI;
}

export function handleGroupByCommand(questions: Array<Question>) {
  let groupByIndex;

  questions.forEach((q: Question, index: number) => {
    if (q.selected?.dataview.includes("GROUP BY")) groupByIndex = index;
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
    if (!question.selected) return;
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
