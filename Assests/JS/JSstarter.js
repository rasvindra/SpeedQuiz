// Global Variables
var timeLeft = 30;
var time = 30;
var timeId =""
var timeEl = document.getElementById("seconds")
var quizContainer = document.getElementById("questions")
var resultscontquainer =document.getElementById("score")
var quizquestionsIndex = 0 
var savedScore = ""
var scores = []

// Array of Objects that holds all my question and answers
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

//function that loads promt when button is pushed that explains game and asks if user wants to continue
function quizBegin(){
  var answer = confirm ("Are you ready to Begin? You will have 30 seconds to answer 4 questions. For every incorrect answer you will lose 5 seconds on the Clock. Good luck!")
if (answer){
    runQuiz()
}
}
//Function that begins countdown and loads the questions and answers
function runQuiz(){
  quizContainer.classList.remove("hide");
  timeId = setInterval(countdown, 1000)
  loadQuestion()
}

//Function that itterates through Array to load questions and answers
function loadQuestion(){
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

}

//Function that creates 30 second countdown times and displays
function countdown() {
	timeLeft--;
	timeEl.innerHTML = timeLeft;
	if (timeLeft <= 0) {
		endGame()
	}
};
// function that runs when all questions are answered or time runs out and notifys user of game end. and pulls up confirm prompt to see if user wants to post score
function endGame(){
  clearInterval(
    timeId
  );
function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Enter Name");
  if (person == null || person == "") {
    text = "No Name Entered";
  } 
  savedScore = text + timeLeft
  document.getElementById(savedScore).innerHTML = text;
  
}
myFunction()
  confirm("Quiz Complete! Your Score is " + timeLeft + ". Would you like to post Your Score?")
  
  // HELP
  if (true); // need to store locally and display with initials in Highest Score div
    else{}
    //document. location;reload()
    quizContainer.classList.add("hide")
  //element.classList.display("none")
  localStorage.setItem("scores",savedScore)
  scores = localStorage.getItem("scores")
}

// function that verfies if correct answer was clicked colsole logs for testing and pulls next question from Array

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
 quizquestionsIndex++

 // CHECK TO SEE IF ANY QUESTIONS LEFT in ARRAY
 if (quizquestionsIndex === quizQuestions.length){
endGame()
 }
else
{
  loadQuestion()
}
}

/* what am i doing?
function init() {
  var savedWins = JSON.parse(localStorage.getItem("Stored Wins"));
  if (savedWins !== null)
    wins = savedWins;
  var savedLosses = JSON.parse(localStorage.getItem("Stored Losses"));
  if (savedWins !== null) 
    losses = savedLosses;
  }  */

document.querySelector("#playGame").addEventListener("click", quizBegin)

//localStorage.clear() 
