var playerScore = 0

function solve() {

  let answerDiv = document.querySelector('.answer-wrap');

  answerDiv.addEventListener("click", answerHandler, false);

  function answerHandler(arg) {

    const correctAnswers = {
      0: 2,
      1: 4,
      2: 2
    };
    let sectionsObject = getActiveSection();

    let correctAnswer = correctAnswers[sectionsObject.currentIndexSection];

    let isCorrect = isAnswerCorrect(arg, correctAnswer);
    if (isCorrect) {
      playerScore++;
      console.log(playerScore);
    }

   // questionIterator(sectionsObject);

    function getActiveSection() {
      let quizSections = document.getElementsByTagName("section");
      let currentQuestion;
      [...quizSections].forEach((item, i) => {
        if (!item.classList.contains("hidden")) {
          currentQuestion = i;
        }
      });

      return { sections: [quizSections], currentIndexSection: [currentQuestion]};
    }

    function isAnswerCorrect(arg, correctAnswer) {

      var parent = arg.currentTarget.parentElement;
      let answerValue = Number(parent.getAttribute("data-quizIndex"));

      if (correctAnswer == answerValue) {
        return true;
      }
      return false;
    }
  }
}
