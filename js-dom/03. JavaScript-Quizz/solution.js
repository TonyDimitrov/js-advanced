

function solve() {
  
  var playerScore = 0

  let questionDivCollection = document.querySelectorAll('.answer-wrap');

  for (const div of questionDivCollection) {
    div.addEventListener("click", answerHandler, false);
  }

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

    questionIterator(sectionsObject, playerScore);

    function questionIterator(sectionsObject, playerScore) {

      if (sectionsObject.currentIndexSection < sectionsObject.sections.length - 1) {

        let section = sectionsObject.sections[sectionsObject.currentIndexSection];
        section.classList.add("hidden");

      sectionsObject.sections[sectionsObject.currentIndexSection + 1].classList.add("hidden");
        sectionsObject.sections[sectionsObject.currentIndexSection + 1].style.display = "block"; //.classList.remove("hidden");        

      } else {
        sectionsObject.sections.forEach(x => x.style.display = "hidden");
        displayScore(sectionsObject, playerScore);
      }
    }

    function displayScore(sectionsObject, playerScore) {
 
      sectionsObject.sections.length == playerScore ? document.querySelector(".results-inner > h1").innerHTML = "You are recognized as top JavaScript fan!"
        : document.querySelector(".results-inner > h1").innerHTML = `You have ${playerScore} right answers`;

        console.log(document.querySelector("ul#results"));
        document.querySelector("ul#results").style.display = "block";
    }

    function getActiveSection() {
      let quizSections = document.getElementsByTagName("section");
      let toArrquizSections = Array.from(quizSections);

      let currentQuestion;
      [...quizSections].forEach((item, i) => {
        if (!item.classList.contains("hidden") || item.style.display == "block") {
          currentQuestion = i;
        }
      });
      let obj = { sections: [], currentIndexSection: 0 };

      obj.sections = toArrquizSections;
      obj.currentIndexSection = currentQuestion;
      return obj;
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
