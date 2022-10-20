export function parseConditionString(conStr: string) {
  const condition = {
    mandatory: [],
    forbidden: [],
  };

  if (!conStr || conStr.trim() === "") {
    return condition;
  }

  const parts = conStr.split(" ");

  parts.forEach((p: string) => {
    let type = "mandatory";
    p = p.trim();

    if (p.startsWith("-")) {
      type = "forbidden";
      p = p.substring(1);
    }

    const con = p.includes("~") ? p.split("~") : p;
    condition[type].push(con);
  });

  return condition;
}

export function doesFulfillCondition(
  rawDataviewParts: any[],
  conditionString: string
) {
  const conditions = parseConditionString(conditionString);
  const query = rawDataviewParts.reduce(
    (acc: any, curr: any) => `${acc} ${curr}`,
    ""
  );

  for (let i = 0; i < conditions.forbidden.length; i++) {
    if (isPresent(conditions.forbidden[i])) {
      return false;
    }
  }

  for (let i = 0; i < conditions.mandatory.length; i++) {
    if (isPresent(conditions.mandatory[i])) {
      conditions.mandatory.splice(i, 1);
      i--;
    }
  }

  return conditions.mandatory.length === 0;

  function isPresent(conditionPart: String[] | String) {
    let isPresent = false;
    if (Array.isArray(conditionPart)) {
      isPresent = (conditionPart as String[]).some((m) => query.includes(m));
    } else {
      isPresent = query.includes(conditionPart);
    }

    return isPresent;
  }
}
