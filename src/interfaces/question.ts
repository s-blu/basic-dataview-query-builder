export interface Question {
  question: string;
  answers: Array<AnswerOption>;
  selected?: SelectedAnswer;
}

export interface SelectedAnswer {
  dataview: string;
  index: number;

  rawDataview?: string;
  variables?: { [id: string]: string };
}

export interface AnswerOption {
  label: string;
  dataview: string;

  type?: "Input";
  inputs?: Array<AnswerInputs>;
}

export interface AnswerInputs {
  label: string;
  varname: string;

  preset?: string;
}
