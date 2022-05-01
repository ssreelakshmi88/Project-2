const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
let numberAnswers = false;
let points = 0;
let questionBank = 0;
let currentQuestion = {};
let numberQuestions = [];
let addquestions = [];


fetch(
        'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple')

    .then((res) => {
        return res.json();
    })
    .then((showQuestions) => {

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

    })
    .catch((err) => {
        console.error(err);
    });



function startGame() {
    questionBank = 0;
    points = 0;
    numberQuestions = [...addquestions];
    getNewQuestion();
};

const MAX_QUESTIONS = 20;

function getNewQuestion() {
    if (numberQuestions.length === 0 || questionBank >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentpoints', points);
        return window.location.assign('/game.html');
    }
}
questionBank++;