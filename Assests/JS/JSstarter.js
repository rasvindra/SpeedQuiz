var timeLeft = 30;
var quizcontainer = document.getElementById("quiz")
var resultscontainer =document.getElementById("score")
var quizquestionsIndex = 0 

//var savedWins =   ;
//var savedLosses =  ;


var quizQuestions = [
  {
    question: "What color is created when you mix yellow and blue",
    answers: {
      a: "Orange",
      b: "Green",
      c: "Purple"
    },
    correctAnswer: "b"
  },
  {
    question: "How did I learn to setup questions this way?",
    answers: {
      a: "A Amazom employee finished my homework",
      b: "An alien did my homework",
      c: "By doing some research on the internet"
    },
    correctAnswer: "c"
  },
  {
    question: "How difficult is it to drink from a waterfall while standing uder it",
    answers: {
      a: "Unlikely",
      b: "You will most likely choke and die",
      c: "All of the above",
    },
    correctAnswer: "c"
  },
  {
    question: "If you get frustrated learning code you should:",
    answers: {
      a: "Sob uncontrolably",
      b: "Take out your frustration on your computer",
      c: "Step away for awhile",
    },
    correctAnswer: "c"
  }
];


function quizBegin(){
  var answer = confirm ("Are you ready to Begin? You will have 30 seconds to answer 5 questions. For every incorrect answer you will lose 5 seconds on the Clock. Good luck!")
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
  quizQuestions[0]
  var question = quizQuestions[0]
  document.getElementById("questionarea").innerHTML=question.question
  document.getElementById("answerA").innerHTML=answers.a
  document.getElementById("answerB").innerHTML=answers.b
  document.getElementById("answerC").innerHTML=answers.c

// do this for all spots in the array
}

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};


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

