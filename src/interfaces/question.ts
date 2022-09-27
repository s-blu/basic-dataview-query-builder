export interface Question {
  question: String;
  answers: Array<AnswerOption>;
  selected: SelectedAnswer;
}

export interface SelectedAnswer {
  dataview: String;

  rawDataview?: String;
  variables?: { [id: string]: String };
}

export interface AnswerOption {
  label: String;
  dataview: String;

  type?: "Input";
  inputs?: Array<AnswerInputs>;
}

export interface AnswerInputs {
  label: String;
  varname: String;

  preset?: String;
}
