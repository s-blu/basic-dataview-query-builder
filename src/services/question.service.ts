class QuestionsService {
  questions = [
    {
      question: "Howdo! Does this work?",
      answers: [
        {
          label: "yes",
          dataview: "FROM yes",
        },
        {
          label: "no",
          dataview: "THROW ERR",
        },
        {
          label: "maybe",
          dataview: "From maybe OR yes OR no",
        },
      ],
      selected: {
        // TODO need a variable map here mapping the variables to their values and then replacing this on getQueryParts - or save a precomputed here
        dataview: "blabla",
      },
    },
  ];

  getQueryParts() {
    return this.questions.map((q) => q.selected.dataview);
  }
}

export default new QuestionsService();
