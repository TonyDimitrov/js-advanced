unesc();

function unesc(){

let  json = JSON.parse(`{
  "namespace": "RiskFirst/Asset Management/Dividends",
  "name": "Dividends",
  "configuration":
   "{\"IsFixedLength\":false,\"Columns\":
   [{\"Name\":\"PRODUCT_CODE_RIC\",\"Length\":0},
   {\"Name\":\"PRODUCT_CODE_ISIN\",\"Length\":0},
   {\"Name\":\"Name\",\"Length\":0},
   {\"Name\":\"Currency\",\"Length\":0},
   {\"Name\":\"Frequency\",\"Length\":0},
   {\"Name\":\"Last_12M\",\"Length\":0},
   {\"Name\":\"Last_Payment_Date\",\"Length\":0},
   {\"Name\":\"Ex_Div_Date\",\"Length\":0},
   {\"Name\":\"Last_Div_Share\",\"Length\":0},
   {\"Name\":\"Last_Declared_Date\",\"Length\":0},
   {\"Name\":\"Source\",\"Length\":0},
   {\"Name\":\"Valuation_Date\",\"Length\":0}],
   \"ColumnDelimiter\":\",\",\"RowDelimiter\":\"<CR><LF>\",
   \"SkipHeaderRows\":1,
   \"EncodingCodePage\":65001,
   \"FileNameColumn\":\"FileName\"}",
  "dataSourceType": "FlatFile"
}`);
}

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
    //    section.classList.add("hidden");

  //    sectionsObject.sections[sectionsObject.currentIndexSection + 1].classList.add("hidden");
        sectionsObject.sections[sectionsObject.currentIndexSection + 1].style.display = "block"; //.classList.remove("hidden");        

      } else {
        sectionsObject.sections.forEach(x => x.style.display = "none");
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

      toArrquizSections.forEach((item)=> {
        if (!item.classList.contains("hidden")) {
          item.classList.add("hidden");
          item.style.display = "block";
        }
      }) ;

      let currentQuestion;
      toArrquizSections.forEach((item, i) => {
        if (item.style.display === "block") {
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
