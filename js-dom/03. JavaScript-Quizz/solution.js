function solve() {

  let answerDiv = document.querySelector('.answer-wrap');
  debugger;

  answerDiv.addEventListener("click", answerHandler, false);



  function answerHandler(arg) {

    const correctAnswers = {
      0: 2,
      1: 4,
      2: 2
    };
    let activeSectionIndex = getActiveSection();

    let correctAnswer = correctAnswers[activeSectionIndex];

    let isCorrect = isAnswerCorrect(arg, correctAnswer);


    function getActiveSection() {
      let quizSections = document.getElementsByTagName("section");
      let currentQuestion;
      [...quizSections].forEach((item, i) => {
        if (!item.classList.contains("hidden")) {
          currentQuestion = i;
        }
      });

      return currentQuestion;
    }

    function isAnswerCorrect(arg, correctAnswer) {

      var parent = arg.currentTarget.parentElement.parentElement;
      let answerValue = Number(parent.getAttribute("data-quizIndex"));

      if (correctAnswer == answerValue) {
        return true;
      }
      return false;
    }
  }
}
