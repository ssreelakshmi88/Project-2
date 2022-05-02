const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
let numberAnswers = false;
let points = 0;
let questionBank = 0;
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