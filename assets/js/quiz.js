const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
let numberAnswers = false;
let points = 0;
let questionIndex = 0;
let currentQuestion = {};
let numberQuestions = [];
let addquestions = [];
let questionsList = [];

const MAX_QUESTIONS = 20;





let showQuestions = () => {
    addquestions = showQuestions.results.map((showQuestions) => {
        const modifiedQuestion = {
            question: showQuestions.question,
        };

        const possibleAnswers = [...showQuestions.incorrect_answers];
        modifiedQuestion.answer = Math.floor(Math.random() * 4) + 1;
        possibleAnswers.splice(

            modifiedQuestion.answer - 1,
            0,
            showQuestions.correct_answer
        );

        possibleAnswers.forEach((option, index) => {
            modifiedQuestion['option' + (index + 1)] = option;
        });
        return modifiedQuestion;
    });

    startGame();

}

function displayQuestions() {


    question.textContent = questionsList[questionIndex];
    //console.log(questionsList[questionIndex]);

}

// start game
function startGame() {
    questionIndex = 0;
    points = 0;
    //numberQuestions = [...addquestions];
    numberQuestions = questionsList.length;
    console.log(questionsList);
    //renderNewQuestion();
    displayQuestions();



};

// render new question
function renderNewQuestion() {
    if (numberQuestions.length === 0 || questionIndex >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentpoints', points);
        return window.location.assign('/quiz-result.html');
    }
    questionIndex++;
}

// load question on DOM load
let preLoadedQuestions = () => {

    fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple')
        .then((res) => {
            questionsList = res.json();
            console.log(questionsList.results);

        })
        .catch((err) => {
            console.error(err);
        });

}




document.addEventListener('DOMContentLoaded', () => {
    //preLoadedQuestions();
    //console.log(questionsList);



});

window.addEventListener('load', () => {
    preLoadedQuestions();
    console.log(questionsList);
    startGame();

});