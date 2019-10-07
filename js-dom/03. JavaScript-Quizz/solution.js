function solve() {

  const correctAnswers = {
    0: 2,
    1: 2,
    2: 2
  };

  document.addEventListener("click", selectAnswer);

  function selectAnswer() {
    debugger;
    let answers = document.getElementsByClassName("answer-wrap");

    let quizSections = document.getElementsByTagName("section");

    let index;
    
    [...quizSections].forEach((item, i) => {
      if (!item.classList.contains("hidden")) {
        index = i;
      }
    });

    function isAnswerCorrect()
    {
      let section = quizSections[hidden];
    }

  }
}
