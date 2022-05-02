const question = document.getElementById('question');

let numberAnswers = false;
let points = 0;
let questionBank = 0;
let formattedQuestions = [];
let correctAnswers = [];
let wrongAnswers = [];
let currentQuestion = {};
let numberQuestions = [];
let addquestions = [];
let questionsList = [];
const MAX_QUESTIONS = 20;

document.addEventListener("DOMContentLoaded", function () {
    const options = document.getElementsByClassName('option-text');

    for (let option of options) {
        option.addEventListener("click", function () {
            let answer = this.getAttribute("data-type");
            checkAnswer(answer);
        });
    }


    //EventListener for next question

    document.getElementById('next').addEventListener("click", function () {
        enableButtons();

        if (questionBank < 20) {
            questionBank++;
            showQuestion(questionBank);
        } else {

            showScoreBoard();
        }

    });

    startGame();
});


function startGame() {
    questionBank = 0;
    points = 0;
    numberQuestions = [...addquestions];
    renderNewQuestion();
};

function renderNewQuestion() {
    if (numberQuestions.length === 0 || questionBank >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentpoints', points);
        return window.location.assign('/game.html');
    }
    questionBank++;
}

// load question on DOM load
let preLoadedQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple')
        .then((res) => {
            questionsList = res.json();
        })
        .catch((err) => {
            console.error(err);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    preLoadedQuestions();
});

function showQuestion(questionBank) {

    document.getElementById("question-game").innerText =

        formattedQuestions[questionBank].question;
}

document.getElementById("choice-1").innerHTML =
    formattedQuestions[questionBank].choice[0];
document.getElementById("choice-2").innerHTML =
    formattedQuestions[questionBank].choice[1];
document.getElementById("choice-3").innerHTML =
    formattedQuestions[questionBank].choice[2];
document.getElementById("choice-4").innerHTML =
    formattedQuestions[questionBank].choice[3];

if (questionBank === 9) {
    document.getElementById("next").innerHTML = "Get Result";
}