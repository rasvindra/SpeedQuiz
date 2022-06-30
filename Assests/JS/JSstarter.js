var timeLeft = 30;
var timeEl = document.getElementById("seconds")
var quizcontainer = document.getElementById("quiz")
var resultscontainer =document.getElementById("score")
var quizquestionsIndex = 0 

//var savedScore =   ;


var quizQuestions = [
  {
    question: "What color is created when you mix yellow and blue",
    answers: {
      a: "Orange",
      b: "Green",
      c: "Purple"
    },
    correctAnswer: "Green"
  },
  {
    question: "How did I learn to setup questions this way?",
    answers: {
      a: "A Amazom employee finished my homework",
      b: "An alien did my homework",
      c: "By doing some research on the internet"
    },
    correctAnswer: "By doing some research on the internet"
  },
  {
    question: "How difficult is it to drink from a waterfall while standing uder it",
    answers: {
      a: "Unlikely",
      b: "You will most likely choke and die",
      c: "All of the above",
    },
    correctAnswer: "All of the above"
  },
  {
    question: "If you get frustrated learning code you should:",
    answers: {
      a: "Sob uncontrolably",
      b: "Take out your frustration on your computer",
      c: "Step away for awhile",
    },
    correctAnswer: "Step away for awhile"
  }
];


function quizBegin(){
  var answer = confirm ("Are you ready to Begin? You will have 30 seconds to answer 4 questions. For every incorrect answer you will lose 5 seconds on the Clock. Good luck!")
if (answer){
    runQuiz()
}
}

function runQuiz(){
  alert("working yay!!") //test alert
  countdown()
  var element = document.getElementById("questions");
  element.classList.remove("hide");
  loadQuestion()
}


function loadQuestion(){
  //quizQuestions[quizquestionsIndex] is this even needed
  var question = quizQuestions[quizquestionsIndex]
  document.getElementById("questionarea").innerHTML=question.question
  var ansA = document.getElementById("answerA");
  ansA.innerHTML=question.answers.a;
  ansA.addEventListener('click', checkAnswer);

  var ansB = document.getElementById("answerB");
  ansB.innerHTML=question.answers.b;
  ansB.addEventListener('click', checkAnswer);

  var ansC = document.getElementById("answerC");
  ansC.innerHTML=question.answers.c;
  ansC.addEventListener('click', checkAnswer);

// A new function that replaces values from object array once user selects correct li
}

function countdown() {
	timeLeft--;
	timeEl.innerHTML = timeLeft;
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

function endGame(){}
// hide question area
// input intitial
// submit button store to local storage

function checkAnswer(){
 if  (this.innerText === quizQuestions[quizquestionsIndex].correctAnswer){
  console.log("Good Job!")
 }
 else {
  console.log("Wrong! You will be deducted 5 seconds!")
  timeLeft -=5;
  if (timeLeft < 0){
    timeLeft = 0
  }
  timeEl.innerHTML = timeLeft;
 }

 // MOVE INDEX TO NEXT QUESTION
 quizquestionsIndex++

 // CHECK TO SEE IF QUESTIONS LEFT
 if (quizquestionsIndex === quizQuestions.length){
endGame()
 }
else
{
  loadQuestion()
}
}


function init() {
  var savedWins = JSON.parse(localStorage.getItem("Stored Wins"));
  if (savedWins !== null)
    wins = savedWins;
  var savedLosses = JSON.parse(localStorage.getItem("Stored Losses"));
  if (savedWins !== null) 
    losses = savedLosses;
  }

document.querySelector("#playGame").addEventListener("click", quizBegin)

console.log(quizQuestions[0].question) //test

//localStorage.setItem("Stored Wins",savedWins);
//localStorage.setItem("Stored Losses",savedLosses);

//console.log()
//localStorage.clear()

